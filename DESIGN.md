# Design Law: Editorial/Swiss

## Art Direction
**Editorial/Swiss**. We need a clean, authoritative, citation-backed layout suitable for clinical environments. The emphasis is on readability, trust, and structure.

## Palette
- **Industry Materials**:
  - Medical scrubs (clinical trust)
  - EEG paste (conductive, clinical)
  - Research journals (paper, editorial)

- **OKLCH Hues**:
  - Brand hue (Medical scrub blue): `oklch(0.55 0.12 245)`
  - Supporting hue (30 degrees away, teal): `oklch(0.65 0.1 215)`
  - Neutral ramp (Journal paper / clinical grey): Chroma `0.02` based on hue `245`, never pure grey.

- The accent color will cover at most 10% of painted pixels.
- Dark mode is designed, not inverted: surfaces are the brand hue at low lightness, never #000; raise accent chroma; replace shadows with a 1px top highlight.

## Typography
- Two self-hosted font families (neither Inter, Poppins, Montserrat, Roboto, Open Sans, nor Lato):
  - **Display**: *Newsreader* (Serif for editorial authority)
  - **Body**: *Public Sans* (Clean, legible sans-serif for technical reading)
- Display scaling: `clamp(2.75rem, 6vw, 5.5rem)` with `line-height: 0.95-1.05` and tracking `-0.02` to `-0.035em`.
- Body: 17-19px at `line-height: 1.6`.
- Measure capped near `65ch`.

## Layout & Motion
- At most half the sections on a page may be centred, and the hero is asymmetric.
- Never three identical feature cards — use a bento with unequal spans, a numbered editorial list, or alternating full-width media rows.
- Motion: a one-shot scroll reveal (12-20px plus opacity, 300-500ms), hover transitions at or under 200ms, and at most one ambient element. CSS only. Everything inside prefers-reduced-motion: reduce. CLS stays at zero.

## Banned by Name
- Purple or indigo gradients
- A centred hero with two centred buttons
- Glassmorphism
- Emoji as icons
- A uniform 8px radius everywhere
- Gradient blobs
- Fake avatars
- "Get Started" as the only CTA
- AI-generated 3D renders
