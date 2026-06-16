# Wireflow — 高保真線框（Figma 規格）

**項目**：社區循環經濟與升級改造平台  
**版本**：1.0  
**對應低保真**：[wireflow.md](wireflow.md)  
**視覺預覽**：在瀏覽器開啟 [wireframes/preview.html](wireframes/preview.html)  
**文件語言**：繁體中文（臺灣書面語）

> 本文件採 **Figma 檔案結構慣例**：Frame → Section → Component Instance，並標註 Auto Layout、色彩變數、文字樣式與元件狀態。數值與 `src/app/globals.css` 及現行元件一致。

---

## 0. Figma 檔案結構建議

```
📁 Community-Sweep Wireframes
├── 📄 Cover
├── 🎨 Design Tokens
│   ├── Colors
│   ├── Typography
│   └── Effects
├── 🧩 Components
│   ├── Nav / BottomNav
│   ├── Nav / LandingNav
│   ├── Card / ActivityCard
│   ├── Card / PointsWallet
│   ├── Button / LargeButton
│   ├── Button / Primary · Secondary · Sage
│   ├── Tab / WalletTabs
│   ├── Modal / RegistrationSuccess
│   └── Form / RegistrationField
├── 📱 Mobile App — 390×844
│   ├── 01 Hall / Default
│   ├── 02 Explore / Default
│   ├── 03 Explore Detail / Default
│   ├── 03 Explore Detail / Modal Success
│   ├── 04 Schedule / Default
│   ├── 05 Marketplace / Default
│   ├── 06 Wallet / Tab Redeem
│   ├── 06 Wallet / Tab Earn
│   ├── 07 Account / Default
│   └── 08 Account Registrations / Default
└── 🖥 Desktop Marketing — 1440×900
    ├── Landing / Hero
    └── Landing / Join Form
```

---

## 1. Design Tokens（Figma Variables）

### 1.1 Color / Surface

| Token | Hex | 用途 |
|-------|-----|------|
| `page` | `#F5F1EA` | App 背景 |
| `cream` | `#FAF8F4` | 淺底、Tab 容器 |
| `cream-dark` | `#F0E8DC` | 次要底、頭像圈 |
| `card` | `#FFFCF8` | 卡片表面 |
| `foreground` | `#2A2318` | 主文字 |
| `ink-muted` | `#5A4E3C` | 內文次要 |
| `muted` | `#736456` | 輔助說明 |
| `terracotta` | `#A85538` | 主 CTA、強調 |
| `terracotta-dark` | `#874428` | CTA hover、積分數字 |
| `sage` | `#4D7A64` | 次 CTA、成功態 |
| `sage-light` | `#E4EDE8` | 標籤底、提示條 |
| `sage-dark` | `#355A47` | 導覽 active、統計數字 |
| `border-warm` | `#DDD2C2` | 暖色邊框 |
| `border-light` | `#EBE3D6` | 卡片邊框、分隔線 |
| `wood-light` | `#E5D9C6` | 分類 pill |

### 1.2 Typography

| Style 名稱 | Font | Size | Weight | Line | 用途 |
|------------|------|------|--------|------|------|
| `Display/H1` | Noto Serif TC | 30px (sm: 36px) | 700 | 1.2 | 頁面主標 |
| `Display/H2` | Noto Sans TC | 20px | 700 | 1.3 | 區塊標題 |
| `Body/Large` | Noto Sans TC | 18px | 400 | 1.6 | 內文（根字級） |
| `Body/Default` | Noto Sans TC | 16px | 400 | 1.6 | 卡片內文 |
| `Label/Section` | Noto Sans TC | 12px | 600 | 1.4 | `section-label` 全大寫追蹤 |
| `Number/Hero` | Noto Sans TC | 48–60px | 700 | 1.0 | 積分大字 |
| `Nav/Tab` | Noto Sans TC | 14px | 500 | 1.2 | 底部導覽 |

