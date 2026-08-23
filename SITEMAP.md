# Site Architecture: Institute of RIA

## 1. Homepage
* **URL:** `/`
* **Target Query:** "how to start an RIA firm", "registered investment adviser setup"
* **Intent:** Navigational and informational. The user wants a trusted roadmap to launch or scale an independent advisory practice without conflicting vendor spin.
* **Page Type:** Hub/Homepage
* **Unique Value:** The only page that synthesizes all four pillars (Formation, Compliance, Technology, Succession) into a single, chronological timeline for firm principals.
* **Inbound Links:** Linked from the header logo of every page, and the breadcrumb root.
* **Outbound Links:** `/formation/`, `/compliance/`, `/technology/`, `/succession/`

## Hub 1: Firm Formation
* **URL:** `/formation/`
* **Target Query:** "RIA formation process"
* **Intent:** Informational hub. The user needs to understand the step-by-step legal and structural process of breaking away or starting fresh.
* **Page Type:** Hub
* **Unique Value:** Aggregates all structural decisions into a single checklist format that maps exactly to regulatory filing requirements.
* **Inbound Links:** `/`, all spokes under `/formation/`
* **Outbound Links:** `/formation/series-65/`, `/formation/ria-vs-broker-dealer/`, `/formation/costs/`, `/`

### Spoke 1.1: Series 65
* **URL:** `/formation/series-65/`
* **Target Query:** "Series 65 exam requirements for RIA"
* **Intent:** Informational. The user needs to know if they must take the Series 65, or if their CFP/CFA credentials provide a waiver.
* **Page Type:** Guide
* **Unique Value:** Provides a definitive, state-by-state waiver lookup mechanism rather than a generic summary.
* **Inbound Links:** `/formation/`
* **Outbound Links:** `/formation/`

### Spoke 1.2: RIA vs Broker-Dealer
* **URL:** `/formation/ria-vs-broker-dealer/`
* **Target Query:** "independent RIA vs broker dealer"
* **Intent:** Commercial investigation. The user is weighing the economic and fiduciary trade-offs of the two models.
* **Page Type:** Comparison
* **Unique Value:** Models the exact revenue retention differences based on AUM tiers, minus compliance overhead.
* **Inbound Links:** `/formation/`
* **Outbound Links:** `/formation/`

### Spoke 1.3: Startup Costs
* **URL:** `/formation/costs/`
* **Target Query:** "cost to start an RIA"
* **Intent:** Informational/Commercial. The user is budgeting capital requirements for their first 12 months.
* **Page Type:** Guide
* **Unique Value:** Provides a line-item budget distinguishing between bare-bones compliance and institutional-grade technology setups.
* **Inbound Links:** `/formation/`
* **Outbound Links:** `/formation/`

## Hub 2: Compliance
* **URL:** `/compliance/`
* **Target Query:** "RIA compliance requirements"
* **Intent:** Informational hub. The user needs a framework for maintaining their fiduciary duty and surviving regulatory scrutiny.
* **Page Type:** Hub
* **Unique Value:** Organizes compliance not by rule number, but by daily, monthly, and annual operational workflows.
* **Inbound Links:** `/`, all spokes under `/compliance/`
* **Outbound Links:** `/compliance/sec-vs-state/`, `/compliance/mock-audits/`, `/compliance/archiving/`, `/`

### Spoke 2.1: SEC vs State Registration
* **URL:** `/compliance/sec-vs-state/`
* **Target Query:** "SEC vs state registered RIA"
* **Intent:** Informational. The user needs to know where to file their Form ADV based on their regulatory assets under management (RAUM).
* **Page Type:** Guide
* **Unique Value:** Details the precise transition timeline required when a state-registered firm crosses the $100M threshold.
* **Inbound Links:** `/compliance/`
* **Outbound Links:** `/compliance/`

### Spoke 2.2: Mock Audits
* **URL:** `/compliance/mock-audits/`
* **Target Query:** "RIA mock audit services"
* **Intent:** Commercial. The firm wants to hire a third-party to stress-test their compliance program before a real exam.
* **Page Type:** Vendor Review
* **Unique Value:** Evaluates audit vendors based on their primary backgrounds (former examiners vs. career consultants).
* **Inbound Links:** `/compliance/`
* **Outbound Links:** `/compliance/`

