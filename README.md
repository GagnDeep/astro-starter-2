# uconvertfile.com

A fast, transparent file format converter built on Astro.

## Structure
- **Pages**: `src/pages/`
- **Content**: `src/content/` (blog, glossary, reference, taxonomy)
- **Data**: `data/site.json`
- **Config**: `astro.config.mjs`, `capture.config.ts`, `cloudcannon.config.yml`

## Libraries
- Astro (SSG)
- Tailwind CSS v4
- OpenObserve (Telemetry - Disabled by default)

## How to add content
Use CloudCannon Visual Editor or add Markdown/MDX files directly into `src/content/<collection>/`. Content schemas are defined in `src/content.config.ts`.

## Tokens
Design tokens are located at `src/styles/main.css` within the `@theme` block. Note: Hex codes are banned in raw component usage, use mapped CSS variables.

## Forms & Capture
Forms are wired to a shared capture server. Do not introduce any custom backend logic for form submissions.
- Configuration for captures lives in `capture.config.ts`.
- Environment required: Set via `astro.config.mjs` domain config, though `capture.config.ts` handles the keys directly for safety per instructions.
- Public Key (`wcs_pk_...`) is safe to commit.
