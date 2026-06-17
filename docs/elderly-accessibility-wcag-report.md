# 長者友善設計與 WCAG 合規報告

**項目**：社區換物 Carousell（Community-Sweep）  
**文件語言**：繁體中文（臺灣書面語）  
**最後更新**：2026-06-18  
**適用範圍**：街坊示範 App 關鍵路徑（不含行銷落地頁全站稽核）

**相關文件**：[CONTEXT.md](../CONTEXT.md)、[ui-improvements.md](ui-improvements.md)、[視覺截圖索引](assets/a11y/README.md)

---

## 1. 摘要

本專案以香港長者社區服務為優先對象（見 `CONTEXT.md`：「文案與動線以長者需求為中心」）。介面設計在視覺上採大字、暖色、大觸控區；在技術上對齊 **WCAG 2.1 Level A** 為合規底線，並**自願**將主要文字對比度對齊 **Level AA（4.5:1）**。

2026-06 無障礙稽核後，關鍵路徑 8 個路由已通過 axe-core（`wcag2a`）自動掃描（0 violations），並完成 P0–P2 手動問題修復。本報告整理**目前做得好的設計細節**，並標註其對應的 WCAG 成功準則，供產品、設計與開發團隊維護與擴充時參考。

---

## 2. 評估標準與範圍

| 項目 | 說明 |
|------|------|
| 合規目標 | WCAG 2.1 **Level A** |
| 對比度 | 自願對齊 AA：正文 ≥ 4.5:1；大字（≥ 18pt 或 14pt 粗體）≥ 3:1 |
| 關鍵路徑 | `/hall` → `/explore` → `/explore/[id]` → `/marketplace` → `/marketplace/upload` → `/wallet` → `/account` → `/account/registrations` |
| 驗證方式 | axe-core 自動掃描 + 鍵盤走查 + 程式碼審查 |
| 未納入本報告 | 行銷落地頁 `/`、`/schedule`、`/account/settings` 之完整稽核 |

---

## 3. 長者友善設計亮點（依類別）

### 3.1 字級、排版與可讀性

| 設計細節 | 實作位置 | 為何適合長者 | WCAG 對應 | 截圖 |
|----------|----------|--------------|-----------|------|
| **根字級 18px** | `globals.css`：`html { font-size: 18px }` | 高於常見 16px 預設，減輕閱讀負擔 | 支援 1.4.4 Resize Text (AA，自願)；利於弱視使用者 | [圖 01](assets/a11y/01-hall-events.png) |
| **行高 1.6** | `globals.css` `body` | 增加行距，中文長句較不易跳行誤讀 | 最佳實務（非 A 級硬性要求） | — |
| **內文以 `text-base`／`text-lg` 為主** | App 各頁元件 | 按鈕、說明、表單標籤多為 18px 或以上 | 與大字級策略一致 | [圖 01](assets/a11y/01-hall-events.png)、[圖 05](assets/a11y/05-upload-form-labels.png) |
| **Noto Sans TC 繁體字型** | `layout.tsx` + `globals.css` `--font-sans` | 香港／臺灣繁體字形清晰，含 system fallback（微軟正黑體等） | 1.3.1 可讀性（語意層面） | [圖 01](assets/a11y/01-hall-events.png) |
| **`lang="zh-Hant-HK"`** | `layout.tsx` `<html>` | 螢幕閱讀器以正確語音、斷詞朗讀粵語書面中文 | **3.1.1 Language of Page (A)** | — |
| **暖色低刺激背景** | `--page: #f5f1ea`、`--card: #fffcf8` | 減少純白眩光，長時間閱讀較舒適 | 使用者舒適度（非 WCAG 硬性） | [圖 01](assets/a11y/01-hall-events.png) |

**主要色票對比度（自願 AA 驗證）**

