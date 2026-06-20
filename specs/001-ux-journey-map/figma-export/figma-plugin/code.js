// Auto-generated — do not edit. Run: node build-figma-plugin.mjs
const DATA = {
  "meta": {
    "title": "用戶體驗地圖 — 社區換物 Carousell",
    "version": "1.0",
    "date": "2026-06-20",
    "source": "../ux-journey-map.md"
  },
  "brand": {
    "primary": "#4D7A64",
    "secondary": "#A85538",
    "accent": "#F5F1EA",
    "text": "#5A4E3C",
    "textMuted": "#8B7E6A",
    "positive": "#4D7A64",
    "neutral": "#9CA3AF",
    "negative": "#C2410C",
    "background": "#FFFFFF",
    "laneAlt": "#FAF8F5"
  },
  "stages": [
    { "order": 1, "nameZh": "認知", "nameEn": "Awareness" },
    { "order": 2, "nameZh": "考量", "nameEn": "Consideration" },
    { "order": 3, "nameZh": "準備", "nameEn": "Preparation" },
    { "order": 4, "nameZh": "線上參與", "nameEn": "Online" },
    { "order": 5, "nameZh": "線下市集", "nameEn": "Offline Market" },
    { "order": 6, "nameZh": "持續", "nameEn": "Retention" },
    { "order": 7, "nameZh": "倡導", "nameEn": "Advocacy" }
  ],
  "personas": [
    {
      "id": "P1",
      "name": "長者陳姨",
      "priority": "P1",
      "color": "#4D7A64",
      "description": "行動不便、居家囤積、需義工全程協助",
      "emotionCurve": [5, 4, 3, 4, 8, 7, 8],
      "lowPoint": "準備（不知如何整理）",
      "highPoint": "線下市集（有人幫手、交到朋友）",
      "turningPoint": "義工代操作消除 App 障礙"
    },
    {
      "id": "P2",
      "name": "街坊阿明",
      "priority": "P1",
      "color": "#A85538",
      "description": "首次聽聞、觀望中、可先試水溫參觀",
      "emotionCurve": [6, 5, 5, 6, 7, 6, 7],
      "lowPoint": "考量（怕尷尬、怕帶錯物品）",
      "highPoint": "線下市集（試水溫獲歡迎積分）",
      "turningPoint": "試水溫參觀降低承諾"
    },
    {
      "id": "P3",
      "name": "換取方李姐",
      "priority": "P2",
      "color": "#5B7FA6",
      "description": "熟悉 App、積極預約、定期參與換物",
      "emotionCurve": [5, 6, 6, 7, 8, 8, 7],
      "lowPoint": "認知（不知有這服務）",
      "highPoint": "持續參與（積分循環、定期換物）",
      "turningPoint": "預約成功 → 現場交收閉環"
    },
    {
      "id": "P4",
      "name": "義工阿珍",
      "priority": "P2",
      "color": "#7C6B9E",
      "description": "現場登記、審核定分、撮合同場交換",
      "emotionCurve": [5, 5, 5, 5, 8, 7, 8],
      "lowPoint": "準備（示範版無義工後台）",
      "highPoint": "線下市集（配對成功）",
      "turningPoint": "紙本登記備援"
    },
    {
      "id": "P5",
      "name": "訪客何太",
      "priority": "P3",
      "color": "#8B7E6A",
      "description": "僅看過落地頁、尚未決定是否參與",
      "emotionCurve": [4, 3, 0, 0, 0, 0, 0],
      "lowPoint": "考量（資訊太多）",
      "highPoint": "—（尚未進入後段）",
      "turningPoint": "落地頁 CTA 與 FAQ"
    }
  ],
  "journeys": {
    "P1": [
      {
        "actions": "屋邨海報；鄰居提及換物市集",
        "touchpoints": "🏘 屋邨海報 · 👥 鄰居口碑",
        "thoughts": "「又係搞活動？我啲舊嘢點算？」",
        "emotion": "neutral",
        "painPoints": "不知是否適合長者；怕體力負擔",
        "opportunities": "海報強調「義工幫手」「唔使識 App」"
      },
      {
        "actions": "請家人代看 App 或打電話問社區中心",
        "touchpoints": "📱 /hall · 🌐 / · ☎️ 社區中心",
        "thoughts": "「要唔要帶嘢？我行唔到點算？」",
        "emotion": "negative",
        "painPoints": "行動不便；怕麻煩家人",
        "opportunities": "FAQ 突出上門收物；義工電話熱線"
      },
      {
        "actions": "整理 1–3 件物品；家人協助上架或報名",
        "touchpoints": "📱 /marketplace/upload · /explore · 🤝 家人代操作",
        "thoughts": "「呢件衫放咗好多年，唔知有冇人要」",
        "emotion": "neutral",
        "painPoints": "不知哪些物品適合；表單欄位多",
        "opportunities": "義工家訪協助整理；簡化上架表單"
      },
      {
        "actions": "查看報名紀錄；日程確認；家人代預約",
        "touchpoints": "📱 /schedule · /registrations · /wallet",
        "thoughts": "「下星期六係咪有換物市集？」",
        "emotion": "neutral",
        "painPoints": "無法獨立操作 App",
        "opportunities": "大廳倒數；語音輔助（未來）"
      },
      {
        "actions": "換物攤交換；維修攤留件；數碼義診",
        "touchpoints": "🏪 換物攤 · 維修攤 · 數碼義診攤 · 🤝 義工",
        "thoughts": "「原來我啲舊衫都有人鍾意！」",
        "emotion": "positive",
        "painPoints": "排隊體力不支；留件進度不明",
        "opportunities": "座椅休息區；留件追蹤（未來）"
      },
      {
        "actions": "查看積分；兌換環保袋；關注下次市集",
        "touchpoints": "📱 /wallet · /schedule · /hall",
        "thoughts": "「積分可以換環保袋；下個月再帶嘢」",
        "emotion": "positive",
        "painPoints": "不知積分怎麼賺",
        "opportunities": "錢包「獲得方式」Tab 圖示化"
      },
      {
        "actions": "告訴鄰居「唔使識 App 都有人教」",
        "touchpoints": "👥 鄰居口碑 · 🏪 故事角",
        "thoughts": "「想叫隔離屋婆婆一齊」",
        "emotion": "positive",
        "painPoints": "",
        "opportunities": "故事角錄影供落地頁使用"
      }
    ],
    "P2": [
      {
        "actions": "朋友分享參加經驗",
        "touchpoints": "👥 朋友口碑 · 🏘 屋邨宣傳",
        "thoughts": "「聽落幾有趣，但我要帶咩去？」",
        "emotion": "positive",
        "painPoints": "資訊零散",
        "opportunities": "試水溫參觀故事素材"
      },
      {
        "actions": "瀏覽 FAQ；考慮試水溫參觀",
        "touchpoints": "🌐 / FAQ · 📱 /explore",
        "thoughts": "「可以先去睇，唔帶嘢都得？」",
        "emotion": "neutral",
        "painPoints": "不確定帶什麼",
        "opportunities": "試水溫 CTA 置頂"
      },
      {
        "actions": "App 報名下次換物市集",
        "touchpoints": "📱 /explore · /account/registrations",
        "thoughts": "「報咗名先，到時唔帶嘢都得」",
        "emotion": "positive",
        "painPoints": "App 操作不熟",
        "opportunities": "報名 modal 說明試水溫選項"
      },
      {
        "actions": "查看日程；瀏覽換物物品",
        "touchpoints": "📱 /schedule · /marketplace · /hall",
        "thoughts": "「原來有咁多嘢可以換」",
        "emotion": "positive",
        "painPoints": "篩選選項多",
        "opportunities": "大廳快捷入口「探索換物」"
      },
      {
        "actions": "試水溫參觀；獲歡迎積分；旁觀交換",
        "touchpoints": "🏪 換物攤 · 試水溫登記處",
        "thoughts": "「唔使帶嘢都有分，幾好」",
        "emotion": "positive",
        "painPoints": "",
        "opportunities": "試水溫參觀徽章／歡迎卡"
      },
      {
        "actions": "升級為帶物參與；查看日程",
        "touchpoints": "📱 /hall · /explore · /marketplace/upload",
        "thoughts": "「下次帶件玩具去換」",
        "emotion": "positive",
        "painPoints": "忘記下次市集日期",
        "opportunities": "大廳倒數＋一鍵加入日程"
      },
      {
        "actions": "推薦朋友試水溫參觀",
        "touchpoints": "👥 朋友口碑 · 🌐 / #join",
        "thoughts": "「其實唔難，叫佢去睇先」",
        "emotion": "positive",
        "painPoints": "",
        "opportunities": "推薦獎勵積分（未來）"
      }
    ],
    "P3": [
      {
        "actions": "社區中心通告得知",
        "touchpoints": "🏘 社區中心通告",
        "thoughts": "「終於有個唔使畀錢買嘢嘅地方」",
        "emotion": "positive",
        "painPoints": "",
        "opportunities": ""
      },
      {
        "actions": "瀏覽線上換物清單",
        "touchpoints": "📱 /marketplace · 🌐 /",
        "thoughts": "「有幾件嘢幾啱我，要幾多積分？」",
        "emotion": "positive",
        "painPoints": "積分規則理解成本",
        "opportunities": "類別分值表在換物頁可見"
      },
      {
        "actions": "上傳物品；報名；預約他人物品",
        "touchpoints": "📱 /upload · /marketplace · /explore",
        "thoughts": "「上傳等審核，順便預約嗰個花瓶」",
        "emotion": "positive",
        "painPoints": "審核等待不確定",
        "opportunities": "「等候審核」狀態清晰"
      },
      {
        "actions": "篩選類別；以積分預約；管理錢包",
        "touchpoints": "📱 /marketplace · /wallet",
        "thoughts": "「積分夠唔夠預約嗰個鍾？」",
        "emotion": "positive",
        "painPoints": "已被預約物品撲空",
        "opportunities": "「已被預約」狀態即時顯示"
      },
      {
        "actions": "交收預約花瓶；帶物現場登記",
        "touchpoints": "🏪 換物攤 · 維修攤",
        "thoughts": "「同網上睇到嘅一樣，交收好順」",
        "emotion": "positive",
        "painPoints": "",
        "opportunities": "預約 QR 快速核對"
      },
      {
        "actions": "持續上架／預約；兌換社區禮品",
        "touchpoints": "📱 /wallet · /marketplace",
        "thoughts": "「已經變成每月習慣」",
        "emotion": "positive",
        "painPoints": "",
        "opportunities": "參與里程碑（未來）"
      },
      {
        "actions": "社區群組分享換物經驗",
        "touchpoints": "👥 社區群組",
        "thoughts": "「比 Carousell 有人情味」",
        "emotion": "positive",
        "painPoints": "",
        "opportunities": "街坊大使計畫"
      }
    ],
    "P5": [
      {
        "actions": "搜尋「社區換物」找到落地頁",
        "touchpoints": "🌐 落地頁 /",
        "thoughts": "「同 Carousell 有咩分別？」",
        "emotion": "neutral",
        "painPoints": "與商業平台混淆",
        "opportunities": "落地頁競品對照區塊"
      },
      {
        "actions": "閱讀核心理念、App 預覽、FAQ",
        "touchpoints": "🌐 / · #faq · #app-preview",
        "thoughts": "「積分係咩？可唔可以換錢？」",
        "emotion": "negative",
        "painPoints": "積分 vs 港元混淆；資訊焦慮",
        "opportunities": "「積分不可兌現金」醒目提示"
      },
      { "actions": "—", "touchpoints": "—", "thoughts": "—", "emotion": "neutral", "painPoints": "", "opportunities": "" },
      { "actions": "—", "touchpoints": "—", "thoughts": "—", "emotion": "neutral", "painPoints": "", "opportunities": "" },
      { "actions": "—", "touchpoints": "—", "thoughts": "—", "emotion": "neutral", "painPoints": "", "opportunities": "" },
      { "actions": "—", "touchpoints": "—", "thoughts": "—", "emotion": "neutral", "painPoints": "", "opportunities": "" },
      { "actions": "—", "touchpoints": "—", "thoughts": "—", "emotion": "neutral", "painPoints": "", "opportunities": "" }
    ]
  },
  "serviceBlueprint": [
    { "stage": "認知", "online": "落地頁", "offline": "屋邨宣傳", "volunteer": "—", "handoff": "海報 QR → 落地頁" },
    { "stage": "考量", "online": "FAQ、探索", "offline": "—", "volunteer": "社區中心解答", "handoff": "家人代開 App" },
    { "stage": "準備", "online": "上架、報名", "offline": "—", "volunteer": "代上架、家訪", "handoff": "上架 → 審核 → 公開" },
    { "stage": "線上", "online": "預約、錢包", "offline": "—", "volunteer": "—", "handoff": "預約 → 現場交收" },
    { "stage": "市集", "online": "掃碼報到", "offline": "三攤體驗", "volunteer": "全程引導", "handoff": "交收閉環 ★" },
    { "stage": "持續", "online": "錢包、日程", "offline": "—", "volunteer": "—", "handoff": "積分結算" },
    { "stage": "倡導", "online": "加入意向表", "offline": "故事分享", "volunteer": "義工推薦", "handoff": "口碑循環" }
  ],
  "painOpportunities": [
    { "priority": "P0", "pain": "不熟悉 App 操作", "opportunity": "義工代操作路徑可見", "personas": "P1, P2" },
    { "priority": "P0", "pain": "行動不便難以搬運", "opportunity": "上門收物 FAQ 強化", "personas": "P1" },
    { "priority": "P0", "pain": "積分規則不理解", "opportunity": "錢包圖文教學", "personas": "P2, P5" },
    { "priority": "P1", "pain": "審核等待不確定", "opportunity": "等候審核狀態＋預計時間", "personas": "P3" },
    { "priority": "P1", "pain": "維修／數碼攤排隊久", "opportunity": "已報名優先可視化", "personas": "P1, P3" },
    { "priority": "P1", "pain": "留件進度不透明", "opportunity": "留件追蹤查詢（未來）", "personas": "P1" },
    { "priority": "P2", "pain": "忘記下次市集", "opportunity": "大廳倒數＋一鍵加入日程", "personas": "全部" },
    { "priority": "P2", "pain": "與商業平台混淆", "opportunity": "競品對照更突出", "personas": "P5" }
  ]
}
;

