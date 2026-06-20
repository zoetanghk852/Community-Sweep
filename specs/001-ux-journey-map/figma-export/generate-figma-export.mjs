#!/usr/bin/env node
/**
 * Generate Figma-importable SVG frames from journey-data.json
 * Usage: node generate-figma-export.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "svg");
mkdirSync(OUT_DIR, { recursive: true });

const data = JSON.parse(readFileSync(join(__dirname, "journey-data.json"), "utf8"));
const { brand, stages, personas, journeys, serviceBlueprint, painOpportunities, meta } = data;

const EMOTION = {
  positive: { emoji: "😊", color: brand.positive, label: "正向" },
  neutral: { emoji: "😐", color: brand.neutral, label: "中性" },
  negative: { emoji: "😟", color: brand.negative, label: "負向" },
};

function esc(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrap(text, maxChars = 28) {
  if (!text || text === "—") return ["—"];
  const words = text.split(/(?<=[；。，、·])/);
  const lines = [];
  let line = "";
  for (const w of words) {
    if ((line + w).length > maxChars && line) {
      lines.push(line.trim());
      line = w;
    } else {
      line += w;
    }
  }
  if (line.trim()) lines.push(line.trim());
  return lines.slice(0, 4);
}

function textBlock(x, y, lines, { size = 14, weight = 400, fill = brand.text, lineHeight = 1.45 } = {}) {
  const lh = size * lineHeight;
  return `<text font-family="'Noto Sans TC','PingFang TC','Microsoft JhengHei',sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}">
${lines.map((l, i) => `  <tspan x="${x}" dy="${i === 0 ? 0 : lh}">${esc(l)}</tspan>`).join("\n")}
</text>`;
}

function rect(x, y, w, h, fill, stroke, rx = 8) {
  const s = stroke ? ` stroke="${stroke}" stroke-width="1.5"` : "";
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"${s}/>`;
}

function svgWrap(w, h, title, body) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <title>${esc(title)}</title>
  <rect width="100%" height="100%" fill="${brand.background}"/>
  ${body}
</svg>`;
}

function headerBar(w, title, subtitle) {
  return `
  <g id="header">
    ${rect(0, 0, w, 88, brand.primary, null, 0)}
    ${textBlock(48, 36, [title], { size: 28, weight: 700, fill: "#FFFFFF" })}
    ${textBlock(48, 68, [subtitle], { size: 14, weight: 400, fill: "#E8F0EC" })}
  </g>`;
}

/* ── Frame 01: Overview ── */
function generateOverview() {
  const W = 1920, H = 1080;
  const colW = 220, gap = 16, startX = 80, startY = 140;

  let body = headerBar(W, meta.title, `${meta.version} · ${meta.date} · Community-Sweep UX Journey Map`);

  body += `<g id="principles">${textBlock(80, 120, ["體驗設計原則"], { size: 16, weight: 700, fill: brand.text })}</g>`;
  const principles = [
    "線上媒合、現場交收（ADR-0001）",
    "實體為主：唔識用 App 亦有義工幫手",
    "低門檻：Walk-in、試水溫參觀均可",
    "長者友善：大字、暖色、大觸控區",
  ];
  principles.forEach((p, i) => {
    body += rect(80 + i * 460, 148, 440, 44, brand.accent, brand.primary, 6);
    body += textBlock(96 + i * 460, 176, [p], { size: 13, fill: brand.text });
  });

  body += `<g id="stages-timeline">`;
  stages.forEach((s, i) => {
    const x = startX + i * (colW + gap);
    body += rect(x, 220, colW, 56, brand.primary, null, 8);
    body += textBlock(x + 12, 248, [`${s.order}. ${s.nameZh}`], { size: 15, weight: 700, fill: "#FFF" });
    body += textBlock(x + 12, 268, [s.nameEn], { size: 11, fill: "#D4E4DC" });
    if (i < stages.length - 1) {
      body += `<path d="M ${x + colW + 4} 248 L ${x + colW + gap - 4} 248" stroke="${brand.secondary}" stroke-width="2" marker-end="url(#arrow)"/>`;
    }
  });
  body += `<defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${brand.secondary}"/></marker></defs>`;
  body += `</g>`;

  body += `<g id="personas">`;
  body += textBlock(80, 310, ["角色一覽"], { size: 18, weight: 700, fill: brand.text });
  personas.forEach((p, i) => {
    const x = 80 + (i % 3) * 580;
    const y = 340 + Math.floor(i / 3) * 120;
    body += rect(x, y, 560, 100, i % 2 ? brand.laneAlt : "#FFF", p.color, 10);
    body += rect(x, y, 8, 100, p.color, null, 10);
    body += textBlock(x + 24, y + 28, [`${p.id} · ${p.name}`], { size: 18, weight: 700, fill: brand.text });
    body += textBlock(x + 24, y + 52, [`優先級 ${p.priority}`], { size: 12, fill: brand.textMuted });
    body += textBlock(x + 24, y + 72, wrap(p.description, 36), { size: 13, fill: brand.text });
  });
  body += `</g>`;

  body += `<g id="footer">`;
  body += rect(80, 980, 1760, 60, brand.accent, brand.primary, 8);
  body += textBlock(96, 1018, ["匯入 Figma：File → Import → 選擇 svg/ 資料夾內所有檔案 · 詳見 figma-import-guide.md"], {
    size: 13,
    fill: brand.text,
  });
  body += `</g>`;

  writeFileSync(join(OUT_DIR, "01-overview.svg"), svgWrap(W, H, "Overview", body));
}

