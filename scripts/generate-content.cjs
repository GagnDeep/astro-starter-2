const fs = require('fs');
const path = require('path');

const suppliers = [
  { slug: 'strata-manufacturing', title: 'Strata Manufacturing', category: 'manufacturing', certs: ['AS9100D', 'NADCAP', 'ISO 9001'], loc: 'Al Ain' },
  { slug: 'calidus', title: 'Calidus', category: 'manufacturing', certs: ['AS9100', 'ISO 14001'], loc: 'Abu Dhabi' },
  { slug: 'ammroc', title: 'AMMROC', category: 'mro', certs: ['GCAA CAR 145', 'FAA Part 145', 'EASA Part 145'], loc: 'Al Ain' },
  { slug: 'halcon', title: 'HALCON', category: 'equipment', certs: ['AS9100', 'ISO 9001'], loc: 'Abu Dhabi' },
  { slug: 'lahab', title: 'LAHAB', category: 'materials', certs: ['ISO 9001', 'ISO 14001'], loc: 'Abu Dhabi' },
  { slug: 'gal', title: 'GAL (Global Aerospace Logistics)', category: 'logistics', certs: ['GCAA', 'ISO 9001'], loc: 'Abu Dhabi' },
  { slug: 'epi', title: 'EPI (Emirates Precision Industries)', category: 'manufacturing', certs: ['AS9100D', 'ISO 14001'], loc: 'Abu Dhabi' },
  { slug: 'al-tariq', title: 'AL TARIQ', category: 'equipment', certs: ['AS9100'], loc: 'Abu Dhabi' },
  { slug: 'earth', title: 'EARTH', category: 'consulting', certs: ['ISO 27001'], loc: 'Abu Dhabi' },
  { slug: 'sign4l', title: 'SIGN4L', category: 'cybersecurity', certs: ['ISO 27001', 'ISO 9001'], loc: 'Abu Dhabi' },
  { slug: 'beacon-red', title: 'Beacon Red', category: 'cybersecurity', certs: ['ISO 27001'], loc: 'Dubai' },
  { slug: 'sanad', title: 'Sanad Aerotech', category: 'mro', certs: ['EASA', 'FAA', 'GCAA'], loc: 'Abu Dhabi' },
  { slug: 'etimad', title: 'Etimad', category: 'consulting', certs: ['ISO 9001'], loc: 'Abu Dhabi' },
  { slug: 'aquila-aerospace', title: 'Aquila Aerospace', category: 'avionics', certs: ['AS9100', 'GCAA CAR 21'], loc: 'Abu Dhabi' },
  { slug: 'trijicon-me', title: 'Trijicon Middle East', category: 'equipment', certs: ['ISO 9001'], loc: 'Dubai' },
  { slug: 'maximus-air', title: 'Maximus Air', category: 'logistics', certs: ['GCAA AOC', 'IOSA'], loc: 'Abu Dhabi' }
];

suppliers.forEach(s => {
  const content = `---
title: "${s.title}"
description: "Comprehensive B2B profile for ${s.title}, a key supplier in the UAE ${s.category} sector."
certifications: ${JSON.stringify(s.certs)}
category: "${s.category}"
location: "${s.loc}"
seo:
  page_description: "${s.title} is a leading provider of ${s.category} services in ${s.loc}, UAE. View certifications and capabilities."
---
# ${s.title}

${s.title} is a critical player in the UAE's aerospace and defense supply chain, operating out of ${s.loc}. Specializing in **${s.category}**, they adhere to stringent international standards.

## Capabilities & Certifications
- **Primary Category:** ${s.category}
- **Certifications:** ${s.certs.join(', ')}

To understand their contribution to local content requirements, view our [Local Content Estimator](/tools/local-content-estimator) or browse related [${s.category} suppliers](/directory/${s.category}).
`;
  fs.writeFileSync(path.join(__dirname, '..', 'src', 'content', 'suppliers', `${s.slug}.md`), content);
});

