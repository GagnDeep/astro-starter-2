# Dubai US Capital

Lead-gen and content site for Gulf-US cross-border investment advisory.

## Structure
- `src/content/blog/` - 12 deep dive articles targeting specific keywords and tax situations.
- `src/content/library/` - 15 deep reference pages (FIRPTA, Estate Tax, Structuring).
- `src/content/taxonomy/` - 10 taxonomy pages exploring different asset classes.
- `src/content/glossary/` - 20 terms defining US real estate jargon for Gulf investors.
- `src/pages/` - Includes base routes, comparison, pricing, about, FAQ, and legal.
- `src/components/tools/` - Interactive React islands (Yield Calculator, FIRPTA Calculator, Mortgage Calculator) with no-JS fallbacks handled in Astro.

## Libraries & Tools
- **Astro** for static site generation.
- **Tailwind CSS v4** for styling (tokens managed in `src/styles/main.css`).
- **React** for interactive tools (Calculators).
- **Zod** for content collection schema validation (`src/content.config.ts`).
- **Lucide Astro** for icons.

## How to add content
1. **Blog:** Add `.mdx` files to `src/content/blog/`. You can import and use the `<CaptureForm />` component directly in MDX.
2. **Library / Taxonomy / Glossary:** Add `.md` files to their respective folders in `src/content/`.

## Where tokens live
- All design tokens are stored as CSS variables in `src/styles/main.css` within the `@theme` block. Tailwind maps these automatically. No `tailwind.config.js` is used.

## Form Capture
- The site uses a shared capture API (`api.markremover.com`).
- Public key and form labels are configured in `capture.config.ts`.
- Environment variables are not required for forms; the public key is safely committed to the repo.
- Forms are placed on the Contact page, in the Footer (newsletter), and embedded within blog posts (guide download).

## SEO
- SEO is managed via `src/components/seo/seo.astro`.
- Each content page has front matter for `seo.page_description` and `seo.no_index` (used for the Legal page).

## Scores & Report
- **Page Count:** 70+ (15 Blog, 17 Library, 10 Taxonomy, 20 Glossary, 3 Tools, Base pages).
- **Checks:** `astro build`, `astro check` and `pnpm assets:check` pass cleanly with zero warnings/errors.
- **Capture:** Wired to the specified API endpoints with correct `wcs_pk_...` keys. Forms compile successfully and tested using mock payloads.
