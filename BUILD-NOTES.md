# Build Notes & Architecture Rules

## Page Block Model

- A page is `src/content/pages/*.md` with `title`, optional `hero_block`, and `content_blocks[]`.
- Blocks are objects keyed by `_name`.
- The markdown body is IGNORED for `.md` pages — prose must go inside a `TextBlock`'s `text_content` field.

## SEO Front-Matter Rule

- `seo:` front matter is all-or-nothing. Include all seven keys: `page_description`, `canonical_url`, `featured_image`, `featured_image_alt`, `author_twitter_handle`, `open_graph_type`, `no_index`. Nulls are acceptable for string values, but `no_index` must be a boolean.

## Registering Components

- A new block component must be registered in BOTH `src/layouts/Page.astro`'s `componentMap` AND `src/scripts/register-components.ts`.

## Trailing Slash Convention

- `trailingSlash: "always"` is configured. Every internal link MUST end in a trailing slash (`/`).
