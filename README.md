# Astro Minimal Starter

A minimal starter template for building an Astro site with [CloudCannon](https://cloudcannon.com/) using **Editable Regions** for visual editing.

See a [demo site](https://tiny-jackal.cloudvent.net/).

## Features

- Visual editing with [Editable Regions](https://cloudcannon.com/documentation/developer-guides/set-up-visual-editing/an-overview-of-editable-regions/) (text, image, array, source, and component regions)
- Page building with reusable components
- Blog with pagination and tags
- [Tailwind CSS v4](https://tailwindcss.com/) with CSS-first configuration
- Search-engine ready out of the box: canonicals, Open Graph/Twitter cards, JSON-LD
  (`WebSite`, `Organization`, `BlogPosting`, `BreadcrumbList`), `sitemap-index.xml`
  with `no_index` pages filtered out, `robots.txt`, RSS, and per-page SEO front matter
- [OpenObserve](https://openobserve.ai/) RUM, logs and session replay, configured
  entirely through environment variables
- Generated brand assets: one source SVG → favicons, `favicon.ico`, apple-touch icon,
  PWA icons + manifest, and a 1200x630 Open Graph image (`pnpm assets`)
- [Lucide](https://lucide.dev) icons via `@lucide/astro` — inline SVG, no client JS
- Pagefind search
- Agent-ready docs: [AGENTS.md](./AGENTS.md) and [CLAUDE.md](./CLAUDE.md)

## Getting Started

Click `Use this template` to make your own copy of the repository.

### Local Development

1. Clone the repository to your local machine.

2. Start the development server.

```bash
pnpm install
cp .env.example .env    # optional; only needed for OpenObserve
pnpm dev
```

Other scripts: `pnpm build` (static output to `dist/`), `pnpm preview`,
`pnpm check` (types), `pnpm format`. The build intentionally runs nothing but
`astro build` — no linters or formatters can block it.

### Configure a new site

1. `data/site.json` — title, description, tagline, organization, locale, theme colour.
2. `astro.config.mjs` — set `site:` to your production domain. Canonicals, the
   sitemap and RSS all derive from it.
3. Replace `src/assets/brand/icon.svg` with your mark, then run `pnpm assets` to
   regenerate every favicon, app icon, the web manifest and the default Open Graph
   image. `pnpm assets:check` verifies the result.
4. `.env` — set `PUBLIC_OO_SERVICE`, `PUBLIC_OO_APPLICATION_ID`, `PUBLIC_OO_ENV`
   and `PUBLIC_OO_ENABLED=true` when you want telemetry.

### Brand assets

```bash
pnpm assets          # icons + OG image + verification
pnpm assets:og       # just the share image
node scripts/generate-og.mjs --title "Post title" --out public/images/og/post.png
```

Generated files are committed; nothing regenerates during `astro build`.

### Icons

```astro
---
import { ArrowRight } from "@lucide/astro";
---
<ArrowRight class="w-5 h-5" aria-hidden="true" />
```

## SEO

Pages declare SEO in front matter and the shared head component does the rest:

```yaml
seo:
  page_description: A unique, human-written summary of about 155 characters.
  featured_image: /images/blog/featured-image-2.jpg
  featured_image_alt: Describes the image.
  canonical_url:
  open_graph_type: article
  no_index: false
```

Never add `<title>`, canonical, Open Graph or JSON-LD tags to individual pages —
`src/components/seo/seo.astro` emits exactly one of each. See AGENTS.md for the
full checklist.

## Observability (OpenObserve)

RUM, logs and session replay initialise in `<head>` before the app renders, so
early errors and first-paint timings are captured. Everything is driven by typed
`astro:env` variables validated at build time — see `.env.example`.

```bash
PUBLIC_OO_APPLICATION_ID="my-web-application"
PUBLIC_OO_SERVICE="my-web-application"
PUBLIC_OO_ENV="production"
PUBLIC_OO_ENABLED=true
```

Telemetry is **off by default**, so local development stays quiet, and the SDKs
are dynamically imported — a disabled build never downloads them. Do Not Track
and Global Privacy Control are honoured. To record custom events:

```ts
import { trackEvent, identifyUser } from "../lib/observability/client";

trackEvent("cta_clicked", { location: "hero" });
identifyUser({ id: "1", name: "Captain Hook", email: "hook@example.com" });
```

## CloudCannon Setup

This site is pre-configured for CloudCannon. Connect your repository and CloudCannon will detect the configuration in `.cloudcannon/initial-site-settings.json` and build your site automatically. The editing experience is defined in `cloudcannon.config.yml`, which you can modify to control your editors' experience.

### Editable Regions

This starter demonstrates several types of Editable Region:

- **Text** (`data-editable="text"`) for editing front matter text values inline
- **Image** (`data-editable="image"`) for editing front matter image values
- **Array** (`data-editable="array"`) for page-building with reorderable content blocks
- **Source** (`data-editable="source"`) for making standalone `.astro` pages editable
- **Component** (`<editable-component>`) for live re-rendering of Astro components

Components that need live re-rendering are registered in `src/scripts/register-components.ts` and loaded conditionally when the site is open in CloudCannon's Visual Editor.

#### Source Editables

The About page (`src/content/pages/about.astro`) demonstrates **source editables** — a pattern where content lives directly in an Astro template rather than in Markdown front matter. Source editable regions use `data-editable="source"`, `data-path="path/to/file.astro"`, and `data-key` attributes. CloudCannon writes changes straight back to the `.astro` file.

This is useful for standalone pages (like About or Contact) where a developer wants full control over the markup while still giving editors visual editing access — **and where page building with components is *not* desired**. No accompanying Markdown file or front matter schema is needed. A thin routing wrapper in `src/pages/about.astro` handles Astro's file-based routing.

### Components

Three page-building components are included:

- **Hero** — heading, subheading, image, and optional button
- **LeftRight** — side-by-side text and image, with optional flip and button
- **TextBlock** — heading and rich text content

### Content

- **Pages** are in `src/content/pages/` as Markdown with structured front matter, and support a component-based page-building workflow. Developers can also add standalone pages paired with a routing file in `src/pages/` (like `src/content/pages/about.astro`), and decide which parts of those pages are editable in CloudCannon.
- **Blog posts** are in `src/content/blog/` as MDX files
- **Data** files (site settings, navigation) are in `data/`

## Project Structure

```
├── .cloudcannon/          # CloudCannon schemas and postbuild
├── cloudcannon.config.yml # CloudCannon configuration
├── data/                  # Site-wide data files
├── public/                # Static assets
├── .env.example           # OpenObserve configuration template
├── scripts/               # icon/OG generation + asset verification
├── AGENTS.md              # Guide for AI agents working in this repo
└── src/
    ├── assets/            # images + brand/icon.svg (source for generated assets)
    ├── components/        # Astro components (incl. seo/, observability/)
    ├── content/           # Content collections (pages, blog)
    ├── integrations/      # Build-time Astro integrations
    ├── layouts/           # Page layouts
    ├── lib/               # seo/ and observability/ helpers
    ├── pages/             # Astro page routes (incl. robots.txt, feed.xml)
    ├── scripts/           # Component registration for visual editing
    └── styles/            # Global CSS (Tailwind v4)
```
