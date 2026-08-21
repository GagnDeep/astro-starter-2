# World AI School

Online course platform teaching practical AI skills to students worldwide.

## Project Structure

```
├── .cloudcannon/          # CloudCannon schemas
├── cloudcannon.config.yml # CloudCannon configuration
├── data/                  # Site-wide data files
├── public/                # Static assets (favicons, og images)
├── scripts/               # Icon and OG generation
├── src/
    ├── assets/            # Content images and brand source
    ├── components/        # Reusable UI blocks and forms
    ├── content/           # Content collections (pages, blog)
    ├── pages/             # Standalone routes (tools, contact, about, thanks)
    ├── lib/               # SEO and observability utilities
    └── styles/            # Global Tailwind CSS
```

## Adding Content

- **Pages/Library/Taxonomy/Glossary**: Add `.md` files to `src/content/pages/`.
- **Blog**: Add `.mdx` files to `src/content/blog/`.
- **Tools**: Add `.astro` pages to `src/pages/tools/`.

## Capture API Wiring

Every form on this site posts to a shared capture server.

- Configuration lives in `capture.config.ts`.
- Environment variables are NOT required for capture forms (the public key is inlined and safe in client code).
- Reusable components exist in `src/components/forms/`.

## Design Tokens

Design tokens and styling overrides live in `src/styles/main.css`. The primary color scheme uses Deep Indigo and Teal.

## Commands

```bash
pnpm install
pnpm dev       # Local server
pnpm build     # Static output -> dist/
pnpm check     # TypeScript checks
pnpm assets    # Regenerate all brand assets
```
