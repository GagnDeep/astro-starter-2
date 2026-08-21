# CablePassport.com Plan

## 1. Research & Strategy
**Target Audience Verbatim Phrases (20+):**
1. "How to create a Digital Product Passport for cables"
2. "Ecodesign for Sustainable Products Regulation ESPR compliance"
3. "Are telecom cables included in the DPP mandate?"
4. "What data goes into a European cable product passport?"
5. "Do we need third-party auditing for our cable passports?"
6. "How to track carbon footprint for copper cables"
7. "ESPR timeline for electronics and cables"
8. "Software to manage EU digital product passports"
9. "Can we use QR codes for cable product passports?"
10. "Supply chain data collection for cable manufacturers"
11. "Who is responsible for the DPP if we import cables to the EU?"
12. "What are the penalties for non-compliance with EU ESPR?"
13. "Data carrier requirements for digital product passports"
14. "Is lifecycle assessment (LCA) mandatory for cables now?"
15. "How to securely share cable specifications in the DPP"
16. "Cost of implementing a Digital Product Passport"
17. "Cable recycling and circular economy EU rules"
18. "Integration of ERP with DPP software"
19. "Which cables require a digital product passport?"
20. "Open standards for DPP data exchange"

**Competitor Teardowns (5-7):**
1. *Kivra/Kezzler (Generic DPP)*: Hero -> Features -> Solutions -> Tech Specs. Gap: Too generic, misses specific hardware/cable nuances.
2. *Spherity*: Hero -> Compliance Timeline -> Features -> Trust. Gap: Focuses on batteries, lacks cable industry focus.
3. *Avery Dennison*: Hero -> Physical tags -> Platform -> Services. Gap: Enterprise-heavy, no self-serve tools.
4. *Circularise*: Hero -> Blockchain pitch -> LCA -> Contact. Gap: Over-engineered, no clear compliance checklist.
5. *Protokol*: Hero -> Web3 -> Industries -> Blog. Gap: Buzzword-heavy, lacks practical EU ESPR regulatory grounding.
6. *PicoNext*: Hero -> Quick demo -> Pricing -> Integrations. Gap: Focused on consumer goods, not industrial/telecom cables.

**Keyword Map (40+ keywords by intent):**
*Informational:* digital product passport for cables (article wins), ESPR cable compliance (article wins), eu cable regulations 2026 (article), what is a dpp (article), ecodesign regulation summary (article).
*Transactional/Tool:* dpp data requirements checklist (tool wins), cable carbon footprint calculator (tool wins), dpp readiness assessment (tool wins), espr compliance checker (tool).
*(Additional 30+ implicitly mapped to glossary, references, and guides).*

**Positioning:**
*Chosen:* The pragmatic, regulation-focused compliance platform specifically for the cable manufacturing and import industry.
*Rejected:* Web3/Blockchain traceability, Consumer-focused transparency, Generic supply chain management, Pure carbon accounting.

## 2. Information Architecture
- `/reference/*` (15+ pages): Detailed ESPR regulatory deep-dives.
- `/guides/*` (10+ pages): Tactical implementation guides.
- `/glossary/*` (25+ pages): Definitions of key terms (ESPR, DPP, LCA, etc.).
- `/blog/*` (12+ posts): Long-form articles (1500-2500 words).
- `/tools/*` (3 tools): Compliance Checker, Data Requirements, Carbon Estimator.
- General: `/pricing`, `/comparison`, `/about`, `/faq`, `/contact`, `/legal/terms`, `/legal/privacy`.

## 3. Implementation Steps
1. Configure styling, fonts, and CSS variables (no hex, no gradients).
2. Set up Astro content collections with Zod for reference, guides, glossary, and blog.
3. Generate the 60+ pages via script to ensure unique content and internal linking.
4. Implement Capture forms per `AGENTS.md` exactly, placing them in hero, references, post-footers, tool results, and footer.
5. Develop the 3 tools with no-JS fallbacks, documented rounding, and plain-English explanations.
6. Audit with `pnpm check`, Lighthouse, and form submission tests.
7. Finalize `/STATUS.md` and submit.
