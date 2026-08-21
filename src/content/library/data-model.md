---
title: "Battery Passport Data Model Requirements"
description: "Technical breakdown of the Data Model under the EU Battery Regulation."
last_reviewed: 2024-08-20
category: "Compliance"
seo:
  page_description: "Complete guide to the Data Model for the EU Battery Digital Passport."
---

# Battery Passport Data Model Requirements

The Data Model is the backbone of the EU Battery Digital Passport. It dictates exactly what information must be collected, how it must be formatted, and who is allowed to see it. The regulation mandates approximately 90 distinct data attributes spanning the battery's entire lifecycle.

## Structural Overview of the Data Model

The data is conceptually divided into several categories:

1. **General Battery Information:** Manufacturer details, battery category, manufacturing date, and place.
2. **Material Composition:** Chemistry, hazardous substances, and critical raw materials.
3. **Performance and Durability:** Rated capacity, voltage, expected cycle life, and temperature limits.
4. **Sustainability:** Carbon footprint declaration and recycled content shares.
5. **End-of-Life Information:** Manuals for removal, dismantling, and recycling.

## Technical Specifications (Draft Expectations)

While the final delegated act defining the exact JSON/XML schemas is still pending (expected late 2024/early 2025), consortiums like the Battery Pass project have outlined the expected technical architecture.

- **Data Carrier:** A QR code physically printed or engraved on the battery.
- **Unique Identifier:** A decentralized identifier (DID) resolving to the product passport.
- **Interoperability:** The system must be interoperable. You cannot build a closed, proprietary database. The data must be accessible via standard web APIs (likely REST or GraphQL) using standard data formats (JSON-LD).

## Access Rights Matrix

Not all data is public. The regulation enforces strict access controls to protect trade secrets while ensuring transparency for regulators and recyclers.

| Data Category | Public | Recyclers / Remanufacturers | Notified Bodies / Regulators |
| :--- | :--- | :--- | :--- |
| **Basic Info (Chemistry, Capacity)** | Yes | Yes | Yes |
| **Carbon Footprint Summary** | Yes | Yes | Yes |
| **Dismantling Manuals** | No | Yes | Yes |
| **Detailed Cell Composition** | No | Yes | Yes |
| **State of Health (Live/Periodic)** | No | Yes (with owner consent) | Yes |
| **Test Reports & Audits** | No | No | Yes |

*The economic operator placing the battery on the market is responsible for ensuring the IT system enforces these access controls.*

## How to generate a unique identifier

The identifier must follow ISO/IEC standards (likely ISO/IEC 15459-6) for unique item identification. It is not just a random UUID; it must encode the manufacturer prefix and a serialized item number.

Example structure: `[Issuing Agency Code] [Manufacturer ID] [Serialized Battery ID]`

This identifier is embedded in a URL (the QR code) that points to a resolver service. When a user scans the QR code, the resolver directs them to the database hosting the passport.

## Protecting Trade Secrets

A major concern for manufacturers is the protection of intellectual property, specifically exact cell chemistries and supplier networks.

**The Solution:** The passport relies on aggregated data for public views. While the exact percentage of a proprietary additive might be hidden from the public, it must be available to regulators if requested. The use of decentralized data architectures (where data remains with the manufacturer rather than a central EU database) is strongly recommended by industry groups to maintain control over IP.

## Common Mistakes

- **Hardcoding data:** The passport is a living document. State of Health (SoH) and State of Charge (SoC) must be updateable.
- **Ignoring the semantic web:** Data must be machine-readable. A PDF manual linked via a QR code **does not** constitute a digital product passport.

## Frequently Asked Questions

**Are we considered the economic operator placing the battery on the market?**
If you manufacture the battery in the EU, or import it into the EU, you are the economic operator. If you assemble imported cells into a pack in the EU, you are the economic operator for the pack.

**Is the battery passport just a QR code?**
No. The QR code is just the data carrier. The passport is the secure, interoperable database system behind the QR code that holds the 90+ data attributes.

**Can we use our existing ERP for battery pass compliance?**
Unlikely, without significant modification. ERPs are designed for internal resource planning, not public-facing, role-based, cryptographically secure data sharing. You will likely need a dedicated traceability module or vendor.

## What to do next

1. **Audit your data:** Map the 90+ required data points against your current PLM (Product Lifecycle Management) and ERP systems.
2. **Identify gaps:** You will likely find missing data regarding supplier emissions and detailed recyclability metrics.
3. **Evaluate vendors:** Check our [Vendor Directory](/vendors/) for platforms specializing in the decentralized data models required by the regulation.
