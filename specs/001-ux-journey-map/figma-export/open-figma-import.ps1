#Requires -Version 5.1
$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$SvgDir = Join-Path $Root "svg"
$PluginDir = Join-Path $Root "figma-plugin"

Write-Host ""
Write-Host "Community-Sweep UX Journey Map - Figma Import Helper"
Write-Host "====================================================="
Write-Host ""

$buildScript = Join-Path $Root "build-figma-plugin.mjs"
if (Test-Path $buildScript) {
  Write-Host "[1/4] Building Figma plugin..."
  & node $buildScript
}

Write-Host "[2/4] Opening SVG folder..."
if (Test-Path $SvgDir) {
  Start-Process explorer.exe $SvgDir
} else {
  Write-Host "      SVG folder missing. Run: node generate-figma-export.mjs"
}

Write-Host "[3/4] Opening plugin folder..."
if (Test-Path $PluginDir) {
  Start-Process explorer.exe $PluginDir
}

Write-Host "[4/4] Launching Figma..."
$figmaExe = "$env:LOCALAPPDATA\Figma\Figma.exe"
if (Test-Path $figmaExe) {
  Start-Process $figmaExe
} else {
  Start-Process "https://www.figma.com/files/recent"
}

Write-Host ""
Write-Host "NEXT STEPS IN FIGMA:"
Write-Host ""
Write-Host "  Option A - Plugin (recommended, editable text):"
Write-Host "    Plugins -> Development -> Import plugin from manifest..."
Write-Host "    Select: figma-plugin\manifest.json"
Write-Host "    Run:    Plugins -> Development -> Community-Sweep UX Journey Map"
Write-Host ""
Write-Host "  Option B - Drag and drop:"
Write-Host "    Drag all 8 SVG files from the svg folder into a new Figma file"
Write-Host ""
