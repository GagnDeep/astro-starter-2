# Aerospace UAE

Aerospace UAE is a B2B directory, news portal, and intelligence platform for the UAE defense and aerospace supply chain.

## Structure
- `src/pages`: Includes root pages (`index`, `about`, `contact`, `faq`, `pricing`), and routed directories (`news/`, `directory/`, `tools/`, `suppliers/`, `glossary/`, `legal/`).
- `src/content`: Zod validated collections for `blog`, `suppliers`, `glossary`, and `pages`.
- `src/components`: UI blocks, forms (`capture-form.astro`, `newsletter-form.astro`), and SEO logic.
- `src/styles`: Tailwind CSS v4 variables mapped directly from `DESIGN.md`.

## Adding Content
To add a new supplier, glossary term, or news item, create a new Markdown/MDX file in the respective `src/content/<type>` directory. Ensure it adheres to the Zod schema defined in `src/content.config.ts`.

## Tokens
Design tokens (colors, fonts) live in `src/styles/main.css` and map to `var(--color-brand-*)`. Tailwind handles utility mapping.

## Form Capture
Form capture works via the `api.markremover.com` endpoint defined in `capture.config.ts`. The public key `wcs_pk_demo_aerospace_123` is configured.
Do not write custom API backends for forms. Refer to the `<CaptureForm />` component.

## Telemetry
OpenObserve settings are stored in `.env`.
