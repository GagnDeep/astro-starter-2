import re

def fix_index():
    path = "src/pages/index.astro"
    with open(path, 'r') as f:
        content = f.read()

    # Import MediaPlayer and replace dropzone UI in index.astro
    content = content.replace('import NewsletterForm', 'import MediaPlayer from "../components/player/MediaPlayer.astro";\nimport NewsletterForm')

    html_block = """      <div class="surface-panel border-2 border-dashed border-slate-600 bg-slate-800/50 p-12 text-center rounded-xl mb-12">
        <p class="text-slate-300 text-lg">Drag & Drop Media Here</p>
        <p class="text-sm text-slate-500 mt-2">Supports MKV, MP4, WebM, and SRT subtitles natively.</p>
      </div>"""

    new_html = """      <div class="mb-12 max-w-4xl mx-auto">
        <MediaPlayer />
      </div>"""

    content = content.replace(html_block, new_html)

    with open(path, 'w') as f:
        f.write(content)

fix_index()
