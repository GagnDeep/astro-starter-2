---
_schema: default
title: "Battery Passport Data Model Specification"
seo:
  page_description: "Technical specification of the EU Battery Passport Data Model, including public vs. restricted access tiers and JSON schema mapping."
  canonical_url: null
  featured_image: null
  featured_image_alt: null
  author_twitter_handle: null
  open_graph_type: "website"
  no_index: false
content_blocks:
  - _name: TextBlock
    heading: "Battery Passport Data Model Specification"
    text_content: >-
      The EU Battery Regulation (2023/1542) mandates a highly specific, tiered data model for the Digital Product Passport (DPP). Unlike early generic traceability concepts, the final regulation clearly delineates data attributes across three access levels: Public, Regulatory (Notified Bodies & Authorities), and Commercial (Recyclers & Remanufacturers).

      This guide breaks down the core data requirements. For implementation details regarding API architectures, see the [API Standards Guide](/reference/api-standards/).

      ## Access Tiers

      The data model is not a monolithic public record. It requires strict Role-Based Access Control (RBAC).

      ### Tier 1: Public Data
      This data must be accessible to anyone scanning the passport's QR code, without requiring a login or specialized application.

      *   **Manufacturer Information:** Name, registered trade name, postal address, web address, and email.
      *   **Battery Category:** (e.g., LMT, EV, Industrial).
      *   **Manufacturing Metadata:** Place of manufacture, date of manufacture (month/year), and unique battery identifier (batch or serial number).
      *   **Basic Specifications:** Chemistry, nominal voltage, rated capacity.
      *   **Carbon Footprint:** The absolute carbon footprint (kg CO2e) and the carbon footprint performance class.

      ### Tier 2: Recycler / Remanufacturer Data
      Restricted access granted to economic operators handling end-of-life processes.

      *   **Detailed Composition:** Complete bill of materials (BOM), including specific concentrations of hazardous substances.
      *   **Dismantling Manuals:** Step-by-step instructions for safe disassembly.
      *   **State of Health (SoH) History:** Historical data regarding capacity fade, internal resistance, and voltage drop over the battery's operational life.

      ### Tier 3: Regulatory Authority Data
      Full access granted to Notified Bodies and market surveillance authorities.

      *   **Test Reports:** Full documentation of safety and performance testing.
      *   **Supply Chain Audits:** Results of due diligence policies regarding cobalt, natural graphite, lithium, and nickel.

      ## Architectural Implications for the DPP

      Storing all Tier 2 and Tier 3 data on a public ledger (e.g., an unpermissioned blockchain) is generally considered non-compliant with GDPR and corporate confidentiality requirements.

      The prevailing architecture utilizes **Decentralized Identifiers (DIDs)**. The public QR code resolves to a DID document, which provides service endpoints. The client application then authenticates against these endpoints to retrieve the appropriately scoped JSON payload.

      See our [Software Provider Directory](/directory/software/) for vendors that support compliant RBAC models.
---
