import os

layout_path = "src/layouts/Layout.astro"
with open(layout_path, "r") as f:
    content = f.read()

# Make sure JSON-LD logic exists or can be properly passed in via SEO component.
# It seems the SEO component is handling it. Let's check the SEO component.
