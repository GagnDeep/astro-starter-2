import re

def fix_post_hero():
    path = "src/components/blog/post-hero/post-hero.astro"
    with open(path, 'r') as f:
        content = f.read()

    # We add inferSize={true} to the Picture component so Astro can resolve remote images without width/height
    content = content.replace('loading="eager"', 'loading="eager"\n        inferSize={true}')

    with open(path, 'w') as f:
        f.write(content)

fix_post_hero()
