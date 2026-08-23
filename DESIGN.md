# Design Law

## Art Direction
**Technical-brutalist**
*Justification:* For a privacy-led DNA testing site, a Technical-brutalist approach conveys an unvarnished, transparent, and objective tone. It eschews superficial polish (which could be perceived as marketing fluff or obfuscation) in favor of stark clarity, matching the seriousness of genetic data privacy and the clinical nature of the analysis.

## Palette
- **Industry Materials:**
  - Laboratory steel (neutral, sterile)
  - Reagent blue (chemical indicator)
  - Safety warning orange (data alert/risk)

- **OKLCH Hues:**
  - **Brand Hue:** Reagent Blue (e.g., `oklch(0.55 0.15 250)`)
  - **Supporting Hue:** Safety Orange (30-60 degrees away or complementary, e.g., `oklch(0.65 0.18 45)`)
  - **Neutral Ramp:** Chroma between 0.01-0.03, derived from laboratory steel, avoiding pure grey (e.g., `oklch(0.9 0.01 260)` to `oklch(0.2 0.02 260)`).

## Font Families
- **Display Font:** `Space Grotesk` (Technical, structural, geometric but legible).
  - Size: `clamp(2.75rem, 6vw, 5.5rem)`
  - Line-height: `0.95-1.05`
  - Tracking: `-0.02 to -0.035em`
- **Body Font:** `IBM Plex Sans` (Highly legible, clinical yet approachable, excellent for dense technical text).
  - Size: `17-19px`
  - Line-height: `1.6`
  - Measure capped near `65ch`
