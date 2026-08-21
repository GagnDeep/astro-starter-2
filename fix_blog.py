import os
import glob
import re

def fix_blog_posts():
    blog_dir = 'src/content/blog'
    files = glob.glob(os.path.join(blog_dir, '*.[mM][dD]*'))
    for f in files:
        with open(f, 'r') as file:
            content = file.read()

        # Ensure post_hero has tags, author, image, image_alt if missing
        if 'post_hero:' in content:
            if 'tags:' not in content:
                content = content.replace('author: "uMediaPlayer Team"', 'author: "uMediaPlayer Team"\n  tags: ["browser", "video", "codecs"]')
            if 'image:' not in content:
                content = content.replace('author: "uMediaPlayer Team"', 'author: "uMediaPlayer Team"\n  image: "/images/blog/default.jpg"\n  image_alt: "Hero image"')

        with open(f, 'w') as file:
            file.write(content)

fix_blog_posts()
