# Battery Product Passport Design System

## Core Rules
- **Mobile-first:** Must verify layout from 360px to 1920px.
- **Tap Targets:** Minimum 44px for all interactive elements.
- **Typography:** All numbers, financial figures, and rates must use tabular monospace typography.
- **Banned:** Inter as a display font, fintech indigo, stock photography, emoji icons, glassmorphism, and gradients.
- **Tokens:** CSS custom property design tokens mapped in Tailwind. Licensed images must be stored in `src/assets`.

## Typography
- **Display Font:** `Space Grotesk`
- **Body Font:** `System-ui`
- **Monospace (Numbers):** `JetBrains Mono` or `Fira Code`

## CSS Variables
```css
@layer base {
  :root {
    --color-surface-base: #FAFAFA;
    --color-surface-alt: #E5E7EB;
    --color-brand-primary: #047857;
    --color-brand-accent: #D97706;
    --color-text-primary: #111827;
    --color-text-muted: #4B5563;
    --color-text-inverse: #FFFFFF;
    --color-border-subtle: #D1D5DB;
    --color-status-danger: #DC2626;
  }
}
```
