# 前端 UI 改進紀錄

**項目**：社區循環經濟與升級改造平台（Community-Sweep）  
**版本**：1.0  
**文件語言**：繁體中文（臺灣書面語）  
**最後更新**：2026-06-17

本文件記錄示範網站（行銷 Landing + 街坊 PWA App）的 UI／UX 改進歷程，依兩次設計稽核與實作整理：

| 階段 | 依據 | 重點 |
|------|------|------|
| **A** | [redesign-existing-projects](../.agents/skills/redesign-existing-projects/SKILL.md) | 設計系統一致性、互動狀態、缺漏頁面 |
| **B** | [design-taste-frontend](../.agents/skills/design-taste-frontend/SKILL.md) | Hero 紀律、eyebrow 精簡、反 AI 模板化 |

**相關文件**：[wireflow.md](wireflow.md)、[wireflow-hifi.md](wireflow-hifi.md)、[wireframes/preview.html](wireframes/preview.html)

---

## 1. Design Read（設計定位）

**Reading this as：** 香港長者社區服務的 trust-first 行銷頁 + 大字體 PWA 示範，沉穩可及性語言；Dial **VARIANCE 4 / MOTION 3 / DENSITY 5**。

- **保留**：sage／terracotta 暖色票、Noto Sans／Serif TC、Lucide（專案既有依賴）
- **未改**：路由、錨點 ID、主要導覽標籤、表單欄位名稱（SEO／分析相容）

---

## 2. 階段 A：Redesign Existing Projects

### 2.1 設計系統（`src/app/globals.css`）

| 項目 | 內容 |
|------|------|
| z-index 尺度 | `--z-nav` (40)、`--z-overlay` (50)、`--z-modal` (60) |
| 共用工具類 | `.icon-btn`、`.badge-month`、`.empty-state`、`.hover-surface` |
| Modal 圖層 | `.z-modal` 取代任意 `z-[100]` |

### 2.2 色票統一（App 全站）

| 修正前 | 修正後 |
|--------|--------|
| `blue-600` 活動月份徽章 | `.badge-month`（`sage-dark`） |
| `slate-*` hover／文字 | `cream`、`cream-dark`、`muted` |
| `bg-white` 卡片表面 | `bg-card` |
| 收藏心形 `red-500` | `terracotta`（品牌色） |

### 2.3 互動與狀態

- `LargeButton`、`WalletTabs`、報名 CTA、帳戶選單等加入 `interactive` 按壓回饋
- 探索頁「篩選」改為 `ExploreFilterButton`（`disabled` + 明確 `aria-label`，示範版開發中）
- 活動封面補上描述性 `alt` 文字

### 2.4 空狀態升級

| 元件 | 改進 |
|------|------|
| `RegistrationRecords` | 圖示 + 說明 +「探索活動」CTA（`.empty-state`） |
| `UpcomingEvents` | 空狀態含連結至 `/explore` |
| `RedeemContent` | 統一 `.empty-state` 樣式 |

### 2.5 策略缺漏補齊

| 新增 | 路徑 | 說明 |
|------|------|------|
| 404 頁 | `src/app/not-found.tsx` | 品牌化找不到頁面，連回 `/` 與 `/hall` |
| Favicon | `src/app/icon.tsx` | sage 葉片圖示 |
| 紋理一致 | `src/app/(app)/layout.tsx` | App 區加入 `grain-overlay`（與行銷頁一致） |

### 2.6 涉及檔案（階段 A）

```
src/app/globals.css
src/app/(app)/layout.tsx
src/app/not-found.tsx
src/app/icon.tsx
src/app/(app)/explore/page.tsx
src/app/(app)/hall/page.tsx
src/app/(app)/account/page.tsx
src/app/(app)/account/settings/page.tsx
src/app/(app)/account/registrations/page.tsx
src/components/explore/ActivityCard.tsx
src/components/explore/ActivityDetail.tsx
src/components/explore/ExploreFilterButton.tsx   (新增)
src/components/ui/LargeButton.tsx
src/components/ui/SectionCard.tsx
src/components/wallet/WalletTabs.tsx
src/components/wallet/RedeemContent.tsx
src/components/home/PointsWalletCard.tsx
src/components/home/UpcomingEvents.tsx
src/components/schedule/MonthCalendar.tsx
src/components/schedule/SchedulePageClient.tsx
src/components/account/RegistrationRecords.tsx
src/components/account/AccountSettings.tsx
src/components/landing/MockPaymentGateway.tsx
```

---

## 3. 階段 B：Design Taste Frontend

### 3.1 Hero 紀律

