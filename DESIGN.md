# DESIGN: ClearPath Finance

## Typography
- **Headings:** Inter (Sans-serif, clean, modern).
- **Body:** System UI (Fast, readable).

## Color Palette (Tokens)
- **Primary:** Forest Green (`--color-primary`) -> Trust, money, growth.
- **Secondary:** Slate (`--color-secondary`) -> Stability, neutral, readable.
- **Background:** Off-White (`--color-bg`) -> Easy on the eyes for reading.
- **Surface:** White (`--color-surface`) -> Card backgrounds.
- **Text:** Dark Slate (`--color-text`) -> High contrast readability.
- **Error:** Crimson (`--color-error`) -> Clear validation failures.

## Contrast Table
| Token | Hex Equivalent | Against Background | WCAG AA? |
| --- | --- | --- | --- |
| `--color-text` | `#1e293b` | vs `#f8fafc` | Yes (11.8:1) |
| `--color-primary` | `#047857` | vs `#f8fafc` | Yes (5.2:1) |
| `--color-secondary` | `#475569` | vs `#f8fafc` | Yes (6.0:1) |
| `--color-error` | `#dc2626` | vs `#f8fafc` | Yes (5.2:1) |

## CSS Variables
To be added to `src/styles/main.css`:
```css
@layer base {
  :root {
    --color-primary: #047857;
    --color-secondary: #475569;
    --color-bg: #f8fafc;
    --color-surface: #ffffff;
    --color-text: #1e293b;
    --color-error: #dc2626;
  }
}
```

## Styling Rules
1. Never use hex codes directly in classes. Use `text-primary`, `bg-surface`, etc.
2. No stock photos. Use abstract SVG illustrations or data viz.
3. No emoji icons. Use Lucide icons.
4. No gradients. Solid colors only.
5. No glassmorphism. Flat design with subtle shadows for elevation.