/* ── Frame 02: Emotion Curves ── */
function generateEmotionChart() {
  const W = 1920, H = 720;
  const chartX = 120, chartY = 160, chartW = 1680, chartH = 420;
  const maxY = 10;
  const activePersonas = personas.filter((p) => p.emotionCurve.some((v) => v > 0));

  let body = headerBar(W, "情緒曲線摘要", "端到端情緒高低點 · 供簡報與優先排序使用");

  body += `<g id="chart-area">`;
  body += rect(chartX, chartY, chartW, chartH, brand.laneAlt, "#E5E0D8", 12);

  for (let i = 0; i <= 10; i += 2) {
    const y = chartY + chartH - (i / maxY) * chartH;
    body += `<line x1="${chartX}" y1="${y}" x2="${chartX + chartW}" y2="${y}" stroke="#E5E0D8" stroke-width="1"/>`;
    body += textBlock(chartX - 36, y + 5, [String(i)], { size: 11, fill: brand.textMuted });
  }

  const stepX = chartW / (stages.length - 1);
  stages.forEach((s, i) => {
    const x = chartX + i * stepX;
    body += textBlock(x - 24, chartY + chartH + 24, [s.nameZh], { size: 12, weight: 600, fill: brand.text });
  });

  activePersonas.forEach((p) => {
    const pts = p.emotionCurve
      .map((v, i) => {
        if (v === 0) return null;
        const x = chartX + i * stepX;
        const y = chartY + chartH - (v / maxY) * chartH;
        return `${x},${y}`;
      })
      .filter(Boolean);
    if (pts.length < 2) return;
    body += `<polyline points="${pts.join(" ")}" fill="none" stroke="${p.color}" stroke-width="3" stroke-linejoin="round"/>`;
    p.emotionCurve.forEach((v, i) => {
      if (v === 0) return;
      const x = chartX + i * stepX;
      const y = chartY + chartH - (v / maxY) * chartH;
      body += `<circle cx="${x}" cy="${y}" r="6" fill="${p.color}"/>`;
    });
  });
  body += `</g>`;

  body += `<g id="legend">`;
  activePersonas.forEach((p, i) => {
    const x = 120 + i * 280;
    const y = 620;
    body += rect(x, y, 16, 16, p.color, null, 4);
    body += textBlock(x + 24, y + 14, [`${p.id} ${p.name}`], { size: 13, fill: brand.text });
  });
  body += `</g>`;

  body += `<g id="insights">`;
  body += textBlock(120, 660, ["關鍵轉折"], { size: 14, weight: 700, fill: brand.text });
  activePersonas.slice(0, 3).forEach((p, i) => {
    body += textBlock(120 + i * 580, 688, [`${p.id}: ${p.turningPoint}`], { size: 12, fill: brand.textMuted });
  });
  body += `</g>`;

  writeFileSync(join(OUT_DIR, "02-emotion-curves.svg"), svgWrap(W, H, "Emotion Curves", body));
}

