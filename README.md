# uConvertDocument

The fastest, completely free document format converter. Convert PDF, DOCX, XLSX, and more instantly with no limits or signups.

## Features
- Convert documents without watermarks
- No signups required
- Built on Astro and Tailwind CSS
- Visual editing support with CloudCannon

## Getting Started

1. `pnpm install`
2. `pnpm dev` to run the development server.
3. `pnpm build` to compile the static output.

## Adding content
Content is located in `src/content`. Currently supported:
- **Pages**: `src/content/pages/`
- **Blog**: `src/content/blog/`

## Design Tokens
CSS custom variables are defined in `src/styles/main.css`.

## Capture Configuration
Forms submit to a secure capture API specified in `capture.config.ts`.
To test or point at a new domain, update `capture.config.ts`.

## Environment Variables
- Analytics and user interactions are tracked via OpenObserve. Configuration is in `.env` and `astro.config.mjs`.
