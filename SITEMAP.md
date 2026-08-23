# Battery Digital Passport Sitemap and Architecture

## Hub 1: Regulatory Requirements
**Target Audience**: Compliance Managers
**Intent**: Understand what needs to be in a Battery Passport.
**Unique Value**: Verified directly against EUR-Lex with dates, not generic marketing copy.

- `/requirements/` (Hub)
  - Target Query: "eu battery passport requirements 2027"
  - Page Type: Pillar / Hub
  - Inbound Links: `/`, `/timeline/`, `/data-model/`
  - Outbound Links: `/requirements/carbon-footprint/`, `/requirements/supply-chain-due-diligence/`, `/requirements/recycled-content/`

- `/requirements/carbon-footprint/` (Spoke)
  - Target Query: "battery passport carbon footprint calculation eu"
  - Page Type: Guide
  - Inbound Links: `/requirements/`, `/data-model/`
  - Outbound Links: `/requirements/`, `/data-model/materials/`

- `/requirements/supply-chain-due-diligence/` (Spoke)
  - Target Query: "eu battery regulation due diligence requirements"
  - Page Type: Guide
  - Inbound Links: `/requirements/`
  - Outbound Links: `/requirements/`

- `/requirements/recycled-content/` (Spoke)
  - Target Query: "mandatory recycled content eu battery regulation"
  - Page Type: Guide
  - Inbound Links: `/requirements/`
  - Outbound Links: `/requirements/`

## Hub 2: Data Model & Technical Specs
**Target Audience**: Product Managers & Technical Architects
**Intent**: Know exactly what data fields need to be collected.
**Unique Value**: Exact data types and formats rather than high-level summaries.

- `/data-model/` (Hub)
  - Target Query: "battery passport data fields specification"
  - Page Type: Pillar / Hub
  - Inbound Links: `/`, `/requirements/`
  - Outbound Links: `/data-model/materials/`, `/data-model/performance/`, `/data-model/circularity/`, `/data-model/general-info/`

- `/data-model/materials/` (Spoke)
  - Target Query: "battery composition data requirements eu"
  - Page Type: Data Dictionary
  - Inbound Links: `/data-model/`, `/requirements/carbon-footprint/`
  - Outbound Links: `/data-model/`

- `/data-model/performance/` (Spoke)
  - Target Query: "battery passport performance durability parameters"
  - Page Type: Data Dictionary
  - Inbound Links: `/data-model/`
  - Outbound Links: `/data-model/`

- `/data-model/circularity/` (Spoke)
  - Target Query: "end of life information battery passport"
  - Page Type: Data Dictionary
  - Inbound Links: `/data-model/`
  - Outbound Links: `/data-model/`

- `/data-model/general-info/` (Spoke)
  - Target Query: "battery passport public data fields"
  - Page Type: Data Dictionary
  - Inbound Links: `/data-model/`
  - Outbound Links: `/data-model/`

## Hub 3: Timeline & Enforcement
**Target Audience**: Executive / Compliance
**Intent**: Know when the rules apply and what happens if missed.
**Unique Value**: Strict differentiation between finalized dates and proposed dates.

- `/timeline/` (Hub)
  - Target Query: "eu battery passport implementation timeline"
  - Page Type: Pillar / Hub
  - Inbound Links: `/`, `/readiness/`
  - Outbound Links: `/timeline/2025-obligations/`, `/timeline/2027-passport/`

- `/timeline/2025-obligations/` (Spoke)
  - Target Query: "eu battery regulation 2025 rules"
  - Page Type: Timeline Event
  - Inbound Links: `/timeline/`
  - Outbound Links: `/timeline/`

- `/timeline/2027-passport/` (Spoke)
  - Target Query: "february 18 2027 battery passport deadline"
  - Page Type: Timeline Event
  - Inbound Links: `/timeline/`
  - Outbound Links: `/timeline/`

## Hub 4: Readiness & Assessment
**Target Audience**: Operations & Compliance
**Intent**: Determine if their company is ready and what gap exists.
**Unique Value**: Toolkit inquiry for practical assessment, no software upselling.

- `/readiness/` (Hub)
  - Target Query: "battery passport readiness assessment"
  - Page Type: Pillar / Hub
  - Inbound Links: `/`, `/timeline/`
  - Outbound Links: `/readiness/gap-analysis/`, `/readiness/vendor-selection/`

- `/readiness/gap-analysis/` (Spoke)
  - Target Query: "how to do a battery passport gap analysis"
  - Page Type: Guide
  - Inbound Links: `/readiness/`
  - Outbound Links: `/readiness/`

- `/readiness/vendor-selection/` (Spoke)
  - Target Query: "how to choose a battery passport provider"
  - Page Type: Guide
  - Inbound Links: `/readiness/`
  - Outbound Links: `/readiness/`
