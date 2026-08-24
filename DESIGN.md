# Design Specifications

## Art Direction
Technical-brutalist — suitable for the regulatory, high-precision nature of battery passports and statutory compliance.

## Industry Materials & Palette (OKLCH)
- Brand Hue (Lithium Silver): High brightness, low chroma neutral.
- Supporting Hue (Copper): 30-60 degrees away, acting as a highlight or accent covering at most a tenth of painted pixels.
- Neutral Ramp (Graphite): Chroma 0.01-0.03, never pure gray.

## Fonts
- Display: Space Grotesk (self-hosted woff2)
- Body: IBM Plex Sans (self-hosted woff2)

*(Constraint check: None of the banned fonts (Inter, Poppins, Montserrat, Roboto, Open Sans, Lato) are used.)*

## Dark Mode
Dark mode surfaces must use the brand hue at low lightness (never #000), raised accent chroma, and 1px top highlight shadows instead of generic drop shadows.
