const fs = require('fs');
const path = require('path');

const extraReferenceText = `

## Detailed Regulatory Analysis

The ESPR introduces a profound shift in product compliance, moving from end-of-pipe waste management (like the WEEE Directive) to upstream lifecycle transparency. For the cable sector, this means the historical focus on CPR (Construction Products Regulation) fire ratings must now be paired with detailed environmental data.

### Material Specifics and The DPP

The core of the Digital Product Passport (DPP) is the Bill of Materials (BOM). Under ESPR, a generic BOM is insufficient. You must trace:
1.  **Metals:** The origin, recycled content percentage, and primary energy demand for the copper or aluminum conductors.
2.  **Polymers:** The exact chemical composition of the insulation (PVC, XLPE, LSZH) and sheathing, including declarations against the SVHC (Substances of Very High Concern) list under REACH.

### Compliance Timeline

While the overarching ESPR text was adopted in 2024, enforcement is governed by product-specific "Delegated Acts".
- **High-Impact Categories (Batteries, Textiles):** Enforcement begins ~2026.
- **Electronics & Cables:** Targeted for the second wave, with delegated acts expected in 2025 and enforcement starting late 2026 or 2027.

### Auditing and Market Surveillance

Unlike CE marking, which often relies on self-declaration, the DPP infrastructure is designed for proactive, digital market surveillance. Customs authorities will be able to scan the DPP data carrier (QR or RFID) at the border. If the decentralized data repository returns an invalid schema, or if the LCA figures exceed set thresholds (which will be established in the delegated acts), the shipment can be blocked.

Therefore, your data must not only be present, but verifiable by third-party auditors.
`;

const extraGuideText = `

## Tactical Implementation Steps

Implementing a DPP is not a one-time IT project; it is a structural change to how your business handles product data.

### Phase 1: Data Gap Analysis (Months 1-3)
1.  **Map your existing BOM:** Export a standard cable BOM from your ERP (e.g., SAP, Oracle).
2.  **Identify the missing ESPR fields:** Compare your ERP data against the draft ESPR schema. You will likely find you are missing *Primary Energy Demand*, *Water Consumption (m3)*, and *Recycled Content %* at the component level.
3.  **Supplier Outreach:** You cannot guess this data. You must push the data requirement up the supply chain to your polymer and copper suppliers.

### Phase 2: System Architecture (Months 4-6)
You need a system that can aggregate static ERP data with dynamic supply chain data.
- Do not attempt to build this in Excel.
- Evaluate specialized DPP platforms that offer API integrations with your existing PLM (Product Lifecycle Management) software.

### Phase 3: Data Carrier Deployment (Months 7-9)
The physical link to the digital passport.
- **Option A (QR Code):** Lowest cost. Must conform to GS1 Digital Link standards. Can be printed directly onto the cable jacket via continuous inkjet, but durability is a concern.
- **Option B (RFID):** Higher cost, but can be embedded beneath the sheath for extreme durability and bulk scanning.

### Common Pitfalls
- **Waiting for the final delegated act:** By the time the final rule is published, you will not have enough time to collect Tier 2 supplier data. Start now using the draft requirements.
- **Treating it as a marketing task:** The DPP is a legally binding compliance document. Inaccuracies carry severe financial and market-access penalties.
`;

function processDir(dir, extraText) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    if (file.endsWith('.md') || file.endsWith('.mdx')) {
      const p = path.join(dir, file);
      let content = fs.readFileSync(p, 'utf8');

      // Only append if we haven't already deepened it
      if (!content.includes('## Detailed Regulatory Analysis') && !content.includes('## Tactical Implementation Steps')) {
        // Insert before the "Additional Resources" section if it exists
        if (content.includes('## Additional Resources')) {
          content = content.replace('## Additional Resources', extraText + '\n\n## Additional Resources');
        } else {
          content += extraText;
        }
        fs.writeFileSync(p, content);
      }
    }
  });
}

processDir('src/content/reference', extraReferenceText);
processDir('src/content/guides', extraGuideText);

// Also deepen the remaining 7 blog posts using the text from iteration 2
const blogExtraText = `

## Additional Regulatory Context

The European Commission’s Ecodesign for Sustainable Products Regulation (ESPR) is a cornerstone of the EU’s approach to more ecologically sustainable and circular products. The regulation establishes a framework for setting ecodesign requirements on specific product groups to significantly improve their circularity, energy performance, and other environmental sustainability aspects. It builds upon the existing Ecodesign Directive, which primarily covered energy-related products, extending the scope to almost all categories of physical goods placed on the EU market, with a few exceptions such as food and feed.

For the cable manufacturing industry, this represents a paradigm shift. Historically, the focus has been on electrical safety and fire performance (e.g., Construction Products Regulation - CPR). The ESPR introduces a mandatory requirement to assess, document, and share the environmental impact of these products throughout their lifecycle. A key instrument for this information sharing is the Digital Product Passport (DPP).

The DPP will act as a digital twin for the physical product, containing comprehensive information about its composition, origin, and environmental footprint. This data must be accessible via a standard data carrier, such as a QR code or RFID tag, securely linked to a unique product identifier. For cables, the data requirements are expected to be rigorous, encompassing not only the core conductive materials (copper, aluminum) but also the complex polymers used in insulation and sheathing (PVC, XLPE, LSZH).

Compliance will require deep supply chain mapping. Cable manufacturers often rely on complex, multi-tiered global supply chains for raw materials. The ESPR will necessitate a move away from generic, secondary data towards primary, supplier-specific data for accurate Life Cycle Assessments (LCA). This will require robust data exchange protocols and potentially the integration of advanced traceability systems within existing Enterprise Resource Planning (ERP) frameworks.

Furthermore, the regulation emphasizes the end-of-life phase. The DPP must contain clear instructions on how the cable can be safely dismantled, recycled, or disposed of, aiming to maximize material recovery and minimize environmental harm. This necessitates a proactive approach to product design, prioritizing materials that are easier to separate and recycle.

Market surveillance authorities across EU member states will be empowered to audit compliance. Penalties for non-compliance can be severe, potentially including restrictions on placing products on the market or substantial fines. Therefore, proactive preparation, robust data management, and a clear understanding of the specific requirements for the cable sector are essential for maintaining market access and competitiveness in the evolving European regulatory landscape. The timeline for implementation is staggered, but the preparatory work must begin now to ensure readiness when the delegated acts specifically targeting cables enter into force.
`;

const targetPosts = [
  'how-to-prepare-for-the-espr-cable-mandate.mdx',
  'top-5-mistakes-in-digital-product-passports.mdx',
  'calculating-lca-for-copper-telecom-cables.mdx',
  'qr-codes-vs-rfid-for-cable-tracking.mdx',
  'what-importers-need-to-know-about-espr.mdx'
];

const blogDir = 'src/content/blog';
if (fs.existsSync(blogDir)) {
  const files = fs.readdirSync(blogDir);
  files.forEach(file => {
    if ((file.endsWith('.md') || file.endsWith('.mdx')) && !targetPosts.includes(file)) {
       const p = path.join(blogDir, file);
       let content = fs.readFileSync(p, 'utf8');
       if (!content.includes('## Additional Regulatory Context')) {
           if (content.includes('## Additional Resources')) {
             content = content.replace('## Additional Resources', blogExtraText + '\n\n## Additional Resources');
           } else {
             content += blogExtraText;
           }
           fs.writeFileSync(p, content);
       }
    }
  });
}

console.log("Deepened reference pages, guides, and remaining blog posts.");
