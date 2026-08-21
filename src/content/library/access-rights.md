---
title: "Battery Passport Access Rights"
description: "Understanding the role-based access model for the EU Battery Digital Passport."
last_reviewed: 2024-08-20
category: "Compliance"
seo:
  page_description: "Who can access what in the Battery Passport? A guide to public vs restricted data."
---

# Battery Passport Access Rights

The EU Battery Regulation does not mandate a completely public database. Instead, it enforces a strict Role-Based Access Control (RBAC) model. The economic operator is legally responsible for ensuring that the IT system hosting the digital product passport enforces these access rights correctly.

## The Three Tiers of Access

The 90+ data attributes required by the regulation are categorized into three distinct access tiers.

### 1. Public Data

This is information that anyone with a smartphone can access simply by scanning the QR code on the battery. No authentication is required.

**Key Public Attributes:**
*   **General Information:** Manufacturer name, battery category (EV, LMT, Industrial), manufacturing facility location, and date of manufacture.
*   **Chemistry & Capacity:** Basic chemical composition (e.g., NMC, LFP), rated capacity, and nominal voltage.
*   **Sustainability:** The total carbon footprint (in kg CO2e / kWh), the carbon footprint performance class, and the share of recycled cobalt, lead, lithium, and nickel.
*   **Certifications:** Links to EU declarations of conformity.

*Purpose: To provide consumers and general stakeholders with high-level sustainability and safety information.*

### 2. Restricted Data (Recyclers & Remanufacturers)

This data is highly technical and often proprietary. It is strictly reserved for authorized economic operators involved in the end-of-life management of the battery.

**Key Restricted Attributes:**
*   **Detailed Composition:** Exact percentages of critical raw materials and hazardous substances down to the component level (cathode, anode, electrolyte).
*   **Dismantling Manuals:** Step-by-step CAD drawings and instructions for safely dismantling the battery pack and extracting the modules/cells.
*   **Part Numbers:** Serial numbers and part numbers for individual cells and replacement components.

**How is access granted?**
Recyclers will not just "log in" to a website. The expected architecture requires them to use an eIDAS-compliant digital identity (e.g., a verifiable credential) to prove they are a registered and certified recycling facility. The passport system will automatically verify this credential before releasing the data.

### 3. Regulatory Data (Notified Bodies & Market Surveillance)

This is the deepest level of access, reserved solely for government regulators and third-party auditors (Notified Bodies).

**Key Regulatory Attributes:**
*   **Audit Reports:** Full lifecycle assessment (LCA) reports detailing exactly how the carbon footprint was calculated, including primary energy data from individual factories.
*   **Due Diligence Policies:** Detailed reports on supply chain human rights and environmental audits, including the identities of tier-3 suppliers (mines and smelters).
*   **Test Results:** Raw data from safety and performance testing used to establish the battery's conformity.

*Purpose: To ensure compliance without forcing manufacturers to publish trade secrets to the open internet.*

## Special Case: State of Health (SoH)

State of Health and State of Charge (SoC) data are dynamic. The regulation requires the Battery Management System (BMS) to either write this data to the passport periodically or provide a live API link.

*   **Who can access it?** The legal owner of the battery (the consumer or the fleet operator) and independent third parties *acting on their behalf* (e.g., a used car dealership evaluating the battery before a sale).
*   **Privacy implications:** Because this data reveals how the battery is used, it is protected under GDPR. Access requires explicit, revocable consent from the vehicle owner.

## IT Architecture Implications

You cannot simply host a static JSON file on a web server. To comply with the access rights matrix, your system must support:

1.  **Authentication:** Integrating with EU digital identity standards (eIDAS 2.0).
2.  **Authorization:** Policy enforcement points that check an incoming request's credentials against the specific battery's data matrix.
3.  **Audit Logging:** Every time a restricted or regulatory data point is accessed, the system should log the identity of the requester.

## What to do next

1.  **Data Mapping:** Go through your internal BoM and explicitly tag each attribute as Public, Restricted, or Regulatory according to the annexes of the EU Regulation.
2.  **Vendor Selection:** Ensure any software vendor you evaluate (see our [Vendor Directory](/vendors/)) has a demonstrable implementation of decentralized identity and verifiable credentials.