### 1.3 Radius & Spacing

| Token | 值 | 用途 |
|-------|-----|------|
| `radius-sm` | 8px | 小按鈕、圖示按鈕 |
| `radius-md` | 12–16px | 輸入框、次按鈕 |
| `radius-lg` | 16px | 活動卡、列表項 |
| `radius-xl` | 24px | 大按鈕、錢包卡 |
| `radius-2xl` | 24px (`rounded-2xl`) | 區塊容器 |
| `radius-3xl` | 24px (`rounded-3xl`) | PointsWalletCard |
| `space-page-x` | 16px (sm: 20px) | App 水平內距 |
| `space-section` | 24px | 區塊間距 (`space-y-6`) |
| `space-card` | 16px | 卡片內距 |
| `touch-min` | 52px | 最小觸控高度 (`min-h-[3.25rem]`) |

### 1.4 Effects

| 名稱 | 值 |
|------|-----|
| `shadow-warm` | `0 4px 24px -4px rgba(53,90,71,0.10)` |
| `shadow-warm-lg` | `0 16px 48px -12px rgba(53,90,71,0.14)` |
| `glass-panel` | `backdrop-blur` + `bg-card/80` + `border-border-warm/50` |
| `gradient-wallet` | `linear-gradient(135deg, #A85538, #874428)` |

---

## 2. 元件庫（Components）

### 2.1 `BottomNav` — 固定底部

```
Frame: 390×52+hug  │  Position: Fixed Bottom  │  Fill: glass-panel
Auto Layout: Horizontal · Space Between · Padding 8px 4px
├── Tab ×4 (Instance)
    ├── Icon 24×24
    └── Label 14px/500
```

| Variant | Icon color | Label color |
|---------|------------|-------------|
| `Default` | `#736456` | `#736456` |
| `Active` | `#355A47` stroke 2.5 | `#355A47` |

**Instances**：主頁 `/hall` · 物品篩選 `/marketplace` · 日程 `/schedule` · 帳戶 `/account`

---

### 2.2 `LargeButton`

```
Auto Layout: Horizontal · Center · Gap 12px
Min Height: 52px · Padding: 16px 24px · Radius: 16px · Full Width
```

| Variant | Fill | Text |
|---------|------|------|
| `Primary` | `#A85538` | `#FFFFFF` |
| `Secondary` | `#FFFCF8` border `#DDD2C2` | `#2A2318` |
| `Sage` | `#4D7A64` | `#FFFFFF` |

---

### 2.3 `PointsWalletCard`

```
Frame: Fill container · Radius 24px · Border 2px #A85538/30
Fill: gradient-wallet · Padding 24px · Shadow lg
├── Decor circle 144×144 @ top-right (white 10%)
├── Row: Space Between
│   ├── Col
│   │   ├── "我的儲分" 18px/500 white/90
│   │   ├── Balance 48–60px/700 white
│   │   └── Subtitle 16px white/85
│   └── Icon badge 56×56 radius-16 white/15
├── Info bar: radius-12 white/15 · 紙本卡號
└── Link button: radius-12 white/20 · 52px
```

---

### 2.4 `ActivityCard`

```
Frame: Radius 16px · Fill card · Ring 1px border-light
├── Image 16:10 aspect · Radius top
│   ├── Badge top-left: blue-600 "四月主題"
│   └── Heart FAB top-right 40×40 white circle
└── Body Padding 16px 20px
    ├── Code 16px muted
    ├── Title 20px/700
    ├── Org 16px muted
    └── Meta rows (Calendar, MapPin, Users icons 16px terracotta/sage)
```

---

### 2.5 `WalletTabs`

```
Container: Fill · Radius 16px · Fill cream-dark · Padding 8px · Gap 8px
Tab (×2): Flex 1 · Min H 52px · Radius 12px
  Active: Fill white · Text terracotta-dark · Shadow sm
  Inactive: Text ink-muted
```

