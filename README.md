# Most Private Phone - Review & Affiliate Site

A minimal, high-contrast, privacy-first review site for most private smartphones like GrapheneOS, CalyxOS, and Linux phones. Built with Astro, Tailwind v4, and CloudCannon CMS.

## Features

- **60+ Pages of Content:** Comprehensive reference library, reviews, glossary, OS guides, and blog posts.
- **Tools:** Threat Model Quiz, App Compatibility Checker, and Privacy Budget Calculator.
- **Privacy-First Forms:** Form submissions are handled via a strict, append-only capture API using `wcs_pk` public keys, with no personal tracking required.
- **Accessible Design:** No gradients, no stock photos, strict AA contrast ratios, and no-JS fallbacks across the board.
- **SEO & Performance:** Zero client JS by default, automatically generated canonicals, robots.txt, sitemap, and strictly typed frontmatter.

## Getting Started

1. Clone the repository to your local machine.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm dev
   ```

## Development Commands

- `pnpm build` — Build static output to `dist/` (Must complete cleanly).
- `pnpm check` — Type-check the project (Must stay at 0 errors).
- `pnpm preview` — Preview the built site locally.
- `pnpm assets` — Generate favicons and OG images from `src/assets/brand/icon.svg`.

## Project Structure & Content Hierarchy

*   `/reviews/` — Individual device reviews (e.g. Pixel 8 with GrapheneOS).
*   `/os/` — Operating system deep dives (e.g. CalyxOS, Ubuntu Touch).
*   `/glossary/` — Explanations of complex terms like Baseband and Verified Boot.
*   `/blog/` — Long-form editorial content.
*   `/tools/` — Interactive calculators and quizzes.

See `PLAN.md`, `DESIGN.md`, and `STATUS.md` for current project state and roadmap. See `AGENTS.md` and `CLAUDE.md` for AI agent operational rules.
