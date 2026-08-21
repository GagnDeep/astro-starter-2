# DESIGN.md

## Voice Rules
- **Tone:** Empathetic, scientific, clear, authoritative but accessible.
- **Banned words:** "Cure", "Magic", "Miracle", "Tummy", "Poop" (use stool/bowel movement), "Cleanse", "Detox", "Sufferer" (use 'people managing IBS').

## Palette & Fonts
- **Palette Reasoning:** Gut health apps often use clinical blues or unappetizing browns. We will use a calming, nature-inspired palette (sage greens, slate blues, off-whites) to reduce the anxiety associated with symptom tracking, while maintaining high contrast for accessibility.
- **Tokens (mapped to Tailwind CSS vars):**
  - `--color-primary-500`: #4A7C59 (Sage Green - calming, nature)
  - `--color-primary-700`: #2F4F38 (Deep Green - high contrast text)
  - `--color-secondary-500`: #5C7A99 (Slate Blue - clinical trust)
  - `--color-background`: #F9FAFB (Off-white - soft on eyes)
  - `--color-surface`: #FFFFFF
  - `--color-text-main`: #111827 (Near black - legible)
  - `--color-text-muted`: #4B5563 (Dark gray)
  - `--color-error`: #DC2626 (Clear error states)
- **Contrast Check:** #2F4F38 on #F9FAFB is > 7:1 (WCAG AAA). #111827 on #FFFFFF is > 14:1.
- **Fonts:**
  - Headings: *Inter* (Clean, modern, highly legible).
  - Body: *Inter* (Consistent, excellent mobile readability).
  - *No system-ui fallbacks needed if Inter is loaded, but we'll use Tailwind defaults as fallbacks.*

## Restrictions
- No stock photos of smiling people eating salad.
- No emoji icons (use Lucide).
- No glassmorphism or gradients.
- Licensed images in `src/assets/images`, real alt text.