---

### 2.6 `Modal / RegistrationSuccess`

```
Overlay: Fill #000000 50% · Center
Dialog: Max W 384px · Fill white · Radius 16px · Padding 24px
├── Row: CheckCircle sage 32px + Title 20px/700
├── Body 16px ink-muted
└── Actions (Gap 12px)
    ├── Primary → /account/registrations
    └── Secondary outline 關閉
```

---

## 3. 畫面規格（Mobile 390×844）

> 所有 App 畫面共用：**AppShell** `max-width: 512px` · `padding: 20px 16px 96px` · 底部預留 BottomNav 空間。

---

### Frame `01 Hall / Default` — `/hall`

| 區塊 | Auto Layout | 規格 |
|------|-------------|------|
| Header | Vertical · Gap 4px | Greeting 16px muted · H1 30px/700 |
| Section 活動 | Vertical · Gap 12px | H2 20px/700 · Event list · CTA link |
| Event Card (首項) | Horizontal · Gap 16px · P 16px | Border terracotta/30 · Emoji 56×56 cream-dark |
| Badge「最近活動」 | Hug | Fill terracotta · 12px/600 white · Radius full |
| 「顯示更多」 | Center · H 52px | Outline terracotta · Radius 16px → `/explore` |
| Quick Actions | Vertical · Gap 12px | 3× LargeButton instances |

**Prototype 連結**：
- Event card → `03 Explore Detail`
- 顯示更多 → `02 Explore`
- 掃碼賺分 → `06 Wallet / Tab Earn`
- 尋找修繕師傅 → `02 Explore`
- 上傳閒置物品 → `05 Marketplace`

---

### Frame `02 Explore / Default` — `/explore`

| 區塊 | 規格 |
|------|------|
| Header | Back 24px → Hall · H1 + subtitle · Filter icon 40×40 |
| List | Vertical · Gap 24px · ActivityCard ×N |

---

### Frame `03 Explore Detail / Default` — `/explore/[id]`

| 區塊 | 規格 |
|------|------|
| Nav | Back → Explore · Title「活動詳情」20px |
| Hero image | 16:10 · Badge · Heart |
| Info list | Icon 20px terracotta/sage · 16px body |
| 簡介區 | Fill cream · Radius 12px · P 16px |
| CTA | Full width · H 56px · Radius 16px |
| State `Registered` | Fill sage · Label「已報名（示範）」 |
| State `Default` | Fill terracotta · Label「立即報名（示範）」 |

**Interaction**：CTA click → `03 Explore Detail / Modal Success`

---

### Frame `04 Schedule / Default` — `/schedule`

| 區塊 | 規格 |
|------|------|
| H1 | 30px/700 |
| MonthCalendar | 7-column grid · Dot markers terracotta/sage/amber |
| Legend | 8px dots + 16px labels |
| Link | terracotta 16px/500 → Explore |
| 即將舉行列表 | Card radius-16 border-light · P 16px → Detail |

---

### Frame `05 Marketplace / Default` — `/marketplace`

| 區塊 | 規格 |
|------|------|
| Header | H1 + subtitle 16px muted |
| Filters | Search input H 48px · 2× Select |
| Grid | 1 col mobile · ItemCard radius-16 page fill |
| ItemCard | Emoji 56×56 sage-light · Title display 18px/700 · Pills · Story 14px · Owner footer |

---

### Frame `06 Wallet / Tab Redeem` — `/wallet`

| 區塊 | 規格 |
|------|------|
| SiteHeader | Title + subtitle |
| PointsWalletCard | Component instance |
| WalletTabs | Active: 兌換服務／物品 |
| Balance bar | sage-light · 18px · 數字 24px/700 |
| Redeem list | cream cards border-warm · Emoji 56 · CTA per item |
| Success toast | sage-light banner 5s auto-dismiss |

