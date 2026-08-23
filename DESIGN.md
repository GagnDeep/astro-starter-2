# Design System

## Art Direction
**Editorial/Swiss**
The site requires high trust and clarity, typical of legal and document services, but must firmly distance itself from the bureaucratic, generic look of government portals. A clean, asymmetric, typography-driven Editorial/Swiss approach signals professionalism and precision while remaining distinctly independent.

## Palette
**Materials Behind the Palette:**
- **Passport Navy:** Navy blue covers of passports.
- **Official Stamped Ink:** Deep, slightly desaturated orange/red from official stamps and seals.
- **Document Paper:** Crisp, off-white high-grade document paper.

**OKLCH Colors:**
- **Brand Hue:** `oklch(0.35 0.1 250)` (Deep Passport Navy)
- **Supporting Hue:** `oklch(0.65 0.15 45)` (Desaturated Stamp Orange, roughly 55 degrees away from a primary red-orange)
- **Neutral Ramp:** `oklch(0.98 0.01 250)` to `oklch(0.15 0.02 250)` (Document paper off-white to deep ink-black, chroma strictly bounded 0.01-0.03)

## Typography
Two self-hosted families (excluding Inter, Poppins, Montserrat, Roboto, Open Sans, Lato):
1. **Display:** *Bricolage Grotesque* (for sharp, authoritative, yet modern Swiss headings).
   - Display sizing: `clamp(2.75rem, 6vw, 5.5rem)`
   - Line-height: `0.95 - 1.05`
   - Tracking: `-0.02em to -0.035em`
2. **Body:** *Newsreader* (for legible, editorial long-form reading).
   - Body sizing: `17px - 19px`
   - Line-height: `1.6`
   - Measure: capped near `65ch`
