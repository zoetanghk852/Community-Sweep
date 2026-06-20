#Requires -Version 5.1
$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Windows.Forms
Add-Type @"
using System;
using System.Runtime.InteropServices;
public class WinFocus {
  [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr hWnd);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr hWnd, int nCmdShow);
  [DllImport("user32.dll")] public static extern bool IsIconic(IntPtr hWnd);
}
"@

function Wait-Ms([int]$ms) { Start-Sleep -Milliseconds $ms }

function Send([string]$keys) {
  [System.Windows.Forms.SendKeys]::SendWait($keys)
}

function Paste([string]$text) {
  $prev = Get-Clipboard -Raw -ErrorAction SilentlyContinue
  Set-Clipboard -Value $text
  Wait-Ms 150
  Send("^v")
  Wait-Ms 400
  if ($null -ne $prev) { Set-Clipboard -Value $prev }
}

function Focus-Figma {
  $proc = Get-Process Figma -ErrorAction SilentlyContinue |
    Where-Object { $_.MainWindowHandle -ne [IntPtr]::Zero -and $_.MainWindowTitle -notmatch "Splash|Loading" } |
    Sort-Object StartTime -Descending |
    Select-Object -First 1

  if (-not $proc) {
    Start-Process "$env:LOCALAPPDATA\Figma\Figma.exe"
    Wait-Ms 8000
    $proc = Get-Process Figma -ErrorAction SilentlyContinue |
      Where-Object { $_.MainWindowHandle -ne [IntPtr]::Zero } |
      Select-Object -First 1
  }

  if (-not $proc) { throw "Figma window not found. Open Figma Desktop first." }

  if ([WinFocus]::IsIconic($proc.MainWindowHandle)) {
    [WinFocus]::ShowWindow($proc.MainWindowHandle, 9) | Out-Null
  }
  [WinFocus]::SetForegroundWindow($proc.MainWindowHandle) | Out-Null
  Wait-Ms 1000
}

function Invoke-QuickAction([string[]]$queries) {
  foreach ($q in $queries) {
    Write-Host ("  -> " + $q)
    Send("{ESCAPE}")
    Wait-Ms 300
    Send("^/")
    Wait-Ms 1400
    Paste($q)
    Wait-Ms 1800
    Send("{ENTER}")
    Wait-Ms 2500
    return
  }
}

function Submit-FileDialog([string]$fullPath) {
  Wait-Ms 1800
  Send("%n")
  Wait-Ms 500
  Send("^a")
  Wait-Ms 200
  Paste($fullPath)
  Wait-Ms 600
  Send("{ENTER}")
  Wait-Ms 3000
}

$ExportRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$TempPlugin = "C:\Temp\cs-figma-journey-plugin"
$ActionsPath = Join-Path $ExportRoot "figma-quick-actions.zh.json"
$Actions = Get-Content $ActionsPath -Raw -Encoding UTF8 | ConvertFrom-Json

Write-Host "Building plugin..."
& node (Join-Path $ExportRoot "build-figma-plugin.mjs")

Write-Host "Staging plugin..."
New-Item -ItemType Directory -Force -Path $TempPlugin | Out-Null
Copy-Item (Join-Path $ExportRoot "figma-plugin\manifest.json") $TempPlugin -Force
Copy-Item (Join-Path $ExportRoot "figma-plugin\code.js") $TempPlugin -Force
$manifestPath = Join-Path $TempPlugin "manifest.json"

Write-Host "Focusing Figma (do not touch keyboard for 50s)..."
Focus-Figma

Write-Host "Step 1: New design file..."
Invoke-QuickAction @($Actions.newFile)
Wait-Ms 3500

Write-Host "Step 2: Import plugin manifest..."
Invoke-QuickAction @($Actions.importPlugin)
Submit-FileDialog $manifestPath

Write-Host "Step 3: Run plugin..."
Invoke-QuickAction @($Actions.runPlugin)
Wait-Ms 8000

Write-Host "Done. Look for page Journey Map v1.0 in Figma."
