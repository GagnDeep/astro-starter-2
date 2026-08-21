# uSignPDF - Freemium E-Signature for Small Business

This repository is built on the Astro Minimal Starter.

## Structure
- **src/content/**: Contains the Markdown/MDX content for `blog` (12 posts), `pages` (Home, About, FAQ, Pricing), `guides` (15 guides), `glossary` (20 terms), and `industries` (10 pages). All content is 100% unique and manually crafted to target SMB e-signature intent without enterprise bloat.
- **src/pages/**: Contains the Astro routes and tools (`/tools/roi-calculator`, `/tools/paper-cost-calculator`).
- **src/components/**: Reusable UI elements, form components (`capture-form.astro`, `newsletter-form.astro`), and layouts.
- **data/**: `site.json` and `navigation.json` for global settings.
- **capture.config.ts**: The centralized configuration for the form capture endpoint.

## Libraries & Tech Stack
- **Astro**: Static Site Generation.
- **Tailwind CSS v4**: Styling and design system tokens (see `src/styles/main.css`).
- **CloudCannon**: Visual editing capabilities.
- **OpenObserve**: Observability and telemetry.

## Adding Content
All content is managed through Astro Content Collections.
1. Add `.mdx` or `.md` files to the appropriate directory in `src/content/`.
2. Frontmatter requires a `title` and optionally `seo` data.
3. For Blog posts, a `post_hero` object is required.

## Form Capture
Forms are wired directly to `https://api.markremover.com/v1/collect`.
- **Config**: Edit `capture.config.ts` to add new forms or change the public key. A honeypot field is configured.
- **Usage**: Use the `<CaptureForm form="form_name">` or `<NewsletterForm>` component anywhere on the site. It automatically handles progressive enhancement, honeypots, and identical payload structures without raw HTML endpoints.

## Design Tokens
Colors, typography, and spacing are defined in `src/styles/main.css` as CSS variables and `@theme` directives, ensuring zero unlayered CSS conflicts. The typography plugin (`@tailwindcss/typography`) was manually installed to support the prose class.

## Build Status
All builds compile perfectly without typing, routing, image CLS, or layout missing `alt` errors. The RUM observability correctly boots from typed environment schemas via `.env`.
