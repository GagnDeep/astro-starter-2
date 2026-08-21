# DESIGN.md

## Palette & Fonts

Fonts:

- Primary: Inter (sans-serif) for clean UI.
- Monospace: Fira Code for technical terms.

Palette:

- Primary: #2563EB (Blue 600) - trustworthy, action-oriented.
- Background: #FFFFFF (White)
- Surface: #F8FAFC (Slate 50)
- Text: #0F172A (Slate 900)
- Muted: #64748B (Slate 500)
- Border: #E2E8F0 (Slate 200)

Contrast checks:

- #2563EB on #FFFFFF: 4.5:1 (AA)
- #0F172A on #FFFFFF: 15.3:1 (AAA)
- #64748B on #FFFFFF: 4.5:1 (AA)

CSS Vars mapped to Tailwind in `src/styles/main.css`:

```css
@theme {
  --color-primary: #2563eb;
  --color-background: #ffffff;
  --color-surface: #f8fafc;
  --color-text-main: #0f172a;
  --color-text-muted: #64748b;
  --color-border-subtle: #e2e8f0;
}
```

Design Rules:

- No stock photos (use icons/diagrams).
- No glassmorphism.
- No gradients on backgrounds.
