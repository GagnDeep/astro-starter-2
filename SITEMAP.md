# AdvisorCTO Sitemap and Information Architecture

This site uses a hub-and-spoke model to capture long-tail search intent for wealth management technology.

## Hubs

1. `/`
   - **Target Query:** Fractional CTO for wealth management
   - **Intent:** A principal at an RIA realises they are spending too much time on IT and needs executive-level technology leadership without a full-time hire.
   - **Page Type:** Homepage
   - **Unique Value:** The only page that aggregates the entire methodology and offers a direct path to book a consultation.
   - **Inbound Links:** Every spoke links here with "fractional CTO for wealth management".
   - **Outbound Links:** Links to all hubs.

2. `/services/vendor-risk-management/`
   - **Target Query:** RIA vendor risk management
   - **Intent:** Compliance officers or principals need a system to assess and manage the risk of their third-party software vendors to meet SEC requirements.
   - **Page Type:** Service Hub
   - **Unique Value:** Provides a framework for assessing vendor risk specifically for RIAs, not general IT.
   - **Inbound Links:** Spoke pages on specific vendors link here.
   - **Outbound Links:** `/vendors/orion-security/`, `/vendors/redtail-security/`, `/vendors/wealthbox-security/`, `/vendors/emoney-security/`, `/`

3. `/services/technology-integration/`
   - **Target Query:** Wealth management tech stack integration
   - **Intent:** Operations leaders are frustrated by manual data entry because their CRM, financial planning, and portfolio management systems do not talk to each other.
   - **Page Type:** Service Hub
   - **Unique Value:** Explains the architectural approach to connecting disparate wealth tech systems securely.
   - **Inbound Links:** Spoke pages on specific integrations link here.
   - **Outbound Links:** `/integrations/orion-redtail/`, `/integrations/wealthbox-emoney/`, `/`

4. `/services/cybersecurity-governance/`
   - **Target Query:** RIA cybersecurity compliance
   - **Intent:** Firm principals need to ensure their technology practices comply with SEC cybersecurity rules and protect client data.
   - **Page Type:** Service Hub
   - **Unique Value:** Translates complex cybersecurity requirements into actionable governance policies for RIAs.
   - **Inbound Links:** Spoke pages on specific security practices link here.
   - **Outbound Links:** `/security/sec-compliance/`, `/security/incident-response/`, `/`

## Spokes

5. `/vendors/orion-security/`
   - **Target Query:** Orion Advisor Tech security assessment
   - **Intent:** Assessing the specific data security risks and controls when using Orion as a core platform.
   - **Page Type:** Guide / Spoke
   - **Unique Value:** Detailed breakdown of Orion's security posture and what the RIA remains responsible for.
   - **Inbound Links:** `/services/vendor-risk-management/`
   - **Outbound Links:** `/services/vendor-risk-management/`, `/integrations/orion-redtail/`

6. `/vendors/redtail-security/`
   - **Target Query:** Redtail CRM data security
   - **Intent:** Understanding how client PII is protected within Redtail and how to configure access controls correctly.
   - **Page Type:** Guide / Spoke
   - **Unique Value:** Specific configurations for Redtail that most RIAs miss.
   - **Inbound Links:** `/services/vendor-risk-management/`
   - **Outbound Links:** `/services/vendor-risk-management/`, `/integrations/orion-redtail/`

7. `/vendors/wealthbox-security/`
   - **Target Query:** Wealthbox security best practices
   - **Intent:** Ensuring Wealthbox is deployed securely, particularly around API access and third-party integrations.
   - **Page Type:** Guide / Spoke
   - **Unique Value:** Focuses on the API surface area of Wealthbox and securing external connections.
   - **Inbound Links:** `/services/vendor-risk-management/`
   - **Outbound Links:** `/services/vendor-risk-management/`, `/integrations/wealthbox-emoney/`

