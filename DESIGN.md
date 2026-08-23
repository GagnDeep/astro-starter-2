# Design Specifications

## Art Direction
Editorial/Swiss — A structured, publication-style approach with authoritative typography, asymmetric hero sections by default, and a focus on clarity for a technical audience.

## Palette (Industry Materials)
1. **Bond Paper (Neutral Base)**
   - OKLCH: ~98% lightness, very low chroma (0.01 - 0.02)
   - Color: Off-white/Cream
2. **Fountain Pen Ink (Brand Hue)**
   - OKLCH: Low lightness, moderate chroma
   - Color: Deep Blue/Charcoal (e.g., `#1c2526`)
3. **Brass/Manila Folder (Supporting Hue)**
   - OKLCH: 30-60 degrees away from the brand hue
   - Color: Muted Gold/Tan (e.g., `#a49377`)

## Font Families
1. **Display:** A serif or structured sans (not Inter, Poppins, Montserrat, Roboto, Open Sans, or Lato).
   - Display scaling: `clamp(2.75rem, 6vw, 5.5rem)`
   - Line-height: `0.95-1.05`
   - Tracking: `-0.02em` to `-0.035em`
2. **Body:** A readable serif or sans.
   - Size: `17-19px`
   - Line-height: `1.6`
   - Measure: capped near `65ch`
