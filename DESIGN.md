# Design System Specifications: doctorameena.com

## 1. Design Rationale & Color Palette

### 1.1 Palette Strategy: Warm, Authoritative, Evidence-Led
We strictly avoid "medical cyan/blue" and cold corporate hospital aesthetics. Instead, our design system draws inspiration from natural earth tones, warm alabaster, deep slate charcoal, and subtle sage. This palette evokes calm, warmth, and clinical precision.

- **Primary Brand / Deep Terracotta (`--color-terracotta`)**: Warm, rich, grounded reddish-earth tone. Communicates humanity, warmth, and strength without being aggressive.
- **Secondary Accent / Forest Sage (`--color-sage`)**: Calm, restorative botanical green. Represents vitality, healing, and organic balance.
- **Background / Warm Cream & Soft Sand (`--color-cream`, `--color-surface`)**: Comforting non-glare off-white background. Significantly easier on the eyes than harsh `#FFFFFF` when reading dense clinical content.
- **Text / Obsidian Charcoal (`--color-charcoal`)**: Deep warm slate-black (`#1E2229`). High-contrast, highly legible, softer than pure black.
- **Muted Border / Sandstone Gray (`--color-border`)**: Subtle warm border line for cards and dividers.

### 1.2 WCAG AA & AAA Color Contrast Table

| Element Pair | Foreground Color | Background Color | Contrast Ratio | WCAG Compliance Level |
|--------------|------------------|------------------|----------------|----------------------|
| **Body Text** | Charcoal (`#1E2229`) | Cream (`#FAF8F5`) | **14.2:1** | AAA Pass (Exceeds 7:1) |
| **Card Body Text** | Charcoal (`#1E2229`) | Soft Sand (`#F2EFE9`) | **13.5:1** | AAA Pass |
| **Primary Button Text** | Cream (`#FAF8F5`) | Terracotta (`#9C4A2F`) | **5.8:1** | AA Pass (Exceeds 4.5:1) |
| **Accent Text / Links** | Deep Terracotta (`#873E26`) | Cream (`#FAF8F5`) | **7.1:1** | AAA Pass |
| **Sage Badge Text** | Forest Green (`#1E3B2B`) | Soft Sage (`#E2EBE4`) | **8.2:1** | AAA Pass |
| **Footer Text** | Muted Slate (`#D1D5DB`) | Deep Charcoal (`#15181E`) | **9.1:1** | AAA Pass |

---

## 2. Typography Hierarchy & Rules

- **Display & Headings**: Serif typeface (**Playfair Display** or **Cormorant Garamond**). Gives an authoritative, editorial, humanistic doctor brand presence. **Inter as display is strictly prohibited.**
- **Body & Interface**: Clean, accessible sans-serif (**Plus Jakarta Sans** or **Outfit**). Excellent readability for dense medical explanations, tables, and form controls.

```css
:root {
  --font-serif: 'Playfair Display', Georgia, Cambria, serif;
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;

  /* Type Scale */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1.00rem;  /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.50rem;   /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3.00rem;   /* 48px */
}
```

---

## 3. Design Tokens (CSS Custom Properties)

Defined in `src/styles/global.css` and mapped into Tailwind v4 theme utility classes:

```css
@theme {
  --color-primary: var(--color-terracotta);
  --color-primary-hover: var(--color-terracotta-hover);
  --color-accent: var(--color-sage);
  --color-accent-light: var(--color-sage-light);
  --color-bg-main: var(--color-cream);
  --color-bg-surface: var(--color-surface);
  --color-text-main: var(--color-charcoal);
  --color-text-muted: var(--color-charcoal-muted);
  --color-line: var(--color-border);

  --font-display: var(--font-serif);
  --font-body: var(--font-sans);
}

:root {
  --color-terracotta: #9C4A2F;
  --color-terracotta-hover: #803B23;
  --color-sage: #3D6B52;
  --color-sage-light: #E8F0EC;
  --color-cream: #FAF8F5;
  --color-surface: #F2EFE9;
  --color-charcoal: #1E2229;
  --color-charcoal-muted: #525B68;
  --color-border: #E0DAD0;

  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-full: 9999px;

  --shadow-sm: 0 1px 2px 0 rgba(30, 34, 41, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(30, 34, 41, 0.08), 0 2px 4px -1px rgba(30, 34, 41, 0.04);
  --shadow-lg: 0 10px 15px -3px rgba(30, 34, 41, 0.1), 0 4px 6px -2px rgba(30, 34, 41, 0.05);
}
```

---

## 4. Photography Guidelines & SVG Placeholders

1. **Zero Generic Stock Doctor Models**: Stock photos of smiling models with stethoscope props or artificial laboratory scenes are strictly forbidden.
2. **Real Physician Representation**: Real photography of Dr. Ameena is used where available (`src/assets/dr-ameena-portrait.jpg`).
3. **Clinical Diagrams & Placeholders**: Where actual patient images do not exist, high-quality, warm vector illustrations and custom SVG diagnostic diagrams are generated (e.g. Thyroid ultrasound diagram, CGM sensor placement schematic, Bone density DEXA scale).
4. **Asset Optimization**: All raster image assets live under `src/assets/` and are rendered using Astro's native `astro:assets` (`<Image />` component) with mandatory explicit `alt` text and webp/avif conversion.

---

## 5. Print Stylesheet Specs (`@media print`)

When a patient prints a condition guide or consultation preparation checklist to bring to their appointment:

- Hides navigation header, sticky booking bar, footer, and interactive search triggers.
- Sets background to clean white (`#FFFFFF`) and body text to pure dark charcoal (`#000000`).
- Displays full URL alongside links: `a[href]::after { content: " (" attr(href) ")"; }`.
- Forces page breaks before major clinical section headings (`h2 { page-break-before: always; }`).
- Renders medical disclaimer and contact NAP prominently at the top of the printed document.

---

## 6. [NEEDS CONFIRMATION] Verification Audit List

To ensure zero invented credentials or fake claims, the following items are flagged with `[NEEDS CONFIRMATION]` until verified by Dr. Ameena's clinic staff:

1. `[NEEDS CONFIRMATION]` Medical School & Residency Graduation Years (e.g., UT Southwestern Medical Center, MD 2012).
2. `[NEEDS CONFIRMATION]` Exact Hospital Affiliations in Austin (e.g., St. David's Medical Center, Ascension Seton Medical Center Austin).
3. `[NEEDS CONFIRMATION]` Direct In-Clinic Ultrasound Machine Model & Biopsy Suite Equipment.
4. `[NEEDS CONFIRMATION]` Specific Accepted Insurance Network Sub-types (e.g., BCBS Blue Choice PPO vs. HMO Blue Texas).
5. `[NEEDS CONFIRMATION]` Patient Testimonials / Direct Quotes (Zero fake patient reviews used; placeholder patient quotes are marked as illustrative case examples).
