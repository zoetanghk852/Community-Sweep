# 線上線下活動逐步流程圖

**項目**：社區換物 Carousell（Community-Sweep）  
**版本**：1.0  
**文件語言**：繁體中文（臺灣書面語）  
**對應領域文件**：[`CONTEXT.md`](../CONTEXT.md)、[`docs/adr/0001-online-item-trading.md`](adr/0001-online-item-trading.md)

> 本文件描述街坊參與換物相關活動的完整路徑，分為**線上**（App）與**線下**（每月換物市集）兩部分，並說明兩者如何銜接。

---

## 一、總覽：線上媒合、線下交收

```mermaid
flowchart LR
    subgraph online [線上 App]
        A1[上傳物品]
        A2[義工審核定分]
        A3[瀏覽・積分預約]
        A4[報名換物市集]
        A5[積分錢包]
    end

    subgraph offline [線下換物市集]
        B1[換物攤交收]
        B2[維修攤]
        B3[數碼義診攤]
    end

    A1 --> A2 --> A3
    A3 --> B1
    A4 --> B1
    A4 --> B2
    A4 --> B3
    B1 --> A5
```

**原則**

- 線上：瀏覽、上架、預約、報名、積分紀錄
- 線下：實物交收、即場修繕、數碼協助
- 積分由義工依類別分值表核定；不可兌現金、不以港元標價

---

## 二、線上流程：上架 → 審核 → 公開

```mermaid
flowchart TD
    O1([街坊打開 App]) --> O2{要做什麼?}

    O2 -->|釋出閒置物| O3[進入「上傳閒置物品」]
    O3 --> O4[填寫名稱・類別・狀況・故事]
    O4 --> O5[提交]
    O5 --> O6[狀態：等候義工審核]

    O6 --> O7{義工審核}
    O7 -->|不通過| O8[通知補資料或撤回]
    O8 --> O3
    O7 -->|通過| O9[義工依類別分值表核定積分]
    O9 --> O10[表外物品可例外評分<br/>少量固定分]
    O10 --> O11[物品公開上架]

    O2 -->|想換他人物品| O12[進入「線上換物」]
    O12 --> O13[搜尋・篩選類別與狀況]
    O13 --> O14[查看義工核定積分]
    O14 --> O15{積分足夠且可預約?}
    O15 -->|是| O16[以積分預約換取]
    O15 -->|否| O17[賺取積分或選其他物品]
    O16 --> O18[顯示：下次換物市集現場交收]

    O2 -->|安排出席| O19[探索頁／日程查下次換物市集]
    O19 --> O20[建議事先報名<br/>未報名亦可 Walk-in]
```

---

## 三、線上流程：積分與報名

```mermaid
flowchart TD
    P1([積分錢包]) --> P2{積分來源}

    P2 --> P3[換物：義工核定後作交換媒介]
    P2 --> P4[參與獎勵：出席・帶物・做義工]
    P2 --> P5[試水溫參觀：少量歡迎積分]

    P1 --> P6{積分用途}
    P6 --> P7[預約他人物品]
    P6 --> P8[兌換社區小禮品<br/>如環保袋]
    P6 --> P9[❌ 不可兌現金]

    R1([報名換物市集]) --> R2[App 預先登記]
    R2 --> R3[已報名：維修攤・數碼義診攤排隊優先]
    R2 --> R4[未報名：仍可現場參加 Walk-in]
```

---

## 四、線下流程：換物市集當日

```mermaid
flowchart TD
    D1([換物市集當日<br/>每月一場・三攤並設]) --> D2{街坊如何到場?}

    D2 --> D3[已 App 報名]
    D2 --> D4[Walk-in／試水溫參觀]

    D3 --> D5[到場報到／掃碼]
    D4 --> D5

    D5 --> D6{需要哪項服務?}

    D6 -->|線上已預約物品| D7[換物攤]
    D7 --> D8[義工核對預約紀錄]
    D8 --> D9[完成實物交收・積分結算]

    D6 -->|帶物現場登記| D7b[換物攤]
    D7b --> D10[義工依類別表現場定分]
    D10 --> D11[撮合同場交換]

    D6 -->|舊物要修| D12[維修攤]
    D12 --> D13{當場可修?}
    D13 -->|是| D14[修好后歸還物主]
    D13 -->|否| D15[留件追蹤]
    D15 --> D16[暫存合作暫存點]
    D16 --> D17[下次換物市集修好・通知取回]

    D6 -->|手機／平板疑難| D18[數碼義診攤]
    D18 --> D19[義工一對一協助]

    D9 --> D20([離場])
    D11 --> D20
    D14 --> D20
    D17 -.->|下次市集| D1
    D19 --> D20
```

