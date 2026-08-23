import re

with open("src/content/pages/index.md", "r") as f:
    content = f.read()

content = content.replace('image: "/images/hero-battery.jpg"', 'image: "/src/assets/images/hero-battery.jpg"')
content = content.replace('image_path: "/images/data-verification.jpg"', 'image_path: "/src/assets/images/data-verification.jpg"')
content = content.replace('image_path: "/images/technical-spec.jpg"', 'image_path: "/src/assets/images/technical-spec.jpg"')


with open("src/content/pages/index.md", "w") as f:
    f.write(content)
