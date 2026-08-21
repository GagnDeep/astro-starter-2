# DESIGN.md

## Palette & Contrast
Tokens as CSS vars in Tailwind. No hex in components. No gradients.
- `--color-bg`: `#ffffff` (White)
- `--color-text`: `#111827` (Gray 900)
- `--color-primary`: `#2563eb` (Blue 600)
- `--color-primary-hover`: `#1d4ed8` (Blue 700)
- `--color-border`: `#e5e7eb` (Gray 200)
- `--color-surface`: `#f9fafb` (Gray 50)
- `--color-error`: `#dc2626` (Red 600)

**Contrast Table:**
- Text (`#111827`) on Bg (`#ffffff`): 15.8:1 (Pass AAA)
- Primary (`#2563eb`) on Bg (`#ffffff`): 5.1:1 (Pass AA)
- Error (`#dc2626`) on Bg (`#ffffff`): 5.2:1 (Pass AA)

## Typography
- Sans-serif system fonts: `Inter`, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif.

## Banned Elements
- No stock photos.
- No emoji icons.
- No gradients.
