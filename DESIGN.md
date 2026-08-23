# DESIGN

**Art Direction:** Editorial/Swiss
- Justification: Compliance material demands authoritative clarity. A strict, grid-based layout with high typographic rigor communicates accuracy and trustworthiness for finance and sustainability leads dealing with dense regulatory texts.

**Palette (OKLCH based on three industry materials):**
- **Brand Hue:** Recycled Paper (Warm beige/off-white)
- **Supporting Hue:** CARB Blue (Official regulatory blue, 30-60 degrees offset)
- **Neutral Ramp:** Slate/Graphite (Neutral gray with 0.01-0.03 chroma, derived from carbon/graphite)

**Typography:**
- **Display Family:** A robust, geometric sans-serif (e.g., Space Grotesk or a geometric alternative). Clamp(2.75rem, 6vw, 5.5rem), line-height 0.95-1.05, tracking -0.02 to -0.035em.
- **Body Family:** A high-legibility transitional serif or clean sans (e.g., Lora or similar self-hosted). 17-19px, line-height 1.6, measure capped near 65ch.
- *(Note: Inter, Poppins, Montserrat, Roboto, Open Sans, Lato are banned.)*

**Dark Mode:**
- Surfaces use the brand hue at very low lightness (not #000).
- Elevated chroma for accents.
- Shadows replaced with a 1px top highlight.

**Layout & Motion:**
- At most half of the sections on a page can be centered.
- Asymmetric hero sections matching the Swiss aesthetic.
- No three identical feature cards side-by-side (use bento or alternating rows).
- Motion is strictly CSS-only: a single one-shot scroll reveal (12-20px up + opacity, 300-500ms), hover states <= 200ms. Everything respects `prefers-reduced-motion: reduce`.