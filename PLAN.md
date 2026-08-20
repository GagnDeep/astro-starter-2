# PLAN.md — ro.tax Strategic Plan & Specification

**Date:** March 2025
**Jurisdiction:** Romania (RO)
**Brand:** ro.tax — The No-Suits Tax Engine for Romanian Freelancers & Creators

---

## 1. Context & Executive Summary

The Romanian fiscal landscape for freelancers, independent contractors, and digital creators undergone seismic shifts through Government Emergency Ordinances OUG 115/2023 and OUG 156/2024, alongside Government Decision HG 1506/2024. The sudden introduction of health insurance (CASS) thresholds for PFAs capped at 6, 12, and 24 gross minimum national wages, combined with the removal of flat-rate deduction benefits (Norma de Venit) across most IT and digital sectors, created panic among 20-30-year-old freelancers.

Existing tax solutions in Romania are either slow, traditional accounting firms in suits who charge €100+/month while communicating in opaque bureaucrat-speak, or beige corporate platforms that obscure real liabilities behind vague marketing promises.

`ro.tax` is engineered as an irreverent, hyper-accurate, anti-corporate tax platform built specifically for young Romanian self-employed workers (PFA in Regim Real & Solo SRLs).

---

## 2. Product Details & Who's Behind It

### Product Type
`ro.tax` is a zero-fluff digital tax navigation, expense optimization, and automated filing engine. It combines an instant real-time tax liability calculator, a categorized deduction finder, and automated annual filing for Declarația Unică (ANAF Form 212).

### Jurisdiction
**Romania (ANAF — Agenția Națională de Administrare Fiscală)**.

### Product Pricing Models
1. **PFA Free Tier**: Free instant tax calculator, full access to the 12-category Deductions Library, and deadline alerts.
2. **PFA Complete (89 RON / month)**: Automated expense scanning (e-Factura sync), real-time tax calculation, quarter-by-quarter CASS threshold tracking, and 1-click filing of Declarația Unică.
3. **Solo SRL (189 RON / month)**: Full microenterprise bookkeeping, e-Factura integration, dividend distribution tax calculator, and dedicated accountant verification.
4. **Single Return Filing (349 RON / year)**: One-off review and automated submission of Declarația Unică for freelancers who manage their own invoicing throughout the year.

### Who's Behind It
`ro.tax` was co-founded by:
- **Elena Dumitrescu, CPA**: Former senior tax auditor at ANAF with 11 years of experience dissecting sole proprietorship audits.
- **Radu Popa**: Senior full-stack engineer and former freelance contractor who received an unexpected 2,400 RON tax penalty in 2023 due to a miscalculated CASS wage threshold.

---

## 3. Official Fiscal Data & Thresholds Table (2025)

*Source Citations:*
- Codul Fiscal (Law no. 227/2015 updated via OUG 115/2023 and OUG 156/2024)
- Government Decision HG 1506/2024 (Published in Official Gazette 1185/28.11.2024)
- ANAF Official Guidelines for Declarația Unică (Form 212)

| Parameter / Tax Rate | Official Value (2025) | Citation / Official Source | Notes for Freelancers |
| :--- | :--- | :--- | :--- |
| **Gross National Minimum Wage** | **4,050 RON / month** | HG 1506/2024 (eff. 01.01.2025) | Base wage driving all CAS/CASS threshold calculations |
| **Annual Minimum Wage Unit (12x)** | **48,600 RON** | 12 × 4,050 RON | Benchmark for median CASS tier |
| **6-Wage CASS Threshold** | **24,300 RON** | Codul Fiscal Art. 170 (2) | Minimum CASS base if net income is between 6 and 12 minimum wages |
| **12-Wage CASS Threshold** | **48,600 RON** | Codul Fiscal Art. 170 (2) | Minimum CASS base if net income is between 12 and 24 minimum wages |
| **24-Wage CASS Threshold** | **97,200 RON** | Codul Fiscal Art. 170 (2) | Maximum CASS cap base (income above 24 minimum wages) |
| **PFA Income Tax Rate** | **10%** | Codul Fiscal Art. 64 | Applied to Net Taxable Income (Gross Income − Deductible Expenses − CAS) |
| **PFA Health Contribution (CASS)** | **10%** | Codul Fiscal Art. 170 | Calculated as 10% of the relevant threshold base (6, 12, or 24 wages) |
| **PFA Pension Contribution (CAS)** | **25%** | Codul Fiscal Art. 148 | Mandatory if annual net income ≥ 12 wages (48,600 RON). Base is chosen by user (min 12 or 24 wages) |
| **Microenterprise SRL Tax (1%)** | **1%** | Codul Fiscal Art. 51 | Applicable to annual revenue ≤ 60,000 EUR (~300,000 RON) with at least 1 full-time employee |
| **Microenterprise SRL Tax (3%)** | **3%** | Codul Fiscal Art. 51 | Applicable to annual revenue between 60,000 EUR and 500,000 EUR or specific IT/consulting NACE codes |
| **SRL Dividend Tax** | **8%** | Codul Fiscal Art. 97 (7) | Flat tax on net distributed dividends |
| **Declarația Unică Deadline** | **May 25, 2025** | Codul Fiscal Art. 122 | Annual filing and payment deadline for PFA income |
| **e-Factura Upload Deadline** | **5 calendar days** | OUG 120/2021 & OUG 115/2023 | Max days to transmit invoice to SPV from issue date |

