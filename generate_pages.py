import os
import json

routes = [
    # Reference
    ("reference/limited-company.mdx", "Limited Company vs Personal Name", "The definitive guide to property structures and tax implications.", "2024-01-10"),
    ("reference/section-24.mdx", "Surviving Section 24", "How mortgage interest relief changes affect your bottom line.", "2024-01-11"),
    ("reference/hmo-regulations.mdx", "HMO Regulations UK", "Licensing, room sizes, and fire safety compliance.", "2024-01-12"),
    ("reference/tenant-eviction.mdx", "Tenant Eviction Process", "Navigating Section 8 and Section 21 notices correctly.", "2024-01-13"),
    ("reference/landlord-insurance.mdx", "Landlord Insurance Requirements", "What insurance you actually need vs what is optional.", "2024-01-14"),
    ("reference/property-auction.mdx", "Property Auction Guide", "What you need to know before bidding.", "2024-01-15"),
    ("reference/deposit-requirements.mdx", "Deposit Requirements for BTL", "How much deposit you actually need.", "2024-01-16"),
    ("reference/managing-yourself.mdx", "Managing Yourself vs Letting Agent", "Costs, time, and legal risks.", "2024-01-17"),
    ("reference/commercial-vs-residential.mdx", "Commercial vs Residential Property", "Pros, cons, and yields compared.", "2024-01-18"),
    ("reference/brrrr-method.mdx", "BRRRR Method UK", "Buy, Rehab, Rent, Refinance, Repeat explained.", "2024-01-19"),
    ("reference/capital-gains-tax.mdx", "Capital Gains Tax on Property", "How it's calculated and when to pay.", "2024-01-20"),
    ("reference/stamp-duty-surcharge.mdx", "Stamp Duty Surcharge", "Navigating the 3% additional rate.", "2024-01-21"),
    ("reference/epc-requirements.mdx", "EPC Requirements for Landlords", "Meeting minimum energy efficiency standards.", "2024-01-22"),
    ("reference/right-to-rent.mdx", "Right to Rent Checks", "Legal obligations for landlords.", "2024-01-23"),
    ("reference/gas-safety-certificate.mdx", "Gas Safety Certificate", "CP12 requirements and penalties.", "2024-01-24"),

    # Taxonomy
    ("taxonomy/houses-in-multiple-occupation.mdx", "Houses in Multiple Occupation (HMO)", "Everything related to HMOs."),
    ("taxonomy/buy-to-let.mdx", "Buy to Let (BTL)", "Standard residential buy to let."),
    ("taxonomy/commercial.mdx", "Commercial Property", "Retail, office, and industrial."),
    ("taxonomy/serviced-accommodation.mdx", "Serviced Accommodation (SA)", "Short term lets and Airbnb."),
    ("taxonomy/property-flipping.mdx", "Property Flipping", "Buy, refurbish, sell."),
    ("taxonomy/north-west.mdx", "North West Property", "Investing in the North West of England."),
    ("taxonomy/north-east.mdx", "North East Property", "Investing in the North East of England."),
    ("taxonomy/midlands.mdx", "Midlands Property", "Investing in the Midlands."),
    ("taxonomy/london.mdx", "London Property", "Investing in London."),
    ("taxonomy/scotland.mdx", "Scotland Property", "Investing in Scotland."),

    # Glossary
    ("glossary/yield.mdx", "Yield", "The return on investment, usually expressed as a percentage of the property value."),
    ("glossary/roi.mdx", "ROI (Return on Investment)", "The profit made relative to the cash invested."),
    ("glossary/bmv.mdx", "Below Market Value (BMV)", "A property purchased for less than its true market value."),
    ("glossary/ltv.mdx", "Loan to Value (LTV)", "The ratio of a loan to the value of an asset purchased."),
    ("glossary/ast.mdx", "Assured Shorthold Tenancy (AST)", "The most common type of tenancy in the UK."),
    ("glossary/hmo.mdx", "HMO", "A property rented out by at least 3 people who are not from 1 'household' but share facilities."),
    ("glossary/void-period.mdx", "Void Period", "A period when the property is empty and generating no rent."),
    ("glossary/brrrr.mdx", "BRRRR", "Buy, Refurbish, Rent, Refinance, Repeat."),
    ("glossary/capital-growth.mdx", "Capital Growth", "The increase in the value of an asset over time."),
    ("glossary/cash-flow.mdx", "Cash Flow", "The net amount of cash being transferred into and out of a property investment."),
    ("glossary/equity.mdx", "Equity", "The difference between the property value and the mortgage debt."),
    ("glossary/ground-rent.mdx", "Ground Rent", "A regular payment made by a leaseholder to the freeholder."),
    ("glossary/leasehold.mdx", "Leasehold", "A property tenure where you own the property for a fixed period but not the land it stands on."),
    ("glossary/freehold.mdx", "Freehold", "Outright ownership of the property and the land it stands on."),
    ("glossary/section-24.mdx", "Section 24", "A tax change affecting how landlords can offset mortgage interest against rental income."),
    ("glossary/section-8.mdx", "Section 8 Notice", "A notice seeking possession of a property when the tenant has broken the terms of the tenancy."),
    ("glossary/section-21.mdx", "Section 21 Notice", "A 'no fault' eviction notice."),
    ("glossary/stamp-duty.mdx", "Stamp Duty Land Tax (SDLT)", "A tax paid when you buy property or land over a certain price."),
    ("glossary/survey.mdx", "Survey", "An inspection of the property to report on its condition."),
    ("glossary/conveyancing.mdx", "Conveyancing", "The legal process of transferring ownership of a property."),
]