8. `/vendors/emoney-security/`
   - **Target Query:** eMoney Advisor client portal security
   - **Intent:** Validating the security of the eMoney client portal where clients upload sensitive financial documents.
   - **Page Type:** Guide / Spoke
   - **Unique Value:** Analyzes the shared responsibility model of the eMoney client portal.
   - **Inbound Links:** `/services/vendor-risk-management/`
   - **Outbound Links:** `/services/vendor-risk-management/`, `/integrations/wealthbox-emoney/`

9. `/integrations/orion-redtail/`
   - **Target Query:** Integrate Orion and Redtail CRM
   - **Intent:** Seeking a reliable, automated way to sync client data between Redtail and Orion without data corruption.
   - **Page Type:** Guide / Spoke
   - **Unique Value:** Technical blueprint for a robust Orion-Redtail sync, handling edge cases and conflicts.
   - **Inbound Links:** `/services/technology-integration/`
   - **Outbound Links:** `/services/technology-integration/`, `/vendors/orion-security/`, `/vendors/redtail-security/`

10. `/integrations/wealthbox-emoney/`
    - **Target Query:** Wealthbox and eMoney integration
    - **Intent:** Trying to pass household data from Wealthbox into eMoney to streamline the financial planning process.
    - **Page Type:** Guide / Spoke
    - **Unique Value:** Step-by-step data mapping between Wealthbox contact fields and eMoney client records.
    - **Inbound Links:** `/services/technology-integration/`
    - **Outbound Links:** `/services/technology-integration/`, `/vendors/wealthbox-security/`, `/vendors/emoney-security/`

11. `/security/sec-compliance/`
    - **Target Query:** SEC cybersecurity rules for RIAs
    - **Intent:** Preparing for an SEC examination by ensuring all technical controls meet the latest regulatory expectations.
    - **Page Type:** Guide / Spoke
    - **Unique Value:** A practical checklist mapping SEC rules to specific technical implementations (e.g., MDM, MFA).
    - **Inbound Links:** `/services/cybersecurity-governance/`
    - **Outbound Links:** `/services/cybersecurity-governance/`

12. `/security/incident-response/`
    - **Target Query:** RIA incident response plan template
    - **Intent:** Creating or updating a mandatory incident response plan that reflects the reality of a modern, cloud-based RIA.
    - **Page Type:** Guide / Spoke
    - **Unique Value:** An incident response framework tailored for firms that rely entirely on SaaS vendors.
    - **Inbound Links:** `/services/cybersecurity-governance/`
    - **Outbound Links:** `/services/cybersecurity-governance/`

13. `/methodology/`
    - **Target Query:** How to assess wealth tech stacks
    - **Intent:** Understanding the process a professional uses to evaluate an RIA's technology infrastructure.
    - **Page Type:** Methodology Hub
    - **Unique Value:** Lays out our proprietary 4-step assessment framework (Audit, Align, Architect, Act).
    - **Inbound Links:** `/`
    - **Outbound Links:** `/`

14. `/about/`
    - **Target Query:** [Founder Name placeholder] Fractional CTO
    - **Intent:** Verifying the credentials and track record of the founder before engaging their services.
    - **Page Type:** Trust Page
    - **Unique Value:** Focuses entirely on the founder's specific experience scaling wealth management technology.
    - **Inbound Links:** `/`
    - **Outbound Links:** `/`

15. `/contact/`
    - **Target Query:** Hire RIA technology consultant
    - **Intent:** Ready to start a conversation about a specific technology problem or a retainer engagement.
    - **Page Type:** Utility
    - **Unique Value:** The only page dedicated solely to capturing intent and qualifying the lead.
    - **Inbound Links:** `/`
    - **Outbound Links:** `/`

16. `/privacy/`
    - **Target Query:** n/a
    - **Intent:** Checking how this site handles data, establishing trust.
    - **Page Type:** Utility
    - **Unique Value:** Plain-English explanation of data practices.
    - **Inbound Links:** `/`
    - **Outbound Links:** `/`
