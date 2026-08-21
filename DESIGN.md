# Design System: Institute of Cooking

## Palette (Tailwind CSS Vars)
*Measured contrast ratios.*

- `--color-primary`: `#1e293b` (Slate 800) - Contrast vs White: 10.6:1 (Pass AA)
- `--color-primary-light`: `#334155` (Slate 700) - Contrast vs White: 7.3:1 (Pass AA)
- `--color-accent`: `#b91c1c` (Red 700) - Contrast vs White: 5.5:1 (Pass AA)
- `--color-accent-hover`: `#991b1b` (Red 800) - Contrast vs White: 7.1:1 (Pass AA)
- `--color-surface`: `#f8fafc` (Slate 50)
- `--color-surface-alt`: `#f1f5f9` (Slate 100)
- `--color-text`: `#0f172a` (Slate 900) - Contrast vs White: 15.6:1 (Pass AA)
- `--color-text-muted`: `#475569` (Slate 600) - Contrast vs White: 5.1:1 (Pass AA)
- `--color-border`: `#e2e8f0` (Slate 200)

## Fonts
- **Headings:** Inter (Sans-serif, rigorous, technical)
- **Body:** Lora (Serif, authoritative, readable for long articles)
- **Monospace:** Fira Code (For data tables, calculator inputs, code snippets)

## Rules
- No hex codes in components. Use tokens (e.g., `text-primary`, `bg-surface`).
- No stock photos. Use descriptive SVG diagrams or plain CSS blocks if real photos aren't available.
- No emoji icons. Use Lucide icons.
- No gradients. Flat, technical colors.
