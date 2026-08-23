# Design

## Art Direction
**Technical-brutalist**. This direction reflects the industrial, precision-engineering nature of wire harness manufacturing, focusing on clear forms, high utility, and strict structural layouts.

## Materials & Palette
Three real industry materials define our palette in OKLCH:

1. **Brand Hue: Kapton Polyimide Tape (Amber/Orange)**
   - OKLCH: `oklch(0.65 0.20 45)` - high visibility, technical signaling.
2. **Supporting Hue: Copper Core (Warm Metallic)**
   - OKLCH: `oklch(0.55 0.12 35)` - structural warmth, supportive and 30-60 degrees away.
3. **Neutral Ramp: Extruded PVC / Teflon (Dark Industrial Grey)**
   - OKLCH: `oklch(0.15 0.02 260)` to `oklch(0.95 0.01 260)` - never pure grey, slightly cool industrial tint at chroma 0.01-0.03.

Dark mode surfaces will use the brand neutral hue at low lightness, never `#000`.

## Typography
1. **Display:** *Bebas Neue* (or similar self-hosted structural/industrial sans).
   - Display clamp: `clamp(2.75rem, 6vw, 5.5rem)`
   - Line-height: `0.95-1.05`
   - Tracking: `-0.02 to -0.035em`
2. **Body:** *Chivo* (or similar self-hosted highly legible workhorse sans).
   - Body size: `17-19px`
   - Line-height: `1.6`
   - Measure capped near `65ch`
   - Neither of these are Inter, Poppins, Montserrat, Roboto, Open Sans, or Lato.