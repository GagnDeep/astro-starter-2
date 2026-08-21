# DogSnacker

The healthy, single-ingredient treat subscription for dogs. No junk, no filler, just high-value snacks that dogs actually want, delivered monthly.

## Structure
- `/src/pages/`: Astro pages forming the main routing. Includes standalone tools (`/tools/treat-allowance`), compare pages, glossary, and legal pages.
- `/src/content/`: Content collections for Blog posts (`.mdx`) and pages with generic structures.
- `/src/components/`: Reusable UI blocks, forms, and layout wrappers.
- `/src/styles/`: Global CSS styling using Tailwind CSS, configuring the primary brand palette with CSS variables to ban the use of raw hex in components.
- `/data/`: Site-wide generic data files, like `site.json` and `navigation.json`.

## Forms and Capture
This project uses a centralized form submission system via the `markremover` API.
- **NO form backend, mail service, or API routes are needed or added in this repo.**
- Every form points to the shared capture server configured in `capture.config.ts`.
- Supported forms: Waitlist, Newsletter, Contact. (Adding more just means adding the form label to the configuration).

### Adding Content
- **Blog Posts:** Add `.mdx` files to `src/content/blog/`. Make sure you use Astro's `<Image>` tag pattern for thumbnails and heroes, matching the schema.
- **Pages (Markdown/Editable):** Add to `src/content/pages/`.
- **Custom Route Pages:** Add `.astro` pages to `src/pages/`.

## Setup and Commands
```bash
pnpm install
pnpm dev
pnpm build
pnpm check
pnpm assets
```

## Changes this run
- Stood up the baseline brand identity (typography, colors mapped to Tailwind CSS tokens).
- Established the core route tree (index, about, compare, glossary, legal, subscribe, tools, library).
- Added `tools/treat-allowance` client-island calculator for treat allowances.
- Wired all form submissions up properly against the capture API.
- Executed Lighthouse constraints via CSS semantics.
- Fixed content collection schema validation for strict checking.
