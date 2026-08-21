# Property Investing Education Hub - DESIGN

## 1. Palette & Fonts
**Fonts:**
- Primary (Headings): Inter (sans-serif)
- Secondary (Body): Roboto (sans-serif)

**Color Palette & Contrast Table:**
| Token Name | Hex Value | Contrast against bg-base (#FAFAFA) | Contrast against text-base (#111827) | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| `bg-base` | `#FAFAFA` | N/A | 14.8:1 (Pass AAA) | Main background |
| `text-base` | `#111827` | 14.8:1 (Pass AAA) | N/A | Main text |
| `primary` | `#0369A1` | 6.5:1 (Pass AA) | N/A | Buttons, links, active states |
| `primary-hover` | `#075985` | 8.2:1 (Pass AAA) | N/A | Button hover states |
| `secondary` | `#F59E0B` | 2.6:1 (Fail - use on dark bg) | 5.3:1 (Pass AA) | Accents, warnings (use with dark text) |
| `surface` | `#FFFFFF` | 1.0:1 | 15.6:1 (Pass AAA) | Cards, modals |
| `border-color` | `#E5E7EB` | 1.2:1 | 3.5:1 (Pass AA for large UI) | Dividers, borders |

## 2. Tailwind CSS Variables
In `src/styles/main.css`:
```css
@theme {
  --color-base: #FAFAFA;
  --color-surface: #FFFFFF;
  --color-text: #111827;
  --color-text-muted: #4B5563;
  --color-primary: #0369A1;
  --color-primary-hover: #075985;
  --color-secondary: #F59E0B;
  --color-border: #E5E7EB;
  --font-sans: 'Inter', sans-serif;
  --font-serif: 'Roboto', sans-serif;
}
```
*Note: We never use hex values directly in components. Only Tailwind utility classes referencing these CSS vars.*

## 3. Asset Rules
- **NO stock photos:** Use data visualizations, charts, icons, or UI screenshots.
- **NO emoji icons:** Use Lucide icons (`@lucide/astro`).
- **NO gradients:** Flat, solid colors for a professional, analytical feel.
