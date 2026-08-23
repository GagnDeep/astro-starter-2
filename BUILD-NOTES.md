# Build Notes

## The Page Block Model
Pages in `src/content/pages/*.md` use `title`, an optional `hero_block`, and `content_blocks[]`. Blocks are objects keyed by `_name`. The markdown BODY IS IGNORED for .md pages. Prose belongs inside a TextBlock's `text_content` or the page must be written as `.astro`.

## SEO Front-Matter Rule
`seo:` front matter is all-or-nothing: include all seven keys (`page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`). Nulls are permitted. `no_index` must be a real boolean.

## Registering a New Block
A new block component must be added to BOTH `src/layouts/Page.astro`'s `componentMap` and `src/scripts/register-components.ts`.

## Trailing-Slash Convention
`trailingSlash: "always"` is configured in `astro.config.mjs` - every internal link must end in a `/`.
