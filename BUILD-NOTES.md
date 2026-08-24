# Build Notes

## Page Block Model
- A page (`src/content/pages/*.md`) has a `title`, an optional `hero_block`, and an array of `content_blocks[]` (objects keyed by `_name`).
- The markdown body is **ignored** for `.md` pages. Prose must go inside a `TextBlock`'s `text_content`, or the page must be written as `.astro` in `src/content/pages/`.

## SEO Front-Matter Rule
- The `seo:` front-matter is all-or-nothing.
- It must include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, and `no_index`.
- Nulls are fine for everything except `no_index`, which must be a real boolean.
- Example structure:
  ```yaml
  seo:
    page_description: ~155 chars
    canonical_url: null
    featured_image: null
    featured_image_alt: null
    author_twitter_handle: null
    open_graph_type: website
    no_index: false
  ```

## Registering New Blocks
- A new block component must be added to **both**:
  1. `src/layouts/Page.astro`'s `componentMap`
  2. `src/scripts/register-components.ts`
- Doing only one will result in the block rendering nothing, silently.

## Trailing Slash Convention
- `trailingSlash` is set to `"always"` in Astro configuration.
- Every internal link across the site **must** end in a trailing slash ("/").