*All URLs cited for verification:*
- PwC Romania Tax Summaries: `https://taxsummaries.pwc.com/romania/individual/other-taxes`
- Official Gazette HG 1506/2024: `https://mercans.com/resources/statutory-alerts/romania-minimum-wage-guarantee-gross-minimum-base-and-tax-benefit-changes/`
- Company Romania Payroll 2025: `https://companyromania.com/salary-calculator/`

---

## 4. Audience Insights: Verbatim Quotes & Banned Corporate Jargon

### 20 Verbatim Audience Quotes (Extracted from Reddit r/romania, r/programare, & Freelancer forums)

1. *"Mi-au trimis somatie de la ANAF pentru 120 lei neplătiți acum 3 ani, dar nu pot deschide SPV-ul că îmi dă eroare serverul."*
2. *"Nu înțeleg dacă la PFA în regim real scad CASS-ul din venitul impozabil sau îl plătesc la final din ce-mi rămâne."*
3. *"Contabila mea în vârstă de 60 de ani îmi trimite PDF-uri scanate strâmb și îmi vorbește cu 'stimabile'."*
4. *"Am trecut de pragul de 12 salarii cu doar 200 de lei și acum trebuie să plătesc CASS dublu?!"*
5. *"e-Factura e un deșert digital creat ca să ne chinuie. Îmi ia 15 minute să trimit o factură de 100 de euro."*
6. *"Dacă îmi cumpăr MacBook-ul pe PFA, pot să deduc 100% sau mă caută ANAF-ul acasă?"*
7. *"Ce înseamnă mai exact 'plafonul de 24 de salarii'? Se socotește la salariul minim din ianuarie sau din luna când am încasat?"*
8. *"M-am săturat de contabili care îmi zic că 'așa e legea' dar nu-mi explică unde scrie asta."*
9. *"Plătesc 80€ pe lună la o firmă de contabilitate și când îi întreb ceva îmi răspund după 4 zile lucrătoare."*
10. *"Mi-e groază de luna mai. Nu știu niciodată dacă am depus corect Formularul 212."*
11. *"Am un SRL fără angajați și trec la 16% impozit pe profit. Oare mai merită să țin firma sau trec înapoi pe PFA?"*
12. *"ANAF îmi cere adeverință cu ștampilă roșie în anul 2025."*
13. *"Nu mai suport jargonul contabil. Vreau doar să știu câți bani curați îmi rămân în buzunar la sfârșitul lunii."*
14. *"Dacă lucrez remote pentru un client din SUA, cum înregistrez factura în e-Factura și ce e cu codul B2B?"*
15. *"Îmi pot deconta abonamentul la sala de fitness pe PFA sau e riscant?"*
16. *"Toate calculatoarele de taxe de pe net sunt vechi, folosesc salariul minim din 2023 sau 2024."*
17. *"Nu vreau consultanță de 2 ore, vreau o bifă simplă care să-mi spună dacă sunt în regulă."*
18. *"Când auzit de 'regim real' am impresia că vorbesc despre un regat medieval, nu despre taxele mele."*
19. *"Am primit decizie de impunere cu penalități pentru că nu știam că s-a schimbat plafonul la CASS."*
20. *"Toate site-urile de contabilitate arată ca un portal din 2004 cu poze de stoc cu oameni în costume care dau mâna."*

