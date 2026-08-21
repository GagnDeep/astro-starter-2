# DESIGN.md

## Typography
- **Primary Font:** System sans-serif stack (banned: Inter). `font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Tabular Data:** Monospace for all numbers, financial figures, and rates. `font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
- **Hierarchy:** Clear H1-H6 progression.

## Color Palette (No Gradients, No Fintech Indigo)
- **Background:** White / Very light gray (warm).
- **Text:** Dark Charcoal (high contrast).
- **Accent:** Deep Forest Green or Terracotta (Earthy, grounded, not techy).
- **Interactive:** Dark Blue (Not indigo).
- **Warnings/Errors:** Standard Red (accessible contrast).

### Contrast Table (Target WCAG AA)
| Token Name | Hex (Internal Use Only) | Usage | Contrast vs Background | Contrast vs Text |
| :--- | :--- | :--- | :--- | :--- |
| `--color-bg-primary` | `#FAFAFA` | Page background | N/A | > 7:1 |
| `--color-text-primary` | `#1A1A1A` | Main text | > 7:1 | N/A |
| `--color-accent-primary` | `#2E5C3E` | Buttons, links | > 4.5:1 | > 4.5:1 (on white) |
| `--color-accent-secondary`| `#C15C3D` | Highlights | > 4.5:1 | > 4.5:1 (on white) |
| `--color-interactive` | `#004080` | Focus states | > 4.5:1 | > 4.5:1 (on white) |
| `--color-error` | `#B30000` | Errors, warnings | > 4.5:1 | > 4.5:1 (on white) |

*Note: Hex codes are for definition only. UI components MUST use CSS custom properties (`var(--color-...)`) mapped via Tailwind.*

## Design Rules
- Mobile-first (verified 360px to 1920px).
- Minimum tap targets: 44px x 44px.
- No stock photography.
- No emoji icons (Use Lucide).
- No glassmorphism.
- No gradients.
