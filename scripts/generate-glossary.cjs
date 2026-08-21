const fs = require('fs');
const path = require('path');

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

function writeFrontmatter(filePath, data, content) {
  const fm = `---
${Object.entries(data).map(([k, v]) => {
  if (typeof v === 'object' && v !== null) {
    return `${k}:\n${Object.entries(v).map(([sk, sv]) => `  ${sk}: ${sv}`).join('\n')}`;
  }
  if (typeof v === 'string') return `${k}: "${v}"`;
  return `${k}: ${v}`;
}).join('\n')}
---
`;
  fs.writeFileSync(filePath, fm + '\n' + content);
}

const glossaryTerms = [
  "HealthKit", "Google Fit", "BLE", "HIPAA", "Wearable",
  "Heart Rate Variability (HRV)", "VO2 Max", "Resting Heart Rate",
  "Metadata", "JSON-LD", "CoreMotion", "Activity Rings",
  "Step Counter", "Calorie Burn", "METs", "Workout Session",
  "Biometrics", "Telemetry", "RUM", "Gait Analysis"
];

glossaryTerms.forEach((term) => {
  const slug = slugify(term);
  const data = {
    title: term,
    description: `Complete definition and technical implementation details for ${term}.`,
    seo: {
      page_description: `"Fitness app development glossary: Definition, technical context, and edge cases for ${term}."`
    }
  };
  const content = `## Defining ${term}\n\nIn the context of health and fitness software development, **${term}** is a critical concept that dictates how data is recorded, processed, and displayed to the end user. Misunderstanding this term often leads to inaccurate biometric tracking and poor user experience.\n\n### Technical Context\n\nWhen implementing logic reliant on ${term}, developers must account for varying device hardware capabilities. A common mistake is assuming that ${term} data is pushed continuously. In reality, OS-level battery optimizations often batch this data, meaning your application must handle asynchronous updates gracefully.\n\n### Edge Cases in Production\n\n1. **Stale Data:** If the user takes off their wearable device, the system may report the last known state for ${term}. Always check the timestamp of the payload, not just the value.\n2. **Calibration:** Metrics related to ${term} often require a baseline calibration. Ensure your onboarding flow accounts for this before presenting absolute numbers to the user.\n3. **Unit Conversion:** Always store the raw unit provided by the OS API. Do not perform conversions to Imperial/Metric at the database level; handle that strictly in the presentation layer.\n\n### Related Concepts\n\nTo fully grasp ${term}, we recommend reading our deep dives on [HealthKit Integration](/reference/apple-healthkit-integration-guide) and [BLE Optimizations](/reference/bluetooth-low-energy-ble-for-fitness).`;
  writeFrontmatter(path.join(__dirname, '../src/content/glossary', `${slug}.md`), data, content);
});

console.log("Glossary generated successfully.");