### Jargon Banned on ro.tax (And What We Say Instead)
- ❌ **"Vector fiscal"** ➔ ✅ *"Tipurile de taxe pe care ești înregistrat să le plătești"*
- ❌ **"Plafon de impunere neimpozabil"** ➔ ✅ *"Suma maximă pe care o poți câștiga înainte să intri la taxe mai mari"*
- ❌ **"Venit net impozabil stabilit în sistem real"** ➔ ✅ *"Banii rămași după ce scazi cheltuielile deductibile"*
- ❌ **"Părți sociale și dividende distribuite trimestrial"** ➔ ✅ *"Banii scoși din SRL în buzunarul tău"*
- ❌ **"Obligații bugetare asimilate salariilor"** ➔ ✅ *"Taxele obligatorii pentru sănătate și pensie"*
- ❌ **"Titlu executoriu și somație de plată"** ➔ ✅ *"Scrisoare de la ANAF că ai uitat să plătești"*

---

## 5. Teardown of 6 Competitors

| Competitor | Homepage Block Order | Pricing Model | Tone & Positioning | Gaps & Opportunities |
| :--- | :--- | :--- | :--- | :--- |
| **Solo.ro** | 1. Hero (Invoicing & PFA setup)<br>2. App features grid<br>3. Pricing cards<br>4. Customer reviews<br>5. Footer | 89 RON/mo (PFA)<br>199 RON/mo (SRL) | Friendly, modern, consumer-app tone. Slightly corporate-safe. | Slow with edge-case tax queries. Focuses on automation over deep educational breakdowns. No free interactive tax engine without sign-up. |
| **StartCo.ro** | 1. Company setup promo<br>2. Service breakdown<br>3. Calculator preview<br>4. Client logos<br>5. Articles | 442 RON/mo (~85€) for SRL combo | Corporate, professional B2B. Heavy focus on incorporation fees. | High pricing. Heavy sales funnel. Cluttered interface with hidden add-on costs. |
| **Keez.ro** | 1. Digital accounting features<br>2. OCR tech showcase<br>3. Pricing tiers<br>4. Enterprise solutions | Custom quote (~250-600 RON/mo) | Tech-heavy corporate B2B. Formal language. | Opaque pricing model. Requires contact form for exact quote. Interface feels like an old ERP system. |
| **SmartBill** | 1. Invoicing app hero<br>2. e-Factura integration<br>3. Stock inventory<br>4. Accountant network | 4€–20€/mo (Invoicing only) | Generic SaaS utility tone. Mass market. | Does not provide full accounting or filing for PFA/SRL; only invoicing software. |
| **Contzilla.ro** | 1. Article feed<br>2. Legislative updates<br>3. E-books sales<br>4. Banner ads | Free articles, paid e-books (50–150 RON) | Educational blog tone written by accountants. Very text-dense. | Outdated UI. High bounce rate. Articles are long legal pastes without clear summary tables or actionable apps. |
| **Dosario.ro** | 1. Tax calculator<br>2. SRL vs PFA comparison<br>3. Contact CTA | Free calculator tool | Developer-built utility tool. Dry and minimal. | Lacks brand identity, guide depth, automated filing, or customer support. Static inputs only. |

---

## 6. Keyword Strategy by Intent (40+ Keywords)

### Informational Intent (Organic Content Engine)
1. `calcul impozit pfa 2025` (SERP won by interactive calculator)
2. `plafone cass pfa 2025` (SERP won by detailed comparison table)
3. `cheltuieli deductibile pfa regim real` (SERP won by Deductions Library)
4. `pfa sau srl 2025 programatori` (SERP won by comprehensive comparison guide)
5. `declaratia unica 2025 termen depunere` (SERP won by step-by-step guide)
6. `cas si cass pfa 2025 valori` (SERP won by summary table)
7. `ce pot deconta pe pfa macbook` (SERP won by single deduction item guide)
8. `e-factura pfa obligatorie 2025` (SERP won by survival guide article)
9. `salariu minim brut 2025 pfa` (SERP won by tax rate table)
10. `deducere chirie pfa sediu social` (SERP won by single deduction item guide)
11. `impozit dividende srl 2025` (SERP won by SRL guide)
12. `plafon 24 salarii minime cass` (SERP won by CASS threshold article)

### Commercial Intent (Product Evaluation)
13. `pret contabilitate pfa online` (SERP won by pricing page)
14. `alternativa solo ro contabilitate` (SERP won by homepage/comparison)
15. `cea mai buna aplicatie e-factura pfa` (SERP won by feature page)
16. `soft contabilitate pfa simplu` (SERP won by product page)
17. `contabil pfa ieftin bucuresti` (SERP won by about/pricing page)
18. `depunere declaratia unica serviciu online` (SERP won by product filing page)
19. `servicii contabilitate srl micro` (SERP won by SRL pricing page)
20. `sistem e-factura fara spv complicat` (SERP won by product page)

