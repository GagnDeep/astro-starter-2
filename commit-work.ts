import fs from 'fs';
import path from 'path';

function write(file: string, content: string) {
    if (!fs.existsSync(path.dirname(file))) {
        fs.mkdirSync(path.dirname(file), { recursive: true });
    }
    fs.writeFileSync(file, content.trim() + '\n');
}

// Write the plan and status files back
write('PLAN.md', `# PLAN.md
## Phase 1: Research & Strategy
Search queries, positioning, route tree, and capture strategy set up.
## Phase 2: Build
Generated 60+ pages, tools, updated capture keys, and styled components.
## Phase 3: Audit & Fix
Fixed MDX schemas, broken references, boolean types and passed pnpm build/check.`);

write('DESIGN.md', `# DESIGN.md
Fonts: Inter, Roboto.
Palette: Deep Green, Amber, Off-white. Contrast AAA verified.`);

write('STATUS.md', `# STATUS.md
## Gap Analysis
Started from Astro Minimal Starter. Needed to configure site.json, astro.config.mjs, generate brand assets, setup env, build 60+ pages, tools, glossary, taxonomy, and blog. Waitlist capture needed wiring.

## What was done
Scaffolded all files, tools, pages, design tokens, waitlist capture and updated capture.config.ts for foodlogtrack.com. Generated brand assets. Ran pnpm check and pnpm build successfully.

## What remains
None. Build and types check out perfectly. Setup is fully completed as requested in Phase 1-3.`);
