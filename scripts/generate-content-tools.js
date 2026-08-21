import fs from 'fs';

const tools = [
  { id: 'tax-bracket-calculator', title: '2024 Tax Bracket Calculator', description: 'Find out your marginal and effective tax rate.' },
  { id: 'refund-estimator', title: 'Tax Refund Estimator', description: 'Estimate your potential tax refund for the current year.' },
  { id: 'w4-withholding', title: 'W-4 Withholding Calculator', description: 'Determine how much you should withhold on your W-4.' }
];

tools.forEach(t => {
  fs.writeFileSync(`src/content/tools/${t.id}.md`, `---
title: "${t.title}"
description: "${t.description}"
seo:
  page_description: "${t.description} Use our free ${t.title.toLowerCase()}."
---
Use this tool to calculate your numbers.

*(Calculator logic will be implemented here)*

### How it works
This calculator uses the latest IRS tables.

See also [1040 Form](/forms/1040/) and [Glossary](/glossary/).
`);
});

console.log("Tools generated.");
