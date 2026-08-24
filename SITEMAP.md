# Sitemap and Information Architecture

## Overview
The architecture is structured around a central homepage with four primary topic hubs based on the core methodology (Cost of Living, Visas, Healthcare, Taxes). Spoke pages radiate from these hubs, targeting long-tail queries near-retirees are searching for. Sideways links connect genuine alternatives (e.g., comparing tax systems in Portugal vs. Spain).

---

## The Homepage
**URL:** `/`
**Target Query:** Where to retire abroad
**Intent:** Broad discovery. Users want a credible, data-backed starting point to compare countries for retirement without getting scammed or misled.
**Page Type:** Homepage
**Unique Value:** The only page that summarizes the entire four-pillar methodology (cost, visa, health, tax) and links to all primary hubs.
**Inbound Links:** From every page via the site logo/header.
**Outbound Links:**
- `/cost-of-living/` (Cost of Living Hub)
- `/visas/` (Visas Hub)
- `/healthcare/` (Healthcare Hub)
- `/taxes/` (Taxes Hub)

---

## Hub 1: Cost of Living
**URL:** `/cost-of-living/`
**Target Query:** Cheapest countries to retire
**Intent:** Top-of-funnel comparison. Users want to know which countries fit their fixed-income budget, based on verifiable data.
**Page Type:** Hub
**Unique Value:** Central aggregation of local purchasing power data, rent indices, and grocery costs across our tracked countries.
**Inbound Links:** Homepage, all Cost of Living spokes.
**Outbound Links:**
- `/cost-of-living/portugal-vs-spain/`
- `/cost-of-living/panama-budget-breakdown/`
- `/cost-of-living/costa-rica-housing-market/`

### Spoke 1.1: Portugal vs. Spain Cost Comparison
**URL:** `/cost-of-living/portugal-vs-spain/`
**Target Query:** Is Portugal cheaper than Spain for retirees
**Intent:** Specific comparison. The user has narrowed down to the Iberian peninsula and needs a line-item financial comparison.
**Page Type:** Spoke (Comparison Table)
**Unique Value:** A side-by-side table of utility costs, rent, and dining out in comparable mid-tier cities in both countries.
**Inbound Links:** `/cost-of-living/`, `/taxes/portugal-nhr-alternatives/`
**Outbound Links:** `/cost-of-living/`, `/taxes/portugal-nhr-alternatives/` (Sideways link for full financial context)

### Spoke 1.2: Panama Budget Breakdown
**URL:** `/cost-of-living/panama-budget-breakdown/`
**Target Query:** How much money do you need to retire in Panama
**Intent:** Deep dive. The user is strongly considering Panama and needs to know if their specific monthly pension is sufficient.
**Page Type:** Spoke (Budget Guide)
**Unique Value:** A realistic $2,500/month sample budget verified against current Panamanian grocery and utility rates.
**Inbound Links:** `/cost-of-living/`, `/visas/panama-pensionado-requirements/`
**Outbound Links:** `/cost-of-living/`, `/visas/panama-pensionado-requirements/`

### Spoke 1.3: Costa Rica Housing Market
**URL:** `/cost-of-living/costa-rica-housing-market/`
**Target Query:** Renting vs buying in Costa Rica for expats
**Intent:** Actionable advice on housing logistics. Users want to know the risks of buying property versus the costs of renting long-term.
**Page Type:** Spoke (Market Analysis)
**Unique Value:** Explains the legal differences for foreigners buying land versus holding a long-term lease in Costa Rica.
**Inbound Links:** `/cost-of-living/`
**Outbound Links:** `/cost-of-living/`

---

## Hub 2: Visas & Residency
**URL:** `/visas/`
**Target Query:** Easiest countries to get residency for retirement
**Intent:** Navigational and practical. Users need to understand the legal pathways to actually stay in their chosen country long-term.
**Page Type:** Hub
**Unique Value:** A clear directory of passive income and retirement visas, outlining minimum monthly income requirements side-by-side.
**Inbound Links:** Homepage, all Visa spokes.
**Outbound Links:**
- `/visas/spain-non-lucrative-visa/`
- `/visas/panama-pensionado-requirements/`
- `/visas/italy-elective-residency/`

### Spoke 2.1: Spain Non-Lucrative Visa (NLV)
**URL:** `/visas/spain-non-lucrative-visa/`
**Target Query:** Spain non lucrative visa income requirements 2026
**Intent:** Informational. User needs exact, up-to-date IPREM multiples required to qualify for Spanish residency without working.
**Page Type:** Spoke (Visa Guide)
**Unique Value:** Breaks down the specific financial proof needed (IPREM calculations) and the timeline for application.
**Inbound Links:** `/visas/`
**Outbound Links:** `/visas/`, `/healthcare/spain-private-insurance-requirements/`

### Spoke 2.2: Panama Pensionado Requirements
**URL:** `/visas/panama-pensionado-requirements/`
**Target Query:** Panama pensionado visa benefits
**Intent:** Evaluative. User wants to understand not just how to get the visa, but what discounts (flights, utilities, healthcare) it actually provides.
**Page Type:** Spoke (Visa Guide)
**Unique Value:** Lists the exact percentage discounts mandated by Panamanian law for Pensionado visa holders.
**Inbound Links:** `/visas/`, `/cost-of-living/panama-budget-breakdown/`
**Outbound Links:** `/visas/`, `/cost-of-living/panama-budget-breakdown/`

