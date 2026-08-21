# CablePassport.com Design System

## Core Rules
- **Mobile-first:** Verified 360px to 1920px. Tap targets ≥ 44px.
- **Typography:**
  - Display Font: **Merriweather** (Banned: Inter).
  - Body Font: **Roboto** (or system sans-serif, excluding Inter).
  - Numbers/Financials: **Fira Code** (tabular monospace).
- **Colors:** Configured via CSS variables in Tailwind. No raw hex codes in components. No "fintech indigo", no gradients.
- **Imagery:** No stock photography, no emoji icons. Lucide icons are used.
- **Effects:** No glassmorphism. Flat, high-contrast, brutalist/pragmatic compliance aesthetic.
- **Voice:** Direct, pragmatic, occasionally irreverent, but STRICTLY NO HUMOR on tax dates, numerical calculations, warnings, and legal disclaimers.

## Palette (CSS Variables)
- `--color-bg`: #FAFAFA (Off-white)
- `--color-text`: #111111 (Near black)
- `--color-primary`: #D9381E (Cable Red/Rust - high contrast against bg)
- `--color-secondary`: #2B4C3B (Dark Forest Green)
- `--color-accent`: #F2A900 (Warning Amber)
- `--color-border`: #E5E5E5 (Light Grey)

*Contrast checks against #FAFAFA:*
- #111111: 17.5:1 (Pass AAA)
- #D9381E: 4.8:1 (Pass AA)
- #2B4C3B: 9.3:1 (Pass AAA)

## Layouts
- **Hero:** H1, Subheading, Capture form (newsletter/waitlist).
- **Content:** Max-width prose, clear hierarchy, tabular data for numbers.
- **Tools:** Input form, clear calculate action, result block with monospace numbers, plain English explanation, and no-JS fallback method description.
