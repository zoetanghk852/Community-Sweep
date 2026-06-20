#!/usr/bin/env node
/**
 * Generate pure Markdown journey map from journey-data.json
 * Usage: node generate-doc-export.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(readFileSync(join(__dirname, "journey-data.json"), "utf8"));
const { meta, stages, personas, journeys, serviceBlueprint, painOpportunities } = data;

const EMOTION = {
  positive: "😊 正向",
  neutral: "😐 中性",
  negative: "😟 負向",
};

function dash(v) {
  if (v === undefined || v === null || v === "" || v === "—") return "—";
  return String(v).replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function personaHeader(p) {
  return `${p.id} ${p.name}`;
}

function stageSection(stageIndex) {
  const stage = stages[stageIndex];
  const cols = personas.filter((p) => journeys[p.id]?.[stageIndex]);
  const headers = cols.map((p) => personaHeader(p)).join(" | ");
  const sep = cols.map(() => "---").join(" | ");

  const rows = [
    { key: "actions", label: "行動" },
    { key: "touchpoints", label: "觸點" },
    { key: "thoughts", label: "想法" },
    { key: "emotion", label: "情緒" },
    { key: "painPoints", label: "痛點" },
    { key: "opportunities", label: "機會" },
  ];

  const body = rows
    .map((row) => {
      const cells = cols
        .map((p) => {
          const step = journeys[p.id][stageIndex];
          if (row.key === "emotion") return dash(EMOTION[step.emotion] ?? EMOTION.neutral);
          return dash(step[row.key]);
        })
        .join(" | ");
      return `| **${row.label}** | ${cells} |`;
    })
    .join("\n");

  return `### 階段 ${stage.order}：${stage.nameZh}（${stage.nameEn}）

| 維度 | ${headers} |
|------|${sep}|
${body}
`;
}

const principles = [
  "線上媒合、現場交收（ADR-0001）",
  "實體為主：唔識用 App 亦有義工幫手",
  "低門檻：Walk-in、試水溫參觀均可",
  "長者友善：大字、暖色、大觸控區",
];

const personaTable = personas
  .map((p) => `| ${p.id} | ${p.name} | ${p.priority} | ${dash(p.description)} |`)
  .join("\n");

const stageList = stages.map((s) => `${s.order}. **${s.nameZh}**（${s.nameEn}）`).join(" → ");

const stageSections = stages.map((_, i) => stageSection(i)).join("\n---\n\n");

const blueprintRows = serviceBlueprint
  .map((r) => `| ${r.stage} | ${dash(r.online)} | ${dash(r.offline)} | ${dash(r.volunteer)} | ${dash(r.handoff)} |`)
  .join("\n");

const painRows = painOpportunities
  .map((r) => `| ${r.priority} | ${dash(r.pain)} | ${dash(r.opportunity)} | ${dash(r.personas)} |`)
  .join("\n");

const doc = `# ${meta.title}

**版本**：${meta.version}  
**日期**：${meta.date}  
**文件類型**：純 Markdown 用戶體驗地圖（5 角色 × 7 階段）  
**資料來源**：\`figma-export/journey-data.json\`

---

## 一、總覽

### 1.1 服務定位

社區換物 Carousell 以**每月換物市集**為核心，結合**線上 App 媒合**與**社區感謝積分**，服務香港街坊（優先關注長者）的物資循環與鄰里連結需求。

### 1.2 體驗設計原則

${principles.map((p) => `- ${p}`).join("\n")}

### 1.3 旅程階段

${stageList}

### 1.4 角色一覽

| 代號 | 角色 | 優先級 | 描述 |
|------|------|--------|------|
${personaTable}

---

## 二、情緒曲線（0–10）

| 角色 | ${emotionHeader} |
|------|${emotionSep}|
${emotionRows}

| 角色 | 情緒最低點 | 情緒最高點 | 關鍵轉折 |
|------|------------|------------|----------|
${emotionInsights}

---

## 三、完整旅程地圖

${stageSections}

---

## 四、跨角色服務藍圖

| 階段 | 線上 App | 線下市集 | 義工介入 | 關鍵銜接點 |
|------|----------|----------|----------|------------|
${blueprintRows}

---

## 五、痛點與機會優先矩陣

| 優先級 | 痛點 | 機會 | 影響角色 |
|--------|------|------|----------|
${painRows}

---

## 六、版本紀錄

| 版本 | 日期 | 變更 |
|------|------|------|
| ${meta.version} | ${meta.date} | 純文件版：整合 P1/P2 文案修訂與 5 角色統一矩陣 |

---

*本文件由 \`node figma-export/generate-doc-export.mjs\` 自動產生。修訂請編輯 \`journey-data.json\` 後重新執行。*
`;

const outPath = join(__dirname, "..", "ux-journey-map-doc.md");
writeFileSync(outPath, doc, "utf8");
console.log("✅ Pure doc generated:");
console.log(`   ${outPath}`);
