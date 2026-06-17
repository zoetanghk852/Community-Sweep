# 無障礙視覺截圖索引

對應報告：[長者友善設計與 WCAG 合規報告](../../elderly-accessibility-wcag-report.md)（第 8 節）

重新擷取：`npx -y -p playwright node scripts/capture-a11y-screenshots.mjs`（需 `localhost:3000`）

| 檔案 | 路由 | 報告章節 | 對照設計細節 |
|------|------|----------|----------------|
| `01-hall-events.png` | `/hall` | [§3.1](../../elderly-accessibility-wcag-report.md#31-字級排版與可讀性)、[§3.8](../../elderly-accessibility-wcag-report.md#38-內容與領域語言長者情境) | 18px 根字級、h1/h2 階層、暖色 `--page` 背景、活動卡圖示+文字 |
| `03-hall-large-buttons-bottom-nav.png` | `/hall` | [§3.2](../../elderly-accessibility-wcag-report.md#32-觸控目標與操作回饋) | `LargeButton` 全寬 ≈58px、BottomNav 圖文並列、`pb-32` 底部留白 |
| `04-marketplace-filters.png` | `/marketplace` | [§3.4](../../elderly-accessibility-wcag-report.md#34-表單篩選與狀態回饋) | 搜尋 `sr-only` label、`aria-pressed`、選取 ring+粗體（1.4.1） |
| `05-upload-form-labels.png` | `/marketplace/upload` | [§3.4](../../elderly-accessibility-wcag-report.md#34-表單篩選與狀態回饋) | 可見 `<label>`、狀況 `role="group"`、大字說明框 |
| `06-wallet-points-tabs.png` | `/wallet` | [§3.6](../../elderly-accessibility-wcag-report.md#36-錢包分頁與積分資訊) | 儲分卡 `aria-labelledby`、大數字餘額、Tab 分頁語意 |
| `07-activity-detail-register-cta.png` | `/explore/ex-1` | [§3.2](../../elderly-accessibility-wcag-report.md#32-觸控目標與操作回饋)、[§3.8](../../elderly-accessibility-wcag-report.md#38-內容與領域語言長者情境) | 全寬報名 CTA、圖示清單、「示範」標註 |
| `08-registration-dialog.png` | `/explore/ex-1` | [§3.5](../../elderly-accessibility-wcag-report.md#35-對話框與複雜互動) | `role="dialog"`、焦點/inert、Esc／Tab 循環、大按鈕 |
| `09-skip-link-visible.png` | `/hall` | [§3.3](../../elderly-accessibility-wcag-report.md#33-焦點鍵盤與導覽結構) | 略過連結 **2.4.1**、`#main-content` |
| `10-keyboard-focus-ring.png` | `/hall` | [§3.3](../../elderly-accessibility-wcag-report.md#33-焦點鍵盤與導覽結構) | `:focus-visible` 3px 綠框（自願 **2.4.7**） |
