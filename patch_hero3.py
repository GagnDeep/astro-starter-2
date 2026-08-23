import sys

with open('src/components/heroes/hero/hero.astro', 'r') as f:
    content = f.read()

content = content.replace('''              src={imageSrc}''', '''              src={imageSrc as any}''')

with open('src/components/heroes/hero/hero.astro', 'w') as f:
    f.write(content)