function hex(h) {
  const n = h.replace("#", "");
  return {
    r: parseInt(n.slice(0, 2), 16) / 255,
    g: parseInt(n.slice(2, 4), 16) / 255,
    b: parseInt(n.slice(4, 6), 16) / 255,
  };
}

const B = DATA.brand;
const EMOTION = {
  positive: { label: "😊 正向", color: hex(B.positive) },
  neutral: { label: "😐 中性", color: hex(B.neutral) },
  negative: { label: "😟 負向", color: hex(B.negative) },
};

let fontRegular, fontBold;

async function loadFonts() {
  fontRegular = { family: "Inter", style: "Regular" };
  fontBold = { family: "Inter", style: "Bold" };
  await figma.loadFontAsync(fontRegular);
  await figma.loadFontAsync(fontBold);
}

function txt(str, size, bold, color, width) {
  const t = figma.createText();
  t.fontName = bold ? fontBold : fontRegular;
  t.characters = str || "—";
  t.fontSize = size;
  t.fills = [{ type: "SOLID", color: color || hex(B.text) }];
  if (width) {
    t.textAutoResize = "HEIGHT";
    t.resize(width, t.height);
  }
  return t;
}

function box(w, h, fill, stroke, radius) {
  const r = figma.createRectangle();
  r.resize(w, h);
  r.fills = [{ type: "SOLID", color: fill }];
  if (stroke) {
    r.strokes = [{ type: "SOLID", color: stroke }];
    r.strokeWeight = 1;
  }
  if (radius) r.cornerRadius = radius;
  return r;
}

