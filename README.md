# udocumentview.com

Simple browser-based document previewer for shared links.

## Structure
- `src/content/`: Markdown/MDX content for pages, blog posts, and glossary terms.
- `src/components/tools/`: React-based tools for calculating upload size, verifying format support, and generating a mock link.
- `src/styles/main.css`: Contains all CSS custom property tokens. Hex colors are strictly avoided in UI logic. All design variables map back here.
- `capture.config.ts`: Defines the form capture API endpoints and keys.

## Capture Strategy
The site uses the API contract defined in `AGENTS.md` with public key `wcs_pk_47bxlyp54gjn_BR9Mhe51yJEkTuchPcpJnvAs7ZnZ98lM6zxfgBI-tbE`.
All forms correctly post to `https://api.markremover.com/v1/collect/{form}`

## Report
- Total HTML Pages: 61
- Capture Points: 6 (In-page waitlist capture forms added automatically, plus specific tools hooks).
- Changed during this run: Site entirely migrated to new theme tokens. Fully audited content collections generated. Corrected `astro:env` bugs.
