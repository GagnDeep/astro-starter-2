# Design Rules for Institute for Tax

## Brand & Aesthetics
- **Colors**: Deep Navy (Trust, Finance) and Emerald Green (Money, Growth), with clean white/slate backgrounds.
- **Fonts**:
  - Headings: *Inter* or *Geist* (Clean, modern sans-serif).
  - Body: *Inter* or *Geist* (Highly readable).
- **Style**: Utilitarian, professional, fast. Zero glassmorphism. Zero excessive drop shadows. Zero stock photos of people shaking hands. Use abstract geometric shapes, charts, data visualizations, and licensed high-quality UI representations if needed. No emojis as icons. Use Lucide icons only.
- **Contrast**: Strictly WCAG AA compliant. Navy text on white, White text on Navy, Emerald Green buttons on Navy.

## CSS Tokens (Tailwind v4 in `src/styles/main.css`)
```css
@theme {
  --color-brand-navy: #0F172A;
  --color-brand-navy-light: #1E293B;
  --color-brand-emerald: #10B981;
  --color-brand-emerald-hover: #059669;
  --color-brand-slate: #64748B;
  --color-brand-light: #F8FAFC;
  --color-brand-white: #FFFFFF;

  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;

  --radius-button: 0.25rem;
  --radius-card: 0.5rem;
}
```

## Layout Blocks
1. **Header**: Clean, logo left, navigation right. Nav includes: Leads, Tools, Guides, Pricing. CTA: "Get Leads".
2. **Hero Section**: Left aligned text, form on the right (or inline). Direct, bold typography.
3. **Feature Grid**: 3-column layout using Lucide icons.
4. **Content Pages (Blog/Reference)**: Narrow reading column (max-w-2xl or max-w-3xl). Sidebar for desktop containing sticky capture form and table of contents.
5. **Footer**: 4 columns. 1: Brand/Logo/Address. 2: Leads (Taxonomy). 3: Resources (Guides, Tools, Glossary). 4: Legal/Contact.

## Mobile-First Rules
- Tap targets must be at least 44x44px.
- Navigation collapses to a hamburger menu using `<details>` or JS island.
- Padding: 1rem (4) on mobile, 2rem (8) on tablet, 4rem (16) on desktop.

## Image Policy
- All content images in `src/assets/images/`.
- Use Astro `<Image />` always.
- SVG vectors preferred for illustrations.
- OG images generated via `pnpm assets`.