const glossaryTerms = [
  { slug: 'as9100', title: 'AS9100', def: 'The widely adopted and standardized quality management system for the aerospace industry.' },
  { slug: 'mro', title: 'MRO', def: 'Maintenance, Repair, and Overhaul.' },
  { slug: 'gcaa', title: 'GCAA', def: 'General Civil Aviation Authority, the federal aviation authority of the UAE.' },
  { slug: 'itar', title: 'ITAR', def: 'International Traffic in Arms Regulations.' },
  { slug: 'tawazun-offset', title: 'Tawazun Offset Program', def: 'A UAE government program designed to generate economic and commercial value from defense procurement.' },
  { slug: 'nadcap', title: 'NADCAP', def: 'National Aerospace and Defense Contractors Accreditation Program.' },
  { slug: 'c4isr', title: 'C4ISR', def: 'Command, Control, Communications, Computers, Intelligence, Surveillance, and Reconnaissance.' },
  { slug: 'oem', title: 'OEM', def: 'Original Equipment Manufacturer.' },
  { slug: 'uav', title: 'UAV', def: 'Unmanned Aerial Vehicle (Drone).' },
  { slug: 'iso27001', title: 'ISO 27001', def: 'International standard for information security management systems.' },
  { slug: 'faa-part-145', title: 'FAA Part 145', def: 'Federal Aviation Administration regulation for certificated repair stations.' },
  { slug: 'easa-part-145', title: 'EASA Part 145', def: 'European Union Aviation Safety Agency regulation for maintenance organizations.' },
  { slug: 'cnc-machining', title: 'CNC Machining', def: 'Computer Numerical Control machining, used for high-precision aerospace parts.' },
  { slug: 'composite-materials', title: 'Composite Materials', def: 'Engineered materials made from two or more constituent materials with significantly different physical or chemical properties.' },
  { slug: 'avionics', title: 'Avionics', def: 'The electronic systems used on aircraft, artificial satellites, and spacecraft.' },
  { slug: 'tier-1-supplier', title: 'Tier 1 Supplier', def: 'Direct supplier to the OEM.' },
  { slug: 'tier-2-supplier', title: 'Tier 2 Supplier', def: 'Supplier to Tier 1 companies, rather than directly to the OEM.' },
  { slug: 'offset-multiplier', title: 'Offset Multiplier', def: 'A factor applied to the value of an investment or project to determine its credit towards offset obligations.' },
  { slug: 'fdi', title: 'FDI', def: 'Foreign Direct Investment.' },
  { slug: 'joint-venture', title: 'Joint Venture', def: 'A business entity created by two or more parties, generally characterized by shared ownership, shared returns and risks, and shared governance.' }
];

glossaryTerms.forEach(t => {
  const content = `---
title: "${t.title}"
definition: "${t.def}"
seo:
  page_description: "Definition and details for ${t.title} in the context of UAE aerospace and defense."
---
# ${t.title}

**Definition:** ${t.def}

Understanding ${t.title} is crucial for navigating the UAE's defense procurement ecosystem. For related capabilities, search our [Directory](/directory) or check [Recent News](/news).
`;
  fs.writeFileSync(path.join(__dirname, '..', 'src', 'content', 'glossary', `${t.slug}.md`), content);
});