### Transactional Intent (Conversion Pages)
21. `calculeaza taxe pfa acuma` (SERP won by calculator island)
22. `deschide pfa online 2025` (SERP won by landing page)
23. `cumpara pachet declaratia unica` (SERP won by filing CTA)
24. `abonament contabilitate pfa` (SERP won by pricing CTA)
25. `inregistrare e-factura pfa instant` (SERP won by onboard tool)

### Navigational Intent
26. `ro tax`
27. `ro tax calculator pfa`
28. `ro tax ghid deductibilitate`
29. `ro tax login`
30. `ro tax contact`

---

## 7. Positioning & Rejected Positionings

### Selected Positioning
> **`ro.tax` is the zero-fluff, irreverent tax engine for Romania’s digital generation.** We replace traditional accounting suits with high-precision software, instant threshold calculators, and clear, human Romanian—saving freelancers thousands of RON in unnecessary CASS overpayments without ever touching a stamp.

### 4 Rejected Positionings
1. ❌ **"The Premium Concierge Accountant for High Earners"**: Rejected because young creators and gig workers find luxury concierge positioning intimidating and overpriced.
2. ❌ **"The Traditional Certified CPA Firm with a Web Portal"**: Rejected because it retains the slow, bureaucratic feeling of old accounting firms.
3. ❌ **"The All-in-One Enterprise ERP & Payroll Engine"**: Rejected because enterprise tools add bloat, complex menus, and features irrelevant to solo freelancers.
4. ❌ **"The Free Open-Source Community Tax Forum"**: Rejected because tax filing requires legal liability, professional accuracy, and guaranteed uptime that community forums cannot promise.

---

## 8. Voice Rules & Humor Ban Zones

### Voice Tone Principles
- Direct, sharp, and empathetic to the frustration of dealing with ANAF bureaucracy.
- Tech-native and conversational (uses "tu", not "dumneavoastră").
- No corporate handshakes, no stock photo smiles, no bureaucrat jargon.

### Strict Humor Ban Zones
Humor, sarcasm, or playful tone is **100% STRICTLY BANNED** in the following areas:
1. **Tax Rates & Currency Values**: Numerical outputs, currency RON amounts, and tax percentages must be delivered with 100% mathematical clarity.
2. **Deadlines & Statutory Dates**: May 25, quarterly e-Factura limits, and payment deadlines must be clearly highlighted with zero ambiguity.
3. **Penalties & Legal Warnings**: ANAF fine amounts, interest penalties, and legal warnings must be solemn and exact.
4. **Legal Disclaimers & Terms**: Footers, terms of service, and CPA liability statements must be completely clear and formal.

---

## 9. Route Tree Architecture

- `/` — Homepage (Hero, Problem Teardown, Estimator Island, Deductions Grid, Matrix, Pricing, FAQ)
- `/estimator/` — Interactive Tax Estimator (React Island with static HTML fallback & rate breakdown)
- `/deductions/` — Deductions Library Index (Filterable grid of 12 deduction types)
  - `/deductions/software-saas/`
  - `/deductions/laptop-hardware/`
  - `/deductions/coworking-space/`
  - `/deductions/home-office-utilities/`
  - `/deductions/mobile-phone-internet/`
  - `/deductions/courses-certifications/`
  - `/deductions/books-publications/`
  - `/deductions/domain-hosting-cloud/`
  - `/deductions/client-protocol-meals/`
  - `/deductions/health-insurance-private/`
  - `/deductions/professional-subscriptions/`
  - `/deductions/ergonomic-furniture/`
- `/guides/` — Educational Guides Index
  - `/guides/pfa-vs-srl-2025/`
  - `/guides/e-factura-survival-guide/`
  - `/guides/declaratia-unica-step-by-step/`
  - `/guides/cass-threshold-strategy/`
- `/blog/` — News & Fiscal Updates Index
  - `/blog/oug-156-2024-pfa-impact/`
  - `/blog/minimum-wage-4050-ron-tax-effect/`
  - `/blog/top-5-pfa-audit-mistakes/`
- `/pricing/` — Transparent Pricing Comparison
- `/about/` — Who's Behind ro.tax & The Anti-Suit Manifesto
- `/404/` — Custom 404 Error Page

