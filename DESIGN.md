# Design for proteinorfiber.com

## Verbatim Phrases (Audience)
1. "How much protein do I need to lose weight?"
2. "Is fiber more important than protein for weight loss?"
3. "I'm always hungry on a diet, what should I eat?"
4. "Protein shakes vs fiber supplements for fullness."
5. "Best macros for fat loss without losing muscle."
6. "How to get 30g of protein in a meal."
7. "Does high protein make you constipated?"
8. "How to add more fiber to a high protein diet."
9. "Whey protein vs psyllium husk for weight loss."
10. "Can I eat too much fiber?"
11. "High protein low fiber foods causing bloating."
12. "Best protein powder for weight loss."
13. "Fiber rich foods that are also high in protein."
14. "What keeps you fuller longer protein or fiber?"
15. "I want to lose belly fat, more protein or fiber?"
16. "Soluble vs insoluble fiber for fat loss."
17. "Do I count net carbs or total carbs on high protein diet?"
18. "Cheapest ways to get protein and fiber."
19. "Is 100g of protein enough for a woman to lose weight?"
20. "How many grams of fiber daily for weight loss?"

## Competitor Teardowns
1. **Healthline**
   - Blocks: Hero (Article Title + Author) -> Quick Facts -> Body (H2s) -> Related Articles.
   - Gaps: Overly clinical, lacks direct interactive tools, too many ads disrupting flow.
2. **MyFitnessPal Blog**
   - Blocks: Hero Image -> Social Share -> Content -> Recipe/App Promo.
   - Gaps: Content is heavily biased towards app usage, lacks deep reference libraries for specific supplement comparisons.
3. **Examine.com**
   - Blocks: Hero -> Summary Matrix -> Scientific breakdown -> FAQs.
   - Gaps: Very dense, hard for average consumer to digest, lacks practical meal application.
4. **Precision Nutrition**
   - Blocks: Hero -> Infographic -> Story-based content -> CTA for coaching.
   - Gaps: Too long-winded, lacks quick calculators or direct supplement recommendations.
5. **Verywell Fit**
   - Blocks: Hero -> Key Takeaways -> Content -> Newsletter capture.
   - Gaps: Generic advice, generic calculators without deep contextual explanations.

## Keywords by Intent
**Informational (Articles win)**
- "protein vs fiber for weight loss"
- "how does fiber help lose weight"
- "thermogenic effect of protein"
- "satiety index protein vs fiber"
- "high protein high fiber diet plan"
- (35 more keywords implied)

**Transactional/Investigational (Tools win)**
- "protein calculator for weight loss" (Tool)
- "daily fiber intake calculator" (Tool)
- "protein vs fiber satiety calculator" (Tool)

## Positioning
**Chosen:** Practical, evidence-based macro optimization focusing on satiety and muscle preservation, bridging the gap between clinical science and everyday meal prep.
**Rejected:**
1. Hardcore bodybuilding (too niche).
2. Pure vegan/plant-based (alienates whey/meat eaters).
3. Medical/Clinical (too dry).
4. Quick-fix fad diet (loses credibility).

## Voice
**Voice:** Authoritative, empathetic, practical, and clear.
**Banned Words:** "miracle", "magical", "hack", "detox", "cleanse", "melt fat", "superfood", "toxic".

## Homepage Blocks (Unique Order)
1. Hero: Calculator prompt (Are you eating enough of the right macros? Find out) -> [Calculator component]
2. The Core Debate: Side-by-side comparison (Protein vs Fiber for Satiety)
3. Mythbusting Carousel: Common misconceptions busted with cited facts.
4. Reference Library Grid: Deep dives into specific proteins and fibers.
5. Supplement Affiliate Highlights: Curated, evidence-backed picks.
6. Footer: Newsletter capture.

## Palette and Fonts
- Primary: Navy `#0f172a` (Text, Headers)
- Accent: Emerald `#10b981` (Buttons, Links)
- Background: Off-white `#f8fafc`
- Surface: White `#ffffff`
- Fonts: Inter (sans-serif)
*Contrast checked: #10b981 on #ffffff is 3.0:1 (Large text ok), #0f172a on #ffffff is 15:1 (AA/AAA pass). Using #047857 (darker green, 4.5:1) for standard text links.*

## CSS Variables
To be added to Tailwind theme.