function frame(name, w, h, y) {
  const f = figma.createFrame();
  f.name = name;
  f.resize(w, h);
  f.x = 0;
  f.y = y;
  f.fills = [{ type: "SOLID", color: hex(B.background) }];
  f.clipsContent = true;
  return f;
}

function header(parent, title, subtitle) {
  const bar = box(parent.width, 88, hex(B.primary), null, 0);
  bar.x = 0;
  bar.y = 0;
  parent.appendChild(bar);
  const t1 = txt(title, 28, true, { r: 1, g: 1, b: 1 });
  t1.x = 48;
  t1.y = 28;
  parent.appendChild(t1);
  const t2 = txt(subtitle, 14, false, { r: 0.9, g: 0.94, b: 0.92 });
  t2.x = 48;
  t2.y = 62;
  parent.appendChild(t2);
}

function buildOverview(y) {
  const W = 1920, H = 1080;
  const f = frame("01 · 總覽", W, H, y);
  header(f, DATA.meta.title, DATA.meta.version + " · " + DATA.meta.date);

  const principles = [
    "線上媒合、現場交收（ADR-0001）",
    "實體為主：唔識用 App 亦有義工幫手",
    "低門檻：Walk-in、試水溫參觀均可",
    "長者友善：大字、暖色、大觸控區",
  ];
  principles.forEach((p, i) => {
    const cell = box(440, 44, hex(B.accent), hex(B.primary), 6);
    cell.x = 80 + i * 460;
    cell.y = 148;
    f.appendChild(cell);
    const t = txt(p, 13, false, hex(B.text), 400);
    t.x = 96 + i * 460;
    t.y = 160;
    f.appendChild(t);
  });

  const colW = 220, gap = 16;
  DATA.stages.forEach((s, i) => {
    const cell = box(colW, 56, hex(B.primary), null, 8);
    cell.x = 80 + i * (colW + gap);
    cell.y = 220;
    f.appendChild(cell);
    const t = txt(s.order + ". " + s.nameZh, 15, true, { r: 1, g: 1, b: 1 });
    t.x = 92 + i * (colW + gap);
    t.y = 236;
    f.appendChild(t);
  });

  DATA.personas.forEach((p, i) => {
    const x = 80 + (i % 3) * 580;
    const py = 340 + Math.floor(i / 3) * 120;
    const card = box(560, 100, i % 2 ? hex(B.laneAlt) : hex(B.background), hex(p.color), 10);
    card.x = x;
    card.y = py;
    f.appendChild(card);
    const accent = box(8, 100, hex(p.color), null, 10);
    accent.x = x;
    accent.y = py;
    f.appendChild(accent);
    const t1 = txt(p.id + " · " + p.name, 18, true, hex(B.text));
    t1.x = x + 24;
    t1.y = py + 16;
    f.appendChild(t1);
    const t2 = txt(p.description, 13, false, hex(B.text), 520);
    t2.x = x + 24;
    t2.y = py + 48;
    f.appendChild(t2);
  });

  return f;
}