**Variant `Tab Earn`** (`?tab=earn`)：Active tab「如何賺分」· Earn method cards · History list

---

### Frame `07 Account / Default` — `/account`

| 區塊 | 規格 |
|------|------|
| Profile | Avatar 80×80 circle cream-dark · Name 24px/700 · Meta 16px muted |
| HomeBalance | PointsWalletCard instance |
| 報名摘要 | RegistrationRecords preview · Link 全部 |
| Menu list | Single card radius-16 divide-y · Row H ~72px · Icon 24px terracotta in cream-dark badge |

---

### Frame `08 Account Registrations` — `/account/registrations`

| 區塊 | 規格 |
|------|------|
| Header | Back → Account · H1 |
| List | Full RegistrationRecords · Empty state dashed border |

---

## 4. 畫面規格（Desktop 1440×900）

### Frame `Landing / Hero` — `/` #hero

```
Grid: 2 col (1.05fr / 0.95fr) · Gap 64px · Max W 1152px · Center
Left:
  section-label sage-dark 12px tracking
  H1 serif 52px — 關鍵字 sage-dark span
  Body 18–20px ink-muted max 65ch
  CTA row: Primary terracotta + Secondary outline
  Stats 3-col border-top
Right:
  Hero image radius-24 shadow-lift
  Floating card glass-panel (lg+ only)
```

### Frame `Landing / Join` — `#join`

```
Grid: 0.85fr / 1.15fr · Gap 64px
Left sticky: 步驟 01–03
Right: RegistrationForm card
  Fields: name*, phone*, district, interest select, message
  Submit: sage full width 52px
  Success: CheckCircle + 確認文案
```

---

## 5. Prototype 流程（Figma Prototype 設定）

| 熱區 | Trigger | Destination | Animation |
|------|---------|-------------|-----------|
| LandingNav「體驗示範 App」 | On Click | `01 Hall` | Smart Animate 300ms |
| Hall Event Card | On Click | `03 Explore Detail` | Push Left |
| Detail CTA | On Click | `03 Modal Success` | Dissolve |
| Modal「查看報名紀錄」 | On Click | `08 Account Registrations` | Push Left |
| BottomNav 各 Tab | On Click | 對應 Frame | Instant |
| Account → 儲分與兌換 | On Click | `06 Wallet Tab Redeem` | Push Left |
| Wallet Tab | On Click | Tab variant swap | Smart Animate |

---

## 6. 無障礙與長者友善註記

| 項目 | 規格 |
|------|------|
| 根字級 | 18px（`html { font-size: 18px }`） |
| 觸控目標 | ≥ 52px 高度 |
| Focus ring | 3px sage · offset 2px |
| 積分數字 | tabular-nums · 高對比白 on terracotta |
| 對比 | 主文字 `#2A2318` on `#F5F1EA` ≥ 7:1 |
| Skip link | 鍵盤聚焦時顯示於左上角 |

---

## 7. 與實作對照

| Figma Frame | 路由 | 主要元件檔 |
|-------------|------|------------|
| 01 Hall | `/hall` | `hall/page.tsx`, `QuickActions`, `UpcomingEvents` |
| 02 Explore | `/explore` | `ActivityCard` |
| 03 Detail | `/explore/[id]` | `ActivityDetail` |
| 04 Schedule | `/schedule` | `SchedulePageClient`, `MonthCalendar` |
| 05 Marketplace | `/marketplace` | `CommunityItemFilter` |
| 06 Wallet | `/wallet` | `WalletPageClient`, `WalletTabs` |
| 07 Account | `/account` | `account/page.tsx` |
| Landing Hero | `/` | `HeroSection`, `LandingNav` |

---

## 8. 修訂紀錄

| 版本 | 日期 | 說明 |
|------|------|------|
| 1.0 | 2026-06-17 | 初版高保真規格 + 瀏覽器預覽 |
