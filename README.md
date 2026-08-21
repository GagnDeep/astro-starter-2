# The Cayman Journal

The definitive niche news journal for Cayman Islands business, finance, and the expat community.

## Project Architecture

This site is built using [Astro](https://astro.build/) as a purely static site generator. It uses Tailwind CSS v4 for styling and has a strictly defined content architecture to ensure SEO dominance and high conversion.

### Content Collections
The site is divided into four main content collections, all defined in `src/content.config.ts`:

1.  **Guides (`src/content/guides/`)**: Deep reference material on corporate structuring, economic substance, and Cayman law.
2.  **Living (`src/content/living/`)**: Practical guides for expatriates relocating to or living in the Cayman Islands (cost of living, work permits, real estate).
3.  **Glossary (`src/content/glossary/`)**: A reference dictionary of Cayman business and legal terms (e.g., CIMA, CIGA, Exempted Company).
4.  **Blog (`src/content/blog/`)**: Time-sensitive news and analysis on market trends and regulatory updates.

### Tools
The site includes interactive tools built with vanilla JavaScript (no client-side framework overhead) located in `src/pages/tools/`. Each tool includes a `<noscript>` fallback explaining the manual calculation logic.
*   `/tools/salary-calculator`
*   `/tools/pr-points-calculator`
*   `/tools/stamp-duty-calculator`

## Styling & Design Tokens

This project uses **Tailwind CSS v4**, which is CSS-first. There is no `tailwind.config.js`.

**All design tokens and custom CSS live in `src/styles/main.css`.**

*   Colors, fonts, and theme variables are defined in the `@theme` block.
*   Custom prose styling and component classes are strictly layered within `@layer components` or `@layer base`.
*   **Rule:** Never write unlayered CSS. Doing so will break Tailwind's spacing utilities.

## Form Capture API

The site uses a unified capture API for all forms (newsletters, contact forms, waitlists).

**Wiring Instructions:**
1.  **Config:** The endpoint, public key (`wcs_pk_dummy_cayman_journal`), and form labels are defined in `capture.config.ts` at the repository root.
2.  **Components:** Use `<CaptureForm />` or `<NewsletterForm />` from `src/components/forms/`.
3.  **Never Use Direct Fetch:** Forms are progressively enhanced via `src/scripts/capture-forms.ts`. Do not write custom API routes or direct fetch calls for forms.

## SEO and JSON-LD

SEO is handled entirely via frontmatter in markdown files and the `src/components/seo/seo.astro` component.
*   Never manually add `<title>` or `<meta>` tags to individual pages.
*   JSON-LD schemas (`Article`, `WebSite`, `Organization`, `BreadcrumbList`) are generated automatically by `src/lib/seo/schema.ts` based on the frontmatter and the routing tree.

## Running the Project

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm dev

# Type check
pnpm check

# Build the static site (output to /dist)
pnpm build
```
