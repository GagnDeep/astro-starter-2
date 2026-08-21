# DESIGN: TrackAndLog.com

## Guidelines
- **Mobile-first:** Verified from 360px to 1920px. Tap targets >= 44px.
- **Typography:**
  - Headings/Body: Work Sans (Inter is BANNED).
  - Numbers/Figures/Rates: Tabular monospace font (e.g., Fira Code, JetBrains Mono, or UI monospace with `tabular-nums`).
- **Color Palette:** No fintech indigo. Strict contrast ratios. No gradients.
  - Background: Off-white (`#f8f9fa`)
  - Text: Dark Slate (`#212529`)
  - Primary: Deep Teal (`#0f766e` - contrast tested against background > 4.5:1)
  - Secondary/Borders: Stone (`#d6d3d1`)
  - Error: Brick Red (`#b91c1c`)
- **Theme integration:** Tokens mapped as CSS variables in Tailwind (`src/styles/main.css`). NO RAW HEX CODES IN COMPONENTS.
- **Visuals:** NO stock photography. NO emoji icons. NO glassmorphism. Use simple, flat SVG icons (Lucide) and clean structural lines.

## Voice & Tone
- **Tone:** Direct, confident, slightly irreverent. "We respect your time and your data."
- **Strict Constraint:** Humor is STRICTLY BANNED on tax dates, numerical calculations, warnings, and legal disclaimers. Must be entirely straightforward and plain-English in those contexts.

## Components & Structure
- Zero client JS by default; Astro islands only for calculators/tools.
- Content structured with Zod via Astro collections.