### Spoke 2.3: Italy Elective Residency
**URL:** `/visas/italy-elective-residency/`
**Target Query:** Retire in Italy passive income visa
**Intent:** Informational. User is trying to understand the notoriously subjective income requirements for Italian residency.
**Page Type:** Spoke (Visa Guide)
**Unique Value:** Explains the regional variations in how Italian consulates interpret the "adequate financial resources" requirement.
**Inbound Links:** `/visas/`
**Outbound Links:** `/visas/`, `/taxes/italy-7-percent-flat-tax/`

---

## Hub 3: Healthcare
**URL:** `/healthcare/`
**Target Query:** Best healthcare in the world for expats
**Intent:** Risk mitigation. Near-retirees are highly concerned about medical care quality, wait times, and out-of-pocket costs as they age.
**Page Type:** Hub
**Unique Value:** Compares the structure of public vs. private healthcare systems and how expats access them.
**Inbound Links:** Homepage, all Healthcare spokes.
**Outbound Links:**
- `/healthcare/spain-private-insurance-requirements/`
- `/healthcare/mexico-imss-vs-private/`
- `/healthcare/pre-existing-conditions-abroad/`

### Spoke 3.1: Spain Private Insurance Requirements
**URL:** `/healthcare/spain-private-insurance-requirements/`
**Target Query:** Best health insurance for Spain non lucrative visa
**Intent:** Transactional/Practical. The user must buy insurance to get their visa and needs to know what policies actually comply with the law.
**Page Type:** Spoke (Requirement Guide)
**Unique Value:** Details the "zero copay, zero deductible, no repatriation" requirement mandated by Spanish consulates.
**Inbound Links:** `/healthcare/`, `/visas/spain-non-lucrative-visa/`
**Outbound Links:** `/healthcare/`, `/visas/spain-non-lucrative-visa/`

### Spoke 3.2: Mexico IMSS vs Private
**URL:** `/healthcare/mexico-imss-vs-private/`
**Target Query:** Can expats use public healthcare in Mexico
**Intent:** Evaluative. User is deciding whether to rely on the Mexican public system (IMSS) or pay out of pocket for private care.
**Page Type:** Spoke (System Comparison)
**Unique Value:** A realistic assessment of wait times and facility quality in IMSS versus costs at private hospitals like Hospital Angeles.
**Inbound Links:** `/healthcare/`
**Outbound Links:** `/healthcare/`

### Spoke 3.3: Pre-existing Conditions Abroad
**URL:** `/healthcare/pre-existing-conditions-abroad/`
**Target Query:** Expat health insurance pre-existing conditions
**Intent:** Problem-solving. Users with chronic conditions need to know if they will be denied coverage or bankrupted by exclusions.
**Page Type:** Spoke (Risk Guide)
**Unique Value:** Explains moratorium underwriting versus full medical underwriting for international private medical insurance (IPMI).
**Inbound Links:** `/healthcare/`
**Outbound Links:** `/healthcare/`

---

## Hub 4: Taxes
**URL:** `/taxes/`
**Target Query:** Best tax free countries to retire
**Intent:** Financial optimization. Users want to protect their pensions, Social Security, and investments from double taxation.
**Page Type:** Hub
**Unique Value:** A straightforward explanation of tax residency triggers (e.g., the 183-day rule) and dual taxation treaties.
**Inbound Links:** Homepage, all Tax spokes.
**Outbound Links:**
- `/taxes/portugal-nhr-alternatives/`
- `/taxes/us-social-security-abroad/`
- `/taxes/italy-7-percent-flat-tax/`

### Spoke 4.1: Portugal NHR Alternatives
**URL:** `/taxes/portugal-nhr-alternatives/`
**Target Query:** Portugal NHR ending what next
**Intent:** Strategy shift. Users aware that Portugal's Non-Habitual Resident regime changed need new tax-efficient options in Europe.
**Page Type:** Spoke (Alternative Analysis)
**Unique Value:** Compares the new Portuguese tax reality against Spain's Beckham Law (where applicable) and Italy's flat tax regimes.
**Inbound Links:** `/taxes/`, `/cost-of-living/portugal-vs-spain/`
**Outbound Links:** `/taxes/`, `/cost-of-living/portugal-vs-spain/`

### Spoke 4.2: US Social Security Abroad
**URL:** `/taxes/us-social-security-abroad/`
**Target Query:** Do I pay tax on Social Security if I live abroad
**Intent:** Informational. US citizens need to understand IRS obligations versus local tax obligations on their primary income stream.
**Page Type:** Spoke (Tax Guide)
**Unique Value:** Explains the tax treaty mechanisms that prevent double taxation on US Social Security benefits in popular destinations.
**Inbound Links:** `/taxes/`
**Outbound Links:** `/taxes/`

### Spoke 4.3: Italy 7% Flat Tax Regime
**URL:** `/taxes/italy-7-percent-flat-tax/`
**Target Query:** Retire in southern Italy tax benefits
**Intent:** Specific research. User is exploring the specific incentive program for retiring to municipalities in Southern Italy.
**Page Type:** Spoke (Incentive Guide)
**Unique Value:** Lists the actual qualifying regions (Sicily, Calabria, Puglia, etc.) and the strict population limit requirements for the municipality.
**Inbound Links:** `/taxes/`, `/visas/italy-elective-residency/`
**Outbound Links:** `/taxes/`, `/visas/italy-elective-residency/`
