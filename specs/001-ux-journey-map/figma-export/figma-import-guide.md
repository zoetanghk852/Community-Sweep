# Figma 匯入指南 — 用戶體驗地圖

**Feature**: 001-ux-journey-map  
**日期**: 2026-06-20  
**來源**: [ux-journey-map.md](../ux-journey-map.md)

---

## 產出物一覽

| 檔案 | 用途 | Figma 建議 Frame 名稱 |
|------|------|----------------------|
| `svg/01-overview.svg` | 總覽：階段時間軸 + 5 角色 | `01 · 總覽` |
| `svg/02-emotion-curves.svg` | 情緒曲線圖 | `02 · 情緒曲線` |
| `svg/03-journey-p1.svg` | P1 長者陳姨完整旅程 | `03 · P1 長者陳姨` |
| `svg/03-journey-p2.svg` | P2 街坊阿明完整旅程 | `04 · P2 街坊阿明` |
| `svg/03-journey-p3.svg` | P3 換取方李姐完整旅程 | `05 · P3 換取方李姐` |
| `svg/03-journey-p5.svg` | P5 訪客何太（認知／考量） | `06 · P5 訪客何太` |
| `svg/04-service-blueprint.svg` | 線上／線下／義工服務藍圖 | `07 · 服務藍圖` |
| `svg/05-pain-opportunity-matrix.svg` | 痛點與機會優先矩陣 | `08 · 痛點矩陣` |
| `figjam-journey-sticky-notes.csv` | FigJam 便利貼資料 | FigJam 匯入 |
| `brand-tokens.json` | 品牌色票（Figma Variables） | Variables 外掛 |

---

## 方法零：HTML 視覺版（推薦）

單一 HTML 檔，瀏覽器直接開啟，無需 Figma。

```
specs/001-ux-journey-map/figma-export/html/ux-journey-map.html
```

重新產生：

```bash
node specs/001-ux-journey-map/figma-export/generate-html-export.mjs
```

**匯入 Figma（選用）**：安裝 **html.to.design** 外掛 → Import from URL 或本地 HTML。

---

## 方法一：Figma 外掛一鍵產生

在 Figma 內直接產生 8 個可編輯 Frame，無需手動排列。

### 全自動（Windows，已替你執行過一次）

```powershell
powershell -ExecutionPolicy Bypass -File specs/001-ux-journey-map/figma-export/automate-figma-import.ps1
```

此腳本會在你電腦上：
1. 建置外掛並複製到 `C:\Temp\cs-figma-journey-plugin\`（避免中文路徑問題）
2. 聚焦 Figma Desktop
3. 透過 Quick Actions（Ctrl+/）建立新 Design 檔案
4. 匯入 `manifest.json` 並執行外掛

**執行期間請勿操作鍵盤／滑鼠約 45 秒。**

成功時 Figma 會出現 Page **`Journey Map v1.0`** 與 8 個 Frame。

### 手動安裝外掛（只需一次）

1. 開啟 Figma，建立或開啟任意 Design 檔案
2. 選單 **Plugins → Development → Import plugin from manifest…**
3. 選擇 `figma-export/figma-plugin/manifest.json`
4. 執行 **Plugins → Development → Community-Sweep UX Journey Map**
5. 外掛會自動建立 Page `Journey Map v1.0` 與 8 個 Frame

### 重新建置外掛（更新資料後）

```bash
node specs/001-ux-journey-map/figma-export/build-figma-plugin.mjs
```

---

## 方法一：Figma Design 匯入 SVG

適合：設計簡報、設計评审、與 wireflow 並排對照。

### 步驟

1. 在 Figma 建立新檔案：`Community-Sweep · UX Journey Map`
2. 建立 Page：`Journey Map v1.0`
3. **File → Import**（或拖放）選擇 `svg/` 資料夾內全部 8 個 SVG
4. 依序排列 Frame（建議垂直間距 120px）：
   ```
   01-overview          (1920 × 1080)
   02-emotion-curves    (1920 × 720)
   03-journey-p1        (2800 × 1100)  ← 較寬，適合橫向簡報
   ...
   ```
5. 將每個匯入的 SVG 群組轉為 **Frame**（右鍵 → Frame selection）
6. 套用專案字體：**Noto Sans TC** 或 **PingFang TC**（若 SVG 字體 fallback 不符）

### 匯入後編輯建議

- SVG 文字在 Figma 中可逐段編輯
- 情緒 emoji 可替換為 Figma 元件庫圖示
- 品牌色可透過 `brand-tokens.json` 建立 Color Variables 後批次替換

---

## 方法二：FigJam 旅程工作坊

適合：與利害關係人共創、標註新痛點、投票優先級。

### 步驟

1. 建立新 FigJam 檔案
2. 建立 7 欄標題（對應旅程階段）：認知 → 考量 → 準備 → 線上 → 市集 → 持續 → 倡導
3. 使用外掛 **CSV to Table** 或 **Import CSV** 匯入 `figjam-journey-sticky-notes.csv`
4. 依 `Persona` 欄位分色：
   - P1 長者陳姨 → `#4D7A64`
   - P2 街坊阿明 → `#A85538`
   - P3 換取方李姐 → `#5B7FA6`
   - P5 訪客何太 → `#8B7E6A`
5. 將 `02-emotion-curves.svg` 拖入 FigJam 作為背景參考

---

## 方法三：品牌 Variables 匯入

1. 安裝 Figma 外掛 **Variables Import** 或 **Tokens Studio**
2. 匯入 `brand-tokens.json`（精簡版品牌色票）
3. 或匯入完整版：`design-extract-output/community-sweep-vercel-app-figma-variables.json`

### 品牌色對照

| Token | Hex | 用途 |
|-------|-----|------|
| primary | `#4D7A64` | 階段標題、正向情緒 |
| secondary | `#A85538` | 強調、P2 角色 |
| accent | `#F5F1EA` | 背景、泳道 |
| text | `#5A4E3C` | 正文 |
| negative | `#C2410C` | 痛點、負向情緒 |

---

## 重新產生 SVG

若更新了 `ux-journey-map.md`，請同步編輯 `journey-data.json` 後執行：

```bash
node specs/001-ux-journey-map/figma-export/generate-figma-export.mjs
```

---

## 建議 Figma 檔案結構

```
📁 Community-Sweep · UX Journey Map
├── 📄 Cover（01-overview 截圖）
├── 📄 Journey Map v1.0
│   ├── 01 · 總覽
│   ├── 02 · 情緒曲線
│   ├── 03–06 · 角色旅程（P1/P2/P3/P5）
│   ├── 07 · 服務藍圖
│   └── 08 · 痛點矩陣
├── 📄 Components
│   ├── Stage Header
│   ├── Emotion Badge（😊😐😟）
│   └── Touchpoint Tag（📱🏪🤝）
└── 📄 Reference
    └── wireflow 連結
```

---

## 相關文件

- [ux-journey-map.md](../ux-journey-map.md) — 完整 Markdown 版
- [quickstart.md](../quickstart.md) — 30 分鐘走查腳本
- [docs/wireflow-hifi.md](../../../docs/wireflow-hifi.md) — 高保真線框對照