| 前景 | 背景 | 比例 | AA 4.5:1 |
|------|------|------|----------|
| `--foreground` `#2a2318` | `--page` `#f5f1ea` | **13.80:1** | ✅ |
| `--ink-muted` `#5a4e3c` | `--page` | **7.20:1** | ✅ |
| `--muted` `#736456` | `--page` | **5.06:1** | ✅ |
| `#ffffff` | `--sage` `#4d7a64` | **4.90:1** | ✅ |
| `--terracotta` `#a85538` | `#ffffff` | **5.22:1** | ✅ |

---

### 3.2 觸控目標與操作回饋

| 設計細節 | 實作位置 | 為何適合長者 | WCAG 對應 | 截圖 |
|----------|----------|--------------|-----------|------|
| **大按鈕最小高度 3.25rem（約 58px）** | `LargeButton`：`min-h-[3.25rem]` | 超過常見 44px 建議，利於手指不穩或關節活動受限者 | 2.5.5 Target Size 為 **AA**；屬自願強化 | [圖 03](assets/a11y/03-hall-large-buttons-bottom-nav.png) |
| **BottomNav 每項 `min-h-[3.25rem]`、`min-w-[4rem]`** | `BottomNav.tsx` | 底部導覽為高頻操作，大區塊降低誤觸 | 同上 | [圖 03](assets/a11y/03-hall-large-buttons-bottom-nav.png) |
| **圖文並列導覽** | BottomNav：圖示 + 中文標籤 | 不只靠圖示，降低「看不懂圖示」的門檻 | **1.1.1**（裝飾圖示 `aria-hidden`）+ **2.4.4** 連結目的 | [圖 03](assets/a11y/03-hall-large-buttons-bottom-nav.png) |
| **`.interactive` 按壓微縮放** | `globals.css` | 點擊有明確觸覺回饋；`prefers-reduced-motion` 時停用 | **2.3.3 Animation from Interactions (AAA)** 方向正確 | — |
| **全寬主要 CTA** | `LargeButton` `w-full`、報名按鈕等 | 減少精準點擊小目標的需求 | 長者友善最佳實務 | [圖 03](assets/a11y/03-hall-large-buttons-bottom-nav.png)、[圖 07](assets/a11y/07-activity-detail-register-cta.png) |
| **底部內容留白 `pb-32`** | `AppShell` | 避免最下方按鈕被固定導覽列遮擋 | **2.1.1 Keyboard**／操作可完成性 | [圖 07](assets/a11y/07-activity-detail-register-cta.png) |

---

### 3.3 焦點、鍵盤與導覽結構

| 設計細節 | 實作位置 | 為何適合長者 | WCAG 對應 | 截圖 |
|----------|----------|--------------|-----------|------|
| **全域 `:focus-visible` 3px 綠色外框** | `globals.css`（註解：Elderly-friendly focus rings） | 鍵盤／藍牙鍵盤使用者能看見目前位置 | **2.4.7 Focus Visible** 為 AA；屬自願強化 | [圖 10](assets/a11y/10-keyboard-focus-ring.png) |
| **元件級 `focus-visible:ring`** | `LargeButton`、表單輸入框 | 表單欄位焦點不依賴預設 outline 被移除 | 同上 | [圖 10](assets/a11y/10-keyboard-focus-ring.png) |
| **「跳至主要內容」略過連結** | `(app)/layout.tsx` + `#main-content` on `<main>` | 重複 Tab 跳過導覽，直達內文 | **2.4.1 Bypass Blocks (A)** | [圖 09](assets/a11y/09-skip-link-visible.png) |
| **語意化 `<main>`** | `AppShell.tsx` | 螢幕閱讀器可快速定位主內容 | **1.3.1 Info and Relationships (A)** | [圖 09](assets/a11y/09-skip-link-visible.png) |
| **各頁獨立 `<title>`** | 各 `page.tsx` `metadata`／`generateMetadata` | 多分頁／書籤時可辨識所在頁面 | **2.4.2 Page Titled (A)** | — |
| **標題階層 h1 → h2 → h3** | 各頁 `header`、`section` | 輔助科技可產生內容大綱 | **1.3.1** | [圖 01](assets/a11y/01-hall-events.png) |
| **`aria-current="page"`** | `BottomNav` 目前頁 | 明確告知所在位置 | **4.1.2 Name, Role, Value (A)** | [圖 03](assets/a11y/03-hall-large-buttons-bottom-nav.png) |
| **`nav aria-label="主要導覽"`** | `BottomNav` | 區分底部導覽與其他連結群組 | **1.3.1** | [圖 03](assets/a11y/03-hall-large-buttons-bottom-nav.png) |

