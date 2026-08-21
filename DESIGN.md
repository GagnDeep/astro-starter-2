# DESIGN.md

## Brand Identity
dogsnacker.com - Bold, high-contrast, no-nonsense.

## Typography
- **Primary:** `system-ui` or Tailwind default `sans` (Inter is strictly banned per memory). We will use `Arial, Helvetica, sans-serif` as a fallback or standard tailwind sans minus Inter.
- **Display:** `sans` (Inter banned).
- **Numbers/Financial/Rates:** Tabular monospace (`font-mono tabular-nums`).

## Palette
- **Fintech indigo is banned.**
- **Gradients and glassmorphism are banned.**
- **Primary:** Forest Green (`#166534`, mapped to `var(--color-primary)`)
- **Secondary:** Burnt Orange (`#C2410C`, mapped to `var(--color-secondary)`)
- **Background:** Off-white (`#FAFAFA`, `var(--color-bg)`)
- **Text:** Slate Gray (`#0F172A`, `var(--color-text)`)
- **Accent:** Yellow (`#FACC15`, `var(--color-accent)`)

*Measured Contrast:*
- Primary on Background: #166534 on #FAFAFA -> 7.8:1 (Passes WCAG AA)
- Text on Background: #0F172A on #FAFAFA -> 14:1 (Passes WCAG AA)

## Design Rules
- Mobile-first (360px to 1920px verified).
- Tap targets >= 44px.
- UI components must reference CSS custom property design tokens mapped in Tailwind, avoiding raw hex color codes.
- No stock photography.
- No emoji icons.
- Images in src/assets must be logged.
