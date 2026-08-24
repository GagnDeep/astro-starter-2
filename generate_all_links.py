import json

# Let's fix the trailing slashes first!
with open('src/components/blog/summary.astro', 'r') as f:
    content = f.read()
content = content.replace("href={`/blog/${id}`}", "href={`/blog/${id}/`}")
with open('src/components/blog/summary.astro', 'w') as f:
    f.write(content)

with open('data/navigation.json', 'r') as f:
    nav = json.load(f)

nav['header']['links'] = [
    {"link": "/formation/", "text": "Formation"},
    {"link": "/compliance/", "text": "Compliance"},
    {"link": "/technology/", "text": "Technology"},
    {"link": "/succession/", "text": "Succession"},
]

nav['footer']['links'] = [
    {"link": "/about/", "text": "About"},
    {"link": "/contact/", "text": "Contact"},
    {"link": "/how-we-make-money/", "text": "How We Make Money"},
    {"link": "/editorial-policy/", "text": "Editorial Policy"},
    {"link": "/blog/", "text": "Blog"},
    {"link": "/authors/editorial-team/", "text": "Editorial Team"},
    {"link": "/thanks/", "text": "Thanks Page"},
]

with open('data/navigation.json', 'w') as f:
    json.dump(nav, f, indent=2)
