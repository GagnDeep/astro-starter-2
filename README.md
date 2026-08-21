# uviewdocument.com

The frictionless, professional way to share and view documents online. No ads, no signups, just a link.

## Structure
- `src/pages/`: Contains all routing, standalone pages, and interactive tools (`tools/pdf-viewer`, etc.).
- `src/content/`: Collections for `blog` (12 posts), `glossary` (20+ terms), `guides` (15 guides), and `pages` (base structure).
- `src/components/`: Reusable layouts, headers, footers, and capture forms.
- `src/styles/`: Centralized Tailwind v4 CSS variables (`main.css`), avoiding hex codes in markup.
- `data/`: Configuration for `site.json` and `navigation.json`.

## Tokens
All colors, fonts, and spacings are tokenized as CSS variables in `src/styles/main.css` and mapped natively to Tailwind v4 logic using `@theme`.
- Primary: `--color-primary` (`#0f766e`)
- Surface: `--color-surface` (`#ffffff`)
- Background: `--color-background` (`#f8fafc`)

## Capture Wiring
Forms are strictly wired using the `capture.config.ts` system to post to `api.markremover.com`.
There are four types configured:
- `waitlist` (Hero and CTAs)
- `newsletter` (Footer and Blog ends)
- `quote` (Interactive tools results)
- `contact` (Contact page)

Keys and env vars are located in `.env` for observability and `capture.config.ts` for form submission.

## Run Results
- **Page Count:** ~63 pages built successfully.
- **Audits:** Zero Astro check errors. Build runs cleanly. Assets successfully verified using `pnpm assets:check`.
- **Capture Testing:** Payloads to `/v1/collect/contact` and `waitlist` return 200/201 Success.
