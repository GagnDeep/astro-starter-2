# DESIGN.md: usignpdf.com

## Design System & Themes

**Color Palette:**
- Primary: #2563eb (Blue 600) - Trustworthy, standard for business tools.
- Primary Hover: #1d4ed8 (Blue 700)
- Secondary/Accent: #10b981 (Emerald 500) - Action, success (signed!).
- Background: #ffffff (White) - Clean document feel.
- Surface (Cards/Sections): #f8fafc (Slate 50)
- Surface Dark (Footer/Dark sections): #0f172a (Slate 900)
- Text Primary: #0f172a (Slate 900)
- Text Muted: #64748b (Slate 500)
- Border: #e2e8f0 (Slate 200)

**Typography:**
- Font Family: `Inter`, sans-serif (clean, highly readable, professional).
- Headings: Bold, tight letter spacing, Slate 900.
- Body: 16px base, 1.6 line height, Slate 700/500.

**Tokens (mapped to Tailwind CSS vars in main.css):**
```css
@theme {
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-accent: #10b981;
  --color-bg: #ffffff;
  --color-surface: #f8fafc;
  --color-surface-dark: #0f172a;
  --color-text: #0f172a;
  --color-text-muted: #64748b;
  --color-border: #e2e8f0;

  --font-sans: 'Inter', system-ui, sans-serif;
}
```

## UI Rules
- **No glassmorphism, no complex gradients.** Clean, flat or slightly shadowed cards.
- **Buttons:** Solid primary color, rounded-md, distinct hover states.
- **Spacing:** Generous padding (py-16 to py-24 for sections).
- **Images:** Professional, licensed assets in `src/assets/images`. Minimal abstract vectors, focus on UI screenshots or real people working.
- **Mobile First:** All forms and inputs must have 44px minimum tap targets.

## Component Strategy
- Extend `src/components/forms/capture-form.astro` for the various capture points.
- Create modular layout components for the homepage blocks (Hero, Features, Testimonial, CTA).
- Use Prose (`prose`) for blog posts and reference pages, heavily customized for readability.
