# DESIGN: freefileform.com

## Palette & Fonts
- **Primary:** Deep Emerald (trust, money, stability)
- **Secondary:** Burnt Orange (warnings, alerts, CTA)
- **Background:** Off-white/Cream (reduces eye strain vs stark white)
- **Surface:** White (cards, content blocks)
- **Text:** Slate Gray (readable, softer than black)

### Tokens (CSS Vars)
```css
:root {
  --color-primary: 6 78 59; /* emerald-900 */
  --color-primary-light: 16 185 129; /* emerald-500 */
  --color-secondary: 234 88 12; /* orange-600 */
  --color-bg: 250 250 249; /* stone-50 */
  --color-surface: 255 255 255; /* white */
  --color-text: 30 41 59; /* slate-800 */
  --color-text-muted: 100 116 139; /* slate-500 */
  --color-border: 226 232 240; /* slate-200 */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

## Styling Rules
- **No hex codes anywhere.** Use `var(--color-primary)` or Tailwind arbitrary values like `bg-[rgb(var(--color-primary))]` (mapped to tailwind classes if we were using v3, but in v4 we use `@theme`).
- **No stock photos, emoji icons, glassmorphism, or gradients.**
- **Borders & Shadows:** Solid 1px borders `var(--color-border)`, sharp corners or slight rounding (2px), flat design. No heavy drop shadows, just subtle structural shadows.
- **Typography:** High contrast. Large readable body (18px+ on desktop).