---

### 3.4 表單、篩選與狀態回饋

| 設計細節 | 實作位置 | 為何適合長者 | WCAG 對應 | 截圖 |
|----------|----------|--------------|-----------|------|
| **可見 `<label>` 關聯輸入框** | `UploadItemForm`（物品名稱、類別、故事） | 欄位用途清楚，不需猜 placeholder | **1.3.1**、**3.3.2 Labels or Instructions (A)** | [圖 05](assets/a11y/05-upload-form-labels.png) |
| **搜尋欄 `sr-only` 標籤** | `CommunityItemFilter` | 螢幕閱讀器有正式名稱，視覺不雜亂 | **1.3.1** | [圖 04](assets/a11y/04-marketplace-filters.png) |
| **`aria-pressed` 篩選／狀況按鈕** | 市集篩選、上傳狀況 | 選取狀態可被輔助科技讀出 | **4.1.2 (A)** | [圖 04](assets/a11y/04-marketplace-filters.png)、[圖 05](assets/a11y/05-upload-form-labels.png) |
| **選取態 ring + 粗體（不只靠顏色）** | 篩選按鈕選中樣式 | 色弱或灰階模式下仍可分辨 | **1.4.1 Use of Color (A)** | [圖 04](assets/a11y/04-marketplace-filters.png)、[圖 05](assets/a11y/05-upload-form-labels.png) |
| **`role="group"` + `aria-labelledby`** | 類別／狀況／上傳狀況群組 | 群組與標題關聯明確 | **1.3.1** | [圖 04](assets/a11y/04-marketplace-filters.png)、[圖 05](assets/a11y/05-upload-form-labels.png) |
| **報名／兌換 `role="status"` 通知** | `ActivityDetail` 對話框、`WalletPageClient` | 操作結果會被朗讀；兌換通知可手動關閉 | **4.1.3 Status Messages (AA)** 方向正確 | [圖 08](assets/a11y/08-registration-dialog.png) |
| **表單錯誤 `aria-invalid` + `role="alert"`** | `RegistrationForm`（落地頁） | 錯誤訊息與欄位綁定 | **3.3.1 Error Identification (A)** | — |
| **禁用按鈕保留文字說明** | 市集「已被預約」、`disabled` 狀態 | 不只變灰，仍說明為何不能點 | **1.4.1** 邊界支援 | [圖 04](assets/a11y/04-marketplace-filters.png) |

---

### 3.5 對話框與複雜互動

| 設計細節 | 實作位置 | 為何適合長者 | WCAG 對應 | 截圖 |
|----------|----------|--------------|-----------|------|
| **`role="dialog"` + `aria-modal="true"`** | `ActivityDetail` 報名成功對話框 | 輔助科技識別為模態對話 | **4.1.2** | [圖 08](assets/a11y/08-registration-dialog.png) |
| **`aria-labelledby` 對話框標題** | 報名成功／已報名標題 | 開啟時可聽見對話框主題 | **1.3.1** | [圖 08](assets/a11y/08-registration-dialog.png) |
| **Portal 至 `document.body`** | `ActivityDetail` | 對話框不受父層 `inert` 影響 | 實作正確性 | [圖 08](assets/a11y/08-registration-dialog.png) |
| **開啟時焦點移入、背景 `inert`** | `ActivityDetail` `useEffect` | 鍵盤焦點不會落入背景，減少迷失 | **2.4.3 Focus Order (A)** | [圖 08](assets/a11y/08-registration-dialog.png) |
| **Tab 循環限於對話框、Esc 關閉** | `ActivityDetail` | 符合常見模態操作習慣 | **2.1.1 Keyboard (A)**、**2.1.2 No Keyboard Trap (A)** | [圖 08](assets/a11y/08-registration-dialog.png) |
| **圖示按鈕皆有 `aria-label`** | 返回、收藏、關閉等 | 單獨圖示仍可被理解 | **4.1.2** | [圖 07](assets/a11y/07-activity-detail-register-cta.png)、[圖 08](assets/a11y/08-registration-dialog.png) |
| **裝飾圖示 `aria-hidden`** | Lucide 圖示、emoji 容器 | 避免重複朗讀 | **1.1.1 Non-text Content (A)** | [圖 01](assets/a11y/01-hall-events.png) |

