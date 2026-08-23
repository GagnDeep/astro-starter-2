# Build Notes

- **Page Block Model**: A page is `src/content/pages/*.md` with `title`, an optional `hero_block`, and `content_blocks[]`. Blocks are objects keyed by `_name` (e.g. Hero, LeftRight, TextBlock). The markdown BODY IS IGNORED for .md pages. Prose belongs inside a TextBlock's `text_content`, or the page must be written as .astro in `src/content/pages/`.
- **Registering a New Block**: A new block component must be added to BOTH `src/layouts/Page.astro`'s componentMap and `src/scripts/register-components.ts`.
- **SEO Front-matter Rule**: `seo:` front matter is all-or-nothing. Include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`. Nulls are fine; `no_index` must be a real boolean. Never put head tags or JSON-LD directly in a page. Extend `src/lib/seo/`.
- **Trailing-slash Convention**: `trailingSlash` is "always". Every internal link ends in `/`.
- **Styling**: `pnpm build` is the only gate. Never add check, format or tests to it. An unlayered rule in `src/styles/main.css` silently kills every Tailwind spacing utility. Put element and helper rules inside `@layer base` or `@layer components`.
