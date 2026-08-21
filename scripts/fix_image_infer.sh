#!/bin/bash
set -e

# Find image occurrences and make sure they use inferSize if they're remote
find src/components -name "*.astro" -exec sed -i 's/<Image src={post_hero.image}/<Image inferSize src={post_hero.image}/g' {} +
find src/layouts -name "*.astro" -exec sed -i 's/<Image src={post.data.thumb_image_path}/<Image inferSize src={post.data.thumb_image_path}/g' {} +
find src/components -name "*.astro" -exec sed -i 's/<Image src={image}/<Image inferSize src={image}/g' {} +
find src/components -name "*.astro" -exec sed -i 's/<Image src={thumb_image_path}/<Image inferSize src={thumb_image_path}/g' {} +
