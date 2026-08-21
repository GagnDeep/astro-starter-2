# Phase 1: Design

## Palette
- **Primary**: Slate (Tailwind slate-900 to slate-50). Clean, professional, unopinionated.
- **Accent**: Emerald (Tailwind emerald-600). Trustworthy, action-oriented, distinct from Adobe Red.
- **Warning**: Amber (Tailwind amber-500).
- **Error**: Rose (Tailwind rose-600).
- **Background**: Slate-50.
- **Text**: Slate-900.

*Contrast verified: Emerald-600 on Slate-50 is > 4.5:1. Slate-900 on Slate-50 is > 7:1.*

**Tokens (mapped to Tailwind in main.css)**:
No raw hex codes allowed.
- `--color-primary`
- `--color-accent`
- `--color-bg`
- `--color-text`
- `--color-muted`

## Typography
- **Sans**: System fonts (San Francisco, Inter-like but Inter is banned! We will use default system sans-serif or maybe Roboto if needed, but system fonts are safer to avoid Inter). Let's use `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`.
- **Monospace**: For all numbers, financial figures, and rates: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`. Tabular nums enabled.

## Visual Rules
- NO gradients.
- NO glassmorphism.
- NO stock photography.
- NO emoji icons (use Lucide).
- All numbers use tabular monospace.
- Client islands must provide static HTML fallback.
