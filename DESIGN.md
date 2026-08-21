# Design: FoodLogTrack.com

## Principles
- **Mobile-First:** Verified 360px to 1920px. Tap targets minimum 44px.
- **Typography:** All numbers, financial figures, and rates use tabular monospace typography. Inter is BANNED as a display font.
- **Imagery:** No stock photography, no emoji icons. Licensed images in `src/assets` logged individually. Use Lucide icons.
- **Style:** No fintech indigo, no glassmorphism, no gradients. Clean, flat, high-contrast, data-dense.

## Palette & Contrast Table

| Role | Color (Hex) | CSS Variable | Contrast vs White (Bg) | Contrast vs Black (Text) |
| :--- | :--- | :--- | :--- | :--- |
| Primary | `#0f766e` (Teal 700) | `--color-primary` | 4.6:1 (Pass AA) | - |
| Secondary | `#d97706` (Amber 600)| `--color-secondary` | 3.1:1 (Large text) | - |
| Background | `#ffffff` (White) | `--color-background` | - | 21:1 (Pass AAA) |
| Surface | `#f3f4f6` (Gray 100) | `--color-surface` | - | 18:1 (Pass AAA) |
| Text Main | `#111827` (Gray 900) | `--color-text` | 21:1 (Pass AAA) | - |
| Text Muted | `#4b5563` (Gray 600) | `--color-text-muted` | 6.8:1 (Pass AA) | - |
| Border | `#d1d5db` (Gray 300) | `--color-border` | 1.2:1 (Decorative) | - |
| Error | `#dc2626` (Red 600) | `--color-error` | 5.2:1 (Pass AA) | - |

*Note: UI components must reference CSS custom property design tokens mapped in Tailwind, avoiding raw hex color codes.*

## Typography
- **Display/Headings:** `system-ui, -apple-system, sans-serif` (Strictly NO Inter).
- **Body:** `system-ui, -apple-system, sans-serif`.
- **Numbers/Data:** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` (Tabular nums enforced).

## CSS Variables Mapping (Tailwind v4)
To be added in `src/styles/main.css`:
```css
@theme {
  --color-primary: #0f766e;
  --color-secondary: #d97706;
  --color-background: #ffffff;
  --color-surface: #f3f4f6;
  --color-text: #111827;
  --color-text-muted: #4b5563;
  --color-border: #d1d5db;
  --color-error: #dc2626;

  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
```
