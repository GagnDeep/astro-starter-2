const fs = require('fs');
const path = require('path');

const generateMarkdown = (title, seoDesc, body) => `---
title: "${title}"
seo:
  page_description: "${seoDesc}"
  no_index: false
---

# ${title}

${body}
`;

const generateGlossary = (term, definition) => `---
title: "${term}"
term: "${term}"
definition: "${definition}"
seo:
  page_description: "Definition of ${term} in California solar contexts."
  no_index: false
---

# ${term}

**${term}**: ${definition}
`;

const writeFiles = (dir, items, generator) => {
  items.forEach((item) => {
    const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const content = generator(item);
    fs.writeFileSync(path.join(dir, `${slug}.md`), content);
  });
};

const referenceItems = [
  { title: "NEM 3.0 Explained", seoDesc: "A complete guide to California's NEM 3.0 net billing rules.", body: "NEM 3.0 fundamentally changes solar ROI in California. Here is a deep dive into the math.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## The Impact of Export Rates\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "PG&E Solar Rates Guide", seoDesc: "Current PG&E solar rates and what they mean for your bill.", body: "Understanding PG&E's E-ELEC and EV2-A rates is crucial.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Time of Use Breakdown\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "SCE Solar True Up", seoDesc: "How Southern California Edison handles annual solar true-ups.", body: "Your SCE true-up bill explained in plain English.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Reading Your SCE Bill\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "SDG&E Solar Plans", seoDesc: "SDG&E solar plans compared for San Diego homeowners.", body: "SDG&E has some of the highest rates in the nation.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Best SDG&E Rates for Solar\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "California Solar Tax Credit 2024", seoDesc: "How to claim the 30% federal solar tax credit in CA.", body: "The Residential Clean Energy Credit is available for CA homeowners.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## IRS Form 5695\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "Federal ITC Rules", seoDesc: "Federal Investment Tax Credit rules for solar panels and batteries.", body: "What qualifies for the ITC and how to claim it.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Battery Specific Rules\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "SGIP Battery Rebate", seoDesc: "Status and guide for the Self-Generation Incentive Program in CA.", body: "SGIP provides rebates for installing home batteries.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Tiered Rebate System\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "Enphase vs SolarEdge", seoDesc: "Comparing the top two inverter brands for California homes.", body: "Microinverters vs String inverters with optimizers.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Reliability and Expansion\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "Tesla Powerwall 3 Review", seoDesc: "Is the Tesla Powerwall 3 the best battery for NEM 3.0?", body: "The latest home battery from Tesla features integrated solar inverters.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Integrated Inverter Tech\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "Best Solar Batteries 2024", seoDesc: "Top home batteries ranked for California homeowners.", body: "Our top picks for home energy storage in 2024.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Comparison Chart\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "Solar Panel Degradation Over Time", seoDesc: "How much power do solar panels lose each year?", body: "Most tier 1 panels degrade at 0.5% per year.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Measuring Degradation\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "Tier 1 Solar Panels List", seoDesc: "What makes a tier 1 solar panel and which brands qualify.", body: "Tier 1 is a measure of bankability, not just quality.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Top Tier 1 Manufacturers\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "Monocrystalline vs Polycrystalline", seoDesc: "Differences between solar cell types explained.", body: "Why almost all new CA installations use monocrystalline panels.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Efficiency Differences\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "N-type vs P-type Solar Cells", seoDesc: "Understanding the next generation of solar cell technology.", body: "N-type cells offer better efficiency and less degradation.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Long Term Performance\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "Solar Inverter Lifespan", seoDesc: "How long do solar inverters last in California weather?", body: "Expect to replace a string inverter once during your system's life.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Warranty Expectations\n\n" + "Nullam in dui mauris. ".repeat(150) },
];

const taxonomyItems = [
  { title: "Solar in Los Angeles", seoDesc: "Solar installer guide for Los Angeles, CA.", body: "Los Angeles solar guidelines and top installers.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## LADWP Guidelines\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "Solar in San Diego", seoDesc: "Solar installer guide for San Diego, CA.", body: "Navigating SDG&E rates for San Diego homeowners.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## SDG&E Rules\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "Solar in San Francisco", seoDesc: "Solar installer guide for San Francisco, CA.", body: "PG&E rates and solar rules in SF.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## PG&E in SF\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "Solar in San Jose", seoDesc: "Solar installer guide for San Jose, CA.", body: "Going solar in the heart of Silicon Valley.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Silicon Valley Clean Energy\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "Solar in Sacramento", seoDesc: "Solar installer guide for Sacramento, CA.", body: "SMUD rates vs PG&E for Sacramento solar.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## SMUD Specifics\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "Solar in Fresno", seoDesc: "Solar installer guide for Fresno, CA.", body: "High heat solar considerations in Fresno.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Handling High Heat\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "Solar in Oakland", seoDesc: "Solar installer guide for Oakland, CA.", body: "Oakland solar permitting and PG&E rules.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Permitting in Oakland\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "Solar in Bakersfield", seoDesc: "Solar installer guide for Bakersfield, CA.", body: "Maximizing solar production in Bakersfield.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Maximizing Yield\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "Solar in Anaheim", seoDesc: "Solar installer guide for Anaheim, CA.", body: "Anaheim Public Utilities solar guidelines.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## Anaheim Public Utilities\n\n" + "Nullam in dui mauris. ".repeat(150) },
  { title: "Solar in Riverside", seoDesc: "Solar installer guide for Riverside, CA.", body: "RPU solar programs and net energy metering.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(150) + "\n\n## RPU Rules\n\n" + "Nullam in dui mauris. ".repeat(150) },
];

const glossaryItems = [
  { title: "Net Energy Metering (NEM)", definition: "A billing mechanism that credits solar energy system owners for the electricity they add to the grid." },
  { title: "NEM 3.0 (Net Billing Tariff)", definition: "California's updated solar billing policy that significantly reduces the export value of solar energy sent to the grid." },
  { title: "True-Up Bill", definition: "An annual settlement bill from your utility company that reconciles the total cost of electricity you consumed vs generated." },
  { title: "Inverter", definition: "A device that converts direct current (DC) electricity generated by solar panels into alternating current (AC) electricity used by home appliances." },
  { title: "Microinverter", definition: "A small inverter attached to an individual solar panel, allowing each panel to operate independently." },
  { title: "String Inverter", definition: "A central inverter that handles the electricity from a series (string) of connected solar panels." },
  { title: "Kilowatt (kW)", definition: "A unit of power equal to 1,000 watts. Solar system sizes are typically measured in kW." },
  { title: "Kilowatt-hour (kWh)", definition: "A measure of electrical energy equivalent to a power consumption of 1,000 watts for 1 hour. This is how utilities bill for electricity." },
  { title: "Time of Use (TOU) Rates", definition: "A utility rate structure where electricity prices vary based on the time of day and season." },
  { title: "Self-Generation Incentive Program (SGIP)", definition: "A California program offering rebates for installing energy storage systems like home batteries." },
  { title: "Investment Tax Credit (ITC)", definition: "A federal tax credit (currently 30%) for installing residential solar systems and battery storage." },
  { title: "Degradation Rate", definition: "The percentage at which a solar panel's power output declines each year, typically around 0.5%." },
  { title: "Monocrystalline", definition: "A highly efficient type of solar panel made from a single, continuous crystal structure." },
  { title: "Polycrystalline", definition: "An older type of solar panel made from fragments of silicon melted together, generally less efficient than monocrystalline." },
  { title: "Virtual Power Plant (VPP)", definition: "A network of decentralized power generating units (like home batteries) dispatched as a single power plant." },
  { title: "Agrivoltaics", definition: "The simultaneous use of land for both solar photovoltaic power generation and agriculture." },
  { title: "Bifacial Solar Panel", definition: "A solar panel that can generate electricity from both its front and back sides." },
  { title: "Grid-Tied System", definition: "A solar power system connected to the local utility grid." },
  { title: "Off-Grid System", definition: "A standalone solar power system that operates entirely independent of the utility grid." },
  { title: "Power Purchase Agreement (PPA)", definition: "A financial arrangement where a third party owns the solar system and sells the electricity to the homeowner at a set rate." },
];

const blogItems = [
  { title: "Is solar still worth it in California under NEM 3?", seoDesc: "Detailed math on whether solar makes sense in CA under NEM 3.0.", body: "The math has changed, but solar is still viable. Let's look at the numbers.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(250) + "\n\n## The New Math\n\n" + "Nullam in dui mauris. ".repeat(250) },
  { title: "How long does a solar battery last?", seoDesc: "Expected lifespan of home solar batteries and warranties explained.", body: "Most home batteries are warrantied for 10 years, but what happens after that?.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(250) + "\n\n## Warranty Details\n\n" + "Nullam in dui mauris. ".repeat(250) },
  { title: "PG&E rate hike solar offset", seoDesc: "How to use solar to offset the recent PG&E rate hikes.", body: "PG&E rates keep climbing. Here is how solar can hedge against future increases.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(250) + "\n\n## Shielding from Hikes\n\n" + "Nullam in dui mauris. ".repeat(250) },
  { title: "How many panels do I need to zero out my bill?", seoDesc: "A guide to sizing your solar system to eliminate your utility bill.", body: "It's not just about roof space; it's about your usage patterns.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(250) + "\n\n## Usage Analysis\n\n" + "Nullam in dui mauris. ".repeat(250) },
  { title: "Can I go off-grid in California?", seoDesc: "The legal and practical realities of off-grid solar in California.", body: "Going off-grid is a dream for many, but in California, the rules are strict.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(250) + "\n\n## Off-grid Permits\n\n" + "Nullam in dui mauris. ".repeat(250) },
  { title: "Federal solar tax credit carry over", seoDesc: "How to roll over your unused solar tax credit to the next year.", body: "If you don't have enough tax liability this year, here is how to use the credit later.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(250) + "\n\n## Carry Forward Rules\n\n" + "Nullam in dui mauris. ".repeat(250) },
  { title: "How much value does solar add to a home in CA?", seoDesc: "The real impact of solar panels on California property values.", body: "Studies show solar adds value, but does it increase your property taxes?.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(250) + "\n\n## Property Tax Impact\n\n" + "Nullam in dui mauris. ".repeat(250) },
  { title: "Lease vs buy solar panels", seoDesc: "Financial comparison of leasing vs buying solar in California.", body: "Should you buy, finance, or lease your solar panels? Let's compare.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(250) + "\n\n## Financial Comparison\n\n" + "Nullam in dui mauris. ".repeat(250) },
  { title: "Do I need a battery with NEM 3.0?", seoDesc: "Why battery storage is almost mandatory under California's new rules.", body: "Without a battery, NEM 3.0 drastically reduces your solar savings.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(250) + "\n\n## Battery Necessity\n\n" + "Nullam in dui mauris. ".repeat(250) },
  { title: "Best solar panels for high heat", seoDesc: "Which solar panels perform best in hot California climates.", body: "Temperature coefficients matter in the Central Valley and desert regions.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(250) + "\n\n## Temp Coefficients\n\n" + "Nullam in dui mauris. ".repeat(250) },
  { title: "How to clean solar panels safely", seoDesc: "Best practices for cleaning solar panels without damaging them.", body: "Dust and smog can reduce output. Here is how to clean them safely.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(250) + "\n\n## Cleaning Guide\n\n" + "Nullam in dui mauris. ".repeat(250) },
  { title: "Will solar panels damage my roof?", seoDesc: "Understanding solar installations and roof integrity.", body: "Proper installation shouldn't cause leaks. Here is what to look for.\n\n" + "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(250) + "\n\n## Roof Protection\n\n" + "Nullam in dui mauris. ".repeat(250) },
];

writeFiles(path.join(__dirname, '../src/content/reference'), referenceItems, item => generateMarkdown(item.title, item.seoDesc, item.body));
writeFiles(path.join(__dirname, '../src/content/taxonomy'), taxonomyItems, item => generateMarkdown(item.title, item.seoDesc, item.body));
writeFiles(path.join(__dirname, '../src/content/glossary'), glossaryItems, item => generateGlossary(item.title, item.definition));

const generateBlogPost = (title, seoDesc, body) => `---
title: "${title}"
post_hero:
  date: 2024-05-15
  heading: "${title}"
  tags:
    - California Solar
  author: Editorial Team
  image: /src/assets/images/transparent-bg/undraw-online-test.svg
  image_alt: Solar panels on a roof
thumb_image_path: /src/assets/images/transparent-bg/undraw-online-test.svg
thumb_image_alt: Thumbnail of solar panels
seo:
  page_description: "${seoDesc}"
  no_index: false
---

${body}
`;

blogItems.forEach((item) => {
  const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const content = generateBlogPost(item.title, item.seoDesc, item.body);
  fs.writeFileSync(path.join(__dirname, '../src/content/blog', `${slug}.mdx`), content);
});

console.log('Deep content generated.');
