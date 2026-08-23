# Build Notes

## The Page Block Model
A page is defined in `src/content/pages/*.md` with a `title`, an optional `hero_block`, and `content_blocks[]`. Blocks are objects keyed by `_name` (e.g., Hero, LeftRight, TextBlock). The markdown body is ignored for `.md` pages — prose must belong inside a block's text content. If a page needs bespoke layout, it must be written as `.astro` in `src/content/pages/`.

## The SEO Front-Matter Rule
The `seo:` front-matter is all-or-nothing. You must include all seven keys:
- `page_description`
- `canonical_url`
- `featured_image`
- `featured_image_alt`
- `author_twitter_handle`
- `open_graph_type`
- `no_index` (must be a real boolean)
Nulls are fine for everything except `no_index`. Do not emit `<title>`, `<link rel="canonical">`, `<meta property="og:...">`, or JSON-LD manually in a page; `src/lib/seo/` handles this using the front-matter.

## Registering New Blocks
A new block component must be added to BOTH:
1. `src/layouts/Page.astro` (`componentMap` object)
2. `src/scripts/register-components.ts`
Failing to register in both places will result in the block rendering nothing, silently.

## Trailing Slash Convention
The configuration `trailingSlash: "always"` is set in `astro.config.mjs`. Every internal link must end in a `/`. The canonical URL builder normalizes to match this.