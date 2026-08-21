# PLAN.md: usignpdf.com

## Audience Research & Pain Points
Small business owners, freelancers, and sole proprietors often need to send PDFs for signature.
**Verbatim phrasing / Pain points:**
- "I just need someone to sign this PDF, I don't want to pay $300/year for DocuSign."
- "My clients are confused when I send them a Word doc to print, sign, and scan back."
- "How do I add a signature to a PDF for free?"
- "Need a simple e-sign tool without enterprise bloat."
- "Why does every signature tool require my clients to create an account?"
- "Is an electronic signature legally binding if it's just typed out?"
- "I only send 2 contracts a month, looking for a pay-as-you-go or free tier."
- "Clients say the signing link expired or ended up in spam."
- "Looking for a HIPAA compliant e-sign that isn't crazy expensive."
- "I want to brand the email with my logo, not Adobe's."
- "Can I save a template so I don't have to place signature blocks every time?"
- "Need to request attachments (like an ID) along with the signature."
- "How do I sign a PDF on my iPhone without downloading an app?"
- "Just want a simple drawing tool to sign a contract."
- "Are e-signatures valid in [Specific State/Country]?"
- "Looking for an API to integrate into my custom CRM."
- "My accountant says we need audit trails for all signed documents."
- "I hate when tools add their watermark to my finalized contracts."
- "Do I need a certificate-based digital signature or just a standard e-signature?"
- "I'm a freelancer, I need to send a simple NDA to a new client."

**Jargon they avoid:** PKI (Public Key Infrastructure), cryptographic hashing, digital certificates, enterprise workflows, SSO integration, SAML.
**Jargon they use:** E-sign, sign PDF, digital signature (used colloquially), contract, NDA, audit trail, legally binding.

## Competitor Teardown
1. **DocuSign:**
   - Homepage: Heavy on enterprise trust, AI features, "Agreements".
   - Pricing: Starts at $10/mo (Personal, 5 env/mo), Standard $25/mo/user.
   - Gap: Too complex for solo users, expensive, pushy on enterprise upgrades.
2. **Adobe Acrobat Sign:**
   - Homepage: Pushes full Acrobat suite, PDF editing + signing.
   - Pricing: $12.99/mo for standard, $19.99/mo for Pro.
   - Gap: Bloated desktop/mobile apps, confusing tiered pricing with other Adobe products.
3. **HelloSign (Dropbox Sign):**
   - Homepage: Focus on speed, Dropbox integration, API.
   - Pricing: $15/mo (unlimited for 1 user).
   - Gap: Lost some of its standalone simplicity after Dropbox acquisition.
4. **PandaDoc:**
   - Homepage: "Create, manage, and eSign". Focuses on document generation/proposals.
   - Pricing: Free tier (unlimited eSign) is good, but Essentials is $19/mo/user.
   - Gap: Overkill if you just have a PDF ready to go. Free tier is a loss leader for proposals.
5. **SignWell (formerly Docsketch):**
   - Homepage: "Free & Legally Binding eSignatures". Good SMB focus.
   - Pricing: Free (3 docs/mo), Personal $8/mo (unlimited).
   - Gap: UI is slightly dated, limits templates heavily on lower tiers.
6. **Signaturely:**
   - Homepage: Clean, focuses on time saved and simplicity.
   - Pricing: Free (3 requests/mo), Personal $15/mo (unlimited).
   - Gap: Lacks advanced form fields, can be a bit rigid for complex PDFs.

## Keywords & Intent
- **Transactional / Tool Intent:**
  - "free sign pdf online"
  - "esignature free"
  - "add signature to pdf"
  - "sign contract online free"
  - "draw signature online"
- **Investigational / Comparison Intent:**
  - "docusign alternatives for small business"
  - "hellosign vs docusign"
  - "cheapest esign software"
  - "best e signature for freelancers"
- **Informational / Reference Intent:**
  - "are electronic signatures legally binding"
  - "how to sign a pdf on mac"
  - "what is an audit trail in esignature"
  - "difference between digital and electronic signature"
  - "how to create a signature line in word"

## Positioning
**Positioning:** The frictionless, freemium e-signature tool designed exclusively for small businesses and freelancers who just need to get PDFs signed legally, without the enterprise bloat.
**Rejected Alternatives:**
1. *The AI Contract Manager:* Too complex, moves away from the core "sign a PDF" need.
2. *The Enterprise Workflow Builder:* Focuses on routing and approvals; wrong audience.
3. *The Full-Suite Document Editor:* Competing with Adobe is a losing battle; focus just on signing.
4. *The API-First Solution:* Targets developers; our audience is non-technical business owners.

## Voice Rules
- **Tone:** Direct, helpful, reassuring, professional but not stuffy.
- **Banned Words:** "Synergy", "Enterprise-grade", "Digital Transformation", "Seamless integration", "Optimize workflows".
- **Focus:** Time saved, legal security, simplicity, client experience.

## Route Tree (Keyword Focus)
- `/`: Homepage ("e-signature for small business")
- `/about`: About Us ("usignpdf mission")
- `/pricing`: Pricing ("freemium e-signature pricing")
- `/contact`: Contact Us
- `/faq`: FAQ
- `/legal/...`: Privacy, Terms.
- `/tools/...`:
  - `/tools/roi-calculator` ("e-signature roi calculator")
  - `/tools/signature-maker` ("draw signature online")
  - `/tools/turnaround-estimator` ("contract signature time")
  - `/tools/paper-cost-calculator` ("cost of printing contracts")
- `/comparisons/...`:
  - `/comparisons/docusign-alternative` ("docusign alternative")
  - `/comparisons/adobe-sign-alternative`
  - `/comparisons/hellosign-alternative`
- `/glossary/...`: 20+ terms (e.g., e-signature, audit trail, ESIGN Act, UETA, PKI, wet signature).
- `/guides/...` (Reference):
  - `/guides/legality-of-esignatures` ("are e-signatures legal")
  - `/guides/how-to-sign-pdf-mac`
  - `/guides/freelancer-contract-guide`
  - `/guides/real-estate-esignature`
  - (and 11 more to hit 15+)
- `/industries/...` (Taxonomy):
  - `/industries/freelancers`
  - `/industries/agencies`
  - `/industries/real-estate`
  - `/industries/consultants`
  - (and 6 more to hit 10+)
- `/blog/...`: 12 detailed posts based on PAA questions.

## Capture Strategy
- **Homepage Hero:** Waitlist capture ("Get early access to the simplest e-sign tool").
- **Blog Posts:** End-of-article capture ("Get our free freelancer contract template bundle").
- **Tools:** Results-by-email capture ("Email me my detailed ROI report").
- **Reference/Glossary:** Sidebar/Inline capture ("Subscribe for legal tips for small business").
- **Footer:** Global newsletter capture.
- **Forms Configured in `capture.config.ts`:** waitlist, newsletter, template_bundle, tool_results, contact.

## Homepage Block Design
1. **Hero:** Clear H1 ("Get Your PDFs Signed. No Enterprise Bloat. No Monthly Minimums."), subheadline, waitlist form.
2. **Social Proof / Trust:** Logos of small business types, "Legally binding under ESIGN Act".
3. **Problem vs. Solution:** The "Old Way" (print, sign, scan, email) vs. the "uSignPDF Way" (upload, send, done).
4. **Core Features Grid:** Audit trails, custom branding, reminders, mobile-friendly signing.
5. **Target Audience Segments:** Freelancers, Agencies, Consultants (linking to `/industries`).
6. **Comparison Teaser:** Why we are better than DocuSign for a 2-person shop.
7. **Bottom CTA:** Another capture form for the waitlist.