/* ── Persona Journey Lane ── */
function generatePersonaLane(personaId) {
  const persona = personas.find((p) => p.id === personaId);
  const steps = journeys[personaId];
  if (!persona || !steps) return;

  const W = 2800, H = 1100;
  const colW = 360, gap = 12, startX = 48, laneLabelW = 100;
  const rows = [
    { key: "actions", label: "行動", h: 100, y: 160 },
    { key: "touchpoints", label: "觸點", h: 90, y: 270 },
    { key: "thoughts", label: "想法", h: 90, y: 370 },
    { key: "emotion", label: "情緒", h: 70, y: 470 },
    { key: "painPoints", label: "痛點", h: 100, y: 550 },
    { key: "opportunities", label: "機會", h: 100, y: 660 },
  ];

  let body = headerBar(W, `${persona.id} · ${persona.name} — 用戶旅程`, persona.description);

  body += `<g id="stage-headers">`;
  stages.forEach((s, i) => {
    const x = startX + laneLabelW + i * (colW + gap);
    body += rect(x, 100, colW, 48, brand.primary, null, 8);
    body += textBlock(x + 12, 128, [`${s.order}. ${s.nameZh}`], { size: 14, weight: 700, fill: "#FFF" });
  });
  body += `</g>`;

  rows.forEach((row) => {
    body += `<g id="row-${row.key}">`;
    body += rect(startX, row.y, laneLabelW, row.h, brand.accent, brand.primary, 6);
    body += textBlock(startX + 12, row.y + row.h / 2 + 5, [row.label], { size: 13, weight: 700, fill: brand.text });

    steps.forEach((step, i) => {
      const x = startX + laneLabelW + i * (colW + gap);
      const bg = i % 2 ? brand.laneAlt : "#FFF";
      body += rect(x, row.y, colW, row.h, bg, "#E5E0D8", 6);

      if (row.key === "emotion") {
        const e = EMOTION[step.emotion] ?? EMOTION.neutral;
        body += textBlock(x + colW / 2 - 20, row.y + 38, [`${e.emoji} ${e.label}`], {
          size: 16,
          weight: 600,
          fill: e.color,
        });
      } else {
        const val = step[row.key] || "—";
        body += textBlock(x + 10, row.y + 24, wrap(val, 22), { size: 12, fill: brand.text });
      }
    });
    body += `</g>`;
  });

  body += `<g id="emotion-curve-mini">`;
  body += textBlock(48, 780, ["情緒曲線"], { size: 14, weight: 700, fill: brand.text });
  const miniY = 820, miniH = 80;
  persona.emotionCurve.forEach((v, i) => {
    const x = startX + laneLabelW + i * (colW + gap) + colW / 2;
    if (v === 0) return;
    const barH = (v / 10) * miniH;
    body += rect(x - 20, miniY + miniH - barH, 40, barH, persona.color, null, 4);
    body += textBlock(x - 8, miniY + miniH + 16, [String(v)], { size: 11, fill: brand.textMuted });
  });
  body += textBlock(48, 940, [`最低點：${persona.lowPoint} · 最高點：${persona.highPoint}`], {
    size: 13,
    fill: brand.textMuted,
  });
  body += `</g>`;

  writeFileSync(join(OUT_DIR, `03-journey-${personaId.toLowerCase()}.svg`), svgWrap(W, H, `${personaId} Journey`, body));
}

/* ── Service Blueprint ── */
function generateServiceBlueprint() {
  const W = 2400, H = 680;
  const colW = 300, gap = 12, startX = 200, startY = 140;
  const lanes = [
    { key: "online", label: "線上 App", color: "#4D7A64" },
    { key: "offline", label: "線下市集", color: "#A85538" },
    { key: "volunteer", label: "義工介入", color: "#7C6B9E" },
    { key: "handoff", label: "關鍵銜接", color: "#5A4E3C" },
  ];

  let body = headerBar(W, "跨角色服務藍圖", "線上／線下／義工三通道銜接");

  lanes.forEach((lane, li) => {
    const y = startY + li * 110;
    body += rect(48, y, 140, 90, brand.accent, lane.color, 8);
    body += textBlock(64, y + 48, wrap(lane.label, 8), { size: 13, weight: 700, fill: lane.color });

    serviceBlueprint.forEach((row, i) => {
      const x = startX + i * (colW + gap);
      if (li === 0) {
        body += rect(x, 100, colW, 36, brand.primary, null, 6);
        body += textBlock(x + 10, 124, [row.stage], { size: 13, weight: 700, fill: "#FFF" });
      }
      body += rect(x, y, colW, 90, li % 2 ? brand.laneAlt : "#FFF", "#E5E0D8", 6);
      const val = row[lane.key];
      const highlight = val.includes("★");
      body += textBlock(x + 10, y + 36, wrap(val.replace("★", "★"), 18), {
        size: 12,
        weight: highlight ? 700 : 400,
        fill: highlight ? brand.secondary : brand.text,
      });
    });
  });

  writeFileSync(join(OUT_DIR, "04-service-blueprint.svg"), svgWrap(W, H, "Service Blueprint", body));
}

