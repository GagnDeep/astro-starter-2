# Design Specifications

## Art Direction: Technical-Brutalist
The design follows a Technical-Brutalist direction, utilizing industrial cues such as bold contrasting areas, precision geometry, and a material-focused aesthetic suitable for a hardware supply chain database. The UI focuses on clarity and data density rather than ambient flourish.

## Palette
The color palette draws inspiration from industrial hardware materials commonly found in humanoid robotics:
1. **Brand Accent (Copper):** Representing electrical traces and motor windings.
2. **Support Accent (Anodized Aluminum):** Representing structural chassis elements.
3. **Neutral Ramp (Carbon Fiber/Steel):** A neutral gray sequence, never pure black or gray, constructed around chroma 0.01-0.03.

The dark mode does not invert but designs its surfaces starting from very low lightness, avoiding pure `#000000`.

## Typography
Two primary, self-hosted web fonts will be used, avoiding common defaults like Inter, Roboto, or Open Sans.
- **Display Font:** A technical and structured sans-serif, using a tight track (`-0.02` to `-0.035em`) and line heights of `0.95` to `1.05`, clamping from `2.75rem` up to `5.5rem`.
- **Body Font:** A highly legible monospaced or geometric sans for data accuracy, at `17-19px` with a line-height of `1.6`, capping line measure around `65ch`. Numbers will use tabular monospace for alignment in technical tables.

## Constraints
- Max half of the sections can be centered. Heroes must be asymmetric.
- Do not use 3 identical feature cards.
- Motion is strictly CSS-based one-shot scroll reveals or fast hover transitions (<= 200ms).
- Banned visual effects: purple/indigo gradients, 8px uniform borders everywhere, glassmorphism, gradient blobs.
