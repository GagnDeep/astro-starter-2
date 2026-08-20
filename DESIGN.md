# Bro Tax — Design System, Tokens, & Style Guide

**Brand:** bro.tax
**Style Aesthetic:** Modern High-Contrast Utility / Clean Neo-Brutalist (Sharp borders, high legibility, deliberate dark/light contrast, zero corporate fluff).

---

## 1. Design Rationale & Rules

### 1.1 Aesthetic Reasoning
Bro Tax avoids the soft, forgettable "fintech indigo" gradients and rounded pastel cards used by traditional financial software. Instead, it adopts a high-contrast, editorial utility design inspired by developer documentation, high-end printing, and modern publishing. It conveys authority, speed, and uncompromising clarity.

### 1.2 Absolute Design Banned List
- **NO Inter as display font** (Inter is overused and signals generic corporate template).
- **NO Fintech Indigo / Soft Purple (#6366f1, #4f46e5)** (banned to differentiate from generic fintech apps).
- **NO Stock Photos** (no fake smiling models in suits or fake laptops with coffee cups).
- **NO Emoji Icons** (use clean, crisp Lucide SVG vector icons exclusively).
- **NO CSS Gradients** (use solid high-contrast borders and deliberate color surfaces).

---

## 2. Color Palette & WCAG AA Contrast Matrix

### 2.1 Palette Colors
- **Canvas / Background Primary:** Cream White (`#fbf9f5`)
- **Canvas / Background Secondary:** Warm Parchment (`#f2ede4`)
- **Canvas / Dark Surface:** Deep Charcoal (`#121316`)
- **Text Primary (Dark):** Pitch Black (`#0a0b0d`)
- **Text Secondary (Muted):** Muted Graphite (`#4a4e58`)
- **Accent Primary (Signal Green):** Vivid Acid Emerald (`#059669` / `#047857`)
- **Accent Highlighting (Tax Signal):** Electric Amber (`#d97706` / `#b45309`)
- **Border Default:** Sharp Charcoal (`#121316` at 100% or 15% opacity)

### 2.2 WCAG AA Contrast Ratios Matrix Table

| Text Element | Background Color | Hex Code Pair | Contrast Ratio | WCAG AA Status |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Text (`#0a0b0d`)** | Canvas Primary (`#fbf9f5`) | `#0a0b0d` on `#fbf9f5` | **18.2 : 1** | **PASS (AAA)** |
| **Primary Text (`#0a0b0d`)** | Canvas Secondary (`#f2ede4`) | `#0a0b0d` on `#f2ede4` | **16.5 : 1** | **PASS (AAA)** |
| **Secondary Text (`#4a4e58`)**| Canvas Primary (`#fbf9f5`) | `#4a4e58` on `#fbf9f5` | **8.4 : 1** | **PASS (AAA)** |
| **Light Text (`#fbf9f5`)** | Dark Surface (`#121316`) | `#fbf9f5` on `#121316` | **17.2 : 1** | **PASS (AAA)** |
| **Signal Green Text (`#047857`)**| Canvas Primary (`#fbf9f5`) | `#047857` on `#fbf9f5` | **5.2 : 1** | **PASS (AA)** |
| **Signal Amber Text (`#b45309`)**| Canvas Primary (`#fbf9f5`) | `#b45309` on `#fbf9f5` | **4.8 : 1** | **PASS (AA)** |
| **Button Text (`#fbf9f5`)** | Dark Button (`#121316`) | `#fbf9f5` on `#121316` | **17.2 : 1** | **PASS (AAA)** |

---

## 3. Typography & Monospace Rules

### 3.1 Font Stacks
- **Display Headings:** System Geometric Sans (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif`) with bold weight (`font-weight: 700` or `800`) and tight tracking (`tracking-tight`).
- **Body Text:** System UI Sans (`system-ui, -apple-system, BlinkMacSystemFont, sans-serif`) with high line height (`line-height: 1.6`).
- **Numerical & Financial Figures:** Monospace Stack (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`) with `font-variant-numeric: tabular-nums` enabled on EVERY tax dollar, percentage, rate, date, and calculation output.

### 3.2 Tabular Figures Rule
Every number in the UI (tax amounts, deductions, bracket percentages, dates) **MUST** use the `font-mono` class and `tabular-nums` property to ensure numbers align vertically without layout shifts.

---

## 4. CSS Custom Properties & Tailwind Token Declaration

All color tokens are declared in `src/styles/global.css` as CSS custom variables and mapped to Tailwind v4 `@theme` variables:

```css
:root {
  --color-bg-primary: #fbf9f5;
  --color-bg-secondary: #f2ede4;
  --color-bg-dark: #121316;
  --color-bg-accent: #047857;
  --color-bg-amber: #fef3c7;

  --color-text-primary: #0a0b0d;
  --color-text-secondary: #4a4e58;
  --color-text-inverse: #fbf9f5;
  --color-text-emerald: #047857;
  --color-text-amber: #b45309;

  --color-border-default: #121316;
  --color-border-subtle: #d8d2c6;
  --color-border-accent: #047857;

  --font-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}
```

### 4.1 Strict Component Rule
Components in `.astro` or `.tsx` **MUST NOT** contain raw hex values (e.g. `#121316` or `#059669`). All background, text, and border utilities must reference CSS custom properties or theme classes (e.g. `bg-[var(--color-bg-primary)]`, `text-[var(--color-text-primary)]`, `border-[var(--color-border-default)]`).

---

## 5. Asset & Image Strategy

### 5.1 Vector Assets in `src/assets/`
All visual diagrams, vector badges, and editorial illustrations are stored in `src/assets/` as clean, optimized SVG files:
- `src/assets/logo-bro-tax.svg` — Brand logo
- `src/assets/illustration-cpa-verified.svg` — CPA Verification Seal
- `src/assets/illustration-writeoffs.svg` — Write-off library diagram
- `src/assets/illustration-schedule-c.svg` — Schedule C audit kit graphic

### 5.2 Astro Image Processing
All image assets in Astro components are rendered using Astro's native image optimization:
```astro
---
import { Image } from 'astro:assets';
import logoSvg from '../assets/logo-bro-tax.svg';
---
<Image src={logoSvg} alt="bro.tax logo" width={160} height={40} />
```

---
*End of /DESIGN.md*
