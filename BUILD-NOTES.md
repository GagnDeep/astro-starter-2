# Build Notes & Conventions

## Page Block Model
- A page is typically located in `src/content/pages/*.md`.
- Requires `title`, an optional `hero_block`, and `content_blocks[]`.
- Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock).
- **CRITICAL:** The markdown body is IGNORED for `.md` pages. Prose must reside inside a TextBlock's `text_content`, or the page must be written as a `.astro` file in `src/content/pages/`.

## Block Registration
- Every new block component must be registered in **BOTH**:
  1. `src/layouts/Page.astro` (inside the `componentMap`)
  2. `src/scripts/register-components.ts`
- Missing either will cause the block to render nothing silently.

## SEO Front-Matter Rule
- The `seo:` object in front matter is all-or-nothing.
- It must include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`.
- Nulls are fine. `no_index` must be a real boolean.

## Trailing Slash Convention
- `trailingSlash` is set to "always" in Astro configuration.
- Every internal link must end in a trailing slash `/`.
