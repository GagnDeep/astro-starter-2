# BUILD NOTES

## Page Block Model
A page is typically written as `src/content/pages/*.md` with a `title`, an optional `hero_block`, and `content_blocks[]`. Blocks are objects keyed by `_name` (e.g., `Hero`, `LeftRight`, `TextBlock`). The Markdown body of `.md` pages is ignored; prose must be placed inside a `TextBlock`'s `text_content`. Pages requiring more complex layout not supported by the block model should be written as `.astro` files in `src/content/pages/`.

## Block Registration
When creating a new block component, it MUST be registered in two places:
1. `src/layouts/Page.astro` within the `componentMap`.
2. `src/scripts/register-components.ts`.
Failing to add it to both places will result in the block silently failing to render.

## SEO Front-matter Rule
The `seo` front-matter block in pages is all-or-nothing. If included, you must provide all seven keys:
- `page_description`
- `canonical_url`
- `featured_image`
- `featured_image_alt`
- `author_twitter_handle`
- `open_graph_type`
- `no_index` (must be a boolean)
Null values are perfectly acceptable for string fields if no specific override is needed.

## Trailing Slash Convention
The trailing slash convention is set to "always" in `astro.config.mjs`. Every internal link must end with a `/` to avoid redirect hops for crawlers.
