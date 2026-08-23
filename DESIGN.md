# Design Specifications

- **Art Direction:** Technical-brutalist.
- **Palette (Industry Materials):**
  - *Ledger Paper (Brand Hue):* oklch(0.98 0.02 95)
  - *Bloomberg Terminal Accent (Supporting Hue):* oklch(0.75 0.15 65)
  - *Accounting Ink (Neutral):* oklch(0.65 0.12 215)
- **Typography:**
  - *Headings:* Space Grotesk
  - *Body Text:* IBM Plex Mono
- **Dark Mode:** Designed manually. Surfaces use the brand hue at low lightness (never pure #000), raised accent chroma, and shadows replaced with a 1px top highlight.
- **Visuals:** Avoid banned visuals such as purple/indigo gradients, 2-button centered heroes, glassmorphism, emoji icons, uniform 8px radius, gradient blobs, fake avatars, AI 3D renders.
- **Motion:** CSS only, respecting `prefers-reduced-motion: reduce`. One-shot scroll reveal (12-20px plus opacity, 300-500ms), hover transitions ≤200ms, and at most one ambient element. CLS must stay at zero.
