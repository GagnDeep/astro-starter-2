# Design Standards

## Art Direction
**Direction chosen:** Editorial/Swiss
- Justification: Given the authoritative name "Institute of Restaurants" and the need for clear, unbiased technical evaluation, an Editorial/Swiss direction provides a credible, structured, and highly legible foundation. It relies on strong typography, asymmetric grids, and clear hierarchy rather than heavy styling or decoration.

## Palette
**Inspiration (Industry Materials):**
1. **Stainless Steel (Prep Tables)** -> Neutral Ramp
2. **Copper (Cookware)** -> Brand Hue
3. **Receipt Paper (Thermal Blue)** -> Supporting Accent Hue

**OKLCH Values (Approximate):**
- Brand Hue (Copper): ~`oklch(60% 0.15 45)`
- Supporting Hue (Thermal Blue - ~45-60 deg away): ~`oklch(60% 0.12 250)`
- Neutral Ramp: Chroma 0.01-0.03 (e.g., `oklch(95% 0.02 260)` to `oklch(20% 0.02 260)`). Never pure grey `#000`/`#fff`.
- *Note:* The accent covers at most a tenth of painted pixels. Dark mode surfaces must use the brand hue at low lightness, replacing shadows with a 1px top highlight.

## Typography
**Two Self-Hosted Families (Avoiding banned defaults):**
1. **Display:** A sturdy sans-serif or refined serif (e.g., *Fraunces* or *Public Sans*, tbd based on self-hosting).
   - Display settings: `clamp(2.75rem, 6vw, 5.5rem)`, `line-height` 0.95-1.05, `tracking` -0.02 to -0.035em.
2. **Body:** A highly readable counterpart (e.g., *Crimson Pro* or *Chivo*).
   - Body settings: 17-19px at `line-height` 1.6; measure capped near 65ch.

## Banned Items & Rules
- NO purple or indigo gradients.
- NO centred heroes with two centred buttons.
- NO glassmorphism.
- NO emoji as icons (use Lucide/Astro-icon).
- NO uniform 8px radius everywhere.
- NO gradient blobs.
- NO fake avatars/testimonials.
- NO "Get Started" as the sole CTA.
- NO AI-generated 3D renders.
- Max 50% of sections centred; hero is asymmetric (fits Swiss). No three identical feature cards (use bento or alternating rows).
