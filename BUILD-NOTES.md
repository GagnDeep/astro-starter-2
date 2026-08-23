# Build Notes

## Page Block Model
A page in `src/content/pages/*.md` uses front matter for structure. It must include a `title`, an optional `hero_block`, and `content_blocks[]`. The blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock). The markdown body is ignored for `.md` pages — prose belongs inside a TextBlock's `text_content`. Alternatively, a page can be written as `.astro` in `src/content/pages/`.

## SEO Front-Matter Rule
The `seo` front matter block is all-or-nothing. It requires all seven keys:
- `page_description`
- `canonical_url`
- `featured_image`
- `featured_image_alt`
- `author_twitter_handle`
- `open_graph_type`
- `no_index` (must be a real boolean)
Nulls are accepted for string fields.

## Registering a New Block
When a new block component is created, it must be added to BOTH:
1. `src/layouts/Page.astro`'s `componentMap`
2. `src/scripts/register-components.ts`
Failing to add it to both will result in the block rendering nothing, silently.

## Trailing Slash Convention
The `trailingSlash` setting is set to "always" in Astro config. Every internal link must end in a `/`.