| 項目 | 修正 |
|------|------|
| 副文長度 | 三句 → 一句（約 24 字） |
| 統計數字 | 移出 Hero，獨立 `HeroStatsStrip`（Hero 正下方） |
| 首屏 padding | `pt-14`～`pt-20`，CTA 無需捲動即可看見 |
| 浮動卡日期 | 移除中間點分隔，改「5月18日 下午2時」 |

**新增元件**：`src/components/landing/HeroStatsStrip.tsx`

### 3.2 Eyebrow（`section-label`）精簡

Landing 共 11 個區塊，eyebrow 由 11 個減至 **4 個**（符合「每 3 區最多 1 個」原則）：

| 保留 eyebrow | 移除 eyebrow（改直接 h2） |
|--------------|---------------------------|
| Hero「香港社區換物計劃」 | 服務簡介、主要服務對象、核心理念 |
| 核心功能 | 換物市集、服務對比、街坊心聲、模擬付款 |
| App 預覽 | |
| 加入我們 | |

`.section-label` 樣式：字級略增、字距降低，減少「模板 eyebrow」感。

### 3.3 版面與內容

| 區塊 | 改進 |
|------|------|
| `ItemMarketplace` | 取消 split-header（左標題 + 右說明），改垂直堆疊 |
| `JoinSection` | 移除 `01/02/03` 步驟編號，改左側邊線列表 |
| `CoreFeaturesSection` | emoji → Lucide（`Repeat`、`BookOpen`、`Wrench`）；主卡加入背景圖層 |
| `IdeaSection` | 移除 pillar 編號 `01/02/03`；引文 em dash 改冒號 |
| `MockPaymentGateway` | 重寫示範說明文案（移除混亂箭頭與重複用字） |

### 3.4 Em dash／En dash 清零（可見 UI）

| 位置 | 處理 |
|------|------|
| `layout.tsx`、`(marketing)/layout.tsx` metadata | `—` → 逗號 |
| `IdeaAndFeatures.tsx` 引文 | `——` → 冒號 |
| `src/lib/mockData.ts` 時間 | `10:00 – 14:00` → `10:00 至 14:00` |
| 積分流水標題 | `衣物交換日 — 捐出` → `衣物交換日，捐出` |

### 3.5 涉及檔案（階段 B）

```
src/app/(marketing)/page.tsx
src/app/layout.tsx
src/app/(marketing)/layout.tsx
src/app/globals.css
src/components/landing/HeroSection.tsx
src/components/landing/HeroStatsStrip.tsx          (新增)
src/components/landing/IdeaAndFeatures.tsx
src/components/landing/IntroSections.tsx
src/components/landing/ItemMarketplace.tsx
src/components/landing/JoinSection.tsx
src/components/landing/ComparisonSection.tsx
src/components/landing/CommentBoard.tsx
src/components/landing/MockPaymentGateway.tsx
src/lib/landingData.ts                             (coreFeatures: emoji → icon key)
src/lib/mockData.ts                                (dash 字元)
```

---

## 4. 設計文件產出（同時期）

| 文件 | 說明 |
|------|------|
| [wireflow.md](wireflow.md) | 低保真 Wireflow：Sitemap、流程、ASCII 線框 |
| [wireflow-hifi.md](wireflow-hifi.md) | Figma 規格：Tokens、元件、Frame 尺寸 |
| [wireframes/preview.html](wireframes/preview.html) | 瀏覽器可切換的高保真線框預覽 |

---

## 5. 刻意未改（後續可選）

| 項目 | 原因 |
|------|------|
| App 活動卡 emoji（`mockData`） | 示範資料識別用；Landing 核心功能已改 Lucide |
| 探索頁完整篩選 UI | 示範版標示開發中 |
| `motion/react` scroll reveal | MOTION 3：以 hover／active 為主 |
| `metadataBase` | build 警告；待部署網域確定後設定 |
| Wallet Suspense 骨架屏 | 仍為文字「載入中…」 |
| Lucide → Phosphor 全站替換 | 專案已深度依賴 Lucide，替換成本高 |

---

## 6. 驗證

```bash
npm run build   # 2026-06-17 通過
npm run dev     # 本地預覽 / 與 /hall
```

**建議手動檢查**

- [ ] `/` Hero 首屏：副文、雙 CTA、統計 strip 分離
- [ ] `/explore` 篩選按鈕為 disabled 且有 tooltip 說明
- [ ] `/account/registrations` 空狀態 CTA
- [ ] 任意不存在路由（如 `/foo`）→ 404 頁
- [ ] 活動詳情報名 Modal 層級與暖色遮罩

---

## 7. 修訂紀錄

| 版本 | 日期 | 說明 |
|------|------|------|
| 1.0 | 2026-06-17 | 初版：整合 redesign-existing-projects 與 design-taste-frontend 兩階段改進 |
