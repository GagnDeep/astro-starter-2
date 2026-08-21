# FreeFileForm.com

The definitive guide to maximizing your refund using truly free tools, cutting through the software upsells.

## Report
- **Measured Scores:** (Pending Lighthouse run on Vercel/Netlify preview. Estimated 95+ due to static Astro).
- **Page Count:** 60+ (Guides, Types, Tools, Glossary, Blog, plus static pages).
- **Capture Points:** Integrated in the hero, every reference page, after every post, in tool results, and footer.
- **What Changed:**
  - Content collections were established for `guides`, `types`, `tools`, and `glossary`.
  - The design system was implemented using CSS variables in `src/styles/main.css`.
  - Capture components were wired to `capture.config.ts`.
  - 4 interactive calculators were built (Refund, Self-Employment, W-4, Capital Gains).
- **Open Items:** See `STATUS.md`.

## Features
- Built with Astro
- Tailwind v4 styling
- Centralized form capture to `api.markremover.com`
- SEO optimized via frontmatter