function buildEmotionChart(y) {
  const W = 1920, H = 720;
  const f = frame("02 · 情緒曲線", W, H, y);
  header(f, "情緒曲線摘要", "端到端情緒高低點");

  const chartX = 120, chartY = 160, chartW = 1680, chartH = 420;
  const area = box(chartW, chartH, hex(B.laneAlt), hex("#E5E0D8"), 12);
  area.x = chartX;
  area.y = chartY;
  f.appendChild(area);

  const active = DATA.personas.filter((p) => p.emotionCurve.some((v) => v > 0));
  const stepX = chartW / (DATA.stages.length - 1);

  DATA.stages.forEach((s, i) => {
    const t = txt(s.nameZh, 12, true, hex(B.text));
    t.x = chartX + i * stepX - 20;
    t.y = chartY + chartH + 20;
    f.appendChild(t);
  });

  active.forEach((p) => {
    p.emotionCurve.forEach((v, i) => {
      if (v === 0) return;
      const barW = 36;
      const barH = (v / 10) * chartH;
      const bar = box(barW, barH, hex(p.color), null, 4);
      bar.x = chartX + i * stepX - barW / 2;
      bar.y = chartY + chartH - barH;
      f.appendChild(bar);
    });
  });

  active.forEach((p, i) => {
    const dot = box(16, 16, hex(p.color), null, 4);
    dot.x = 120 + i * 280;
    dot.y = 620;
    f.appendChild(dot);
    const t = txt(p.id + " " + p.name, 13, false, hex(B.text));
    t.x = 144 + i * 280;
    t.y = 622;
    f.appendChild(t);
  });

  return f;
}

