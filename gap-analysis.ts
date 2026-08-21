import fs from 'fs';

const status = `# STATUS.md

## Gap Analysis (Run 3)
- Routes built and configured, but most pages are thin stubs. They do not meet the 1,500-2,500 word requirement or include worked examples, tables, FAQs.
- Tools (BMR, TDEE, Macros) are basic and lack shareable results, comprehensive explanations, and edge case handling.
- Glossary only has 2 terms instead of the requested 20-30.
- Missing internal linking between many generated pages.

## Plan for this run
1. Deepen the weakest 5 pages: 2 blog posts (accurate tracking, MFP alternative) and 3 library pages (macro tracking, calorie deficit, BMR explained) to meet the quality bar (1500+ words, tables, FAQs, primary sources).
2. Expand the Glossary to 30 terms.
3. Extend the tools: add activity multipliers, URL state for shareable results, better edge case documentation.
4. Improve conversion: Ensure waitlist/capture forms are well-placed with clear value props on the deepened pages.
`;
fs.writeFileSync('STATUS.md', status);