---

## 五、端到端：從上架到交收（完整路徑）

```mermaid
flowchart TD
    E1([物主：上傳閒置物品]) --> E2[義工審核・核定積分]
    E2 --> E3[公開上架]

    E4([換取方：瀏覽線上換物]) --> E5[以積分預約]
    E3 --> E5

    E5 --> E6[雙方報名下次換物市集<br/>建議但非必須]
    E6 --> E7[換物市集當日]

    E7 --> E8[換物攤核對預約]
    E8 --> E9[實物交收完成]
    E9 --> E10([積分結算・流程結束])
```

---

## 六、角色對照

| 步驟 | 線上／線下 | 主要角色 |
|------|------------|----------|
| 上傳物品 | 線上 | 街坊（物主） |
| 審核・定分 | 線上 | 義工 |
| 瀏覽・預約 | 線上 | 街坊（換取方） |
| 報名市集 | 線上 | 街坊 |
| 實物交收 | 線下・換物攤 | 義工＋雙方街坊 |
| 即場修繕 | 線下・維修攤 | 師傅／義工 |
| 留件追蹤 | 線下→線下 | 義工＋暫存點 |
| 數碼協助 | 線下・數碼義診攤 | 義工 |
| 積分紀錄 | 線上 | App（示範版 mock） |

---

## 七、已匯出圖片（可直接下載）

圖片已產生於 [`docs/assets/flowcharts/`](assets/flowcharts/)：

| # | 說明 | PNG | SVG |
|---|------|-----|-----|
| 1 | 總覽：線上媒合、線下交收 | [01-overview.png](assets/flowcharts/01-overview.png) | [01-overview.svg](assets/flowcharts/01-overview.svg) |
| 2 | 線上：上架 → 審核 → 公開 | [02-online-upload.png](assets/flowcharts/02-online-upload.png) | [02-online-upload.svg](assets/flowcharts/02-online-upload.svg) |
| 3 | 線上：積分與報名 | [03-online-points.png](assets/flowcharts/03-online-points.png) | [03-online-points.svg](assets/flowcharts/03-online-points.svg) |
| 4 | 線下：換物市集當日 | [04-offline-market.png](assets/flowcharts/04-offline-market.png) | [04-offline-market.svg](assets/flowcharts/04-offline-market.svg) |
| 5 | 端到端：上架到交收 | [05-end-to-end.png](assets/flowcharts/05-end-to-end.png) | [05-end-to-end.svg](assets/flowcharts/05-end-to-end.svg) |

在 Cursor 左側檔案總管展開 `docs/assets/flowcharts/`，對 `.png` 或 `.svg` 右鍵即可另存／複製。

若要重新產生圖片，可執行專案根目錄：

```powershell
$dir = "docs/assets/flowcharts"
$cfg = "$dir/mermaid-config.json"
@("01-overview","02-online-upload","03-online-points","04-offline-market","05-end-to-end") | ForEach-Object {
  npx -y @mermaid-js/mermaid-cli@11 -c $cfg -i "$dir/$_.mmd" -o "$dir/$_.png"
  npx -y @mermaid-js/mermaid-cli@11 -c $cfg -i "$dir/$_.mmd" -o "$dir/$_.svg"
}
```

---

## 八、其他匯出方式

1. 在 VS Code／Cursor 安裝 **Markdown Preview Mermaid Support** 或使用支援 Mermaid 的預覽
2. 開啟本檔案預覽
3. 或使用 [Mermaid Live Editor](https://mermaid.live) 貼上上方程式碼區塊匯出

---

## 九、示範版限制

- 上架待審、預約狀態目前為前端 mock／localStorage
- 無真實後端推播、無義工審核後台
- 積分扣款與交收結算尚未連動真實錢包 API
