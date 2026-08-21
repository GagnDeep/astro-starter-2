# README

## Digestine Gut Health Supplements Site

This is a white-label digestive health supplement brand built with Astro, Tailwind v4, and CloudCannon Editable Regions.

### Structure
- `src/content/pages/` - Markdown pages that map to URLs (e.g. `/`, `/compare`, `/about`). Can be edited visually.
- `src/content/blog/` - MDX blog posts with front matter for SEO.
- `src/content/glossary/` - Markdown glossary terms for specific gut health terms.
- `src/content/learn/` - Markdown reference articles targeting long-tail SEO queries.
- `src/content/tools/` - Markdown hubs for tools, wired with newsletter/results capture.
- `src/components/forms/` - Reusable form components that wire directly to the capture API.

### Libraries
- **Astro 6** for static generation.
- **Tailwind CSS v4** for styling (configured via `@theme` in `src/styles/main.css`).
- **Lucide Astro** for icons.
- **OpenObserve** for RUM and telemetry (configured via `.env`).
- **Zod** for schema validation across content collections.

### How to Add Content
1. **Blog:** Add an `.mdx` file to `src/content/blog/`. Follow the front matter schema defined in `src/content.config.ts`.
2. **Reference / Learn:** Add an `.md` file to `src/content/reference/`.
3. **Glossary:** Add an `.md` file to `src/content/glossary/`.
4. **Tools:** Add an `.md` file to `src/content/tools/`.
5. **Taxonomy / General Pages:** Add an `.md` file to `src/content/pages/`.

### Design Tokens
Design tokens are set as CSS variables within the `@theme` directive in `src/styles/main.css`. These include colors (`--color-primary`, `--color-secondary`, `--color-accent`) and fonts (`--font-heading`, `--font-body`). These are automatically picked up by Tailwind v4.

### Capture API Wiring
The capture API is fully wired and documented in `AGENTS.md`. No backend routing or database was added.
- **Configuration:** Endpoint, public key, and form labels are defined in `capture.config.ts`.
- **Forms:** We use `capture-form.astro` for general forms (like Contact) and `newsletter-form.astro` for single-input email captures (like waitlists, newsletters, tool results).
- **Environment:** Telemetry keys are in `.env`. The capture public key (`wcs_pk_...`) is safe to be committed as it is write-only.

### Audit Report
- **Page Count:** ~100 generated pages (including pagination and tags).
- **Capture Points:** Waitlist (Hero), Newsletter (Footer, Blog Post End), Tools (Results Delivery), Contact.
- **Scores:** Zero orphans, all images have alt attributes, sitemaps and robots.txt properly generated. Contrast ratios validated via CSS tokens (e.g. Dark green text on off-white).

### [NEEDS CONFIRMATION]
- Product specific numbers like actual price, capsule count, exact probiotic strains, and precise launch dates are still using placeholders or estimates from the `/PLAN.md`.
