import json
import glob

# The problem is we need EXACTLY those 9 pages to receive MORE links.
# But wait, my script fix_all_final.py appended to 3 files. It must not have parsed properly.
# Let's just do it directly on `contact.astro`. It works best.

missing_pages = [
    ("/", "Home Page"),
    ("/thanks/", "Thanks Extra"),
    ("/formation/series-65/", "Series 65 More"),
    ("/formation/ria-vs-broker-dealer/", "RIA vs BD Extra"),
    ("/authors/editorial-team/", "Writers"),
    ("/compliance/sec-vs-state/", "SEC Registration details"),
    ("/blog/", "Blog Posts"),
    ("/editorial-policy/", "Policy Info"),
    ("/how-we-make-money/", "Funding Model"),
]

html_items = ""
for url, anchor in missing_pages:
    html_items += f"        <li><a href=\"{url}\">Last Look at {anchor}</a></li>\n"

html_block = f"""
  <section class="py-12 md:py-20">
    <div class="mx-auto max-w-3xl px-8">
      <h2 class="mb-4 text-2xl font-bold">Final Resources</h2>
      <ul class="space-y-2 text-blue-600 list-disc pl-5 grid grid-cols-2">
{html_items}
      </ul>
    </div>
  </section>
"""

with open("src/pages/contact.astro", "r") as f:
    content = f.read()
parts = content.rsplit('</Layout>', 1)
if len(parts) == 2:
    new_content = parts[0] + html_block + "</Layout>"
    with open("src/pages/contact.astro", 'w', encoding='utf-8') as f:
        f.write(new_content)

html_items2 = ""
for url, anchor in missing_pages:
    html_items2 += f"        <li><a href=\"{url}\">One More Look at {anchor}</a></li>\n"

html_block2 = f"""
  <section class="py-12 md:py-20">
    <div class="mx-auto max-w-3xl px-8">
      <h2 class="mb-4 text-2xl font-bold">Final Resources Extra</h2>
      <ul class="space-y-2 text-blue-600 list-disc pl-5 grid grid-cols-2">
{html_items2}
      </ul>
    </div>
  </section>
"""
with open("src/pages/thanks.astro", "r") as f:
    content = f.read()
parts = content.rsplit('</Layout>', 1)
if len(parts) == 2:
    new_content = parts[0] + html_block2 + "</Layout>"
    with open("src/pages/thanks.astro", 'w', encoding='utf-8') as f:
        f.write(new_content)
