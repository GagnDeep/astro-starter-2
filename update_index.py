import re

with open("src/content/pages/index.md", "r") as f:
    content = f.read()

# Replace ProofStrip props
content = re.sub(
    r'- _name: "ProofStrip".*?- _name: "FaqAccordion"',
    '''- _name: "ProofStrip"
    heading: "Verified against EUR-Lex official publications"
    logos:
      - image_url: "/images/og/og-default.png"
        alt_text: "EUR-Lex"
  - _name: "FaqAccordion"''',
    content,
    flags=re.DOTALL
)

# Replace image paths to use /src/assets/images/
content = content.replace('image_path: "/images/data-verification.jpg"', 'image_path: "/src/assets/images/data-verification.jpg"')
content = content.replace('image_path: "/images/technical-spec.jpg"', 'image_path: "/src/assets/images/technical-spec.jpg"')

with open("src/content/pages/index.md", "w") as f:
    f.write(content)
