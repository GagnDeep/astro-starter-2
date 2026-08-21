# DESIGN.md - Dubai US Capital

## Palette
- **Primary:** `#0f172a` (Slate 900) - Authoritative, conservative for main text, backgrounds, and primary buttons.
- **Secondary:** `#1e293b` (Slate 800) - For secondary backgrounds, cards, alternating sections.
- **Accent:** `#0284c7` (Light Blue 600) - For links, active states, and CTAs (provides excellent contrast on light backgrounds and decent on dark, but will manage).
- **Background:** `#f8fafc` (Slate 50) - Clean, off-white for main page backgrounds to reduce glare compared to pure white.
- **Text:** `#334155` (Slate 700) for body, `#0f172a` for headings.
- *Reasoning:* Financial advisory requires trust. Blue/Slate palettes convey professionalism and stability. We avoid glassmorphism and gradients as instructed.

## Typography
- **Headings:** `Inter` (sans-serif, highly legible, professional).
- **Body:** `Inter` (or similar system sans) - safe, readable, dense enough for financial content.
- *Mapping to Tailwind via CSS variables in main.css*.

## Imagery
- Licensed images to `src/assets/images/`.
- No stock photos, emoji icons, glassmorphism, or gradients.
- We will rely on typography, layout, data visualization (tables, charts), and high-quality localized property photography if possible (or map-based graphics).

## Components
- Reusable capture component with variants (inline, hero, footer).
- Tool components (Islands, React/Preact) with no-JS fallbacks.
- Tables for data presentation.
