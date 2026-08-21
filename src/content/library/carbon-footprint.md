---
title: "Battery Carbon Footprint Requirements"
description: "Technical breakdown of Carbon Footprint under the EU Battery Regulation."
last_reviewed: 2024-08-20
category: "Compliance"
seo:
  page_description: "Complete guide to Carbon Footprint for the EU Battery Digital Passport."
---

# Battery Carbon Footprint Requirements

The EU Battery Regulation introduces strict mandates concerning the carbon footprint of EV, LMT, and industrial batteries. The primary goal is to ensure that all batteries placed on the internal market are manufactured with minimal environmental impact and that their lifecycle emissions are transparently reported.

## Implementation Timeline

The carbon footprint requirements are phased in over several years, dependent on the battery category:

1. **EV Batteries:** Mandatory carbon footprint declaration from **February 18, 2025**.
2. **LMT and Industrial Batteries:** Mandatory declaration from **February 18, 2026**.
3. **Performance Classes:** Maximum carbon footprint thresholds will be enforced starting in 2027 and 2028.

## The JRC Methodology

The European Commission's Joint Research Centre (JRC) has developed the methodology for calculating the carbon footprint. It is based on the Product Environmental Footprint (PEF) Category Rules (PEFCR) for high specific energy rechargeable batteries for mobile applications.

### Key Calculation Principles

- **Functional Unit:** The carbon footprint is calculated per **1 kWh of total energy provided** over the expected service life of the battery system.
- **System Boundaries:** The calculation must include:
  - Raw material acquisition and pre-processing (Scope 3).
  - Main product manufacturing (Scope 1 and 2).
  - Distribution.
  - End-of-life and recycling.
- **Use Phase:** The use phase is generally *excluded* from the direct carbon footprint calculation of the battery itself, as emissions during use depend heavily on the local electricity grid.

## Data Collection Challenges

Operators frequently underestimate the complexity of data gathering. The regulation demands primary data (company-specific data) for the most carbon-intensive processes.

### Primary vs. Secondary Data

- **Primary Data:** Required for active material manufacturing, cell manufacturing, and battery assembly. If you manufacture NMC cells, you need specific energy consumption data from your factory, not an industry average.
- **Secondary Data:** Permitted for background processes (e.g., generic logistics, standard auxiliary materials). The EU will provide a database of acceptable secondary datasets.

### Edge Case: Uncooperative Suppliers

What happens if a tier-3 supplier outside the EU refuses to provide primary emissions data?
The draft methodology allows for the use of secondary data with a **penalty factor**. If you cannot verify primary data, you must use conservative (high-emission) secondary datasets, which will artificially inflate your battery's total carbon footprint, potentially pushing it out of the acceptable performance class.

## Worked Example: Calculating a 60kWh NMC Battery

Consider a standard 60 kWh NMC (Nickel Manganese Cobalt) EV battery.

| Lifecycle Stage | Estimated Carbon Intensity | Data Source Requirement |
| :--- | :--- | :--- |
| **Raw Material Extraction (Mining)** | 25 kg CO2e / kWh | Primary data from mine operators strongly preferred. |
| **Active Material Processing** | 15 kg CO2e / kWh | Primary data mandatory. |
| **Cell Manufacturing** | 20 kg CO2e / kWh | Primary data mandatory (Scope 1 & 2 of the cell gigafactory). |
| **Pack Assembly** | 5 kg CO2e / kWh | Primary data mandatory. |
| **Transport / Logistics** | 2 kg CO2e / kWh | Secondary data acceptable. |
| **Total Carbon Footprint** | **67 kg CO2e / kWh** | |

*Note: These figures are illustrative estimates. Actual values depend heavily on the energy grid where manufacturing occurs.*

## Common Mistakes to Avoid

1. **Using old PEFCR drafts:** Ensure you are using the final delegated acts, not the 2021 drafts.
2. **Double counting renewable energy:** If you purchase Guarantees of Origin (GOs) or RECs, ensure they strictly adhere to the geographical and temporal correlation rules defined by the EU. You cannot claim zero-carbon manufacturing using solar credits from a different continent.
3. **Ignoring the Bill of Materials (BoM) update:** The carbon footprint must be updated if the BoM changes significantly (e.g., swapping a major anode supplier).

## Frequently Asked Questions

**Is the carbon footprint declaration required for LMT batteries too?**
Yes. Light Means of Transport (e.g., e-bikes, e-scooters) require a carbon footprint declaration starting February 18, 2026.

**How do we calculate the carbon footprint according to the JRC methodology?**
You must map your entire supply chain, gather primary energy and emissions data for foreground processes, and use authorized secondary datasets for background processes, calculating the total CO2 equivalent per 1 kWh of battery capacity.

**What happens if we miss the threshold?**
Once maximum carbon footprint thresholds are introduced (expected 2028 for EV batteries), batteries exceeding the threshold cannot legally be placed on the EU market.

## What to do next

1. **Map your supply chain:** Identify every supplier for the cathode, anode, electrolyte, and separator.
2. **Establish data pipelines:** Begin requesting primary energy consumption data from your Tier 1 and Tier 2 suppliers now.
3. **Audit readiness:** Use a third-party lifecycle assessment (LCA) tool to estimate your current footprint.

### Related Reading
- [Timeline](/library/timeline-requirements/)
- [Access Rights](/library/access-rights-requirements/)
