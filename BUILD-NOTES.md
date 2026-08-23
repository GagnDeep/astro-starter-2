# Build Notes

## Page Block Model
- A page is represented as `src/content/pages/*.md` with a `title`, an optional `hero_block`, and `content_blocks[]`.
- Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock).
- The Markdown body of a `.md` page is IGNORED. All prose must go inside a TextBlock's `text_content`, or the page must be written as `.astro` in `src/content/pages/`.

## SEO Front-Matter Rule
- `seo:` front-matter is all-or-nothing.
- Must include all 7 keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index`.
- Nulls are fine for most fields, but `no_index` must be a real boolean.
- Never add SEO meta tags or JSON-LD directly in a page (handled by `src/components/seo/seo.astro`).

## Registering New Blocks
- A new block component must be added to BOTH:
  1. `src/layouts/Page.astro`'s componentMap
  2. `src/scripts/register-components.ts`
- Doing only one renders nothing, silently.

## Trailing Slash Convention
- Trailing slash is configured as "always" in Astro (`trailingSlash: "always"`).
- Every internal link across the site must end in a trailing slash (`/`).
