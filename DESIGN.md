# Design Law

**Art Direction:** Technical-brutalist.

**Palette:**
- Three industry materials: Anodised Aluminium (Neutral), Lithium (Accent), Raw Carbon (Dark Surface).
- OKLCH:
  - Brand Hue: Lithium Cyan (oklch(0.7 0.1 230))
  - Supporting Hue: Copper/Brass (oklch(0.65 0.12 45))
  - Neutral ramp: oklch(L 0.02 240) - chroma 0.01-0.03, never pure grey.
- The accent covers at most a tenth of painted pixels.
- Dark mode is designed, not inverted: surfaces are the brand hue at low lightness, never #000; raise accent chroma; replace shadows with a 1px top highlight.

**Typography:**
- Two self-hosted families (banned: Inter, Poppins, Montserrat, Roboto, Open Sans, Lato).
- Primary/Display: Space Grotesk
- Secondary/Body: IBM Plex Mono
- Display at least clamp(2.75rem, 6vw, 5.5rem) with line-height 0.95-1.05 and tracking -0.02 to -0.035em.
- Body 17-19px at line-height 1.6; measure capped near 65ch.

**Layout & Composition:**
- At most half the sections on a page may be centred.
- The hero is asymmetric.
- Never three identical feature cards — use a bento with unequal spans, a numbered editorial list, or alternating full-width media rows.
- Banned by name: purple or indigo gradients; a centred hero with two centred buttons; glassmorphism; emoji as icons; a uniform 8px radius everywhere; gradient blobs; fake avatars; "Get Started" as the only CTA; AI-generated 3D renders.

**Motion:**
- A one-shot scroll reveal (12-20px plus opacity, 300-500ms).
- Hover transitions at or under 200ms.
- At most one ambient element. CSS only. Everything inside prefers-reduced-motion: reduce.
- CLS stays at zero.
