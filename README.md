# Institute for Tax

Premium, pre-qualified tax preparation and resolution leads for CPAs and Enrolled Agents. Stop competing on price and start closing high-value tax clients.

## Features

- **60+ Pages:**
  - 12 Blog Posts on tax marketing.
  - 15 Reference Guides covering operations and scale.
  - 10 Taxonomy Pages for specific lead types.
  - 20 Glossary Terms explaining CAC, LTV, and industry jargon.
  - 4 Comparison Pages contrasting intent leads vs shared/SEO models.
  - 3 Lead Calculators/Tools (ROI, Lead Conversion, Firm Valuation).
- Fully wired contact, waitlist, newsletter, and guide forms powered by a shared capture server.
- Modern CSS (Tailwind v4 tokens in `src/styles/main.css`).
- SEO-first approach using optimized canonicals, sitemaps, RSS, and JSON-LD out of the box.

## Where Things Live

- **Structure**: Astro 6 static site. Pages in `src/pages/`, Blog posts in `src/content/blog/`.
- **Libraries**: `@lucide/astro` for icons, Tailwind CSS v4, `zod` for schemas.
- **Tokens**: Design tokens (colors, fonts, radius) are defined as CSS variables in `src/styles/main.css` under the `@theme` block.
- **Forms**: Powered by the capture server (see `capture.config.ts`).
  - Forms used: `WaitlistForm`, `CaptureForm`, `GuideForm`.
  - All form components map inputs to slots which get picked up automatically.
- **Adding Content**:
  - Blog: Create a `.mdx` file in `src/content/blog/` (use `how-to-get-tax-clients-fast.mdx` as template).
  - Guides/Glossary: Edit/Create `.astro` files in `src/pages/guides/` and `src/pages/glossary/`.
- **Settings**: Adjust `data/site.json` and `astro.config.mjs` for SEO defaults and canonical origin.

## Available Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm check
pnpm assets:og
```
