const fs = require('fs');
const path = require('path');

const extraText = `

## Data Requirements Breakdown for Cables

To meet the ESPR obligations, a Digital Product Passport for cables must include specific, verifiable data points. Below is a structured breakdown of the expected data categories:

### 1. General Product Information
*   **Unique Product Identifier:** (e.g., GTIN, EAN)
*   **Manufacturer Details:** Name, registered address, and contact information.
*   **Product Category:** Specific classification within the EU Customs Tariff (TARIC) code.
*   **Date of Manufacture:** Month and year.
*   **Manufacturing Facility:** Location of the final assembly or extrusion process.

### 2. Material Composition & Sourcing
*   **Bill of Materials (BOM):** A comprehensive list of all materials used, including metals (copper, aluminum) and polymers (PVC, PE, XLPE, LSZH).
*   **Recycled Content:** Percentage of recycled material used in the product, broken down by material type.
*   **Substances of Concern:** Declaration of any substances listed in the REACH Candidate List or RoHS Directive, along with their concentration levels.

### 3. Environmental Impact (LCA)
*   **Carbon Footprint (GWP):** Total greenhouse gas emissions associated with the product's life cycle (cradle-to-gate or cradle-to-grave), expressed in kg CO2 equivalent per functional unit (e.g., per kilometer).
*   **Primary Energy Demand:** Total energy consumed during production and transportation.
*   **Water Consumption:** Water usage associated with manufacturing.

### 4. Circularity and End-of-Life
*   **Dismantling Instructions:** Step-by-step guidelines for safely separating the conductive core from the insulation and jacketing materials.
*   **Recyclability:** Information on the recyclability of the different components and recommended recycling pathways.
*   **Disposal Guidance:** Instructions for the environmentally sound disposal of non-recyclable components.

## Practical Example: Data Collection Workflow

To illustrate the process of gathering this data, consider the following workflow:

1.  **Supply Chain Engagement:** Begin by contacting your primary material suppliers (copper rod manufacturers, polymer compounding facilities). Request specific LCA data for the materials they supply. If they cannot provide primary data, use verified secondary data from established databases (e.g., Ecoinvent, GaBi), but note this will likely result in a higher overall carbon footprint.
2.  **Internal Manufacturing Data:** Quantify the energy consumption, water usage, and waste generation associated with your own extrusion and cabling processes. Allocate these impacts to specific product lines based on production volumes or machine time.
3.  **Data Integration:** Consolidate the supplier data and internal data into a central repository (e.g., PLM or ERP system). Ensure the data is formatted according to the required ESPR schema.
4.  **Verification and Auditing:** Engage a qualified third-party auditor to review the data collection methodology, verify the calculations, and issue a statement of assurance. This step is crucial for mitigating the risk of non-compliance and ensuring the credibility of your DPP.

### Key Considerations for Data Quality

*   **Accuracy:** Ensure the data accurately reflects the specific materials and processes used for each product variant.
*   **Completeness:** Do not omit any required data fields. If primary data is unavailable, use appropriate secondary data and clearly document the source.
*   **Consistency:** Use consistent methodologies and emission factors across all product lines to enable fair comparisons.
*   **Timeliness:** Regularly update the data to reflect changes in the supply chain or manufacturing processes.

By prioritizing data quality and establishing robust collection and verification processes, cable manufacturers can ensure their Digital Product Passports meet the rigorous demands of the ESPR and provide a transparent, reliable source of information for stakeholders throughout the value chain.
`;

const targetFiles = [
  'src/content/reference/espr-framework-overview.md',
  'src/content/reference/digital-product-passport-basics.md',
  'src/content/reference/material-declaration-standards.md',
  'src/content/guides/how-to-create-a-digital-product-passport-for-cables.md',
  'src/content/guides/collecting-supply-chain-data-for-cable-manufacturers.md'
];

targetFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('## Data Requirements Breakdown for Cables')) {
      if (content.includes('## Additional Resources')) {
        content = content.replace('## Additional Resources', extraText + '\n\n## Additional Resources');
      } else {
        content += extraText;
      }
      fs.writeFileSync(file, content);
      console.log(`Deepened ${file}`);
    }
  }
});
