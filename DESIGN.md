# Design System

**Art Direction**: Technical-brutalist. Functional, high information density, clear and precise.

**Palette (OKLCH)**:
- Three industry materials for inspiration: Acrylic (tank walls), Saltwater (ocean/reef), Live Rock (structural base).
- **Brand Hue**: Saltwater Blue (approx OKLCH 0.5 0.15 245) - used sparingly for key elements.
- **Supporting Hue**: Coralline Purple/Pink (approx OKLCH 0.55 0.18 340) - 95 degrees away, used for warnings or specific highlights.
- **Neutral Ramp**: Live Rock/Acrylic greys (chroma 0.01-0.03, slightly cool).

**Dark Mode**:
- Designed, not inverted.
- Surfaces use the brand hue at very low lightness (e.g., OKLCH 0.2 0.05 245), never pure #000.
- Accent chroma is raised for visibility.
- Shadows are replaced with a 1px top highlight.

**Typography**:
- Two self-hosted font families (excluding Inter, Poppins, Montserrat, Roboto, Open Sans, Lato).
  - *Display*: A structural sans-serif (e.g., Space Grotesk or similar technical face). Display at least clamp(2.75rem, 6vw, 5.5rem), line-height 0.95-1.05, tracking -0.02 to -0.035em.
  - *Body*: A legible text face (e.g., Lora, Libre Baskerville, or a clean sans like Work Sans). Body 17-19px, line-height 1.6, measure capped near 65ch.

**Layout & Composition**:
- At most half the sections on a page may be centred.
- Hero is asymmetric.
- Never use three identical feature cards. Use a bento grid with unequal spans, numbered editorial lists, or alternating full-width media rows.

**Motion**:
- One-shot scroll reveal (12-20px plus opacity, 300-500ms).
- Hover transitions <= 200ms.
- At most one ambient element. CSS only.
- Respect `prefers-reduced-motion: reduce`.
- CLS stays at zero.

**Banned Design Elements**:
- Purple or indigo gradients.
- Centred hero with two centred buttons.
- Glassmorphism.
- Emoji as icons.
- Uniform 8px radius everywhere.
- Gradient blobs.
- Fake avatars.
- "Get Started" as the only CTA.
- AI-generated 3D renders.
- Stock photos.
