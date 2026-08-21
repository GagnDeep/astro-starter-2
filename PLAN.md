# PLAN.md

## Positioning
A simple, fast, browser-based document previewer for shared links.
Target audience: freelancers, legal professionals, and small business owners who need to quickly verify and preview documents (PDF, DOCX) without downloading them or creating an account.

Rejected alternatives:
1. Full-fledged document editor (too complex, requires accounts).
2. Cloud storage service like Google Drive (too heavy, privacy concerns).
3. Desktop application (loses the "browser-based shared link" convenience).
4. CLI tool (not accessible to non-technical users).

## Tone and Voice
- Professional, direct, slightly irreverent.
- Prohibited: "click here", emoji icons, "fintech indigo", humor on tax dates/calculations/legal disclaimers/warnings, AI-boilerplate ("In this fast-paced digital world").

## Architecture
- Static site (SSG) with Astro, Tailwind CSS, TypeScript.
- Islands only for interactive document preview and tools (with no-JS fallbacks).
- Tabular monospace for all numbers/rates.
- CSS custom properties for tokens, mapped in Tailwind (no raw hex codes).
- 60+ pages (15+ reference, 10+ taxonomy, 20+ glossary, 12 blog posts, tools).

## Theme Colors (mapped as CSS vars)
- Primary: #171717 (Neutral 900) - mapped to `var(--color-primary)`
- Secondary: #e5e5e5 (Neutral 200) - mapped to `var(--color-secondary)`
- Accent: #2563eb (Blue 600) - mapped to `var(--color-accent)` (NOT fintech indigo)

## Fonts
- Primary: System sans-serif (Inter is BANNED). We will use `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`.
- Monospace: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` (must be tabular-nums for figures).

## Tools
1. **Document Size Calculator:** Estimates upload times based on file size and connection speed.
2. **Format Support Checker:** Checks if a specific file extension is supported by the previewer.
3. **Link Generator:** Generates a secure preview link (mock functionality).
