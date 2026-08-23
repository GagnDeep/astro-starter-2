# DESIGN

## Art Direction
**Technical-brutalist**
We chose a Technical-brutalist style to convey authority, precision, and trust for RIA and wealth-management firms handling sensitive data. It emphasizes structure, stark contrast, and no-nonsense typography, avoiding gradients, blobs, or soft glassmorphism.

## Palette
The color scheme is derived from the real-world materials and concepts native to the industry:
- **Server Rack Steel (Brand Hue):** A dark, structural hue grounding the site (OKLCH: 30% lightness, 0.05 chroma, 250 hue) - `#1E293B`.
- **Ledger Paper (Neutral Ramp):** Off-white base with very low chroma, avoiding pure grays to maintain organic readability (OKLCH: 98% lightness, 0.02 chroma, 90 hue) - `#FAFAF9`.
- **Audit Ink (Supporting Accent):** A sharp, high-contrast hue used sparingly (max 10% of painted pixels) for CTAs and critical data visualization (OKLCH: 65% lightness, 0.2 chroma, 290 hue). It is strictly kept 40 degrees away from the brand hue to enforce the 30-60 degree separation constraint.

## Typography
The site uses two self-hosted font families to establish a serious, professional tone. Avoid generic defaults like Inter, Poppins, Roboto, etc.
- **Display Font:** `Cabinet Grotesk` (or equivalent strong sans). Features tracking at -0.02em to -0.035em and tight line-height (0.95 - 1.05). Sized responsively `clamp(2.75rem, 6vw, 5.5rem)`.
- **Body Font:** `Sentient` (or equivalent serif) to bridge technical rigidity with traditional wealth-management authority. Sized at 17-19px with line-height 1.6 and measure capped near 65ch.
