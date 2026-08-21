# PLAN.md - Dubai US Capital

## Objective
Build a Lead-gen and content site for Gulf-US cross-border investment advisory.
Domain: dubaiusacapital.com

## Audience Phrasing
- "How to invest in US real estate from Dubai"
- "US property tax implications for UAE residents"
- "Best states for foreign investment US real estate"
- "EB-5 visa for UAE citizens real estate"
- "US commercial real estate syndication Dubai investors"
- "LLC formation in USA from UAE"
- "Avoiding double taxation US and UAE"
- "US expat tax advisory Dubai"
- "FIRPTA withholding for UAE investors"
- "Can a non-US citizen get a mortgage in the US"
- "Dubai family office US real estate investment"
- "1031 exchange equivalent for foreign investors"
- "Estate tax planning US assets UAE resident"
- "US property management for overseas landlords"
- "Repatriating funds from US real estate to UAE"
- Jargon they never use: "Capital stack optimization", "Mezzanine tranches", "GP/LP arbitrage" (they use more direct terms like "returns", "tax impact", "who manages it").

## Competitor Teardown
1. **America Mortgages** (americamortgages.com)
   - Home: Hero form -> Rates -> Process -> Testimonials.
   - Gap: Focuses heavily on the mortgage product, lacks deep tax advisory content.
   - Tone: Transactional.
2. **Cranewoods** (cranewoods.com)
   - Home: Hero -> Services -> Projects -> Contact.
   - Gap: Generic, not tailored specifically to Gulf investors.
   - Tone: Corporate, old-school.
3. **SmartCrowd (for comparison on fractional)** (smartcrowd.ae)
   - Home: Hero -> How it works -> Properties -> Footer.
   - Gap: Dubai focused, but shows what local investors are used to (clean, app-like).
   - Tone: Tech-forward, accessible.
4. **Global Citizen Solutions** (globalcitizensolutions.com)
   - Home: Hero -> Destinations -> Services -> Insights.
   - Gap: Broad global focus, US is just one of many.
   - Tone: Lifestyle, visa-driven.
5. **AHR Private Wealth** (ahrprivatewealth.com)
   - Home: Hero -> Wealth Management -> Tax -> Contact.
   - Gap: Broad wealth management, US real estate is a subset.
   - Tone: Prestigious, stiff.

## Keywords (40+)
**Informational/Top of Funnel (Blog):**
us real estate investment from uae, us property tax uae residents, foreign investor us mortgage, eb-5 visa real estate uae, us llc for non resident, buying us property from dubai, us rental income tax for foreigners, firpta withholding uae, estate tax us non resident alien, best us cities to invest in 2024 from abroad

**Middle of Funnel (Library/Taxonomy):**
us commercial real estate syndication uae, us multifamily investment dubai, us property tax guide foreign investors, us real estate llc vs personal name, 1031 exchange foreign investor, us property management overseas, repatriating usd to aed, us real estate investment structures, us vs uae real estate yields, us property insurance foreign owner

**Bottom of Funnel (Tools/Calculators):**
us property tax calculator foreign investor, firpta withholding calculator, us mortgage calculator foreign national, us real estate yield calculator aed, rental yield calculator us properties

## Positioning & Rejected Alternatives
- **Positioning:** The authoritative, tax-aware, end-to-end US real estate partner for Gulf-based investors.
- **Rejected:** 1) Pure mortgage broker (too narrow). 2) Real estate agent (too localized). 3) Fractional investment platform (requires SEC compliance/tech). 4) Immigration lawyers (too legal-focused).

## Voice Rules
- **Tone:** Authoritative, clear, conservative, tax-aware.
- **Banned Words:** "Hustle", "Guarantee", "Risk-free", "Hack", "Loophole", "Click here", "Synergy", "Game-changer".

## Route Tree
- `/` - Homepage
- `/about` - About Us
- `/contact` - Contact (Waitlist/Lead Capture)
- `/pricing` - Advisory Fees
- `/library/` (Deep Reference - 15+ pages)
  - `/library/tax-implications-us-real-estate-uae-residents`
  - `/library/structuring-us-property-purchases-llc`
  - ... (13 more)
- `/taxonomy/` (10+ pages)
  - `/taxonomy/multifamily`
  - `/taxonomy/commercial`
  - ... (8 more)
- `/tools/` (3-4 tools)
  - `/tools/firpta-calculator`
  - `/tools/yield-calculator`
  - `/tools/mortgage-calculator`
- `/glossary/` (20-30 terms)
  - `/glossary/firpta`, `/glossary/1031-exchange`, etc.
- `/blog/` (12 posts)
  - `/blog/best-us-cities-for-uae-investors`
  - ... (11 more)
- `/legal/` (Terms, Privacy)
- `/comparison/` (e.g., US vs UAE Real Estate)
- `/faq/`

## Capture Strategy
- API: `https://api.markremover.com/v1/collect/{form}`
- Forms: `contact`, `newsletter`, `waitlist`, `calculator-results`, `guide-download`.
- Placements: Hero (Waitlist), Footer (Newsletter), Contact Page (Contact), Library Pages (Guide Download inline), Tools (Results via Email).

## Homepage Block Order
1. Hero: Headline ("Secure US Real Estate Investments for Gulf Residents"), Subheadline, Primary CTA (Waitlist Capture Form).
2. The Gulf-US Gap: Why investing from the UAE is different (Tax, Structuring).
3. Advisory Services: What we do (Structuring, Sourcing, Management).
4. Tax & Structuring Snapshot: Mini-guide on FIRPTA/Estate Tax.
5. Interactive Tool Teaser: Link to Yield Calculator.
6. Featured Insights (Blog/Library).
7. Footer (Newsletter Capture).
