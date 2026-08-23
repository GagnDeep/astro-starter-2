import sys

with open('src/components/heroes/hero/hero.astro', 'r') as f:
    content = f.read()

content = content.replace('''    {
      image.image_path && image.alt_text && (''', '''    {
      image?.image_path && image?.alt_text && (''')

with open('src/components/heroes/hero/hero.astro', 'w') as f:
    f.write(content)