function buildPersonaLane(personaId, frameName, y) {
  const persona = DATA.personas.find((p) => p.id === personaId);
  const steps = DATA.journeys[personaId];
  if (!persona || !steps) return null;

  const W = 2800, H = 900;
  const f = frame(frameName, W, H, y);
  header(f, persona.id + " · " + persona.name + " — 用戶旅程", persona.description);

  const colW = 360, gap = 12, labelW = 100, startX = 48;
  const rows = [
    { key: "actions", label: "行動", h: 90 },
    { key: "touchpoints", label: "觸點", h: 80 },
    { key: "thoughts", label: "想法", h: 80 },
    { key: "emotion", label: "情緒", h: 60 },
    { key: "painPoints", label: "痛點", h: 90 },
    { key: "opportunities", label: "機會", h: 90 },
  ];

  let rowY = 110;
  DATA.stages.forEach((s, i) => {
    const cell = box(colW, 44, hex(B.primary), null, 8);
    cell.x = startX + labelW + i * (colW + gap);
    cell.y = rowY;
    f.appendChild(cell);
    const t = txt(s.order + ". " + s.nameZh, 14, true, { r: 1, g: 1, b: 1 });
    t.x = startX + labelW + i * (colW + gap) + 12;
    t.y = rowY + 12;
    f.appendChild(t);
  });
  rowY += 56;

  rows.forEach((row, ri) => {
    const label = box(labelW, row.h, hex(B.accent), hex(B.primary), 6);
    label.x = startX;
    label.y = rowY;
    f.appendChild(label);
    const lt = txt(row.label, 13, true, hex(B.text));
    lt.x = startX + 12;
    lt.y = rowY + row.h / 2 - 8;
    f.appendChild(lt);

    steps.forEach((step, i) => {
      const bg = i % 2 ? hex(B.laneAlt) : hex(B.background);
      const cell = box(colW, row.h, bg, hex("#E5E0D8"), 6);
      cell.x = startX + labelW + i * (colW + gap);
      cell.y = rowY;
      f.appendChild(cell);

      let content = step[row.key] || "—";
      if (row.key === "emotion") {
        const e = EMOTION[step.emotion] || EMOTION.neutral;
        content = e.label;
      }
      if (content === "") content = "—";
      const t = txt(content, 11, false, hex(B.text), colW - 20);
      t.x = startX + labelW + i * (colW + gap) + 10;
      t.y = rowY + 12;
      f.appendChild(t);
    });
    rowY += row.h + 4;
  });

  return f;
}

