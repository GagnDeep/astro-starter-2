# Build Notes

## Page Block Model
- A page is typically written as `src/content/pages/*.md` using the CloudCannon structured data block format.
- Pages require a `title` and typically have an optional `hero_block` and `content_blocks[]`.
- Blocks are typed objects (keyed by `_name` like `Hero`, `LeftRight`, `TextBlock`).
- **Important:** Markdown body in `.md` files in `src/content/pages/` is ignored by the parser; prose must go inside a `TextBlock`'s `text_content` array/object, or the page should be an `.astro` file in `src/content/pages/`.

## Block Registration
- When adding a new block component, it must be registered in TWO places:
  1. `src/layouts/Page.astro` (in the `componentMap`).
  2. `src/scripts/register-components.ts`.
- If a block is not registered in both, it silently fails to render.

## SEO Front Matter
- The `seo:` block in front matter is all-or-nothing: if you include it, include all seven keys.
  - `page_description`
  - `canonical_url`
  - `featured_image`
  - `featured_image_alt`
  - `author_twitter_handle`
  - `open_graph_type`
  - `no_index`
- Set fields to `null` if unused; `no_index` must be boolean. Do not re-implement tags directly in components.

## Trailing-Slash Convention
- `trailingSlash: "always"` is set in `astro.config.mjs`.
- Ensure all internal links end with a trailing `/`.