---

### 3.6 錢包分頁與積分資訊

| 設計細節 | 實作位置 | 為何適合長者 | WCAG 對應 | 截圖 |
|----------|----------|--------------|-----------|------|
| **`role="tablist"` / `tab` / `tabpanel`** | `WalletTabs`、`WalletPageClient` | 標準分頁語意 | **1.3.1**、**4.1.2** | [圖 06](assets/a11y/06-wallet-points-tabs.png) |
| **`aria-controls` + `aria-selected`** | `WalletTabs` | 分頁與內容面板關聯 | **1.3.1** | [圖 06](assets/a11y/06-wallet-points-tabs.png) |
| **非使用中 panel `hidden`** | `WalletPageClient` | 減少螢幕閱讀器雜訊 | **1.3.1** | [圖 06](assets/a11y/06-wallet-points-tabs.png) |
| **儲分區 `aria-labelledby="我的儲分"`** | `PointsWalletCard` | 區塊名稱為語意標題，非僅數字 | **1.3.1** | [圖 06](assets/a11y/06-wallet-points-tabs.png) |
| **餘額 `aria-label` 含單位** | `PointsWalletCard` | 聽讀為「餘額 248 積分」而非單獨數字 | **1.3.1** | [圖 06](assets/a11y/06-wallet-points-tabs.png) |
| **兌換按鈕含品項與積分** | `RedeemContent` `ariaLabel` | Tab 時可區分不同禮品 | **2.4.4 Link Purpose (A)** | [圖 06](assets/a11y/06-wallet-points-tabs.png) |
| **積分不足仍顯示「積分不足」** | `RedeemContent` | 狀態以文字表達，不只靠按鈕變灰 | **1.4.1** | [圖 06](assets/a11y/06-wallet-points-tabs.png) |

---

### 3.7 縮放、動效與媒體

| 設計細節 | 實作位置 | 為何適合長者 | WCAG 對應 | 截圖 |
|----------|----------|--------------|-----------|------|
| **`maximumScale: 5`（允許 pinch zoom）** | `layout.tsx` `viewport` | 不鎖死縮放，視力弱者可放大 | **1.4.4 Resize Text (AA)** 方向；避免違反縮放限制 | — |
| **`prefers-reduced-motion` 停用動畫** | `globals.css`、`Reveal.tsx`（`useReducedMotion`） | 暈動症、前庭敏感使用者不受強制動畫干擾 | **2.3.3** 最佳實務 | — |
| **活動封面描述性 `alt`** | `ActivityCard`、`ActivityDetail` | 圖像資訊以文字備援 | **1.1.1 (A)** | [圖 07](assets/a11y/07-activity-detail-register-cta.png) |
| **裝飾性紋理 `aria-hidden`** | `grain-overlay`、Hero 背景 blob | 純視覺裝飾不干擾朗讀 | **1.1.1** | — |

---

### 3.8 內容與領域語言（長者情境）

