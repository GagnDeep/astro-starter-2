# Design Standards: Institute of Neurofeedback

## Art Direction
**Technical-brutalist**
The site is for researchers, clinicians, and patients seeking factual, citation-backed information. The technical-brutalist approach strips away marketing fluff and visually communicates rigor, clarity, and uncompromising honesty. It eschews rounded, friendly aesthetics in favor of sharp, functional, data-first presentations.

## Palette
**Materials Behind the Palette**
1. **Medical Scrub Blue** (representing clinical environments)
2. **EEG Gel White/Silver** (representing the equipment and conductivity)
3. **Graphite/Lead** (representing data readouts and sensors)

**OKLCH Colors**
- **Brand Hue:** `oklch(0.65 0.15 250)` (Clinical Blue)
- **Supporting Hue:** `oklch(0.7 0.12 210)` (Cool Silver/Teal - 40 degrees away from Brand Hue)
- **Neutral Ramp:** Chroma 0.01-0.03, derived from `oklch(0.95 0.01 250)` to `oklch(0.15 0.02 250)` (Graphite scales, avoiding pure grey).

## Typography
**Two Self-Hosted Families**
- **Display:** `Space Grotesk` (For headings and data-driven callouts, providing a strict, measured feel).
  - Rules: `clamp(2.75rem, 6vw, 5.5rem)`, `line-height: 1.05`, `letter-spacing: -0.03em`.
- **Body:** `Merriweather` (To signify editorial authority, reading comfort for long-form research reviews).
  - Rules: `18px`, `line-height: 1.6`, measure capped at `65ch`.

## Layout Rules
- Centered sections are strictly limited to a maximum of 50% per page.
- Hero sections are asymmetric to match the Technical-brutalist direction.
- No identical feature cards; bento layouts, numbered lists, or alternating media rows must be used.
- Dark mode is designed: surfaces use low-lightness brand hues (e.g., `oklch(0.2 0.03 250)`), never `#000`. Accent chroma increases. Shadows are replaced by 1px top highlights.
- Motion: Scroll reveal (15px + opacity, 400ms), hover transitions <=200ms. CSS only, respects `prefers-reduced-motion`.
- Prohibitions: No gradients (purple/indigo), glassmorphism, emoji icons, uniform 8px radii, fake avatars, or AI 3D renders.
