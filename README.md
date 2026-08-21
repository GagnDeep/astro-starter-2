# Handpano.com

The definitive, objective, zero-BS buyer's guide and reference library for absolute beginners to intermediate handpan players.

## Structure
- **Guides:** `src/content/pages/guides/`
- **Reviews:** `src/content/pages/reviews/`
- **Comparisons:** `src/content/pages/comparisons/`
- **Glossary:** `src/content/pages/glossary/`
- **Blog:** `src/content/blog/`
- **Tools:** `src/pages/tools/`

## Libraries
- Built on Astro 4 + Tailwind v4.
- Icons via Lucide (`@lucide/astro`).
- Content collections using Zod schemas (`src/content.config.ts`).
- Observability via OpenObserve (disabled by default in dev).

## How to add content
Add Markdown (`.md` or `.mdx` for blog) files to the respective folders in `src/content/`. Use the existing frontmatter schema (defined in `src/content.config.ts`) ensuring you provide all SEO variables.

## Tokens
CSS tokens live in `src/styles/main.css`. The primary brand colors are bronze (`#9A3412`) and steel (`#334155`).

## Capture
All forms post to `api.markremover.com`.
Configured in `capture.config.ts`.
Public Key: `wcs_pk_47bxlyp54gjn_BR9Mhe51yJEkTuchPcpJnvAs7ZnZ98lM6zxfgBI-tbE`.

## Final Report
- **Page Count:** 108 pages built.
- **Tools:** 3 interactive tools built.
- **Checks passed:** `pnpm build`, `pnpm check`, `pnpm assets:check`.
- **Forms:** Placed in footer, contact, and tool results.

