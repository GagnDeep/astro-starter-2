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

groups = [pages[i:i+3] for i in range(0, len(pages), 3)]

def get_bento(group, index):
    prefixes = ["Read about", "Explore", "Learn about", "Discover", "Investigate", "Review", "Check out", "See", "View", "Guide to"]
    prefix = prefixes[index % len(prefixes)]
    items = ""
    for url, anchor in group:
        items += f"      - title: \"[{prefix} {anchor}]({url})\"\n"
        items += f"        description: \"Explore our insights.\"\n"
        items += f"        span: \"1\"\n"
    return f"""
  - _name: Bento
    heading: "Further Reading 5"
    items:
{items}
"""

all_files = glob.glob("src/content/pages/**/*.md", recursive=True)

for idx, path in enumerate(all_files):
    if "blog.md" in path:
        continue
    my_group = []
    # Assign MORE links! offset 24 to 30 (which wraps)
    for offset in range(24, 30):
        my_group.extend(groups[(idx + offset) % len(groups)])

    bento = get_bento(my_group, idx)
    with open(path, "r") as f:
        content = f.read()
    parts = content.split("---", 2)
    if len(parts) == 3:
        new_content = "---" + parts[1] + bento + "---" + parts[2]
        with open(path, "w") as f:
            f.write(new_content)
    elif len(parts) == 2:
        new_content = "---" + parts[1] + bento + "---"
        with open(path, "w") as f:
            f.write(new_content)
