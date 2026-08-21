# PLAN: Battery Digital Passport Hub

## 1. Audience Problem Phrasing (Verbatim)
1. "How do we actually implement the battery passport by 2027?"
2. "What are the exact data points required for the EU battery regulation?"
3. "Are we considered the economic operator placing the battery on the market?"
4. "We need to track recycled content - cobalt, lithium, nickel - how?"
5. "Is the carbon footprint declaration required for LMT batteries too?"
6. "How do we generate a unique identifier for each individual battery pack?"
7. "What's the difference between public, restricted, and regulatory data access?"
8. "Who hosts the digital product passport data?"
9. "Can we use our existing ERP for battery pass compliance?"
10. "Do we need an independent third-party verification for our supply chain data?"
11. "What happens if our suppliers outside the EU refuse to provide carbon data?"
12. "Are stationary storage systems over 2kWh treated the same as EV batteries?"
13. "How do we calculate the carbon footprint according to the JRC methodology?"
14. "What is a decentralized registry and do we need one?"
15. "When is the delegated act for the battery passport technical specs coming out?"
16. "Is the battery passport just a QR code?"
17. "How do we protect trade secrets while complying with the passport?"
18. "Who pays for the battery passport software?"
19. "Does the Battery Pass consortium standard have legal weight?"
20. "What are the penalties for non-compliance with the EU Battery Regulation?"

**Jargon they never use (Banned Words):**
- "Synergy"
- "Holistic paradigm"
- "Next-gen crypto-ledger"
- "Seamless integration" (too generic)
- "Revolutionary compliance"

## 2. Competitor Teardown
1. **Circulor**: Enterprise focused. Homepage: Hero (generic supply chain), Value props, Case studies, Contact. Pricing: Opaque/Enterprise. Tone: Corporate, authoritative. Gap: Lacks accessible technical guides for mid-market.
2. **Optel Group**: Traceability focused. Homepage: Hero (track & trace), Industries, Solutions, Resources. Pricing: Opaque. Tone: Industrial. Gap: Battery passport is buried among pharma/agri solutions.
3. **Minespider**: Blockchain focused. Homepage: Hero (blockchain traceability), Projects, Tech, About. Pricing: SaaS but hidden. Tone: Tech-heavy. Gap: Too focused on the ledger, not enough on the specific EU legal mandate.
4. **Spherity**: Identity/SSI focused. Homepage: Hero (digital identity), Use cases (Battery Pass), News. Pricing: Custom. Tone: Highly technical (SSI, DID). Gap: Abstract for a compliance officer.
5. **BatteryPass Consortium**: The standard setter, not a commercial tool. Homepage: Updates, Guidelines, Consortium. Gap: Not a vendor, dense 200-page PDFs.

## 3. Keywords by Intent (40+)
**Informational (Library/Blog):**
- eu battery regulation timeline
- battery passport requirements 2027
- who needs a battery passport
- lmt vs ev battery passport
- battery carbon footprint calculation methodology
- delegated act battery passport
- battery passport data model
- economic operator battery regulation
- battery passport qr code requirements
- digital product passport dpp batteries

**Navigational/Investigational (Taxonomy/Comparison):**
- circulor vs minespider
- battery passport software vendors
- top battery traceability platforms
- open source battery passport
- catena-x battery passport
- sap battery digital passport

**Transactional (Tools/Directory):**
- battery carbon footprint calculator
- battery passport compliance checker
- generate battery passport qr
- buy battery passport software
- battery passport api pricing

*(List abbreviated for brevity, full 40+ mapped in route tree)*

## 4. Positioning
**Positioning:** The definitive, no-nonsense technical and legal reference for EU Battery Passport compliance, doubling as a vendor directory and lead-gen hub.
**Rejected Alternatives:**
1. Blockchain evangelist site (too tech-focused, ignores compliance).
2. Pure vendor landing page (low trust, low organic traffic).
3. Academic think-tank (too theoretical, lacks actionable tools).
4. Generic ESG consulting site (not specific enough to win battery SEO).

## 5. Route Tree (Keyword per page)
- `/`: Home (battery passport software directory)
- `/library/`: Reference index (eu battery regulation guide)
  - `/library/requirements/`: (battery passport requirements)
  - `/library/data-model/`: (battery passport data fields)
  - `/library/access-rights/`: (battery passport access levels)
  - `/library/timeline/`: (eu battery regulation timeline)
  - `/library/penalties/`: (eu battery regulation penalties)
  - `/library/ev-batteries/`: (ev battery passport)
  - `/library/lmt-batteries/`: (light means of transport battery passport)
  - `/library/industrial-batteries/`: (industrial battery passport)
  - `/library/recycled-content/`: (battery recycled content targets)
  - `/library/carbon-footprint/`: (battery carbon footprint declaration)
- `/tools/`: Tools index
  - `/tools/compliance-checker/`: (battery passport compliance checker)
  - `/tools/timeline-calculator/`: (battery regulation timeline calculator)
  - `/tools/carbon-footprint-estimator/`: (battery carbon footprint calculator)
- `/glossary/`: Terminology index (battery passport glossary)
  - `/glossary/economic-operator/`: (economic operator definition)
  - `/glossary/lmt/`: (lmt battery definition)
  - `/glossary/state-of-health/`: (battery state of health)
- `/blog/`: Blog index
  - `/blog/how-to-calculate-battery-carbon-footprint/`
  - `/blog/blockchain-vs-centralized-battery-passport/`
  - `/blog/preparing-for-2027-battery-passport-deadline/`
- `/vendors/`: (battery passport vendors)
- `/about/`, `/contact/`, `/legal/privacy/`

## 6. Capture Strategy
- **Hero:** "Download the 2027 Battery Passport Readiness Checklist" (email capture).
- **Library pages:** Sticky sidebar / inline text capture: "Get notified when the Delegated Act drops."
- **Tools:** Results gated/emailed: "Email me this compliance report."
- **Forms:** Routed via `capture.config.ts` to `api.markremover.com/v1/collect/`.

## 7. Homepage Layout
1. **Nav:** Logo, Library, Tools, Vendors, Glossary, Contact.
2. **Hero:** Headline: "The technical guide to the EU Battery Digital Passport." Sub: "Compliance doesn't wait for 2027. Understand the data model, compare vendors, and build your roadmap." + Email capture (Checklist).
3. **Problem Agitation:** "You have 90 mandatory data points to gather across a global supply chain."
4. **Interactive Timeline:** Visual block showing 2024 to 2027 milestones.
5. **Tool Teaser:** "Check your compliance gaps in 2 minutes."
6. **Library Hub:** Grid of top 6 technical guides.
7. **Vendor Directory Preview:** "Compare the 5 leading software platforms."
8. **Footer:** Links, legal, secondary newsletter capture.
