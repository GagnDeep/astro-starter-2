# Design Standards

## Art Direction
**Editorial/Swiss** - Conveying high founder credibility, clarity, and precision. It focuses on well-structured typography, asymmetric layouts, and an objective, technical presentation.

## Materials & Palette
The palette is derived from three real materials relevant to handpan creation and editorial credibility, converted into OKLCH hues:
1. **Brand Hue:** Nitrided Steel (oklch(20% 0.05 250)) - reflecting the deep, resonant color of a treated handpan shell.
2. **Supporting Hue:** Brass/Bronze (oklch(65% 0.15 70)) - inspired by brass tuning marks or bronze variations, located ~180 degrees away for contrast (accenting max 10% of pixels).
3. **Neutral Ramp:** Hammered Iron (oklch(15% 0.02 250) to oklch(95% 0.01 250)) - neutral grays with a subtle blue/cool tint, avoiding pure gray.

## Typography
- **Display Font:** `Space Grotesk` (or fallback sans-serif) for high-impact headers.
  - Sizing: `clamp(2.75rem, 6vw, 5.5rem)`
  - Line-height: `0.95 - 1.05`
  - Tracking: `-0.02 to -0.035em`
- **Body Font:** `Merriweather` (or fallback serif) for editorial readability.
  - Sizing: `17-19px`
  - Line-height: `1.6`
  - Measure: capped near `65ch`