blog_posts = [
    ("blog/buy-to-let-vs-index-funds.mdx", "Buy-to-Let vs Index Funds: A Mathematical Breakdown", "An objective comparison using historical data.", "2024-02-01"),
    ("blog/hidden-costs-of-being-a-landlord.mdx", "The Hidden Costs of Being a Landlord in 2024", "What the gurus don't tell you about maintenance and voids.", "2024-02-05"),
    ("blog/how-to-calculate-rental-yield.mdx", "How to Calculate Rental Yield Exactly", "Step by step guide to gross, net, and real yields.", "2024-02-10"),
    ("blog/limited-company-buy-to-let.mdx", "Is a Limited Company Better for Buy-to-Let?", "Tax analysis for high-rate vs basic-rate taxpayers.", "2024-02-15"),
    ("blog/property-auction-mistakes.mdx", "7 Catastrophic Property Auction Mistakes", "Real examples of buyers losing their deposits.", "2024-02-20"),
    ("blog/hmo-investing-pros-and-cons.mdx", "HMO Investing: The High Yield Trap?", "Why gross yield doesn't mean cash in the bank.", "2024-02-25"),
    ("blog/brrrr-method-explained.mdx", "Does the BRRRR Method Actually Work in the UK?", "A sober look at refinancing risks.", "2024-03-01"),
    ("blog/interest-only-vs-repayment.mdx", "Interest-Only vs Repayment Mortgages for BTL", "Which structure preserves cash flow best?", "2024-03-05"),
    ("blog/dealing-with-bad-tenants.mdx", "The True Cost of a Bad Tenant", "Eviction timelines and financial impact in reality.", "2024-03-10"),
    ("blog/epc-c-regulations.mdx", "Preparing for EPC C Regulations", "Cost analysis of upgrading older housing stock.", "2024-03-15"),
    ("blog/where-to-invest-in-property.mdx", "How to Analyze a Property Hotspot", "Forget the news, look at these 5 data points.", "2024-03-20"),
    ("blog/using-home-equity-to-invest.mdx", "Using Your Home Equity to Buy a Rental", "The risks and mathematical realities.", "2024-03-25"),
]

for route in routes:
    file_path = f"src/content/{route[0]}"
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    if route[0].startswith("reference"):
        content = f"---\ntitle: \"{route[1]}\"\ndescription: \"{route[2]}\"\ndate: {route[3]}\n---\n\n# {route[1]}\n\n{route[2]}\n\n## Overview\nThis is a deep dive into {route[1]}.\n\n### The Details\nHere are the specifics, exceptions, and edge cases.\n\n### Common Mistakes\n1. Misunderstanding the regulations.\n2. Ignoring hidden costs.\n\n### What to do next\nEnsure you consult a qualified accountant or solicitor.\n"
    elif route[0].startswith("taxonomy"):
        content = f"---\ntitle: \"{route[1]}\"\ndescription: \"{route[2]}\"\n---\n\n# {route[1]}\n\n{route[2]}\n"
    elif route[0].startswith("glossary"):
        content = f"---\ntitle: \"{route[1]}\"\ndefinition: \"{route[2]}\"\n---\n\n# {route[1]}\n\n**Definition:** {route[2]}\n\n### In Practice\nThis term is commonly used when discussing property investment strategy.\n"

    with open(file_path, "w") as f:
        f.write(content)

for post in blog_posts:
    file_path = f"src/content/{post[0]}"
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    content = f"---\ntitle: \"{post[1]}\"\npost_hero:\n  date: {post[3]}\n  heading: \"{post[1]}\"\n  tags:\n    - Investing\n    - Analysis\n  author: \"Institute Team\"\n  image: \"/images/placeholder.jpg\"\n  image_alt: \"{post[1]}\"\nthumb_image_path: \"/images/placeholder-thumb.jpg\"\nthumb_image_alt: \"{post[1]} thumb\"\n---\n\n# {post[1]}\n\n{post[2]}\n\n## The Core Question\nHow does this actually impact your bottom line?\n\n### The Math\nLet's break down the numbers using a worked example.\n\n| Item | Value |\n|---|---|\n| Purchase Price | £200,000 |\n| Deposit (25%) | £50,000 |\n\n### Tradeoffs\nIt's never as simple as it seems. Here are the exceptions.\n\n### Conclusion\nRun the numbers for your specific situation.\n"
    with open(file_path, "w") as f:
        f.write(content)
