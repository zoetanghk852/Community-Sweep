# Implementation Plan: 用戶體驗地圖

**Branch**: `001-ux-journey-map` | **Date**: 2026-06-20 | **Spec**: [spec.md](./spec.md)  
**Input**: Feature specification from `/specs/001-ux-journey-map/spec.md`

## Summary

為社區換物 Carousell（Community-Sweep）平台建立跨線上 App 與線下換物市集的**用戶體驗地圖**，涵蓋 5 個角色、7 個旅程階段、完整觸點／痛點／機會矩陣，並對照 PRD 用戶故事與示範版路由。主要產出為 `ux-journey-map.md`。

## Technical Context

**Language/Version**: 文件以 Markdown 撰寫；對照技術棧 Next.js 16、React 19、TypeScript  
**Primary Dependencies**: 現有 PRD、CONTEXT.md、流程圖（`docs/online-offline-activity-flow.md`）、wireflow、WCAG 報告  
**Storage**: N/A（文件產出，非程式功能）  
**Testing**: 走查驗證（PRD 覆蓋率、路由對照、領域詞彙稽核）  
**Target Platform**: 文件供產品／設計／開發團隊使用；觸點對照示範 App（Web）  
**Project Type**: Web 應用（示範版）+ 線下社區服務  
**Performance Goals**: 產品團隊 30 分鐘內可完成完整走查  
**Constraints**: 須符合專案憲章五項原則；使用 CONTEXT.md 領域詞彙  
**Scale/Scope**: 5 角色 × 7 階段 × 約 40 觸點

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| 原則 | 符合性 | 說明 |
|------|--------|------|
| I. 線上媒合、現場交收 | ✅ PASS | 地圖明確標註交收僅在換物攤現場完成 |
| II. 長者友善優先 | ✅ PASS | 長者角色旅程含義工代操作、大字介面觸點 |
| III. 社區感謝積分 | ✅ PASS | 積分觸點標註義工核定、不可兌現金 |
| IV. 領域語言一致 | ✅ PASS | 全文使用換物市集、換物攤等標準詞彙 |
| V. 示範版誠實標示 | ✅ PASS | mock 觸點與限制獨立標註 |

**Post-Design Re-check**: ✅ 所有閘門通過，無違規需 justify。

## Project Structure

### Documentation (this feature)

```text
specs/001-ux-journey-map/
├── spec.md              # 功能規格
├── plan.md              # 本文件
├── research.md          # UX 地圖方法論研究
├── data-model.md        # 角色、階段、觸點實體模型
├── quickstart.md        # 如何使用體驗地圖
├── ux-journey-map.md    # ★ 主要產出：完整用戶體驗地圖
└── contracts/
    └── ux-map-schema.md # 體驗地圖文件結構契約
```

### Source Code (repository root)

```text
docs/                    # 既有流程圖、wireflow、WCAG 報告（參考來源）
src/app/                 # 示範 App 路由（觸點對照）
├── (marketing)/         # 落地頁觸點
└── (app)/               # 街坊 App 觸點
```

**Structure Decision**: 體驗地圖為規劃文件，置於 `specs/001-ux-journey-map/`；不修改 `src/` 程式碼。既有 `docs/` 流程圖作為觸點來源引用。

## Phase 0: Outline & Research

**未知項**: 無 — 專案 PRD、CONTEXT、流程圖已提供充足領域知識。

**研究任務**:
1. UX 旅程地圖最佳實務（服務設計框架）
2. 長者友善服務的體驗地圖模式（雙通道：App + 實體）
3. 線上線下混合服務的觸點銜接模式

**產出**: [research.md](./research.md) — 所有決策已記錄

## Phase 1: Design & Contracts

**前置**: research.md 完成 ✅

1. **實體模型** → [data-model.md](./data-model.md)
2. **文件契約** → [contracts/ux-map-schema.md](./contracts/ux-map-schema.md)
3. **主要產出** → [ux-journey-map.md](./ux-journey-map.md)
4. **使用指南** → [quickstart.md](./quickstart.md)
5. **Agent 上下文** → 更新 `.cursor/rules/specify-rules.mdc`

## Phase 2: Tasks

本命令止於 Phase 2 規劃。實作任務（若需將地圖嵌入 App 或落地頁）請執行 `/speckit-tasks`。

潛在後續任務：
- 將體驗地圖摘要嵌入落地頁 `#experience` 區段
- 依痛點清單建立 GitHub issues
- 產出 Figma 旅程地圖視覺版

## Complexity Tracking

> 無憲章違規，此表留空。

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| — | — | — |
