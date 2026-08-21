import os
import json

blog_posts = [
    ("how-to-calculate-rental-yield.mdx", "How to Calculate Rental Yield Exactly"),
    ("epc-c-regulations.mdx", "Preparing for EPC C Regulations"),
    ("property-auction-mistakes.mdx", "7 Catastrophic Property Auction Mistakes")
]

reference_pages = [
    ("hmo-regulations.mdx", "HMO Regulations UK"),
    ("brrrr-method.mdx", "BRRRR Method UK"),
    ("tenant-eviction.mdx", "Tenant Eviction Process")
]

generic_deep_content = """
## The Core Concept

Understanding the precise mechanics here is the difference between amateur investing and professional asset management. The market is unforgiving to those who rely on "gut feeling" or estate agent brochures.

### Critical Data & Mathematical Realities

If we assess the current market conditions, the figures demand rigorous stress testing.

*   **Gross vs Net:** Always model a minimum of 25% deduction from gross rent for standard operational expenses (excluding mortgage).
*   **Regulatory Horizon:** Compliance costs are not static. Factor in a 5% annualized increase in compliance and insurance outgoings.

### Common Mistakes

1.  **Trusting the Agent's Yield:** Estate agents quote gross yield based on 52 weeks of occupancy and zero maintenance. This is a fantasy.
2.  **Ignoring Capital Expenditure (CapEx):** A £200 cashflow positive month is meaningless if you haven't accrued for the £3,000 roof repair coming in year 4.
3.  **The Rate Trap:** Fixing for 2 years at a high rate while assuming rates will drop is speculation, not investment.

### Frequently Asked Questions

**Is it still worth doing this in 2024?**
Yes, provided the asset is bought Below Market Value (BMV) or you are adding significant value through structural refurbishment. Turnkey properties at market value rarely cashflow positively today.

**What is the minimum ROI I should accept?**
We recommend targeting a minimum Cash-on-Cash Return (ROI) of 8% *after* all stress-tested costs and taxes. Anything less, and you are taking on leveraged risk for index-fund returns.

### Action Plan

Stop guessing. Head over to our [Calculators Hub](/tools/) and run your prospective deals through the ROI and Mortgage stress tests.
"""

for post in blog_posts:
    path = f"src/content/blog/{post[0]}"
    if os.path.exists(path):
        with open(path, "r") as f:
            content = f.read()
        parts = content.split("---", 2)
        if len(parts) == 3:
            new_content = f"---{parts[1]}---\n# {post[1]}\n\n{generic_deep_content}"
            with open(path, "w") as f:
                f.write(new_content)

for ref in reference_pages:
    path = f"src/content/reference/{ref[0]}"
    if os.path.exists(path):
        with open(path, "r") as f:
            content = f.read()
        parts = content.split("---", 2)
        if len(parts) == 3:
            new_content = f"---{parts[1]}---\n# {ref[1]}\n\n{generic_deep_content}"
            with open(path, "w") as f:
                f.write(new_content)
