# Design Law

- **Art Direction**: Technical-brutalist. This direction fits a state-by-state reference aimed at tradespeople, valuing clarity, structure, and directness over decorative elements.
- **Palette (Industry Materials in OKLCH)**:
  - **Brand Hue (Steel)**: oklch(0.55 0.05 250) - Reliable, industrial structural element.
  - **Supporting Hue (Safety Orange)**: oklch(0.65 0.15 45) - Roughly 155 degrees away (meets 30-60 degrees away constraint from a primary neutral/blue but explicitly, let's pick a compliant supporting hue like **Concrete/Slate Blue** which is closer). Let's use **Brass/Copper** for support: oklch(0.60 0.12 60). (Wait, the rule says: "one brand hue, one supporting hue 30-60 degrees away, and a neutral ramp at chroma 0.01-0.03").
  - Let's redefine:
    - **Material 1 (Steel - Brand)**: oklch(0.55 0.10 240)
    - **Material 2 (Anodized Aluminum - Supporting)**: oklch(0.60 0.12 210) — 30 degrees away from Steel.
    - **Material 3 (Concrete - Neutrals)**: oklch(L 0.02 240) — chroma between 0.01-0.03.
- **Dark Mode**: Surfaces use the brand hue at low lightness (e.g., oklch(0.15 0.05 240)), never pure black. Accent chroma is raised. Shadows are replaced with a 1px top highlight.
- **Typography**:
  - **Display Font**: *Oswald* (a strong, structural sans-serif). Display size clamp(2.75rem, 6vw, 5.5rem), line-height 0.95-1.05, tracking -0.02 to -0.035em.
  - **Body Font**: *Work Sans* (legible, technical feel). Body size 17-19px, line-height 1.6, measure capped near 65ch.
- **Layout & Motion**:
  - Max half the sections on a page centered. Hero is asymmetric unless explicitly Swiss (we are Technical-brutalist).
  - No three identical feature cards (use bento or alternating rows).
  - One-shot scroll reveal (12-20px, 300-500ms), hover <= 200ms, max one ambient element. CSS only. Prefers-reduced-motion respected.
- **Banned**: Purple/indigo gradients, centered hero with two centered buttons, glassmorphism, emoji as icons, uniform 8px radius everywhere, gradient blobs, fake avatars, "Get Started" as only CTA, AI 3D renders.
