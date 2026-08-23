import sys

with open('src/pages/contact.astro', 'r') as f:
    content = f.read()

content = content.replace('''<Layout title="Contact" seo={{ page_description: "Get in touch — we read every message." }}>''', '''<Layout title="Contact" seo={{
  page_description: "Contact the Institute of RIA. Have a question about our research or B2B media offerings? Get in touch today.",
  canonical_url: "https://instituteofria.com/contact/",
  featured_image: null,
  featured_image_alt: null,
  author_twitter_handle: null,
  open_graph_type: "website",
  no_index: false
}}>''')

with open('src/pages/contact.astro', 'w') as f:
    f.write(content)