/* ── Pain / Opportunity Matrix ── */
function generatePainMatrix() {
  const W = 1920, H = 900;
  const startY = 120, rowH = 72;

  let body = headerBar(W, "痛點與機會優先矩陣", "P0 優先處理 · 對照 ux-journey-map.md §六");

  const cols = [
    { label: "優先級", w: 100, x: 48 },
    { label: "痛點", w: 420, x: 160 },
    { label: "機會", w: 420, x: 592 },
    { label: "影響角色", w: 160, x: 1024 },
  ];

  cols.forEach((c) => {
    body += rect(c.x, startY, c.w, 40, brand.primary, null, 6);
    body += textBlock(c.x + 12, startY + 26, [c.label], { size: 13, weight: 700, fill: "#FFF" });
  });

  const priorityColor = { P0: "#FEE2E2", P1: "#FEF3C7", P2: "#ECFDF5" };
  const priorityText = { P0: "#C2410C", P1: "#B45309", P2: "#047857" };

  painOpportunities.forEach((row, i) => {
    const y = startY + 48 + i * rowH;
    body += rect(48, y, 1824, rowH - 4, i % 2 ? brand.laneAlt : "#FFF", "#E5E0D8", 6);
    body += rect(160, y + 8, 80, rowH - 20, priorityColor[row.priority], null, 6);
    body += textBlock(176, y + rowH / 2 + 4, [row.priority], {
      size: 13,
      weight: 700,
      fill: priorityText[row.priority],
    });
    body += textBlock(260, y + rowH / 2 + 4, wrap(row.pain, 30), { size: 12, fill: brand.text });
    body += textBlock(592, y + rowH / 2 + 4, wrap(row.opportunity, 30), { size: 12, fill: brand.text });
    body += textBlock(1024, y + rowH / 2 + 4, [row.personas], { size: 12, fill: brand.textMuted });
  });

  writeFileSync(join(OUT_DIR, "05-pain-opportunity-matrix.svg"), svgWrap(W, H, "Pain Opportunity Matrix", body));
}

/* ── FigJam CSV ── */
function generateFigJamCsv() {
  const header = "Stage,Persona,Actions,Touchpoints,Thoughts,Emotion,Pain Points,Opportunities\n";
  const rows = [];
  for (const [personaId, steps] of Object.entries(journeys)) {
    const persona = personas.find((p) => p.id === personaId);
    steps.forEach((step, i) => {
      if (step.actions === "—") return;
      const stage = stages[i];
      const e = EMOTION[step.emotion] ?? EMOTION.neutral;
      rows.push(
        [
          `${stage.order}. ${stage.nameZh}`,
          `${personaId} ${persona?.name ?? ""}`,
          `"${step.actions.replace(/"/g, '""')}"`,
          `"${step.touchpoints.replace(/"/g, '""')}"`,
          `"${step.thoughts.replace(/"/g, '""')}"`,
          e.label,
          `"${(step.painPoints || "").replace(/"/g, '""')}"`,
          `"${(step.opportunities || "").replace(/"/g, '""')}"`,
        ].join(",")
      );
    });
  }
  writeFileSync(join(__dirname, "figjam-journey-sticky-notes.csv"), header + rows.join("\n"));
}

/* ── Run ── */
generateOverview();
generateEmotionChart();
["P1", "P2", "P3", "P5"].forEach(generatePersonaLane);
generateServiceBlueprint();
generatePainMatrix();
generateFigJamCsv();

console.log("✅ Figma export generated:");
console.log(`   SVG frames → ${OUT_DIR}/`);
console.log(`   FigJam CSV → ${join(__dirname, "figjam-journey-sticky-notes.csv")}`);
