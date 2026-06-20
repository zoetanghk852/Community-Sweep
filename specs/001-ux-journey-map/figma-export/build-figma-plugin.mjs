#!/usr/bin/env node
/** Embed journey-data.json into Figma plugin code.js */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = readFileSync(join(__dirname, "journey-data.json"), "utf8");

const pluginCode = `// Auto-generated — do not edit. Run: node build-figma-plugin.mjs
const DATA = ${data};

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
`;

writeFileSync(join(__dirname, "figma-plugin", "code.js"), pluginCode);
console.log("✅ Built figma-plugin/code.js");
