# DESIGN: World AI School

## Palette & Fonts

- **Primary:** Deep Indigo (`var(--color-primary-600)`) - conveys trust, intelligence, and depth.
- **Secondary:** Teal (`var(--color-secondary-600)`) - fresh, modern, practical.
- **Background:** Slate 50 (`var(--color-slate-50)`)
- **Text:** Slate 900 (`var(--color-slate-900)`) for primary text, Slate 600 (`var(--color-slate-600)`) for secondary.
- **Fonts:** Inter (Sans-serif) for body text and headings. It is clean, readable, and highly professional. No fancy serifs; we are teaching practical tech skills.

## Contrast Table

- Deep Indigo on Slate 50: Pass (WCAG AAA)
- Teal on Slate 50: Pass (WCAG AA)
- Slate 900 on Slate 50: Pass (WCAG AAA)
- Slate 600 on Slate 50: Pass (WCAG AA)

## Design Rules

- No stock photos of "glowing brains" or "blue nodes connecting". Use clean UI screenshots, code snippets, or abstract geometric shapes (licensed to src/assets).
- No glassmorphism or gradients. Solid colors, clear borders.
- CSS variables mapped into Tailwind. No hardcoded hex values in HTML/components.
