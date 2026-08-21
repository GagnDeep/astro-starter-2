# UPlayVideo

The fastest online video player and format converter tool. Play obscure video formats and convert MKV, WEBM, and AVI files to MP4 right in your browser.

## Features

- **Universal Player:** Play MKV, WEBM, FLV, AVI, and other formats locally without uploading.
- **Fast Converter:** Convert any video format to MP4 (H.264).
- **Audio Extractor:** Extract MP3 audio from any video.
- **Content Library:** 60+ pages covering formats, conversions, video glossary, and blog guides.
- **Privacy-First:** Operations run via WebAssembly in your browser; your files never leave your device.
- **Analytics:** Configured with OpenObserve (RUM, Logs) out of the box.

## Setup

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Build the project:
```bash
pnpm build
```

## Structure

```
├── data/
│   ├── site.json           # Site-wide values (title, description, locale)
│   └── navigation.json     # Header & footer definitions
├── public/                 # Static assets, generated favicons
├── src/
│   ├── components/         # UI blocks (Navigation, Tools, Forms, SEO)
│   ├── content/            # Blog collection
│   ├── pages/              # Static pages (conversions, formats, glossary, tools, blog)
│   ├── styles/             # Global CSS (Tailwind v4)
│   └── assets/             # Brand SVGs and content images
├── capture.config.ts       # Capture form definitions (Waitlist, Newsletter, Contact)
└── astro.config.mjs        # SEO & telemetry defaults
```

## How to add content

- **Blog Posts:** Add `.mdx` files into `src/content/blog/`.
- **Formats/Conversions/Glossary:** These are statically built pages inside `src/pages/`. To add new ones, duplicate an existing `.astro` file and update its SEO properties and content.
- **Tokens:** Design tokens live in `src/styles/main.css` within `@theme`.

## Form Capture Wiring

All forms post to our shared secure capture endpoint defined in `AGENTS.md`. No backend routes exist in this repository.
Configuration lives in `capture.config.ts` where you define forms such as `waitlist`, `newsletter`, `tool`, and `contact`. We use a reusable `<CaptureForm>` component to easily add capture points in Astro pages.
