# Contract: 用戶體驗地圖文件結構

**Feature**: 001-ux-journey-map  
**Version**: 1.0  
**Date**: 2026-06-20

## Purpose

定義 `ux-journey-map.md` 及衍生文件的最小結構契約，確保產品、設計、開發團隊可依一致格式閱讀、更新與驗證體驗地圖。

## Document Schema

### Required Sections

| Section ID | Title | Required | Description |
|------------|-------|----------|-------------|
| `overview` | 總覽 | ✅ | 服務定位、階段圖、角色一覽 |
| `emotion-curves` | 情緒曲線摘要 | ✅ | 各角色端到端情緒高低點 |
| `journey-matrix` | 完整旅程矩陣 | ✅ | 7 階段 × 多角色表格 |
| `service-blueprint` | 跨角色服務藍圖 | ✅ | 線上／線下／義工銜接 |
| `route-index` | App 觸點路由索引 | ✅ | 路由對照與示範版狀態 |
| `pain-opportunity` | 痛點與機會矩陣 | ✅ | 優先級排序 |
| `prd-coverage` | PRD 覆蓋率 | ✅ | 用戶故事 traceability |
| `walkthrough` | 走查腳本 | ⬜ | 建議有，非硬性 |

### Journey Matrix Row Schema

每個階段表格 MUST 包含以下欄位：

```yaml
stage:
  order: int          # 1-7
  name_zh: string
  name_en: string
rows:
  - persona_id: string    # P1-elder | P2-first-timer | ...
    actions: string[]       # 街坊行動
    touchpoints:           
      - id: string          # TP-* 或 emoji 標記
        channel: enum       # marketing | app | offline | volunteer
        route: string       # optional, e.g. /hall
    thoughts: string        # 第一人稱
    emotion: enum           # positive | neutral | negative
    pain_points: string[]   # optional
    opportunities: string[] # optional
```

### Touchpoint Channel Enum

| Value | Icon | Description |
|-------|------|-------------|
| `marketing` | 🌐 | 落地頁、海報、宣傳 |
| `app` | 📱 | 示範 App 路由 |
| `offline` | 🏪 | 換物市集現場 |
| `volunteer` | 🤝 | 義工介入點 |

### Emotion Enum

| Value | Display | Meaning |
|-------|---------|---------|
| `positive` | 😊 | 滿意、興奮、成就感 |
| `neutral` | 😐 | 觀望、平淡、依賴他人 |
| `negative` | 😟 | 焦慮、挫折、放棄風險 |

### Demo Status Enum（app 通道必填）

| Value | Description |
|-------|-------------|
| `implemented` | 完整 UI 行為 |
| `mock` | 前端 mock／localStorage |
| `not_implemented` | 示範版未涵蓋 |

## Validation Rules

1. **Coverage**: PRD 用戶故事覆蓋率 MUST ≥ 90%
2. **Vocabulary**: 全文 MUST 通過 CONTEXT.md 詞彙稽核（零迴避詞）
3. **Offline completeness**: 階段 5 MUST 涵蓋換物攤、維修攤、數碼義診攤
4. **ADR-0001**: 物品交收觸點 MUST 僅出現在 `offline` 通道
5. **Persona priority**: P1 角色（長者）MUST 在每個階段有對應列或明確標注 N/A

## Consumer Contracts

### 產品團隊

- 輸入：PRD 用戶故事清單
- 輸出：覆蓋率報告、痛點優先清單
- 驗證：走查腳本 A/B 可在 30 分鐘內完成

### 設計團隊

- 輸入：角色旅程、情緒曲線
- 輸出：Figma 旅程圖、線框改進清單
- 驗證：每個痛點至少對應一個設計機會

### 開發團隊

- 輸入：App 觸點路由索引
- 輸出：路由缺口報告
- 驗證：每個 `app` 觸點有 `demo_status` 標註

## Extension Points

未來可擴充但不破壞既有契約：

- `quantitative_metrics`: 各階段轉化率（需真實數據）
- `service_blueprint_backstage`: 義工後台流程（需後端）
- `localization`: 英文版旅程（國際化）

## References

- [data-model.md](../data-model.md) — 實體定義
- [ux-journey-map.md](../ux-journey-map.md) — 契約實例
