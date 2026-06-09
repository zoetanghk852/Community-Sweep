# 社區換物 Carousell

本計畫透過在社區舉辦換物市集與設置維修平台服務，推動閒置資源的循環利用，並深化街坊間的交流。本計畫特別關注社區內的長者群體——許多長者基於惜物情懷，往往會保留「修好還能用」或覺得「總有一天會用到」的老物件；然而，受限於行動不便，他們難以將物品帶至區外維修或妥善棄置，長期下來容易演變成居家空間的物品囤積。因此，本計畫期望以換物市集為切入點，發掘這些閒置舊物的新價值。這不僅能協助長者減輕囤積狀況，更能藉由資源交換的過程凝聚社會力量，重新編織長者的社區支援網絡，從根本上改善他們的生活品質。

## App 預覽

<p align="center">
  <img src="docs/assets/readme/landing.png" alt="Landing Page：服務理念與 App 預覽區" width="280" />
  <img src="docs/assets/readme/hall.png" alt="社區大廳：即將舉行的活動與快捷功能" width="280" />
</p>

<p align="center">
  <img src="docs/assets/readme/wallet.png" alt="儲分與兌換：積分錢包與兌換選項" width="280" />
  <img src="docs/assets/readme/marketplace.png" alt="社區物品篩選：分類與搜尋" width="280" />
</p>

<p align="center">
  <img src="docs/assets/readme/schedule.png" alt="日程：月曆與即將舉行" width="280" />
  <img src="docs/assets/readme/explore.png" alt="探索活動：活動列表" width="280" />
</p>

## 技術棧

- [Next.js](https://nextjs.org/) 16（App Router）
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- TypeScript

## 快速開始

在專案根目錄安裝依賴並啟動開發伺服器：

```bash
npm install
npm run dev
```

或使用 pnpm：

```bash
pnpm install
pnpm dev
```

瀏覽 [http://localhost:3000](http://localhost:3000)（若埠號被佔用，終端機會顯示實際埠號，例如 `3001`）。

### 其他指令

| 指令 | 說明 |
| --- | --- |
| `npm run build` | 建置正式版 |
| `npm run start` | 啟動正式版伺服器 |
| `npm run lint` | 執行 ESLint |

## 專案結構

```
src/
├── app/
│   ├── (marketing)/   # 對外 Landing Page
│   └── (app)/         # App 主流程（大廳、探索、日程、錢包等）
├── components/        # UI 與頁面元件
├── context/           # React Context（積分、活動報名）
└── lib/               # Mock 資料與工具函式
docs/                  # 產品與 UX 設計文件
public/                # 靜態資源
```

## 設計文件

| 文件 | 說明 |
| --- | --- |
| [PRD](docs/PRD.md) | 產品需求規格 |
| [服務計畫書](docs/service-proposal.md) | 社區服務方案 |
| [設計文件指南](docs/design-docs-guide.md) | 閱讀順序與用詞對照 |
| [UX 設計工具包](docs/ux-design-kit.md) | 人物誌、旅程圖、洞察等 |

## 部署至 Vercel

Next.js 應用位於 repo 根目錄，可直接連接 GitHub 並部署。Vercel 會自動偵測 Next.js 專案；根目錄的 [`vercel.json`](vercel.json) 已設定 `framework: nextjs`。

若出現 `404: NOT_FOUND`，請確認 Vercel 專案的 **Root Directory** 為 repo 根目錄（留空即可），然後 **Redeploy**。
