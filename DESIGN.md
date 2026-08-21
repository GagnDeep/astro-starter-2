# DESIGN.md

## Palette & Fonts
- Fonts: `Inter` for clean, readable UI (sans-serif). `Merriweather` for long-form blog content to improve readability.
- Colors (CSS Variables mapped to Tailwind):
  - Primary: `#0ea5e9` (Sky Blue - represents water and clarity)
  - Secondary: `#0284c7` (Deep Blue)
  - Background: `#ffffff` (White - minimalist)
  - Surface: `#f0f9ff` (Light Sky Blue for cards/sections)
  - Text Main: `#0f172a` (Slate 900)
  - Text Muted: `#64748b` (Slate 500)
  - Success: `#10b981` (Emerald)

## Rules
- No hex codes directly in classes. Use tokens.
- No stock photos with fake smiles; use clean diagrams, illustrations (SVG), or verified licensed images in src/assets.
- No glassmorphism, no gradients. Flat, clean, accessible design.
- Tap targets >= 44px. Mobile-first responsive.
- Accessibility: Contrast ratios must be > 4.5:1.

## Homepage Block Order
1. Hero: Clear value prop ("Simple hydration tracking without the gimmicks.") + Capture Form.
2. Problem/Solution: Desk workers forget to drink water; our reminders fix this.
3. Feature Grid: Simple logging, accurate calculations, privacy-first.
4. Social Proof: Testimonials from real users.
5. Interactive Teaser: Mini daily intake calculator widget.
6. Footer: Navigation and secondary capture.
