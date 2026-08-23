# Design Specifications

## Art Direction

**Editorial/Swiss** - Justified by the need for high founder credibility, precision, and clarity. As a fractional CTO practice for RIAs, the site must exude technical competence without being overly "tech-bro." The Editorial/Swiss direction provides a clean, structured, and highly readable layout that emphasizes content, typography, and unembellished trust.

## Palette

Inspired by three real materials from the wealth management and technical advisory industry:

1. **Navy Wool Suit (Brand Hue):** `oklch(20% 0.05 250)` - Deep, authoritative blue representing professional trust.
2. **Server Rack Steel (Supporting Hue):** `oklch(35% 0.04 280)` - Technical infrastructure, exactly 30 degrees from the brand hue.
3. **Graphite/Ink (Neutral Ramp):** `oklch(15% 0.02 250)` to `oklch(95% 0.01 250)` - Not pure grey, maintaining a slight cool undertone.

## Typography

- **Headings/Display:** `Playfair Display` or `Merriweather` (Self-hosted) - Providing an editorial, authoritative tone. (Clamp: `clamp(2.75rem, 6vw, 5.5rem)`, LH: 0.95-1.05, Tracking: -0.02 to -0.035em).
- **Body:** `Work Sans` or `Chivo` (Self-hosted) - Clean, readable, and technical. (17-19px, LH: 1.6, Measure: capped near 65ch).

_(Note: Exact font files to be added in future steps. Excluded: Inter, Poppins, Montserrat, Roboto, Open Sans, Lato)._

## Motion & Dark Mode

- **Motion:** CSS only. One-shot scroll reveal (12-20px plus opacity, 300-500ms). Hover transitions <= 200ms. Respects `prefers-reduced-motion`.
- **Dark Mode:** Surfaces are the brand hue at low lightness (never #000). Accent chroma raised. Shadows replaced with a 1px top highlight.
