# Build Notes

## The Page Block Model
- A page is defined as `src/content/pages/*.md` (or `.astro`).
- Markdown body content is IGNORED for `.md` pages. Prose belongs inside a block's `text_content` (e.g., in a `TextBlock`), unless the page is written as `.astro`.
- Content is built via `hero_block` and `content_blocks[]`. Each block is an object keyed by `_name` (e.g., `Hero`, `LeftRight`, `TextBlock`).

## SEO Front-Matter Rule
The `seo:` block in front-matter is strictly all-or-nothing. It must include all seven keys:
1. `page_description`
2. `canonical_url`
3. `featured_image`
4. `featured_image_alt`
5. `author_twitter_handle`
6. `open_graph_type`
7. `no_index` (must be a real boolean; nulls are allowed for others).

## Registering New Blocks
A new block component must be registered in TWO places:
1. `src/layouts/Page.astro` (in the `componentMap`).
2. `src/scripts/register-components.ts`.
Failing to register a block in both locations will cause it to render nothing, silently.

## Trailing-Slash Convention
The `astro.config.mjs` sets `trailingSlash: "always"`. Every internal link must end in a trailing `/`. The canonical URL logic in `src/lib/seo/meta.ts` is designed to match this format to ensure there is exactly one URL per page and no redirect hops for crawlers.
