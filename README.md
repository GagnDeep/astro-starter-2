# uVideoPlayer

The simplest, fastest, ad-free video player built for independent creators and their own websites.

uVideoPlayer is an Astro-based static site featuring extreme frontend performance, a deeply integrated capture API, and an expansive web video reference library designed to capture organic search traffic.

## Architecture

This project is built using:
- **Astro 6:** For static site generation and MDX content collections.
- **Tailwind CSS v4:** For utility-first styling, strictly using mapped CSS variables to prevent hardcoded hex values in components.
- **CloudCannon CMS:** Ready for visual editing via `@cloudcannon/editable-regions`.
- **OpenObserve:** For Real User Monitoring (RUM) and telemetry, configured entirely via environment variables.

## Routing & Content Collections

The site exceeds 100 statically generated routes across several taxonomies:
1. **Tools:** Four functional, client-side verified calculators (Bandwidth, File Size, Storage, HTML5 Embed Generator) with strict `<noscript>` fallbacks.
2. **Reference Library:** A 15-page dynamically routed technical encyclopedia covering video engineering.
3. **Use Cases:** A 10-page secondary taxonomy targeting industry-specific intent.
4. **Blog:** 12 deeply researched, 1,500+ word technical articles authored in MDX.
5. **Glossary:** A 25-term dictionary covering web video standards.

## The Capture API

All forms on this site (Contact, Newsletter, Waitlist, Quote) interact with a strict, external capture API defined in `capture.config.ts` and `AGENTS.md`.
* There are no API routes or mail senders within this repository.
* The public key is write-only.
* Submissions gracefully fallback to a standard `POST` and 303 redirect when Javascript is disabled.

## Commands

Use `pnpm` for package management.

```bash
pnpm install
pnpm dev            # Starts the local development server at localhost:4321
pnpm build          # Generates the static output into dist/
pnpm preview        # Previews the production build locally
pnpm check          # Runs Astro type-checking and diagnostics
pnpm assets         # Automatically regenerates all favicons and Open Graph images from src/assets/brand/icon.svg
```

**Note:** `pnpm build` is strictly isolated from formatters and linters. It must always pass on its own.

## SEO & Accessibility
* All metadata, including `<title>`, canonical URLs, and Open Graph tags, are injected via frontmatter into `src/components/seo/seo.astro`.
* JSON-LD structured data (including `FAQPage` and `VideoObject` where applicable) is generated to capture rich snippets.
* The Tailwind color palette is verified to pass WCAG AA contrast standards (4.5:1).

## Environment Variables
Copy `.env.example` to `.env` to configure OpenObserve telemetry. Telemetry is disabled by default during development.
