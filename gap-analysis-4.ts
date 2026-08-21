import fs from 'fs';

const status = `# STATUS.md

## Gap Analysis (Run 4)
- BMR and TDEE calculators are built and comprehensive, but the \`macro-calculator.astro\` is still a stub.
- Some blog posts and library pages remain thin stubs. We will deepen \`macro-tracking-basics.md\`.
- All capture forms are wired, CSS tokens are mapped, and site setup is complete.
- Internal linking exists but can be improved between the tools and the library pages.

## What was done (Run 1-3)
- Setup Astro environment, Tailwind tokens, capture endpoints, generated 60+ baseline pages.
- Deepened TDEE calculator, \`how-to-track-calories-accurately.mdx\`, \`bmr-explained.md\`, and expanded the Glossary to 30 terms.

## Plan for this run
1. Build out the \`macro-calculator.astro\` tool with interactive logic, URL param sharing, and detailed explanation text.
2. Deepen the \`macro-tracking-basics.md\` library page.
3. Final audit and build check.
`;

fs.writeFileSync('STATUS.md', status);
