# uMediaPlayer

The Instant Browser Media Player.

## Structure

```
├── capture.config.ts # Capture forms configuration
├── data/
│   ├── site.json    # Site metadata, settings
├── public/          # Favicons, WebManifest, OG images
├── src/
│   ├── assets/      # Source images, including `brand/icon.svg`
│   ├── components/  # Layout, Navigation, Forms, SEO, Observability
│   ├── content/     # Content Collections (Blog, Pages, Glossary, Reference, Tools)
│   ├── layouts/     # Root layouts
│   ├── pages/       # Next generation static paths and individual pages
│   ├── styles/      # Global Tailwind v4 CSS
```

## How to add Content Types

Pages are organized into content collections:
1. **Blog**: Add `.mdx` files to `src/content/blog/` following the existing front matter schema.
2. **Reference**: Add `.md` files to `src/content/reference/` targeting a specific format or feature.
3. **Glossary**: Add `.md` files to `src/content/glossary/` to explain terminology.
4. **Tools**: Add `.md` files to `src/content/tools/`.
5. **Core Pages**: Add direct Astro routes in `src/pages/`.

## Libraries & Tokens

- **Framework**: Astro 6, Tailwind CSS v4.
- **Tokens**: Design tokens (colors, fonts) live in `src/styles/main.css` mapped to custom variables instead of hardcoded hex values.
- **Icons**: Lucide (`@lucide/astro`).
- **Telemetry**: OpenObserve via environment variables.

## Capture Form Wiring

Every form posts to the shared Capture Server.
1. The endpoint and public key are defined in `capture.config.ts`.
2. Environment keys are **not required**. The public key `wcs_pk_...` safely ships client-side as it is write-only.
3. The `<CaptureForm>` and `<NewsletterForm>` components use `actionUrl()` from `src/lib/capture.ts`.
