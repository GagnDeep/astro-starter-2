# Design Law

**Art Direction:**
Warm-organic. We want to evoke a friendly, comforting, kitchen-safe feeling for anxious dog owners, while remaining structured enough for recipe instructions and veterinary credibility.

**Palette & Materials:**
OKLCH based.
1. **Brand Hue:** Baked biscuit / Sweet potato (Warm orange/amber) - `oklch(0.65 0.15 45)`
2. **Supporting Hue:** Fresh herb / Vet scrub (Muted sage/teal, 60 degrees away) - `oklch(0.7 0.08 160)`
3. **Neutral Ramp:** Stainless steel bowl (Desaturated greys, chroma 0.01-0.02) - `oklch(0.95 0.01 260)` to `oklch(0.2 0.02 260)`
*The accent hue will cover at most 10% of painted pixels.*

**Typography:**
1. **Heading/Display:** A warm, robust serif (e.g., Lora or Merriweather) to give editorial authority.
2. **Body:** A clean, readable sans-serif (e.g., system UI or a self-hosted humanist sans, avoiding banned fonts like Inter or Roboto).
- Display text at least `clamp(2.75rem, 6vw, 5.5rem)`, line-height 0.95-1.05, tracking -0.02 to -0.035em.
- Body text 17-19px, line-height 1.6, measure capped near 65ch.