| 設計細節 | 出處 | 為何適合長者 | WCAG 對應 | 截圖 |
|----------|------|--------------|-----------|------|
| **繁體中文書面語、粵語口語混用適度** | 文案（如「講下件物品嘅來歷」） | 貼近香港街坊溝通習慣 | 3.1.2 Language of Parts（若全頁一致則 N/A） | [圖 05](assets/a11y/05-upload-form-labels.png) |
| **領域詞彙一致** | `CONTEXT.md`：社區感謝積分、換物市集、義工 | 避免「點數」「現金」等易混淆詞 | 認知負荷降低（非 WCAG 條文） | [圖 06](assets/a11y/06-wallet-points-tabs.png) |
| **空狀態含下一步 CTA** | `RegistrationRecords`、`UpcomingEvents` | 不知下一步時有明確引導 | **2.4.4** 脈絡內目的 | — |
| **示範版標註** | 「立即報名（示範）」等 | 降低誤以為正式預約的焦慮 | 認知／信任設計 | [圖 07](assets/a11y/07-activity-detail-register-cta.png) |

---

## 4. 關鍵路徑合規狀態（2026-06-17）

| 路由 | 頁面標題 | axe wcag2a | 備註 |
|------|----------|------------|------|
| `/hall` | 社區大廳｜社區換物carousell | ✅ 0 | 快捷大按鈕、活動列表 |
| `/explore` | 探索活動｜… | ✅ 0 | 活動卡可鍵盤操作 |
| `/explore/[id]` | 動態活動名｜… | ✅ 0 | 模態報名流程已強化 |
| `/marketplace` | 線上換物｜… | ✅ 0 | 標籤化篩選 |
| `/marketplace/upload` | 上傳閒置物品｜… | ✅ 0 | 表單 label 完整 |
| `/wallet` | 儲分與兌換｜… | ✅ 0 | Tab 分頁語意完整 |
| `/account` | 帳戶｜… | ✅ 0 | 帳戶選單 `nav` 標籤 |
| `/account/registrations` | 活動報名紀錄｜… | ✅ 0 | 空狀態友善 |

> **說明**：axe 約可涵蓋 20–50% 無障礙問題；本表合併手動鍵盤走查與修復後狀態。完整方法見本文件第 2 節。

---

## 5. 設計原則速查（給設計／產品）

新增畫面或元件時，建議延續以下原則，以同時照顧長者與 WCAG A：

1. **字要大、行要鬆**：內文至少 `text-base`（18px 根字級下），主要按鈕 `text-lg`。
2. **觸控要寬**：可點擊區域目標高度 ≥ 52px，關鍵 CTA 用 `LargeButton`。
3. **不要只靠顏色**：選取、錯誤、禁用需加文字、框線或圖示。
4. **每個輸入都要有 label**：可見或 `sr-only`，placeholder 不能取代 label。
5. **圖示按鈕要命名**：`aria-label`；裝飾圖示 `aria-hidden`。
6. **鍵盤能走完全流程**：可見焦點、對話框鎖焦點、Esc 可關閉。
7. **允許縮放**：勿在 viewport 限制 `user-scalable=no`。
8. **尊重減少動效**：動畫需響應 `prefers-reduced-motion`。
9. **一頁一標題**：`metadata.title` 需描述該頁功能。
10. **用街坊語言**：遵循 `CONTEXT.md` 術語，避免金融化用詞。

---

## 6. 已知限制與後續建議

| 項目 | 說明 | 建議 |
|------|------|------|
| 行銷落地頁 `/` | 本報告以 App 關鍵路徑為主 | 上線前對 Landing 做同級稽核 |
| `/schedule` 月曆 | 已有部分 `aria-pressed`，未納入本次關鍵路徑 | 併入下一輪驗收 |
| 螢幕閱讀器實機測試 | 目前以 axe + 鍵盤 + a11y tree 為主 | 建議補 NVDA（Windows）／VoiceOver（iOS）抽測 |
| WCAG **AA** 全項 | 目前僅對比度等項目自願對齊 | 若需正式 AA 認證，需另驗 2.4.7、2.4.11 等條文 |
| 自動化覆蓋率 | axe 無法取代人工 | 重大改版後重跑混合式稽核 |

---

## 7. 主要實作檔案索引

