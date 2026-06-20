# Research: 用戶體驗地圖方法論

**Feature**: 001-ux-journey-map  
**Date**: 2026-06-20

## 1. UX 旅程地圖框架選擇

### Decision: 採用「角色 × 階段 × 觸點」三維矩陣 + 情緒曲線

### Rationale

- 本專案服務對象多元（長者、首次參與街坊、換取方、義工、潛在參與者），單一旅程無法涵蓋
- 線上 App 與線下換物市集為雙通道，須在觸點層明確區分 `channel: online | offline | hybrid`
- 情緒曲線可快速識別痛點高峰，對齊長者友善設計優先級

### Alternatives considered

| 替代方案 | 為何未採用 |
|----------|------------|
| 單一「街坊」通用旅程 | 忽略長者「實體為主」與義工代操作的特殊路徑 |
| 僅 App 內 UX flow | 遺漏換物市集三攤線下體驗，違反「線下為核心」定位 |
| Service Blueprint（含後台） | 示範版無義工後台；過度工程，超出本 feature 範圍 |

---

## 2. 旅程階段劃分

### Decision: 7 階段模型

| 階段 | 英文名 | 說明 |
|------|--------|------|
| 1 | Awareness | 首次得知服務（屋邨宣傳、口碑、落地頁） |
| 2 | Consideration | 評估是否適合自己（試水溫、FAQ、競品對照） |
| 3 | Preparation | 整理物品、App 上架、報名換物市集 |
| 4 | Online Engagement | 瀏覽、預約、積分管理（市集前） |
| 5 | Offline Market | 換物市集當日（三攤體驗） |
| 6 | Retention | 持續參與、積分兌換、關注下次活動 |
| 7 | Advocacy | 推薦鄰里、做義工、分享故事 |

### Rationale

- 對齊 PRD「街坊旅程（端到端）」：得知活動 → 整理舊物 → 報名 → 市集當日 → 積分結算 → 關注下次活動
- 獨立「Online Engagement」與「Offline Market」以強調 ADR-0001 銜接點
- 「Advocacy」呼應核心理念「與人交流」

### Alternatives considered

- 5 階段簡化版（AARRR）— 不適合社區服務的「實體參與」核心
- 按 App 模組劃分 — 忽略線下與行銷觸點

---

## 3. 角色（Persona）定義

### Decision: 5 個核心角色

| 角色 | 代號 | 優先級 | 特徵 |
|------|------|--------|------|
| 長者 | P1-長者陳姨 | P1 | 行動不便、囤積困擾、需義工協助、實體為主 |
| 首次參與街坊 | P2-街坊阿明 | P1 | 好奇但觀望、可試水溫參觀、App 不熟 |
| 活躍換取方 | P3-換取方李姐 | P2 | 積極瀏覽預約、熟悉 App、定期參與 |
| 義工 | P4-義工阿珍 | P2 | 現場登記、審核、撮合同場交換 |
| 潛在參與者 | P5-訪客何太 | P3 | 僅接觸落地頁、尚未下載 App |

### Rationale

- P1 角色對齊憲章「長者友善優先」
- P2 覆蓋「低門檻參與」與 Walk-in 路徑
- P4 確保線下觸點完整性（義工為關鍵橋樑）

### Alternatives considered

- 僅「長者」單一角色 — 忽略開放參與、無年齡限制的服務設計
- 加入「營運方」— 屬 B2B 內部視角，非街坊體驗地圖範疇

---

## 4. 情緒標記方式

### Decision: 三級情緒（😊 正向 / 😐 中性 / 😟 負向）+ 端到端曲線摘要

### Rationale

- 三級足夠識別痛點高峰，避免過度細分造成維護負擔
- 曲線摘要供簡報與優先排序使用

### Alternatives considered

- 1–5 數值量表 — 主觀且難以跨角色比較
- 僅標註痛點不標情緒 — 失去設計說服力

---

## 5. 觸點分類

### Decision: 四類觸點標籤

| 標籤 | 說明 | 範例 |
|------|------|------|
| `marketing` | 對外宣傳、落地頁 | `/`、`屋邨海報` |
| `app` | 示範 App 頁面 | `/hall`、`/marketplace` |
| `offline` | 換物市集現場 | `換物攤`、`維修攤` |
| `volunteer` | 義工介入點 | `代上架`、`現場登記` |

### Rationale

- `volunteer` 獨立標籤呼應「實體為主」原則
- 便於開發者篩選 App 相關觸點

---

## 6. 與既有文件的對照策略

### Decision: 以 PRD 用戶故事為覆蓋率基準，以 `docs/` 流程圖為觸點來源

### Rationale

- PRD 已有 58 條用戶故事，可直接做 traceability matrix
- `docs/online-offline-activity-flow.md` 與 `docs/flows/neighbour-upload-to-handoff.md` 已驗證流程正確性

### Alternatives considered

- 從零訪談街坊 — 超出本規劃範圍；示範版階段以 PRD 為 proxy
- 僅參考 wireflow — 缺少線下與情緒維度
