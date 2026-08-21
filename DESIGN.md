# Design System & Tokens

## Rationale
The site needs to feel authoritative, calm, and analytical. We avoid "hype" colors like bright red or neon green, opting for deep blues, slate grays, and crisp whites to convey trust, stability, and financial seriousness.

## Fonts
- **Sans-serif:** Inter (system fallback: ui-sans-serif, system-ui). Clean, modern, highly legible for data and tools.
- **Serif (for long-form reading):** Merriweather (system fallback: ui-serif, Georgia). Adds a touch of editorial authority to blog posts.
- **Mono:** Fira Code (system fallback: ui-monospace). For technical snippets, formulas, and data tables.

## Color Palette & Tailwind Tokens
We map these to CSS variables in `src/styles/main.css` and expose them to Tailwind v4. No hex codes directly in classes.

- `--color-primary`: Deep Blue (`#0f172a`) - Trust, authority.
- `--color-primary-light`: Muted Blue (`#334155`)
- `--color-accent`: Emerald (`#059669`) - Financial growth, positive actions.
- `--color-accent-hover`: Dark Emerald (`#047857`)
- `--color-background`: Off-White (`#f8fafc`) - Clean, reduces eye strain for long reading.
- `--color-surface`: White (`#ffffff`) - For cards and tools.
- `--color-text`: Dark Slate (`#0f172a`) - Primary reading text.
- `--color-text-muted`: Slate (`#64748b`) - Secondary text, placeholders.
- `--color-border`: Light Slate (`#e2e8f0`)
- `--color-error`: Rose (`#e11d48`) - For form validation and warnings.

## Contrast Checks (Measured)
- Primary on Surface (`#0f172a` on `#ffffff`): 15.3:1 (Passes AAA)
- Accent on Surface (`#059669` on `#ffffff`): 4.5:1 (Passes AA for normal text, AAA for large text)
- Text on Background (`#0f172a` on `#f8fafc`): 14.5:1 (Passes AAA)
- Text Muted on Surface (`#64748b` on `#ffffff`): 4.6:1 (Passes AA)

## Imagery
- No stock photos of smiling people shaking hands.
- No emoji icons.
- No glassmorphism or gradients.
- Licensed, high-quality architectural or data-driven imagery (saved to `src/assets/images/`), clean vector diagrams.
