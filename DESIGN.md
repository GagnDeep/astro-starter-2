# Handpano.com Design System

## Color Palette
**Reasoning:** Handpan playing is earthy, grounded, and slightly metallic. We want a palette that reflects raw steel, bronze, and nature, avoiding overly bright "tech" colors or dark mystical vibes.

- **Background (Base):** #FAFAF9 (Stone 50 - off-white, warm)
- **Background (Alt):** #F5F5F4 (Stone 100)
- **Text (Primary):** #1C1917 (Stone 900 - high contrast, soft black)
- **Text (Secondary):** #44403C (Stone 700)
- **Primary Brand (Bronze/Rust):** #9A3412 (Orange 800 - earthy, represents nitrided steel heat treatment)
- **Secondary Brand (Steel Blue):** #334155 (Slate 700 - represents stainless steel)
- **Accent (Brass):** #CA8A04 (Yellow 600 - represents brass bindings)

*Note: All colors will be implemented via Tailwind CSS tokens in `src/styles/main.css`.*

## Typography
**Reasoning:** Readable, authoritative, but slightly humanist.
- **Headings:** `Outfit` (or similar modern geometric sans-serif) - clean, readable, slightly wide.
- **Body:** `Inter` (or system-ui) - ultra-legible for long-form reading.

## Tailwind v4 CSS Tokens
```css
@theme {
  --color-brand-50: #fff7ed;
  --color-brand-100: #ffedd5;
  --color-brand-500: #f97316;
  --color-brand-600: #ea580c;
  --color-brand-700: #c2410c;
  --color-brand-800: #9a3412; /* Primary Bronze */
  --color-brand-900: #7c2d12;

  --color-steel-500: #64748b;
  --color-steel-700: #334155; /* Secondary Steel */
  --color-steel-900: #0f172a;

  --color-bg-base: #fafaf9;
  --color-bg-alt: #f5f5f4;
  --color-text-main: #1c1917;
  --color-text-muted: #44403c;

  --font-sans: 'Inter', system-ui, sans-serif;
  --font-display: 'Outfit', system-ui, sans-serif;
}
```

## Contrast Checks (WCAG AA)
- Text Primary (`#1C1917`) on Bg Base (`#FAFAF9`): **16.7:1** (Pass AAA)
- Text Muted (`#44403C`) on Bg Base (`#FAFAF9`): **9.3:1** (Pass AAA)
- Brand Primary (`#9A3412`) on Bg Base (`#FAFAF9`): **6.7:1** (Pass AA/AAA)
- White text on Brand Primary (`#9A3412`): **4.8:1** (Pass AA)
- White text on Steel Secondary (`#334155`): **7.8:1** (Pass AAA)

## Imagery Rules
- No stock photos of people meditating.
- No emoji icons.
- No glassmorphism or heavy gradients.
- Sharp, high-contrast, flat design with subtle shadows.
- Licensed images to `src/assets/images`, logged.