### Spoke 2.3: Communications Archiving
* **URL:** `/compliance/archiving/`
* **Target Query:** "RIA email archiving rules"
* **Intent:** Informational. The user needs to know how to compliantly store email, social media, and text messages.
* **Page Type:** Guide
* **Unique Value:** Specifically addresses the SEC's recent off-channel communications sweep and how to lock down mobile devices.
* **Inbound Links:** `/compliance/`
* **Outbound Links:** `/compliance/`

## Hub 3: Technology
* **URL:** `/technology/`
* **Target Query:** "RIA technology stack"
* **Intent:** Informational hub. The user is designing the software infrastructure to run their practice.
* **Page Type:** Hub
* **Unique Value:** Categorizes tools strictly by data flow—showing which systems must integrate bidirectionally versus one-way.
* **Inbound Links:** `/`, all spokes under `/technology/`
* **Outbound Links:** `/technology/portfolio-management/`, `/technology/crm/`, `/technology/financial-planning/`, `/`

### Spoke 3.1: Portfolio Management
* **URL:** `/technology/portfolio-management/`
* **Target Query:** "best portfolio management software for RIAs"
* **Intent:** Commercial investigation. The user is selecting the core engine for trading, rebalancing, and billing.
* **Page Type:** Vendor Comparison
* **Unique Value:** Compares platforms specifically on their ability to handle alternative investments alongside public equities.
* **Inbound Links:** `/technology/`
* **Outbound Links:** `/technology/`

### Spoke 3.2: CRM
* **URL:** `/technology/crm/`
* **Target Query:** "RIA CRM software"
* **Intent:** Commercial investigation. The user needs a client relationship manager built for financial services.
* **Page Type:** Vendor Comparison
* **Unique Value:** Analyzes the true cost of implementing a generic CRM (like Salesforce) versus purpose-built options (like Wealthbox).
* **Inbound Links:** `/technology/`
* **Outbound Links:** `/technology/`

### Spoke 3.3: Financial Planning
* **URL:** `/technology/financial-planning/`
* **Target Query:** "financial planning software for RIAs"
* **Intent:** Commercial investigation. The user needs software to project client cash flows and retirement scenarios.
* **Page Type:** Vendor Comparison
* **Unique Value:** Distinguishes between cash-flow-based planning engines and goal-based planning engines.
* **Inbound Links:** `/technology/`
* **Outbound Links:** `/technology/`

## Hub 4: Succession
* **URL:** `/succession/`
* **Target Query:** "RIA succession planning"
* **Intent:** Informational hub. The user is nearing retirement and needs a strategy to monetize their life's work.
* **Page Type:** Hub
* **Unique Value:** Focuses exclusively on the mathematics of client retention post-transition, not just the multiple at sale.
* **Inbound Links:** `/`, all spokes under `/succession/`
* **Outbound Links:** `/succession/valuation/`, `/succession/internal-buyout/`, `/succession/m-and-a/`, `/`

### Spoke 4.1: Firm Valuation
* **URL:** `/succession/valuation/`
* **Target Query:** "how to value an RIA firm"
* **Intent:** Informational. The user wants to calculate their firm's enterprise value.
* **Page Type:** Guide
* **Unique Value:** Breaks down the difference between multiples of revenue and multiples of EBITDA in current market conditions.
* **Inbound Links:** `/succession/`
* **Outbound Links:** `/succession/`

### Spoke 4.2: Internal Buyouts
* **URL:** `/succession/internal-buyout/`
* **Target Query:** "RIA internal succession plan"
* **Intent:** Informational. The user wants to sell the firm to their junior partners rather than a third party.
* **Page Type:** Guide
* **Unique Value:** Provides structuring options for seller-financed transactions when next-generation advisers lack capital.
* **Inbound Links:** `/succession/`
* **Outbound Links:** `/succession/`

### Spoke 4.3: Mergers & Acquisitions
* **URL:** `/succession/m-and-a/`
* **Target Query:** "RIA M&A trends"
* **Intent:** Informational. The user is considering selling to a larger aggregator or private equity-backed firm.
* **Page Type:** Guide
* **Unique Value:** Highlights the integration risks and cultural failure points that aggregators typically downplay.
* **Inbound Links:** `/succession/`
* **Outbound Links:** `/succession/`
