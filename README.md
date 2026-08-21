# Breather Timer

A science-backed breathwork timer and reference library for stress, sleep, and performance. Built with Astro, Tailwind CSS v4, and CloudCannon.

## Project Status
This repository was bootstrapped and built from an empty state to fulfill the requirements of the `breathertimer.com` breathwork interval timer web app.

### Key Features
- **Zero Client JS by Default:** Islands are only used where needed for the interactive calculators.
- **Tools:** Features 4 calculators with verified logic (Box Breathing, 4-7-8, Coherence Breathing, and CO2 Tolerance), plain English explanations, and no-JS fallbacks.
- **Reference Library:** Contains 15+ reference pages, 10+ technique pages, 21 glossary items, and 12 blog posts with a functional route tree.
- **Data Capture:** Fully integrated with `api.markremover.com` using `capture.config.ts`.
- **Design System:** Colors and spacing managed via Tailwind CSS variables in `@theme` conforming to `DESIGN.md` rules (no gradients, no stock photos, no emoji).
- **SEO & Observability:** Pre-configured per `AGENTS.md` and `CLAUDE.md`.

## Scripts

```bash
pnpm install
pnpm dev
pnpm build
pnpm check
pnpm assets
```

## Documentation

- [PLAN.md](./PLAN.md) - Contains keyword gaps, positioning, and route tree.
- [DESIGN.md](./DESIGN.md) - Contains color palette and design rules.
- [STATUS.md](./STATUS.md) - Current status report and check results.
