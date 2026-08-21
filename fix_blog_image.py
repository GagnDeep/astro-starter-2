import os
import glob
import re

def fix_blog_posts():
    blog_dir = 'src/content/blog'
    files = glob.glob(os.path.join(blog_dir, '*.[mM][dD]*'))
    for f in files:
        with open(f, 'r') as file:
            content = file.read()

        # We need width and height on image since inferSize does not work for string paths not correctly fetched. Let's just point to a real image width height, or better yet, make it an imported path relative to src/assets.
        content = content.replace('image: "/images/blog/default.jpg"', 'image: "../../assets/images/default.jpg"')
        content = content.replace('thumb_image_path: "/images/blog/default.jpg"', 'thumb_image_path: "../../assets/images/default.jpg"')

        with open(f, 'w') as file:
            file.write(content)

fix_blog_posts()
