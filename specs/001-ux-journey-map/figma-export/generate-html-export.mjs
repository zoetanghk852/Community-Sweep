#!/usr/bin/env node
/**
 * Generate self-contained HTML journey map from journey-data.json
 * Usage: node generate-html-export.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "html");
mkdirSync(OUT_DIR, { recursive: true });

const data = JSON.parse(readFileSync(join(__dirname, "journey-data.json"), "utf8"));
const { brand, stages, personas, journeys, serviceBlueprint, painOpportunities, meta } = data;

const FOCUS_PERSONA_IDS = ["P1", "P2"];
const focusPersonas = personas.filter((p) => FOCUS_PERSONA_IDS.includes(p.id));

const EMOTION = {
  positive: { emoji: "😊", label: "正向", class: "emotion-positive" },
  neutral: { emoji: "😐", label: "中性", class: "emotion-neutral" },
  negative: { emoji: "😟", label: "負向", class: "emotion-negative" },
};

const PRIORITY = {
  P0: "priority-p0",
  P1: "priority-p1",
  P2: "priority-p2",
};

function esc(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function sectionHeader(id, title, subtitle) {
  return `
<section class="frame" id="${id}">
  <header class="frame-header">
    <h2>${esc(title)}</h2>
    ${subtitle ? `<p>${esc(subtitle)}</p>` : ""}
  </header>
  <div class="frame-body">`;
}

function sectionFooter() {
  return `  </div>
</section>`;
}

function buildOverview() {
  const principles = [
    "線上媒合、現場交收（ADR-0001）",
    "實體為主：唔識用 App 亦有義工幫手",
    "低門檻：Walk-in、試水溫參觀均可",
    "長者友善：大字、暖色、大觸控區",
  ];

  return (
    sectionHeader("overview", "總覽", meta.title + " · " + meta.version) +
    `<div class="principles">${principles.map((p) => `<div class="principle">${esc(p)}</div>`).join("")}</div>
<div class="stage-timeline">
  ${stages
    .map(
      (s, i) => `
  <div class="stage-chip">
    <strong>${s.order}. ${esc(s.nameZh)}</strong>
    <span>${esc(s.nameEn)}</span>
  </div>${i < stages.length - 1 ? '<div class="stage-arrow" aria-hidden="true">→</div>' : ""}`
    )
    .join("")}
</div>
<div class="persona-grid">
  ${personas
    .map(
      (p) => `
  <article class="persona-card" style="--persona-color:${esc(p.color)}">
    <div class="persona-head">
      <span class="persona-id">${esc(p.id)}</span>
      <span class="persona-name">${esc(p.name)}</span>
      <span class="persona-priority">${esc(p.priority)}</span>
    </div>
    <p>${esc(p.description)}</p>
  </article>`
    )
    .join("")}
</div>` +
    sectionFooter()
  );
}

function emotionPoints(curve, chartW, chartH, pad, maxY = 10) {
  const plotW = chartW - pad.l - pad.r;
  const plotH = chartH - pad.t - pad.b;
  const stepX = plotW / (stages.length - 1);
  const pts = [];
  curve.forEach((v, i) => {
    if (v === 0) return;
    pts.push({
      x: pad.l + i * stepX,
      y: pad.t + plotH * (1 - v / maxY),
      v,
      i,
    });
  });
  return pts;
}

function buildLineChartSvg({
  width,
  height,
  pad = { t: 24, r: 24, b: 56, l: 44 },
  personas: lines,
  compact = false,
}) {
  const maxY = 10;
  const plotH = height - pad.t - pad.b;
  const grid = [];
  for (let i = 0; i <= 10; i += 2) {
    const y = pad.t + plotH * (1 - i / maxY);
    grid.push(
      `<line x1="${pad.l}" y1="${y}" x2="${width - pad.r}" y2="${y}" class="chart-grid"/>`
    );
    if (!compact) {
      grid.push(`<text x="${pad.l - 8}" y="${y + 4}" class="chart-axis-y" text-anchor="end">${i}</text>`);
    }
  }

  const xLabels = stages
    .map((s, i) => {
      const x = pad.l + (i / (stages.length - 1)) * (width - pad.l - pad.r);
      const label = compact ? String(s.order) : s.nameZh;
      return `<text x="${x}" y="${height - 14}" class="chart-axis-x" text-anchor="middle">${esc(label)}</text>`;
    })
    .join("");

  const series = lines
    .map((p) => {
      const pts = emotionPoints(p.emotionCurve, width, height, pad, maxY);
      if (pts.length === 0) return "";
      const d = pts.map((pt, idx) => `${idx === 0 ? "M" : "L"} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`).join(" ");
      const dots = pts
        .map(
          (pt) =>
            `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="${compact ? 2.5 : 5}" fill="${esc(p.color)}" class="chart-dot">
              <title>${esc(p.id)} · ${esc(stages[pt.i].nameZh)}: ${pt.v}</title>
            </circle>`
        )
        .join("");
      return `<path d="${d}" fill="none" stroke="${esc(p.color)}" stroke-width="${compact ? 1.5 : 2.5}" stroke-linejoin="round" stroke-linecap="round" class="chart-line"/>
        ${dots}`;
    })
    .join("");

  return `<svg class="line-chart${compact ? " line-chart-compact" : ""}" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="情緒曲線折線圖">
    ${grid.join("")}
    <line x1="${pad.l}" y1="${pad.t + plotH}" x2="${width - pad.r}" y2="${pad.t + plotH}" class="chart-axis"/>
    ${xLabels}
    ${series}
  </svg>`;
}

function buildMiniSparkline(persona) {
  return buildLineChartSvg({
    width: 120,
    height: 36,
    pad: { t: 4, r: 4, b: 4, l: 4 },
    personas: [persona],
    compact: true,
  });
}

function buildEmotionChart() {
  const chart = buildLineChartSvg({ width: 960, height: 380, personas: focusPersonas });

  const legend = focusPersonas
    .map(
      (p) =>
        `<span class="chart-legend-item"><span class="chart-legend-line" style="background:${esc(p.color)}"></span>${esc(p.id)} ${esc(p.name)}</span>`
    )
    .join("");

  const insights = focusPersonas
    .map(
      (p) =>
        `<tr>
      <th scope="row" style="color:${esc(p.color)}">${esc(p.id)} ${esc(p.name)}</th>
      <td>${esc(p.lowPoint)}</td>
      <td>${esc(p.highPoint)}</td>
      <td>${esc(p.turningPoint)}</td>
    </tr>`
    )
    .join("");

  return (
    sectionHeader("emotion", "情緒折線圖", "P1 長者陳姨 · P2 街坊阿明 · 端到端情緒對照") +
    `<div class="line-chart-wrap">${chart}</div>
<div class="chart-legend">${legend}</div>
<table class="emotion-insights-table">
  <thead><tr><th>角色</th><th>情緒最低點</th><th>情緒最高點</th><th>關鍵轉折</th></tr></thead>
  <tbody>${insights}</tbody>
</table>` +
    sectionFooter()
  );
}

function cellLine(label, value) {
  if (!value || value === "—") return "";
  return `<div class="cell-line" title="${esc(label)}：${esc(value)}"><span class="cell-lbl">${label}</span><span class="cell-val">${esc(value)}</span></div>`;
}

function buildJourneyCell(step) {
  if (!step || step.actions === "—") {
    return `<td class="journey-cell cell-empty"><span class="cell-na">—</span></td>`;
  }
  const e = EMOTION[step.emotion] ?? EMOTION.neutral;
  return `<td class="journey-cell">
    ${cellLine("行動", step.actions)}
    ${cellLine("觸點", step.touchpoints)}
    ${cellLine("想法", step.thoughts)}
    <div class="cell-line"><span class="cell-lbl">情緒</span><span class="cell-val ${e.class}">${e.emoji} ${e.label}</span></div>
    ${cellLine("痛點", step.painPoints)}
    ${cellLine("機會", step.opportunities)}
  </td>`;
}

function buildUnifiedJourneyMap() {
  const personaRows = focusPersonas
    .map((persona) => {
      const steps = journeys[persona.id] ?? [];
      const cells = stages.map((_, i) => buildJourneyCell(steps[i])).join("");
      return `<tr class="persona-row" style="--persona-color:${esc(persona.color)}">
        <th class="persona-label" scope="row">
          <span class="persona-label-id">${esc(persona.id)}</span>
          <span class="persona-label-name">${esc(persona.name)}</span>
        </th>
        ${cells}
      </tr>`;
    })
    .join("");

  return (
    sectionHeader(
      "journey-form",
      "用戶旅程地圖",
      "P1 長者陳姨 · P2 街坊阿明 · 7 階段 · 每項資訊單行顯示"
    ) +
    `<div class="unified-scroll">
  <table class="unified-map unified-map-dual">
    <thead>
      <tr>
        <th class="corner-cell">角色 ＼ 階段</th>
        ${stages
          .map(
            (s) =>
              `<th class="stage-head">
            <span class="stage-order">${s.order}</span>
            <span class="stage-name">${esc(s.nameZh)}</span>
            <span class="stage-en">${esc(s.nameEn)}</span>
          </th>`
          )
          .join("")}
      </tr>
    </thead>
    <tbody>${personaRows}</tbody>
  </table>
</div>` +
    sectionFooter()
  );
}

function buildServiceBlueprint() {
  const lanes = [
    { key: "online", label: "線上 App" },
    { key: "offline", label: "線下市集" },
    { key: "volunteer", label: "義工介入" },
    { key: "handoff", label: "關鍵銜接" },
  ];

  return (
    sectionHeader("blueprint", "服務藍圖", "線上／線下／義工三通道銜接") +
    `<div class="blueprint-scroll">
  <table class="blueprint-table">
    <thead>
      <tr>
        <th>通道</th>
        ${serviceBlueprint.map((r) => `<th>${esc(r.stage)}</th>`).join("")}
      </tr>
    </thead>
    <tbody>
      ${lanes
        .map(
          (lane) =>
            `<tr>
        <th>${esc(lane.label)}</th>
        ${serviceBlueprint.map((r) => `<td${r[lane.key].includes("★") ? ' class="highlight"' : ""}>${esc(r[lane.key])}</td>`).join("")}
      </tr>`
        )
        .join("")}
    </tbody>
  </table>
</div>` +
    sectionFooter()
  );
}

function buildPainMatrix() {
  return (
    sectionHeader("pain", "痛點矩陣", "P0 優先處理") +
    `<table class="pain-table">
  <thead>
    <tr><th>優先級</th><th>痛點</th><th>機會</th><th>影響角色</th></tr>
  </thead>
  <tbody>
    ${painOpportunities
      .map(
        (r) =>
          `<tr>
      <td><span class="priority ${PRIORITY[r.priority]}">${esc(r.priority)}</span></td>
      <td>${esc(r.pain)}</td>
      <td>${esc(r.opportunity)}</td>
      <td>${esc(r.personas)}</td>
    </tr>`
      )
      .join("")}
  </tbody>
</table>` +
    sectionFooter()
  );
}

const css = `
:root {
  --primary: ${brand.primary};
  --secondary: ${brand.secondary};
  --accent: ${brand.accent};
  --text: ${brand.text};
  --text-muted: ${brand.textMuted};
  --positive: ${brand.positive};
  --neutral: ${brand.neutral};
  --negative: ${brand.negative};
  --bg: ${brand.background};
  --lane-alt: ${brand.laneAlt};
  --border: #e5e0d8;
}
*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif;
  font-size: 18px;
  line-height: 1.55;
  color: var(--text);
  background: #f0ebe3;
}
a { color: var(--primary); }
.page-header {
  position: sticky; top: 0; z-index: 100;
  background: var(--primary);
  color: #fff;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,.12);
}
.page-header h1 { margin: 0 0 .25rem; font-size: 1.5rem; }
.page-header p { margin: 0; opacity: .9; font-size: .95rem; }
.toc {
  display: flex; flex-wrap: wrap; gap: .5rem;
  padding: 1rem 1.5rem;
  background: var(--accent);
  border-bottom: 1px solid var(--border);
  position: sticky; top: 4.5rem; z-index: 99;
}
.toc a {
  text-decoration: none;
  padding: .35rem .75rem;
  border-radius: 999px;
  background: #fff;
  color: var(--text);
  font-size: .85rem;
  border: 1px solid var(--border);
}
.toc a:hover { border-color: var(--primary); color: var(--primary); }
main { max-width: 100%; padding: 1.5rem; }
.frame {
  background: var(--bg);
  border-radius: 12px;
  margin-bottom: 2rem;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(90,78,60,.08);
  border: 1px solid var(--border);
}
.frame-header {
  background: var(--primary);
  color: #fff;
  padding: 1.25rem 1.5rem;
}
.frame-header h2 { margin: 0 0 .25rem; font-size: 1.35rem; }
.frame-header p { margin: 0; opacity: .88; font-size: .95rem; }
.frame-body { padding: 1.5rem; }
.principles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: .75rem;
  margin-bottom: 1.5rem;
}
.principle {
  background: var(--accent);
  border: 1px solid var(--primary);
  border-radius: 8px;
  padding: .75rem 1rem;
  font-size: .95rem;
}
.stage-timeline {
  display: flex; flex-wrap: wrap; align-items: center; gap: .5rem;
  margin-bottom: 1.5rem;
}
.stage-chip {
  background: var(--primary);
  color: #fff;
  border-radius: 8px;
  padding: .6rem .9rem;
  min-width: 120px;
}
.stage-chip strong { display: block; font-size: .95rem; }
.stage-chip span { font-size: .75rem; opacity: .85; }
.stage-arrow { color: var(--secondary); font-weight: bold; font-size: 1.2rem; }
.persona-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}
.persona-card {
  border: 1px solid var(--border);
  border-left: 6px solid var(--persona-color);
  border-radius: 10px;
  padding: 1rem;
  background: var(--lane-alt);
}
.persona-head { display: flex; align-items: center; gap: .5rem; margin-bottom: .5rem; flex-wrap: wrap; }
.persona-id { font-weight: 700; color: var(--persona-color); }
.persona-name { font-weight: 700; }
.persona-priority {
  font-size: .75rem; background: var(--accent);
  padding: .15rem .5rem; border-radius: 999px;
}
.persona-card p { margin: 0; font-size: .95rem; }
.line-chart-wrap {
  overflow-x: auto;
  padding: .5rem;
  background: var(--lane-alt);
  border: 1px solid var(--border);
  border-radius: 8px;
}
.line-chart { display: block; max-width: 100%; height: auto; }
.line-chart-compact { display: block; width: 100%; height: auto; }
.chart-grid { stroke: #e5e0d8; stroke-width: 1; }
.chart-axis { stroke: var(--text-muted); stroke-width: 1.5; }
.chart-axis-y, .chart-axis-x { fill: var(--text-muted); font-size: 11px; font-family: inherit; }
.chart-line { vector-effect: non-scaling-stroke; }
.chart-dot { cursor: help; }
.chart-legend {
  display: flex; flex-wrap: wrap; gap: 1rem 1.5rem;
  margin: 1rem 0;
  font-size: .9rem;
}
.chart-legend-item { display: inline-flex; align-items: center; gap: .5rem; }
.chart-legend-line {
  display: inline-block;
  width: 24px;
  height: 3px;
  border-radius: 2px;
}
.emotion-insights-table {
  width: 100%;
  border-collapse: collapse;
  font-size: .88rem;
  margin-top: .5rem;
}
.emotion-insights-table th, .emotion-insights-table td {
  border: 1px solid var(--border);
  padding: .6rem .75rem;
  text-align: left;
  vertical-align: top;
}
.emotion-insights-table thead th {
  background: var(--accent);
  font-weight: 700;
}
.emotion-insights-table tbody tr:nth-child(even) { background: var(--lane-alt); }
.journey-scroll, .blueprint-scroll { overflow-x: auto; }
.journey-table, .blueprint-table, .pain-table {
  width: 100%; border-collapse: collapse; font-size: .9rem;
}
.journey-table { min-width: 1200px; }
.blueprint-table { min-width: 900px; }
.journey-table th, .journey-table td,
.blueprint-table th, .blueprint-table td,
.pain-table th, .pain-table td {
  border: 1px solid var(--border);
  padding: .65rem .75rem;
  vertical-align: top;
  text-align: left;
}
.journey-table thead th, .blueprint-table thead th, .pain-table thead th {
  background: var(--primary);
  color: #fff;
}
.row-label {
  background: var(--accent) !important;
  font-weight: 700;
  white-space: nowrap;
  width: 80px;
}
.stage-num {
  display: inline-block;
  background: rgba(255,255,255,.25);
  border-radius: 4px;
  padding: 0 .35rem;
  margin-right: .35rem;
  font-size: .8rem;
}
.journey-table tbody tr:nth-child(even) td { background: var(--lane-alt); }
.emotion-positive { color: var(--positive); font-weight: 600; }
.emotion-neutral { color: var(--neutral); font-weight: 600; }
.emotion-negative { color: var(--negative); font-weight: 600; }
.highlight { font-weight: 700; color: var(--secondary); }
.pain-table .priority {
  display: inline-block;
  padding: .2rem .5rem;
  border-radius: 4px;
  font-weight: 700;
  font-size: .8rem;
}
.priority-p0 { background: #fee2e2; color: #c2410c; }
.priority-p1 { background: #fef3c7; color: #b45309; }
.priority-p2 { background: #ecfdf5; color: #047857; }
.unified-scroll { overflow-x: auto; margin: 0 -0.25rem; }
.unified-map {
  width: 100%;
  min-width: 1400px;
  border-collapse: collapse;
  font-size: .82rem;
}
.unified-map th, .unified-map td {
  border: 1px solid var(--border);
  vertical-align: top;
  text-align: left;
}
.corner-cell, .stage-head {
  background: var(--primary);
  color: #fff;
  padding: .75rem;
  position: sticky;
  top: 0;
  z-index: 2;
}
.corner-cell {
  left: 0;
  z-index: 3;
  min-width: 140px;
}
.stage-head { min-width: 180px; text-align: center; }
.stage-order {
  display: block;
  font-size: 1.1rem;
  font-weight: 700;
}
.stage-name { display: block; font-weight: 700; }
.stage-en { display: block; font-size: .7rem; opacity: .85; font-weight: 400; }
.persona-label {
  background: var(--accent);
  padding: .75rem;
  min-width: 140px;
  position: sticky;
  left: 0;
  z-index: 1;
  border-left: 5px solid var(--persona-color);
}
.persona-label-id {
  display: block;
  font-weight: 700;
  color: var(--persona-color);
  font-size: 1rem;
}
.persona-label-name { display: block; font-weight: 700; font-size: .95rem; }
.persona-label-pri {
  display: inline-block;
  font-size: .7rem;
  background: #fff;
  padding: .1rem .4rem;
  border-radius: 999px;
  margin: .25rem 0;
}
.sparkline-wrap {
  margin-top: .5rem;
  width: 100%;
  max-width: 120px;
}
.unified-map-dual { min-width: 1100px; }
.journey-cell {
  padding: .5rem .6rem;
  background: var(--bg);
  min-width: 200px;
  vertical-align: top;
}
.cell-line {
  display: block;
  font-size: .78rem;
  line-height: 1.55;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: .15rem;
}
.cell-line:last-child { margin-bottom: 0; }
.cell-lbl {
  color: var(--text-muted);
  font-weight: 600;
  margin-right: .35rem;
}
.cell-lbl::after { content: "："; }
.cell-val { color: var(--text); }
.persona-row:nth-child(even) .journey-cell { background: var(--lane-alt); }
.cell-empty { text-align: center; color: var(--text-muted); }
.cell-na { font-size: 1.2rem; }
.page-footer {
  text-align: center;
  padding: 2rem;
  color: var(--text-muted);
  font-size: .85rem;
}
@media print {
  .toc, .page-header { position: static; }
  .frame { break-inside: avoid; page-break-inside: avoid; }
}
`;

const nav = [
  ["emotion", "情緒折線圖"],
  ["journey-form", "P1 · P2 旅程地圖"],
];

const body = buildEmotionChart() + buildUnifiedJourneyMap();

const html = `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(meta.title)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;600;700&display=swap" rel="stylesheet">
  <style>${css}</style>
</head>
<body>
  <header class="page-header">
    <h1>${esc(meta.title)}</h1>
    <p>${esc(meta.version)} · ${esc(meta.date)} · P1 長者陳姨 · P2 街坊阿明</p>
  </header>
  <nav class="toc" aria-label="章節導覽">
    ${nav.map(([id, label]) => `<a href="#${id}">${esc(label)}</a>`).join("\n    ")}
  </nav>
  <main>${body}</main>
  <footer class="page-footer">
    產生自 journey-data.json · 對照 <code>ux-journey-map.md</code>
  </footer>
</body>
</html>`;

const outPath = join(OUT_DIR, "ux-journey-map.html");
writeFileSync(outPath, html, "utf8");
console.log("✅ HTML export generated:");
console.log(`   ${outPath}`);
