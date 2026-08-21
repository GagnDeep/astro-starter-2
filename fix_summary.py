import re

def fix_summary():
    path = "src/components/blog/summary.astro"
    with open(path, 'r') as f:
        content = f.read()

    # Add inferSize={true} to the Image component in summary
    content = content.replace('loading={loading}', 'loading={loading}\n      inferSize={true}')

    with open(path, 'w') as f:
        f.write(content)

fix_summary()
