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

all_md_files = glob.glob("src/content/pages/**/*.md", recursive=True)

# Assign groups
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
    heading: "Further Reading"
    items:
{items}
"""

def get_html(group, index):
    prefixes = ["Read about", "Explore", "Learn about", "Discover", "Investigate", "Review", "Check out", "See", "View", "Guide to"]
    prefix = prefixes[index % len(prefixes)]
    items = ""
    for url, anchor in group:
        items += f"        <li><a href=\"{url}\">{prefix} {anchor}</a></li>\n"
    return f"""
  <section class="py-12 md:py-20">
    <div class="mx-auto max-w-3xl px-8">
      <h2 class="mb-4 text-2xl font-bold">Related Resources</h2>
      <ul class="space-y-2 text-blue-600 list-disc pl-5 grid grid-cols-2">
{items}
      </ul>
    </div>
  </section>
"""

all_files = all_md_files + ["src/pages/contact.astro", "src/pages/thanks.astro"]

for idx, path in enumerate(all_files):
    if "blog.md" in path:
        continue # Don't touch paginated

    my_group = []
    # Assign 5 groups (15 links) to each file
    for offset in range(5):
        my_group.extend(groups[(idx + offset) % len(groups)])

    if "astro" in path:
        html = get_html(my_group, idx)
        with open(path, "r") as f:
            content = f.read()
        parts = content.rsplit('</Layout>', 1)
        if len(parts) == 2:
            new_content = parts[0] + html + "</Layout>"
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content)
    else:
        bento = get_bento(my_group, idx)
        with open(path, "r") as f:
            content = f.read()
        # Find the second `---` safely
        parts = content.split("---", 2)
        if len(parts) == 3:
            new_content = "---" + parts[1] + bento + "---" + parts[2]
            with open(path, "w") as f:
                f.write(new_content)
        elif len(parts) == 2:
            # It just ends with ---
            new_content = "---" + parts[1] + bento + "---"
            with open(path, "w") as f:
                f.write(new_content)