function buildServiceBlueprint(y) {
  const W = 2400, H = 640;
  const f = frame("07 · 服務藍圖", W, H, y);
  header(f, "跨角色服務藍圖", "線上／線下／義工三通道銜接");

  const lanes = [
    { key: "online", label: "線上 App" },
    { key: "offline", label: "線下市集" },
    { key: "volunteer", label: "義工介入" },
    { key: "handoff", label: "關鍵銜接" },
  ];
  const colW = 300, gap = 12, startX = 200;

  DATA.serviceBlueprint.forEach((row, i) => {
    const hx = startX + i * (colW + gap);
    const hcell = box(colW, 36, hex(B.primary), null, 6);
    hcell.x = hx;
    hcell.y = 110;
    f.appendChild(hcell);
    const ht = txt(row.stage, 13, true, { r: 1, g: 1, b: 1 });
    ht.x = hx + 10;
    ht.y = 118;
    f.appendChild(ht);
  });

  lanes.forEach((lane, li) => {
    const ly = 160 + li * 100;
    const label = box(140, 88, hex(B.accent), hex(B.primary), 8);
    label.x = 48;
    label.y = ly;
    f.appendChild(label);
    const lt = txt(lane.label, 13, true, hex(B.text));
    lt.x = 64;
    lt.y = ly + 32;
    f.appendChild(lt);

    DATA.serviceBlueprint.forEach((row, i) => {
      const cell = box(colW, 88, li % 2 ? hex(B.laneAlt) : hex(B.background), hex("#E5E0D8"), 6);
      cell.x = startX + i * (colW + gap);
      cell.y = ly;
      f.appendChild(cell);
      const t = txt(row[lane.key], 11, false, hex(B.text), colW - 16);
      t.x = startX + i * (colW + gap) + 8;
      t.y = ly + 16;
      f.appendChild(t);
    });
  });

  return f;
}

