import os
import glob
pages = [
    ("/formation/", "Formation"),
    ("/formation/series-65/", "Series 65 Waivers"),
    ("/formation/ria-vs-broker-dealer/", "RIA vs BD"),
    ("/formation/costs/", "Startup Costs"),
    ("/compliance/", "Compliance"),
    ("/compliance/sec-vs-state/", "SEC vs State"),
    ("/compliance/mock-audits/", "Mock Audits"),
    ("/compliance/archiving/", "Archiving"),
    ("/technology/", "Technology"),
    ("/technology/portfolio-management/", "Portfolio Management"),
    ("/technology/crm/", "CRM Systems"),
    ("/technology/financial-planning/", "Financial Planning"),
    ("/succession/", "Succession"),
    ("/succession/valuation/", "Valuation"),
    ("/succession/internal-buyout/", "Internal Buyouts"),
    ("/succession/m-and-a/", "M&A Trends"),
    ("/about/", "About"),
    ("/contact/", "Contact Us"),
    ("/how-we-make-money/", "Revenue Model"),
    ("/editorial-policy/", "Editorial Policy"),
    ("/blog/", "Blog"),
    ("/blog/navigating-series-65-waivers/", "Waivers Guide"),
    ("/authors/editorial-team/", "Editorial Team"),
    ("/", "Home"),
    ("/thanks/", "Thanks Page")
]

def add_full_bento(filepath, prefix):
    items = ""
    for url, anchor in pages:
        items += f"      - title: \"[{prefix} {anchor}]({url})\"\n"
        items += f"        description: \"Explore our insights.\"\n"
        items += f"        span: \"1\"\n"
    bento = f"""
  - _name: Bento
    heading: "Further Reading"
    items:
{items}
"""
    with open(filepath, "r") as f:
        content = f.read()
    parts = content.split("---", 2)
    # The starter index.md has only 1 `---` at the top? No, it has `---` at top and bottom.
    # Wait, maybe it only has ONE `---` if my split logic fails?
    # Let's just APPEND it securely right before the last `---`.
    if content.count("---") >= 2:
        parts = content.rsplit("---", 1)
        new_content = parts[0] + bento + "---" + parts[1]
        with open(filepath, "w") as f:
            f.write(new_content)

add_full_bento("src/content/pages/index.md", "Learn about")
add_full_bento("src/content/pages/about.md", "Explore")
add_full_bento("src/content/pages/editorial-policy.md", "Read about")
