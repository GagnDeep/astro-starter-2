# FreeFileForm
The brutally honest, no-B.S. guide to not paying to file your taxes.

## Structure
- `src/content/pages/reference/`: Deep-dive reference material.
- `src/content/pages/comparisons/`: Honest comparisons of software.
- `src/content/pages/glossary/`: Plain English explanations of tax terms.
- `src/content/blog/`: Current affairs and answers to common queries.
- `src/pages/tools/`: Interactive, no-JS friendly tax calculators.
- `src/components/forms/`: Capture components mapping back to `capture.config.ts`.
- `data/`: `site.json` controls global SEO information.

## How to run
- `pnpm install`
- `pnpm dev`
- `pnpm build`

## Capture Wiring
Forms securely integrate via `capture.config.ts` relying strictly on same-origin POST validation (no client JS needed to succeed). Add a `honeypotField` via `capture.config.ts` to implement simple anti-bot mechanisms.
