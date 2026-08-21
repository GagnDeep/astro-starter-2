# DESIGN: Battery Digital Passport Hub

## 1. Palette
Tokens mapped to Tailwind CSS variables (defined in `src/styles/main.css`). No hex codes in components.
Contrast checked: Text on backgrounds > 4.5:1.

**Core Variables:**
- `--color-brand-base`: `#0F172A` (Slate 900 - dark text/headings)
- `--color-brand-muted`: `#475569` (Slate 600 - body text)
- `--color-brand-accent`: `#2563EB` (Blue 600 - primary actions, links)
- `--color-brand-accent-hover`: `#1D4ED8` (Blue 700)
- `--color-surface-base`: `#FFFFFF` (White - main background)
- `--color-surface-muted`: `#F8FAFC` (Slate 50 - alternate section background)
- `--color-surface-border`: `#E2E8F0` (Slate 200 - dividers)
- `--color-status-error`: `#DC2626` (Red 600)
- `--color-status-success`: `#16A34A` (Green 600)

## 2. Fonts
- **Headings:** Inter (system sans-serif stack as fallback).
- **Body:** System UI sans-serif stack.
- **Monospace (for data model examples):** ui-monospace, SFMono-Regular, Menlo.

## 3. Visual Rules
- **No glassmorphism, no complex gradients.** Solid colors and clear borders.
- **Corners:** `rounded-md` (0.375rem) for cards and buttons. Not overly rounded.
- **Shadows:** Minimal. `shadow-sm` for standard cards, `shadow-md` on hover.
- **Icons:** Lucide-astro, colored with `currentColor`.
- **Images:** Licensed/generated schematics for technical concepts. No generic stock photos of people in suits holding batteries. Use `.svg` diagrams or `.webp` for technical layouts.