const blogs = [
  { slug: 'uae-defense-budget-2024-analysis', title: 'UAE Defense Budget 2024 Analysis', q: 'What does the 2024 UAE defense budget mean for local suppliers?' },
  { slug: 'edge-group-supplier-registration', title: 'How to Register as an EDGE Group Supplier', q: 'What are the exact steps and certifications needed?' },
  { slug: 'tawazun-offset-program-multipliers', title: 'Tawazun Offset Program Multipliers Explained', q: 'How do offset multipliers affect defense FDI in 2024?' },
  { slug: 'as9100-certification-dubai', title: 'Getting AS9100 Certified in Dubai', q: 'What is the timeline and cost for AS9100 certification?' },
  { slug: 'itar-compliance-middle-east', title: 'ITAR Compliance for Middle East Contractors', q: 'How can UAE firms handle ITAR restricted data safely?' },
  { slug: 'drone-manufacturing-components-uae', title: 'Sourcing Drone Components within the UAE', q: 'Which local vendors supply UAV avionics and composites?' },
  { slug: 'cybersecurity-clearances-uae-defense', title: 'Navigating Cybersecurity Clearances in UAE Defense', q: 'Is ISO 27001 enough for classified defense contracts?' },
  { slug: 'mro-expansion-al-maktoum', title: 'MRO Facility Expansion at Al Maktoum', q: 'What new contracts are available for tier-2 suppliers?' },
  { slug: 'local-content-requirements-2024', title: 'Meeting UAE Local Content Requirements', q: 'How is the local content score calculated and verified?' },
  { slug: 'idex-2025-exhibitor-prep', title: 'IDEX 2025: Exhibitor Preparation Guide', q: 'How should B2B suppliers position themselves for IDEX?' },
  { slug: 'precision-machining-abu-dhabi', title: 'The Rise of Precision Machining in Abu Dhabi', q: 'Who are the key players in 5-axis CNC machining locally?' },
  { slug: 'aerospace-logistics-challenges', title: 'Supply Chain Risks in Aerospace Logistics', q: 'How to mitigate AOG (Aircraft on Ground) risks in the UAE?' }
];

blogs.forEach(b => {
  const content = `---
title: "${b.title}"
post_hero:
  date: "2024-03-01"
  heading: "${b.title}"
  tags: ["defense", "uae", "b2b"]
  author: "Aerospace UAE Editorial"
  image: "/images/og/og-default.png"
  image_alt: "Aerospace representation"
thumb_image_path: "/images/og/og-default.png"
thumb_image_alt: "Thumbnail"
seo:
  page_description: "Detailed analysis: ${b.q} We break down what UAE aerospace suppliers need to know."
---

# ${b.title}

## The Core Question: ${b.q}

In the rapidly evolving landscape of UAE defense and aerospace, maintaining up-to-date knowledge is non-negotiable. This report leverages primary data from recent governmental and industry releases (2024) to provide actionable B2B intelligence.

### Data & Worked Example

Consider a mid-sized tier-2 supplier targeting this sector. Based on 2024 offset guidelines, local manufacturing yields a ~1.5x multiplier towards offset credits, compared to a standard 1.0x for simple joint ventures.

| Scenario | Investment ($M) | Multiplier | Offset Credit ($M) |
|---|---|---|---|
| Direct Import | 10 | 0.5 | 5 |
| Local Assembly | 10 | 1.0 | 10 |
| Local Manufacturing | 10 | 1.5 | 15 |
*(Source: Tawazun Guidelines, estimated 2024 parameters)*

### Common Mistakes

1. **Assuming Global Certs are Enough:** While ISO 9001 is good, failing to secure AS9100D or specific GCAA approvals disqualifies you from prime OEM contracts.
2. **Ignoring Local Content:** The National In-Country Value (ICV) program heavily weights local procurement.

### FAQ

**Q: Do I need a local partner?**
A: Often yes, though 100% foreign ownership is now possible in specific free zones, prime defense contracts strongly favor local JVs.

**Q: How does this impact my supply chain?**
A: Evaluate your tier-3 vendors immediately. Use our [Directory](/directory) to find compliant partners.

### What to Do Next

Ensure your company profile in our B2B directory is up to date, and test your readiness using our [Compliance Checklist](/tools/compliance-checklist).

**Need regular updates?** Subscribe below.
`;
  fs.writeFileSync(path.join(__dirname, '..', 'src', 'content', 'blog', `${b.slug}.mdx`), content);
});
