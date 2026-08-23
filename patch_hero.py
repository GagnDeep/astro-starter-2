import sys

with open('src/components/heroes/hero/hero.astro', 'r') as f:
    content = f.read()

content = content.replace('''  image: {
    image_path: string;
    alt_text: string;
  };''', '''  image?: {
    image_path: string;
    alt_text: string;
  };''')

content = content.replace('''const imageSrc = allImages[image.image_path]?.default ?? image.image_path;''', '''const imageSrc = image?.image_path ? (allImages[image.image_path]?.default ?? image.image_path) : null;''')

with open('src/components/heroes/hero/hero.astro', 'w') as f:
    f.write(content)