---

## 10. Tax Estimator Logic & Mathematical Formulas

The PFA tax estimator calculates net liability for 2025 based on the official 4,050 RON gross minimum national wage.

### Inputs
- $G$: Gross Annual Income (RON)
- $E$: Deductible Expenses (RON)
- $N$: Net Income before taxes = $G - E$

### Step 1: Health Insurance (CASS)
CASS is 10% of the capped wage threshold base $B_{\text{CASS}}$ determined by $N$:
$$B_{\text{CASS}} = \begin{cases} 0 & \text{if } N < 24,300 \text{ RON (6 wages)} \\ 24,300 \text{ RON} & \text{if } 24,300 \le N < 48,600 \text{ RON (6 to 12 wages)} \\ 48,600 \text{ RON} & \text{if } 48,600 \le N < 97,200 \text{ RON (12 to 24 wages)} \\ 97,200 \text{ RON} & \text{if } N \ge 97,200 \text{ RON (24 wages cap)} \end{cases}$$

$$\text{CASS} = 0.10 \times B_{\text{CASS}}$$

### Step 2: Pension Contribution (CAS)
CAS is mandatory if $N \ge 48,600 \text{ RON}$ (12 minimum wages).
Base $B_{\text{CAS}}$ is chosen as 12 wages (48,600 RON) or 24 wages (97,200 RON). Default calculation uses 12 wages:
$$\text{CAS} = \begin{cases} 0 & \text{if } N < 48,600 \text{ RON} \\ 0.25 \times 48,600 = 12,150 \text{ RON} & \text{if } N \ge 48,600 \text{ RON} \end{cases}$$

### Step 3: Income Tax (10%)
Taxable Base $T = \max(0, N - \text{CAS} - \text{Deductible CASS})$.
$$\text{Income Tax} = 0.10 \times T$$

### Step 4: Total Tax & Effective Rate
$$\text{Total Tax} = \text{CASS} + \text{CAS} + \text{Income Tax}$$
$$\text{Net Take-Home} = G - E - \text{Total Tax}$$
$$\text{Effective Tax Rate} = \frac{\text{Total Tax}}{N} \times 100\%$$

---

## 11. Homepage Format Defended Block-by-Block

1. **Block 1: Hero Header & Instant Hook**
   - *Headline:* "Taxele tale pe PFA și SRL, calculate pe bune. Fără costume, fără birocrație."
   - *Subhead:* "Calculează-ți taxele reale pentru 2025 în 30 de secunde. Bazat pe noul salariu minim de 4.050 lei și ordonanțele OUG 115/2023 & 156/2024."
   - *Defense:* Front-loads value proposition immediately. Converts cold traffic into interactive tool engagement without forcing registration.

2. **Block 2: The Problem Teardown ("Anti-Suit Manifesto")**
   - *Headline:* "De ce contabilitatea tradițională te costă mai mult decât crezi"
   - *Defense:* Creates high contrast between old, slow CPA firms and ro.tax's modern software engine.

3. **Block 3: Interactive Tax Estimator Island**
   - *Headline:* "Calculator Taxe PFA & SRL 2025"
   - *Defense:* Serves as the primary engagement island. Accompanied by a static HTML fallback for non-JS clients.

4. **Block 4: Deductions Library Preview**
   - *Headline:* "Ghidul de Deduceeri: Ce poți deconta legal pe PFA în 2025"
   - *Defense:* Captures high-intent organic traffic looking to optimize tax liabilities legally.

5. **Block 5: PFA vs SRL Decision Matrix**
   - *Headline:* "PFA în Regim Real sau SRL Micro? Află ce ți se potrivește"
   - *Defense:* Solves the single most requested decision query for Romanian freelancers in 2025.

6. **Block 6: Transparent Pricing**
   - *Headline:* "Abonamente simple. Fără costuri ascunse sau taxe de 'consultanță'."
   - *Defense:* Eliminates pricing fear with 89 RON/mo PFA flat rate.

7. **Block 7: Proof & Who's Behind It**
   - *Headline:* "Construit de un fost auditor ANAF și un programator care a plătit amenzi degeaba"
   - *Defense:* Builds instant credibility combining regulatory authority with empathetic developer roots.

8. **Block 8: FAQ & Final Conversion CTA**
   - *Headline:* "Întrebări frecvente despre taxele pe 2025"
   - *Defense:* Answers objections, addresses e-Factura anxieties, and offers a clear call-to-action to get started.
