import re

def fix_zod():
    path = "src/content.config.ts"
    with open(path, 'r') as f:
        content = f.read()

    # Allow Astro images by using image() from z helper
    # However since z from astro/zod does not natively have image() without imports, we will just pass string and cast it correctly in Astro components or use the exact string.
    # But wait, Astro Collections have `image()` helper in `schema: ({ image }) => ...`
    content = re.sub(
        r'schema: z.object\(\{',
        r'schema: ({ image }) => z.object({',
        content
    )
    content = content.replace('image: z.string().optional()', 'image: image().optional()')
    content = content.replace('thumb_image_path: z.string().optional()', 'thumb_image_path: image().optional()')

    with open(path, 'w') as f:
        f.write(content)

fix_zod()
