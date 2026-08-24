# SITEMAP - NRI Direct UK

This site architecture uses a hub-and-spoke model. The hubs capture broad head terms and navigate users downwards. The spokes capture specific long-tail intents and link upwards to their parent hub with consistent descriptive anchor text. Alternate services link sideways.

## 1. Homepage Hub
- **URL:** `/`
- **Target Query:** OCI card and Indian passport application assistance UK
- **Intent:** Find reliable, independent professional help to ensure an Indian consulate application is accepted on the first attempt without stress or errors.
- **Page Type:** Homepage Hub
- **Unique Value:** Aggregates all service lines, states the independent positioning prominently, and provides a clear gateway to all hubs.
- **Links:** Out to `/oci/`, `/passport/`, `/visa/`, `/document-checking/`.

## 2. OCI Hub
- **URL:** `/oci/`
- **Target Query:** OCI application assistance UK
- **Intent:** Find out how to get an OCI card or manage an existing one with professional guidance.
- **Page Type:** Service Hub
- **Unique Value:** A comprehensive overview of OCI application categories and our checking services.
- **Links:** Up to `/`. Down to `/oci/new-application/`, `/oci/renewal/`, `/oci/lost-passport/`, `/oci/minor-application/`.

## 3. OCI Spoke: New Application
- **URL:** `/oci/new-application/`
- **Target Query:** how to apply for new OCI card UK help
- **Intent:** Navigating the complex documentation requirements for a first-time OCI applicant based in the UK.
- **Page Type:** Service Landing Page
- **Unique Value:** Step-by-step documentation checklist specifically for first-time applicants, offering our pre-submission check.
- **Links:** Up to `/oci/` (Anchor: "OCI Application Assistance").

## 4. OCI Spoke: Renewal & Updates
- **URL:** `/oci/renewal/`
- **Target Query:** OCI card renewal after new passport UK assistance
- **Intent:** Understanding if/how to update an OCI card after receiving a new British passport, especially for those turning 20 or 50.
- **Page Type:** Service Landing Page
- **Unique Value:** Clarifies the confusing age-based rules for OCI renewal versus miscellaneous updates, pitching our checking service to avoid rejection.
- **Links:** Up to `/oci/` (Anchor: "OCI Renewal Assistance").

## 5. OCI Spoke: Lost Passport with OCI
- **URL:** `/oci/lost-passport/`
- **Target Query:** transfer OCI to new passport lost UK help
- **Intent:** Emergency assistance for transferring an OCI when the original passport it was tied to is lost or stolen.
- **Page Type:** Service Landing Page
- **Unique Value:** Focuses on the additional police report and affidavit requirements for lost document OCI transfers.
- **Links:** Up to `/oci/` (Anchor: "OCI Card Support").

## 6. OCI Spoke: Minor Application
- **URL:** `/oci/minor-application/`
- **Target Query:** OCI application for baby born in UK checklist help
- **Intent:** Parents seeking to apply for an OCI card for their British-born child without making documentation errors.
- **Page Type:** Service Landing Page
- **Unique Value:** Specifically addresses the parental consent and birth certificate apostille requirements for minors.
- **Links:** Up to `/oci/` (Anchor: "OCI Application Assistance").

## 7. Passport Hub
- **URL:** `/passport/`
- **Target Query:** Indian passport renewal UK assistance
- **Intent:** Find help for renewing an Indian passport in the UK, navigating VFS appointments, and understanding required paperwork.
- **Page Type:** Service Hub
- **Unique Value:** Centralizes passport renewal services and differentiates between standard renewals and complex cases.
- **Links:** Up to `/`. Down to `/passport/standard-renewal/`, `/passport/change-of-appearance/`, `/passport/tatkaal-service/`, `/passport/lost-damaged/`.

## 8. Passport Spoke: Standard Renewal
- **URL:** `/passport/standard-renewal/`
- **Target Query:** renew Indian passport in UK checklist check
- **Intent:** Routine passport renewal, ensuring the VFS application form is filled correctly before submission.
- **Page Type:** Service Landing Page
- **Unique Value:** Simplifies the standard renewal checklist and offers peace of mind through a document pre-check.
- **Links:** Up to `/passport/` (Anchor: "Indian Passport Renewal").

