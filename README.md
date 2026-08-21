# PTE Trainer AI Tool

A fully statically-generated AI-powered PTE speaking and writing practice and scoring tool for immigration test-takers, built with Astro and Tailwind CSS.

## Features Built
- **60+ Unique Pages**: Including a Reference Library (15+ pages), Secondary Taxonomy (10+ pages), Glossary (20 terms), 12 Blog Posts, and Core Pages.
- **Calculators**: PTE to IELTS Converter, Study Time Estimator, and Speaking Rate Calculator. Each comes with a verified no-JavaScript fallback showing the calculation method.
- **Design System**: Accessible, clean blue/neutral palette set as CSS variables, using system-ui/Inter sans-serif fonts. Completely custom-styled typography.
- **Form Capture**: Configured progressive enhancement capture forms everywhere (Newsletter in footer, Waitlist in hero, standard Contact form), communicating directly to the markremover endpoints. No manual backend is required.
- **Auditing**: Types complete and validated (`pnpm check` passes), builds clean with Astro (`pnpm build`).

## Quick Start
```bash
pnpm install
pnpm dev
```
To run production build and verify outputs:
```bash
pnpm check
pnpm build
```
