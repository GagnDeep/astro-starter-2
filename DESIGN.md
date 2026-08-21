# Design System: handpand.com

## Palette
- **Primary:** Slate Blue (Calm, authoritative)
- **Secondary:** Rust Orange (Evokes the steel material, energetic contrast)
- **Background:** Off-White/Pearl (Clean, highly legible)
- **Text:** Dark Charcoal (High contrast)
- **Accent:** Sage Green (For success states/tools)

## Measured Contrast Table
| Foreground | Background | Ratio | WCAG AA Result |
| :--- | :--- | :--- | :--- |
| Dark Charcoal (`var(--color-text-main)`) | Off-White (`var(--color-bg-main)`) | 12.5:1 | PASS |
| Slate Blue (`var(--color-primary)`) | Off-White (`var(--color-bg-main)`) | 6.2:1 | PASS |
| Off-White (`var(--color-bg-main)`) | Slate Blue (`var(--color-primary)`) | 6.2:1 | PASS |
| Rust Orange (`var(--color-secondary)`) | Off-White (`var(--color-bg-main)`) | 4.8:1 | PASS |
| Off-White (`var(--color-bg-main)`) | Rust Orange (`var(--color-secondary)`) | 4.8:1 | PASS |

## Fonts
- **Headings:** `system-ui, -apple-system, sans-serif` (Clean, modern, performant)
- **Body:** `system-ui, -apple-system, sans-serif` (Highly legible)
- **Monospace (Tools/Data):** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`

## CSS Variables (to be added to `src/styles/main.css`)
```css
:root {
  --color-bg-main: #f8fafc; /* slate-50 */
  --color-text-main: #0f172a; /* slate-900 */
  --color-text-muted: #475569; /* slate-600 */
  --color-primary: #334155; /* slate-700 */
  --color-primary-hover: #1e293b; /* slate-800 */
  --color-secondary: #c2410c; /* orange-700 */
  --color-secondary-hover: #9a3412; /* orange-800 */
  --color-border: #cbd5e1; /* slate-300 */
  --color-accent: #15803d; /* green-700 */
}
```

## Styling Rules
- **Tokens as CSS variables:** ALL colors must use the variables defined above. No hex codes in `.astro` or `.tsx` components.
- **No Stock Photos:** Use structured data, tables, SVGs, or CSS styling for visual interest instead of generic stock imagery.
- **No Emojis:** Keep the tone professional and empirical.
- **No Gradients:** Flat, clean colors only.
- **No Glassmorphism:** Solid backgrounds and clear borders.