function buildPainMatrix(y) {
  const W = 1920, H = 820;
  const f = frame("08 · 痛點矩陣", W, H, y);
  header(f, "痛點與機會優先矩陣", "P0 優先處理");

  let rowY = 130;
  DATA.painOpportunities.forEach((row, i) => {
    const bg = i % 2 ? hex(B.laneAlt) : hex(B.background);
    const r = box(1824, 68, bg, hex("#E5E0D8"), 6);
    r.x = 48;
    r.y = rowY;
    f.appendChild(r);

    const pri = txt(row.priority, 13, true, hex(B.negative));
    pri.x = 64;
    pri.y = rowY + 24;
    f.appendChild(pri);

    const pain = txt(row.pain, 12, false, hex(B.text), 400);
    pain.x = 160;
    pain.y = rowY + 20;
    f.appendChild(pain);

    const opp = txt(row.opportunity, 12, false, hex(B.text), 400);
    opp.x = 592;
    opp.y = rowY + 20;
    f.appendChild(opp);

    const personas = txt(row.personas, 12, false, hex(B.textMuted));
    personas.x = 1024;
    personas.y = rowY + 24;
    f.appendChild(personas);

    rowY += 72;
  });

  return f;
}

async function main() {
  await loadFonts();

  const page = figma.createPage();
  page.name = "Journey Map v1.0";
  figma.currentPage = page;

  let y = 0;
  const gap = 120;
  const frames = [];

  frames.push(buildOverview(y));
  y += 1080 + gap;

  frames.push(buildEmotionChart(y));
  y += 720 + gap;

  const personas = [
    ["P1", "03 · P1 長者陳姨"],
    ["P2", "04 · P2 街坊阿明"],
    ["P3", "05 · P3 換取方李姐"],
    ["P5", "06 · P5 訪客何太"],
  ];
  personas.forEach(([id, name]) => {
    const lane = buildPersonaLane(id, name, y);
    if (lane) {
      frames.push(lane);
      y += 900 + gap;
    }
  });

  frames.push(buildServiceBlueprint(y));
  y += 640 + gap;

  frames.push(buildPainMatrix(y));

  frames.forEach((fr) => page.appendChild(fr));
  figma.viewport.scrollAndZoomIntoView(frames);

  figma.notify("✅ 已建立 " + frames.length + " 個 Journey Map Frame");
  figma.closePlugin();
}

main().catch((err) => {
  figma.notify("❌ " + err.message, { error: true });
  figma.closePlugin();
});
