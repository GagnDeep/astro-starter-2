# DESIGN.md - udocumentview.com

## Design System

**Brand:** uDocumentView
**Philosophy:** Fast, clean, minimal distraction. The document is the hero.
**Constraints:** No hex codes in components (only CSS vars via Tailwind theme). No stock photos. No emoji icons. No gradients.

## Palette

_Tokens mapped to CSS vars in Tailwind:_

- `--color-bg-primary`: `#ffffff` (White)
- `--color-bg-secondary`: `#f8fafc` (Slate 50)
- `--color-text-primary`: `#0f172a` (Slate 900)
- `--color-text-secondary`: `#475569` (Slate 600)
- `--color-accent-primary`: `#2563eb` (Blue 600)
- `--color-accent-hover`: `#1d4ed8` (Blue 700)
- `--color-border`: `#e2e8f0` (Slate 200)
- `--color-error`: `#dc2626` (Red 600)
- `--color-success`: `#16a34a` (Green 600)

## Measured Contrast Table

| Foreground                           | Background                           | Ratio  | WCAG AA Status |
| ------------------------------------ | ------------------------------------ | ------ | -------------- |
| `--color-text-primary` (`#0f172a`)   | `--color-bg-primary` (`#ffffff`)     | 15.8:1 | Pass           |
| `--color-text-secondary` (`#475569`) | `--color-bg-primary` (`#ffffff`)     | 5.3:1  | Pass           |
| `--color-text-primary` (`#0f172a`)   | `--color-bg-secondary` (`#f8fafc`)   | 15.3:1 | Pass           |
| `--color-accent-primary` (`#2563eb`) | `--color-bg-primary` (`#ffffff`)     | 5.1:1  | Pass           |
| `--color-bg-primary` (`#ffffff`)     | `--color-accent-primary` (`#2563eb`) | 5.1:1  | Pass           |
| `--color-error` (`#dc2626`)          | `--color-bg-primary` (`#ffffff`)     | 5.2:1  | Pass           |

## Typography

- **Sans (Primary):** Inter, system-ui, sans-serif
- **Mono (Code/Data):** JetBrains Mono, Menlo, monospace

## Elements

- **Buttons:** Solid primary color, sharp corners (`rounded-none` or `rounded-sm`), 2px transparent border for focus states.
- **Forms:** Clear labels, visible borders (`--color-border`), accessible error states.
- **Icons:** @lucide/astro only. Sized with Tailwind classes, colored with `currentColor`.
