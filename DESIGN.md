# Design and Typography Guidelines

**Art Direction:**
Technical-brutalist. This aligns with the nature of a calculation and compatibility tool that needs to convey data and accuracy over mere aesthetics, focusing on utility, legible high-contrast layouts, and data sources for marine aquarists.

**Palette & Materials:**
- **Brand hue (Marine LED):** OKLCH(0.60 0.20 250)
- **Supporting hue (Reef Rock/Aragonite):** OKLCH(0.70 0.10 40)
- **Neutral ramp (Anodized Aluminum):** OKLCH 0.01-0.03 chroma.
- The accent covers at most a tenth of painted pixels.
- Dark mode is designed, not inverted: surfaces are the brand hue at low lightness, never `#000`; raise accent chroma; replace shadows with a 1px top highlight.
- Constraints: No purple/indigo gradients, no glassmorphism, no uniform 8px radius, no gradient blobs. No emoji as icons.

**Typography:**
- Two self-hosted families (excluding Inter, Poppins, Montserrat, Roboto, Open Sans, Lato).
  - e.g., Geist or Fira Code for technical data, combined with a sharp sans.
- Display: at least clamp(2.75rem, 6vw, 5.5rem) with line-height 0.95-1.05 and tracking -0.02 to -0.035em.
- Body: 17-19px at line-height 1.6, measure capped near 65ch.
