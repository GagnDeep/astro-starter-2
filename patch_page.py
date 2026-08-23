import sys

with open('src/layouts/Page.astro', 'r') as f:
    content = f.read()

content = content.replace('''      .filter((col: any, idx: number) => idx > 0)''', '''      .filter((_: any, idx: number) => idx > 0)''')

with open('src/layouts/Page.astro', 'w') as f:
    f.write(content)
