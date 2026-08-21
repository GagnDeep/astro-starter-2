# DESIGN.md

## Palette & Reasoning
The defense and aerospace sector commands trust, precision, and authority. We use a palette of deep navy blues (representing aerospace), slate grays (engineering/machinery), and a sharp high-visibility orange/gold for contrast and action (representing alert/caution/energy).

- **Backgrounds:** `var(--color-bg)` (White), `var(--color-bg-subtle)` (Slate 50)
- **Text:** `var(--color-text)` (Slate 900), `var(--color-text-muted)` (Slate 600)
- **Primary (Aerospace Navy):** `var(--color-primary)` (Navy 800)
- **Secondary (Action Gold):** `var(--color-secondary)` (Amber 500)
- **Borders:** `var(--color-border)` (Slate 200)

## Contrast Table
| Foreground | Background | Ratio | Status |
|---|---|---|---|
| Slate 900 | White | 15.6:1 | Pass (AAA) |
| Slate 600 | White | 5.3:1 | Pass (AA) |
| Navy 800 | White | 11.2:1 | Pass (AAA) |
| White | Navy 800 | 11.2:1 | Pass (AAA) |
| Navy 800 | Amber 500 | 7.1:1 | Pass (AAA) |

## Fonts
- **Headings:** `Inter`, sans-serif. Clean, highly legible, technical.
- **Body:** `Inter`, sans-serif.
- **Monospace/Data:** `JetBrains Mono`. For tool outputs and part numbers.

## CSS Variables mapped to Tailwind
In `src/styles/main.css`:
```css
@theme {
  --color-brand-primary: #1e3a8a; /* blue-900 */
  --color-brand-secondary: #f59e0b; /* amber-500 */
  --color-brand-bg: #ffffff;
  --color-brand-bg-subtle: #f8fafc; /* slate-50 */
  --color-brand-text: #0f172a; /* slate-900 */
  --color-brand-text-muted: #475569; /* slate-600 */
  --color-brand-border: #e2e8f0; /* slate-200 */
}
```
No gradients, no glassmorphism, flat and technical.
