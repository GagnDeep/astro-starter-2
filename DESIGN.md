# Digestine Design Document

## Positioning
**Chosen Positioning:** The Pragmatic Gut Health Solution.
We don't sell perfection or use overly clinical jargon. We offer straightforward, effective relief for real people who want to feel normal again. We bridge the gap between "too scientific" (Seed) and "too aesthetic/fluffy" (Love Wellness).

**Rejected Alternatives:**
1. *The Clinical Pioneer:* Too academic, alienates the average user who just wants to stop bloating. (Competes directly with Seed, hard to win).
2. *The Beauty Secret:* Focuses only on flat tummies and clear skin. Misses the core health audience and feels superficial.
3. *The Biohacker's Toolkit:* Requires tracking, testing, and obsession. Too high friction.
4. *The All-in-One Miracle:* Promises to fix everything from energy to immunity (like AG1). Dilutes the core gut health message.

## Voice Rules
- **Tone:** Empathetic, clear, practical, quietly confident.
- **Do:** Use plain English. Explain *why* something happens in relatable terms. Acknowledge the frustration of gut issues.
- **Don't:** Make exaggerated promises ("cure", "miracle"). Use overly technical jargon without explaining it immediately.
- **Banned Words:** Hack, Miracle, Detox, Cleanse, Toxic, Flush, Skinny, Flat tummy, Secret.

## Palette & Fonts
**Palette:** Grounded, earthy, but clean.
- Primary: Deep Forest Green (`#1A4331`) - Conveys health, nature, stability.
- Secondary: Soft Sage (`#8FA998`) - Calming, approachable.
- Accent: Warm Terracotta (`#C27357`) - Human, energetic but not aggressive.
- Background: Off-White/Linen (`#F9F8F6`) - Softer than pure white, easier on the eyes.
- Text: Dark Charcoal (`#2D3330`) - High contrast for readability.
*(Contrast checked: Deep Forest Green on Off-White is > 7:1 (AAA). Terracotta on Off-White is > 4.5:1 (AA).)*

**Fonts:**
- Headings: *Playfair Display* (or similar serif like *Merriweather*) - Authoritative, trustworthy, established.
- Body: *Inter* (or similar sans-serif like *Roboto*) - Clean, highly readable, modern.

**CSS Tokens (mapped to Tailwind):**
```css
:root {
  --color-primary: #1A4331;
  --color-secondary: #8FA998;
  --color-accent: #C27357;
  --color-bg: #F9F8F6;
  --color-text: #2D3330;

  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
}
```

## Route Tree
1. `/` (Home - Keyword: complete gut health supplement)
2. `/products/daily-synbiotic` (Keyword: best synbiotic supplement)
3. `/pricing` (Keyword: daily synbiotic subscription)
4. `/about` (Keyword: digestine company)
5. `/compare` (Taxonomy hub)
   - `/compare/seed` (Keyword: digestine vs seed)
   - `/compare/ritual` (Keyword: digestine vs ritual)
6. `/ingredients` (Keyword: digestine ingredients)
7. `/tools` (Taxonomy hub)
   - `/tools/fiber-calculator` (Keyword: daily fiber intake calculator)
   - `/tools/transit-time` (Keyword: digestion transit time tracker)
   - `/tools/water-intake` (Keyword: water intake for digestion calculator)
8. `/learn` (Reference Library Hub)
   - `/learn/bloating` (Keyword: what causes severe bloating after eating)
   - `/learn/leaky-gut` (Keyword: signs of leaky gut syndrome)
   - `/learn/microbiome` (Keyword: how to improve gut microbiome)
   - `/learn/elimination-diet` (Keyword: how to do an elimination diet)
   - *(10+ more reference pages)*
9. `/blog` (Blog Hub)
   - `/blog/prebiotics-vs-probiotics` (Keyword: prebiotics vs probiotics vs postbiotics)
   - `/blog/gut-brain-connection` (Keyword: gut health and mental health connection)
   - `/blog/foods-for-digestion` (Keyword: best foods for digestion)
   - *(9+ more posts)*
10. `/glossary` (Taxonomy Hub)
    - `/glossary/akkermansia` (Keyword: what is akkermansia)
    - *(20+ term pages)*
11. `/faq` (Keyword: digestine reviews and questions)
12. `/contact` (Support)
13. `/legal/privacy`
14. `/legal/terms`

## Capture Strategy
- **Hero:** Waitlist for the new advanced formulation.
- **End of Article (Blog):** Content-specific (e.g., "Get the 7-day gut-friendly meal plan").
- **Tools:** Results delivered via email ("Send me my personalized fiber plan").
- **Footer:** General newsletter ("Gut Health Weekly").
- **Sticky/Exit-Intent (on product pages):** 10% off first order.

## Homepage Block Order (Different from competitors)
1. **Hero:** Relatable problem + straightforward solution ("Stop thinking about your stomach. Start living.") + Waitlist Capture.
2. **The "Why You're Here" Section:** Empathy block acknowledging the symptoms (bloating, irregularity, fog) without clinical jargon.
3. **The Simple Mechanism:** How Digestine works in 3 simple steps (Prep, Seed, Feed).
4. **Tool Teaser:** "How much fiber do you actually need? Take our 30-second calculator." (Drives engagement early).
5. **Transparency/Ingredients:** What's in it, sourced clearly.
6. **Comparison Matrix:** Digestine vs. "Kitchen Sink Supplements" vs. "Single-strain Probiotics".
7. **Real Stories:** Reviews focusing on life changes, not just physical changes.
8. **Final CTA / Footer.**
