# IBS-Go: The Intelligent IBS & FODMAP Tracker

IBS-Go is a symptom tracker that automatically calculates FODMAP stacking and predicts flare-ups, built on Astro with Tailwind v4.

## Repository Structure

- `src/pages/` - Core routing, including `index`, `pricing`, `about`, `contact`, and `tools/`.
- `src/content/` - Markdown/MDX content split by collections (`blog`, `reference`, `glossary`, `taxonomy`).
- `src/components/forms/` - Capture components (`capture-form`, `newsletter-form`) wired to the MarkRemover API.
- `src/assets/brand/` - Master `icon.svg` used to generate all favicons/app icons.
- `src/styles/main.css` - Global CSS tokens mapping to the Tailwind v4 design system (Sage Green/Slate Blue palette).
- `capture.config.ts` - Configuration for the form capture API endpoint and domain routing.
- `data/site.json` - Global site metadata, organization info, and SEO configuration.

## Managing Content

Content is organized into collections defined in `src/content.config.ts`.
- **Blog:** Articles requiring standard metadata (Title, date, hero image, tags).
- **Reference:** The core food library, tracking specific FODMAP ratings (`low`, `moderate`, `high`) and safe serving sizes.
- **Glossary:** Medical and scientific terminology translated into plain English.
- **Taxonomy:** Top-level categories (Fruits, Vegetables, Grains) explaining general rules for each type.

## Design System Tokens
All colors use CSS variables defined in `src/styles/main.css`. The primary color is a calming Sage Green (`--color-primary-500`), offset by clinical Slate Blue (`--color-secondary-500`) to maximize trust while minimizing anxiety for users managing their condition. Typography leverages standard system-ui sans-serif fonts mapped cleanly through the `@theme` rules.

## Form Capture Wiring

All forms on the site bypass generic POST requests and send data strictly through the API contract defined in `AGENTS.md`.
1. **No-JS Fallback:** Standard forms use `<input type="hidden">` fields pointing to `capture.config.ts` variables to post directly to the server.
2. **Progressive Enhancement:** Scripts progressively hijack the form to deliver inline errors and success messages.
3. **Environment:** No hidden secrets exist in `.env` for forms. The `capture.config.ts` contains the public write-only key.

For observability, OpenObserve variables must be set in `.env` to trace application health.