## 9. Passport Spoke: Change of Appearance / Signature
- **URL:** `/passport/change-of-appearance/`
- **Target Query:** Indian passport renewal change of appearance affidavit UK
- **Intent:** Handling the extra paperwork required when an applicant's appearance or signature has changed significantly.
- **Page Type:** Service Landing Page
- **Unique Value:** Provides clear guidance on the affidavit process for appearance changes.
- **Links:** Up to `/passport/` (Anchor: "Indian Passport Renewal").

## 10. Passport Spoke: Tatkaal Service Guidance
- **URL:** `/passport/tatkaal-service/`
- **Target Query:** Tatkaal Indian passport renewal UK eligibility help
- **Intent:** Need an urgent passport renewal and need to know if they qualify for the expedited Tatkaal scheme.
- **Page Type:** Service Landing Page
- **Unique Value:** Breaks down Tatkaal eligibility rules and document strictness, offering a rapid review service.
- **Links:** Up to `/passport/` (Anchor: "Indian Passport Renewal").

## 11. Passport Spoke: Lost or Damaged
- **URL:** `/passport/lost-damaged/`
- **Target Query:** replace lost Indian passport UK help
- **Intent:** Urgent help for replacing a lost or heavily damaged Indian passport, requiring complex annexures.
- **Page Type:** Service Landing Page
- **Unique Value:** Detailed breakdown of Annexure F requirements and police report guidelines.
- **Links:** Up to `/passport/` (Anchor: "Indian Passport Services").

## 12. Visa Hub
- **URL:** `/visa/`
- **Target Query:** Indian visa application assistance UK
- **Intent:** Help navigating the Indian visa process for non-OCI holders (e.g., naturalized citizens awaiting OCI, spouses).
- **Page Type:** Service Hub
- **Unique Value:** Central directory for navigating the differences between e-Visas and regular paper visas.
- **Links:** Up to `/`. Down to `/visa/tourist-evisa/`, `/visa/entry-visa/`.

## 13. Visa Spoke: Tourist e-Visa Guidance
- **URL:** `/visa/tourist-evisa/`
- **Target Query:** Indian e-visa application help UK
- **Intent:** Need a quick tourist e-visa but struggling with the confusing official portal or photo specifications.
- **Page Type:** Service Landing Page
- **Unique Value:** Focuses on overcoming the technical hurdles of the e-Visa site (photo resizing, payment failures).
- **Links:** Up to `/visa/` (Anchor: "Indian Visa Assistance"). Sideways to `/visa/entry-visa/`.

## 14. Visa Spoke: Entry Visa (Spouses)
- **URL:** `/visa/entry-visa/`
- **Target Query:** Indian entry visa for spouse UK help
- **Intent:** Non-Indian spouses seeking the appropriate long-term entry visa rather than a short tourist visa.
- **Page Type:** Service Landing Page
- **Unique Value:** Detailed breakdown of marriage certificate and spouse passport requirements for the Entry Visa.
- **Links:** Up to `/visa/` (Anchor: "Indian Visa Assistance"). Sideways to `/visa/tourist-evisa/`.

## 15. General Document Checking Service
- **URL:** `/document-checking/`
- **Target Query:** VFS Indian consulate document checking service
- **Intent:** Has completed the application but wants a professional to review the stack before attending the VFS appointment to avoid rejection.
- **Page Type:** Service Landing Page
- **Unique Value:** A standalone, flat-fee service for checking prepared documents against consulate standards.
- **Links:** Up to `/`. Sideways out to `/oci/`, `/passport/`, `/visa/`.

## 16. Contact & About
- **URL:** `/contact/`
- **Target Query:** NRI direct UK contact independent advice
- **Intent:** Verifying the independence and legitimacy of the service, or reaching out for a custom quote.
- **Page Type:** Contact/About Hybrid
- **Unique Value:** Strongly reinforces the independent disclaimer and provides the primary capture form.
- **Links:** Up to `/`.
