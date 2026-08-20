# DESIGN.md — ro.tax Design System & Visual Specification

**Brand Identity:** ro.tax
**Aesthetic Style:** Dark Neo-Brutalist Anti-Suit

---

## 1. Design Rationale & Identity Rules

`ro.tax` is engineered to visually distance itself from the beige, corporate, and overly polite design language of legacy accounting firms and traditional fintechs.

### Explicit Design Bans
- ❌ **NO Inter as Display Font**: Standard corporate Inter is strictly prohibited for display headings to avoid generic SaaS aesthetics.
- ❌ **NO Fintech Indigo / Corporate Blue**: Traditional bank blues `#1E40AF`, `#3B82F6`, or indigo gradients are banned.
- ❌ **NO Stock Photos**: No staged stock photos of people in suits shaking hands, smiling at laptops, or holding financial reports.
- ❌ **NO Emoji Icons**: Raw emojis (`🚀`, `💰`, `🔥`) are banned. Lucide vector icons (`@lucide/astro` and `lucide-react`) are used exclusively.
- ❌ **NO Gradients**: Multicoloured linear or radial gradients are banned. All surfaces use crisp solid colors and high-contrast borders.

---

## 2. Color Palette & WCAG AA Contrast Ratios

The palette is built on high-contrast Dark Neo-Brutalism using Void Charcoal backgrounds with Acid Neon Lime primary accents.

### Color Tokens

| Token Name | Hex Code | Role / Usage |
| :--- | :--- | :--- |
| `bg-base` | `#121316` | Main background color (Void Charcoal) |
| `bg-surface` | `#1C1D22` | Card, container, and table row background |
| `bg-surface-hover` | `#262830` | Hover state for interactive cards and rows |
| `accent-lime` | `#CCFF00` | Primary action buttons, badges, highlights |
| `accent-lime-hover` | `#B3E600` | Hover state for primary buttons |
| `text-main` | `#F4F5F7` | Primary body text and headings (Chalk White) |
| `text-muted` | `#9CA3AF` | Secondary labels, table headers, metadata (Zinc) |
| `border-subtle` | `#2E3038` | Card borders, dividers, table borders |
| `border-strong` | `#CCFF00` | High-contrast focused borders |
| `warning-red` | `#FF453A` | Strict tax penalty alerts, deadline warnings |

### WCAG AA / AAA Contrast Verification Table

All primary text and interactive combinations pass WCAG AA standards (4.5:1 minimum for regular text, 3:1 for large text) and WCAG AAA standards (7:1 minimum for regular text).

| Text Color | Background Color | Contrast Ratio | WCAG Rating | Primary Purpose |
| :--- | :--- | :--- | :--- | :--- |
| Chalk White (`#F4F5F7`) | Void Charcoal (`#121316`) | **16.2 : 1** | **Passes AAA** | Body copy & headlines |
| Acid Lime (`#CCFF00`) | Void Charcoal (`#121316`) | **14.8 : 1** | **Passes AAA** | Accents, badges & CTAs |
| Chalk White (`#F4F5F7`) | Surface (`#1C1D22`) | **14.9 : 1** | **Passes AAA** | Cards & table cell text |
| Acid Lime (`#CCFF00`) | Surface (`#1C1D22`) | **13.6 : 1** | **Passes AAA** | Card CTAs & highlights |
| Zinc Muted (`#9CA3AF`) | Void Charcoal (`#121316`) | **6.8 : 1** | **Passes AA (AAA Large)** | Metadata & secondary text |
| Crimson Alert (`#FF453A`) | Void Charcoal (`#121316`) | **4.8 : 1** | **Passes AA** | Statutory penalty warnings |
| Void Charcoal (`#121316`) | Acid Lime (`#CCFF00`) | **14.8 : 1** | **Passes AAA** | Primary CTA button text |

---

## 3. Typography & Tabular Numerals

### Font Families
- **Display Headings & Numerical Figures**: `JetBrains Mono`, `Space Mono`, or monospace fallback (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`).
- **Body Copy & Long-form Content**: `Plus Jakarta Sans`, system sans-serif fallback (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`).

### Tabular Numerals Rule (`tabular-nums`)
Every single numerical value across the site—including currency figures (`RON`), tax percentages (`10%`, `25%`), minimum wage bases (`4.050 RON`), thresholds (`24.300 RON`), deadlines, and dates—**MUST** use monospace font styling with tabular figures (`font-mono tabular-nums`). This prevents layout shifts when numbers change in dynamic calculators and ensures aligned columns in tax breakdown tables.

---

## 4. Design Tokens in Tailwind v4 Configuration

Tokens are declared as CSS custom properties in `@layer base` within `src/styles/main.css` and mapped into Tailwind v4's `@theme` block:

```css
@layer base {
  :root {
    --color-bg-base: #121316;
    --color-bg-surface: #1C1D22;
    --color-bg-surface-hover: #262830;
    --color-accent-lime: #CCFF00;
    --color-accent-lime-hover: #B3E600;
    --color-text-main: #F4F5F7;
    --color-text-muted: #9CA3AF;
    --color-border-subtle: #2E3038;
    --color-border-strong: #CCFF00;
    --color-warning-red: #FF453A;
  }
}

@theme {
  --color-bg-base: var(--color-bg-base);
  --color-bg-surface: var(--color-bg-surface);
  --color-bg-surface-hover: var(--color-bg-surface-hover);
  --color-accent-lime: var(--color-accent-lime);
  --color-accent-lime-hover: var(--color-accent-lime-hover);
  --color-text-main: var(--color-text-main);
  --color-text-muted: var(--color-text-muted);
  --color-border-subtle: var(--color-border-subtle);
  --color-border-strong: var(--color-border-strong);
  --color-warning-red: var(--color-warning-red);

  --font-mono: "JetBrains Mono", "Space Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --font-sans: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```

Components reference tokens via utility classes (e.g. `bg-bg-base`, `bg-bg-surface`, `text-text-main`, `text-text-muted`, `border-border-subtle`, `text-accent-lime`, `bg-accent-lime`), and **NEVER** use raw hex codes in markup.

---

## 5. Media & Asset Strategy

1. **Icons**: Exclusively imported inline SVGs from `@lucide/astro` (for Astro pages) and `lucide-react` (for the tax estimator island).
2. **Images**: Local graphics and illustrations stored in `src/assets/images/` and rendered with Astro's `<Image />` component.
3. **Favicons & Open Graph**: Brand mark source generated from `src/assets/brand/icon.svg` via `pnpm assets` to maintain strict pixel accuracy across 16x16, 32x32, 180x180, and 1200x630 share cards.
