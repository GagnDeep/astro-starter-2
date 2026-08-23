# Build Notes

## Page Block Model
- A page is typically `src/content/pages/*.md`.
- It has a `title`, optional `hero_block`, and `content_blocks[]` array.
- Blocks are objects keyed by `_name` (e.g., `Hero`, `LeftRight`, `TextBlock`).
- **Markdown Body:** The markdown body is IGNORED for `.md` pages. Prose belongs inside a `TextBlock`'s `text_content`. Otherwise, use an `.astro` file in `src/content/pages/`.

## Block Registration Requirement
- Any new block component must be registered in **BOTH**:
  1. `src/layouts/Page.astro` (inside the `componentMap`)
  2. `src/scripts/register-components.ts`
- Doing only one renders nothing, silently.

## SEO Front-Matter Rule
- `seo:` front matter is **all-or-nothing**: include all seven keys:
  - `page_description`
  - `canonical_url`
  - `featured_image`
  - `featured_image_alt`
  - `author_twitter_handle`
  - `open_graph_type`
  - `no_index` (must be a real boolean)
- Nulls are permitted.

## Trailing Slash Convention
- `trailingSlash` is set to `"always"` in Astro configuration.
- **Rule:** Every internal link on the site MUST end in a `/`.
