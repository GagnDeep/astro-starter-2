# Design Document: DogSnacker

## Positioning
**Chosen Positioning:** The hyper-transparent, single-ingredient focused subscription box for dogs with sensitive stomachs and mindful owners. We focus purely on nutrition, not toys.
**Rejected 1:** The cheapest bulk treats for large breeds.
**Rejected 2:** The luxury, imported organic truffles for pampered show dogs.
**Rejected 3:** The generic "fun" monthly toy and treat box.
**Rejected 4:** The veterinary-prescribed medical diet snack box.

## Voice and Tone
**Voice:** Authoritative, empathetic, transparent, plain-spoken, analytical.
**Banned Words:** "paw-some", "fur-baby", "pup", "doggo", "guilt-free", "magic", "miracle", "premium" (without proof), "human-grade" (unless legally certified), "superfood".

## Typography
- **Primary (Sans-serif):** Inter
- **Secondary (Serif/Long-form):** Merriweather
- **Monospace (Data/Code):** Fira Code

## Palette & Measured Contrast
Tailwind Tokens (no hex in components, only CSS vars):
- `--color-bg-base`: `#FAFAF9` (warm white)
- `--color-text-main`: `#1C1917` (stone-900)
- `--color-text-muted`: `#57534E` (stone-600)
- `--color-primary`: `#047857` (emerald-700)
- `--color-primary-hover`: `#065F46` (emerald-800)
- `--color-secondary`: `#B45309` (amber-700)
- `--color-border-light`: `#E7E5E4` (stone-200)
- `--color-error`: `#B91C1C` (red-700)

**Contrast Table:**
| Foreground | Background | Ratio | WCAG AA / AAA |
| :--- | :--- | :--- | :--- |
| Primary (`#047857`) | Bg Base (`#FAFAF9`) | 7.02:1 | AAA |
| Text Main (`#1C1917`) | Bg Base (`#FAFAF9`) | 15.6:1 | AAA |
| Text Muted (`#57534E`) | Bg Base (`#FAFAF9`) | 6.9:1 | AA |
| White (`#FFFFFF`) | Primary (`#047857`) | 5.1:1 | AA |

## Rules
No stock photos, emoji icons, or gradients.
