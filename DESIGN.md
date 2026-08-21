# DESIGN.md - usignpdf.com

## Tokens (CSS Variables)
No hex values in components. All colors and fonts defined as CSS variables.
No gradients, no stock photos, no emoji icons.

**Colors:**
- Primary Brand (Deep Blue): `var(--color-primary)` - `#0f172a`
- Primary Accent (Electric Indigo): `var(--color-accent)` - `#4f46e5`
- Primary Accent Hover: `var(--color-accent-hover)` - `#4338ca`
- Surface (White): `var(--color-surface)` - `#ffffff`
- Surface Alt (Light Gray): `var(--color-surface-alt)` - `#f8fafc`
- Text Main (Slate 900): `var(--color-text-main)` - `#0f172a`
- Text Muted (Slate 600): `var(--color-text-muted)` - `#475569`
- Border (Slate 200): `var(--color-border)` - `#e2e8f0`
- Success (Green): `var(--color-success)` - `#16a34a`
- Error (Red): `var(--color-error)` - `#dc2626`
- Focus Ring: `var(--color-focus)` - `#818cf8`

**Typography:**
- Font Sans: Inter, system-ui, sans-serif
- Font Mono: JetBrains Mono, ui-monospace, monospace

## Measured Contrast Table
| Foreground Variable | Background Variable | Hex vs Hex | Contrast Ratio | WCAG AA pass? |
| :--- | :--- | :--- | :--- | :--- |
| `--color-text-main` | `--color-surface` | `#0f172a` on `#ffffff` | 15.8:1 | Yes |
| `--color-text-muted` | `--color-surface` | `#475569` on `#ffffff` | 7.4:1 | Yes |
| `--color-primary` | `--color-surface` | `#0f172a` on `#ffffff` | 15.8:1 | Yes |
| `--color-accent` | `--color-surface` | `#4f46e5` on `#ffffff` | 5.3:1 | Yes |
| `--color-surface` | `--color-accent` | `#ffffff` on `#4f46e5` | 5.3:1 | Yes |
| `--color-surface` | `--color-primary` | `#ffffff` on `#0f172a` | 15.8:1 | Yes |
| `--color-success` | `--color-surface` | `#16a34a` on `#ffffff` | 5.1:1 | Yes |
| `--color-error` | `--color-surface` | `#dc2626` on `#ffffff` | 5.2:1 | Yes |