```
src/app/globals.css              # 字級、焦點環、略過連結、減少動效
src/app/layout.tsx               # lang、viewport 縮放、字型
src/app/(app)/layout.tsx         # 略過連結、grain（裝飾 hidden）
src/components/layout/AppShell.tsx
src/components/layout/BottomNav.tsx
src/components/ui/LargeButton.tsx
src/components/explore/ActivityDetail.tsx
src/components/marketplace/CommunityItemFilter.tsx
src/components/marketplace/UploadItemForm.tsx
src/components/wallet/WalletTabs.tsx
src/components/wallet/WalletPageClient.tsx
src/components/home/PointsWalletCard.tsx
src/components/motion/Reveal.tsx
```

---

## 8. 視覺截圖對照

以下截圖以 **390×844**（行動裝置視窗）擷取，存放於 [`docs/assets/a11y/`](assets/a11y/)。完整索引見 [`assets/a11y/README.md`](assets/a11y/README.md)。

| 圖號 | 檔案 | 頁面 | 報告章節 | 對照重點 |
|------|------|------|----------|----------|
| 01 | [01-hall-events.png](assets/a11y/01-hall-events.png) | `/hall` | [§3.1](#31-字級排版與可讀性)、[§3.3](#33-焦點鍵盤與導覽結構) | 18px 大字、h1/h2 階層、暖色背景、活動卡圖示+文字 |
| 03 | [03-hall-large-buttons-bottom-nav.png](assets/a11y/03-hall-large-buttons-bottom-nav.png) | `/hall` | [§3.2](#32-觸控目標與操作回饋) | `LargeButton` ≈58px、BottomNav 圖文、`pb-32` |
| 04 | [04-marketplace-filters.png](assets/a11y/04-marketplace-filters.png) | `/marketplace` | [§3.4](#34-表單篩選與狀態回饋) | 搜尋 label、`aria-pressed`、ring+粗體（**1.4.1**） |
| 05 | [05-upload-form-labels.png](assets/a11y/05-upload-form-labels.png) | `/marketplace/upload` | [§3.4](#34-表單篩選與狀態回饋)、[§3.8](#38-內容與領域語言長者情境) | 可見 `<label>`、狀況群組、粵語 placeholder |
| 06 | [06-wallet-points-tabs.png](assets/a11y/06-wallet-points-tabs.png) | `/wallet` | [§3.6](#36-錢包分頁與積分資訊)、[§3.8](#38-內容與領域語言長者情境) | 儲分卡語意、Tab 分頁、「社區感謝積分」用語 |
| 07 | [07-activity-detail-register-cta.png](assets/a11y/07-activity-detail-register-cta.png) | `/explore/ex-1` | [§3.2](#32-觸控目標與操作回饋)、[§3.5](#35-對話框與複雜互動)、[§3.8](#38-內容與領域語言長者情境) | 全寬 CTA、圖示清單、「（示範）」標註 |
| 08 | [08-registration-dialog.png](assets/a11y/08-registration-dialog.png) | `/explore/ex-1` | [§3.5](#35-對話框與複雜互動) | `role="dialog"`、inert、焦點管理、大按鈕 |
| 09 | [09-skip-link-visible.png](assets/a11y/09-skip-link-visible.png) | `/hall` | [§3.3](#33-焦點鍵盤與導覽結構) | 略過連結 **2.4.1**、`#main-content` |
| 10 | [10-keyboard-focus-ring.png](assets/a11y/10-keyboard-focus-ring.png) | `/hall` | [§3.3](#33-焦點鍵盤與導覽結構) | `:focus-visible` 綠框（自願 **2.4.7**） |

> **重新擷取截圖**：在 dev server 運行時執行  
> `npx -y -p playwright node scripts/capture-a11y-screenshots.mjs`

---

## 9. 修訂紀錄

| 日期 | 版本 | 說明 |
|------|------|------|
| 2026-06-18 | 1.2 | 截圖與 §3 雙向對照；新增 `assets/a11y/README.md` |
| 2026-06-18 | 1.1 | 新增第 8 節視覺截圖對照（`docs/assets/a11y/`） |
| 2026-06-17 | 1.0 | 初版：整理長者友善設計與 WCAG 2.1 A／自願 AA 對比對照；涵蓋 2026-06 稽核修復後狀態 |
