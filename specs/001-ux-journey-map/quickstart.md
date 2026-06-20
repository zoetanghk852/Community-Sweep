# Quickstart: 用戶體驗地圖

**Feature**: 001-ux-journey-map  
**Date**: 2026-06-20

## 5 分鐘快速上手

### 1. 開啟主要文件

```
specs/001-ux-journey-map/ux-journey-map.md
```

這是完整用戶體驗地圖，包含 5 角色 × 7 階段旅程矩陣。

### 2. 依你的角色閱讀

| 你是… | 從這裡開始 | 重點看 |
|--------|------------|--------|
| 產品負責人 | §七 PRD 覆蓋率 | 痛點優先矩陣（§六） |
| UX 設計師 | §二 情緒曲線 | P1 長者陳姨完整旅程 |
| 開發者 | §五 App 路由索引 | `demo_status` 欄 |
| 營運／義工 | §三 階段 5 線下市集 | 三攤觸點與動線 |
| 新加入成員 | §一 總覽 | 走查腳本（§八） |

### 3. 30 分鐘走查（建議）

**腳本 A — 長者路徑**（義工代操作）：
```
/ → /marketplace/upload → /explore → /schedule → /wallet → /hall
```
想像換物市集三攤體驗。

**腳本 B — 試水溫路徑**（低門檻）：
```
/ #faq → /explore（報名）→ 想像試水溫參觀 → /marketplace
```

### 4. 驗證清單

- [ ] PRD 58 條故事均有對應觸點
- [ ] 全文無迴避詞（嘉年華、銀髮族等）
- [ ] 交收僅在換物攤（線下）完成
- [ ] 示範版限制已標註

## 相關文件

| 文件 | 用途 |
|------|------|
| [spec.md](./spec.md) | 功能需求與成功標準 |
| [plan.md](./plan.md) | 實作規劃 |
| [data-model.md](./data-model.md) | 實體與狀態流轉 |
| [research.md](./research.md) | 方法論決策 |
| [contracts/ux-map-schema.md](./contracts/ux-map-schema.md) | 文件結構契約 |

## 引用方式

在 issue 或 PR 中引用痛點時，使用格式：

```
[UX-PP-APP-BARRIER] 不熟悉 App 操作
→ 機會：[UX-OP-VOLUNTEER-ASSIST] 強化義工代操作可見性
→ 角色：P1 長者陳姨、P2 街坊阿明
→ 觸點：/hall, 換物攤
```

## 純 Markdown 文件版（推薦分享／列印）

```
specs/001-ux-journey-map/ux-journey-map-doc.md
```

無 HTML／Figma 依賴，含 5 角色 × 7 階段完整矩陣與最新文案修訂。重新產生：

```bash
node specs/001-ux-journey-map/figma-export/generate-doc-export.mjs
```

## 視覺版（HTML）

```
specs/001-ux-journey-map/figma-export/html/ux-journey-map.html
```

在瀏覽器開啟即可檢視完整旅程圖（8 個章節、可列印）。重新產生：

```bash
node specs/001-ux-journey-map/figma-export/generate-html-export.mjs
```

匯入 Figma：使用 **html.to.design** 外掛，貼上此 HTML 檔案 URL 或本地路徑。

## Figma 視覺版（SVG / 外掛）

已產生可匯入 Figma 的 SVG 與 FigJam CSV：

```
specs/001-ux-journey-map/figma-export/
├── svg/                          # 8 個 Frame（拖入 Figma 即可）
├── figjam-journey-sticky-notes.csv
├── brand-tokens.json
├── figma-import-guide.md         # 匯入步驟
└── generate-figma-export.mjs     # 重新產生腳本
```

快速匯入：**Figma → File → Import → 選擇 `svg/` 資料夾**

## 下一步

- 執行 `/speckit-tasks` 將痛點轉為可實作任務
- 依 §六 優先矩陣建立 GitHub issues
- 依 [figma-import-guide.md](./figma-export/figma-import-guide.md) 匯入 Figma 供簡報使用
