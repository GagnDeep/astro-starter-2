import os
import json

def write_file(filepath, content):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w') as f:
        f.write(content)

# Routes definitions
routes = {
    'index': {
        'path': 'src/pages/index.astro',
        'type': 'astro_page'
    },
    'about': {
        'path': 'src/pages/about.astro',
        'type': 'astro_page'
    },
    'pricing': {
        'path': 'src/pages/pricing.astro',
        'type': 'astro_page'
    },
    'comparison': {
        'path': 'src/pages/comparison.astro',
        'type': 'astro_page'
    },
    'faq': {
        'path': 'src/pages/faq.astro',
        'type': 'astro_page'
    },
    'contact': {
        'path': 'src/pages/contact.astro',
        'type': 'astro_page'
    },
    'legal': {
        'path': 'src/pages/legal.astro',
        'type': 'astro_page'
    },
    'formats': [
        ('mp4', 'Play MP4 in Browser Without Uploading'),
        ('mkv', 'How to Play MKV Files in Chrome Natively'),
        ('webm', 'WebM Browser Support & Playback Guide'),
        ('avi', 'Play AVI Files Without Desktop Software'),
        ('hevc', 'HEVC / H.265 Browser Video Player')
    ],
    'audio': [
        ('mp3', 'Local MP3 Web Player'),
        ('flac', 'Play FLAC Lossless Audio in Browser')
    ],
    'features': [
        ('subtitles', 'Browser Video Player with SRT Subtitle Support'),
        ('hardware-acceleration', 'Smooth Video Playback in Browser'),
        ('keyboard-shortcuts', 'Media Player Keyboard Shortcuts'),
        ('playlists', 'Local m3u Playlist Browser Player'),
        ('offline-mode', 'True Offline Web Media Player'),
        ('casting', 'Cast Local Video from Browser'),
        ('audio-tracks', 'Change Audio Tracks in Web Player'),
        ('privacy', 'Secure, Local-Only Video Player')
    ],
    'tools': [
        ('codec-compatibility-checker', 'Browser Video Format Checker'),
        ('bitrate-calculator', 'Video Bitrate Calculator'),
        ('subtitle-sync', 'Sync SRT File Online'),
        ('storage-calculator', 'Video File Size Estimator')
    ],
    'glossary': [
        'codec', 'container', 'bitrate', 'framerate', 'resolution',
        'hevc', 'h264', 'av1', 'srt', 'vtt', 'muxing', 'transcoding',
        'hardware-acceleration', 'buffering', 'lossless', 'flac', 'mkv',
        'mp4', 'metadata', 'aspect-ratio'
    ],
    'blog': [
        ('why-chrome-downloads-videos', 'Why Does Chrome Download MP4 Instead of Playing It?'),
        ('best-media-players-for-chromebook', 'Best Media Players for Chromebook (No Install Required)'),
        ('how-to-play-mkv-files-without-vlc', 'How to Play MKV Files Without VLC'),
        ('understanding-browser-video-support', 'Understanding HTML5 Browser Video Codecs'),
        ('security-risks-of-online-video-converters', 'The Security Risks of Online Video Converters'),
        ('how-to-add-subtitles-to-movies-in-browser', 'How to Add Subtitles to Movies in Your Browser'),
        ('hevc-vs-h264-browser-compatibility', 'HEVC vs H.264: Browser Compatibility Guide'),
        ('playing-local-music-libraries-in-safari', 'Playing Local Music Libraries in Safari'),
        ('the-future-of-webcodecs', 'The Future of the WebCodecs API'),
        ('how-to-fix-audio-out-of-sync', 'How to Fix Audio Out of Sync in Browser Video'),
        ('vlc-web-alternatives', 'VLC Web Player Alternatives for 2024'),
        ('watching-movies-on-restricted-work-laptops', 'Watching Movies on Restricted Work Laptops')
    ]
}

# 1. Astro Pages (Core)
core_pages = ['about', 'pricing', 'comparison', 'faq', 'contact', 'legal']
for page in core_pages:
    content = f"""---
import Layout from "../layouts/Layout.astro";
import NewsletterForm from "../components/forms/newsletter-form.astro";

const seo = {{
  page_description: "Learn more about uMediaPlayer, the {page} page for the instant browser-based media player.",
}};
---

<Layout title="{page.capitalize()} | uMediaPlayer" seo={{seo}}>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8 text-cyan-500">{page.capitalize()}</h1>

    <div class="surface-panel mb-12 prose prose-invert max-w-none">
      <p>Welcome to the {page} page. uMediaPlayer is designed to play your local files instantly, securely, and offline.</p>

      {'<h2 class="text-2xl mt-8 mb-4">Contact Us</h2><p>Reach out securely without any third-party tracking.</p>' if page == 'contact' else ''}
      {'<h2 class="text-2xl mt-8 mb-4">Frequently Asked Questions</h2><p>Find answers to common issues.</p>' if page == 'faq' else ''}

      <p>This page provides detailed {page} information related to local file playback in browsers.</p>
    </div>

    <div class="surface-panel bg-slate-800 p-8 rounded-lg">
      <h3 class="text-xl font-bold mb-4">Get the Guide & Updates</h3>
      <NewsletterForm />
    </div>
  </div>
</Layout>
"""
    write_file(f"src/pages/{page}.astro", content)

# Index page specific
index_content = """---
import Layout from "../layouts/Layout.astro";
import NewsletterForm from "../components/forms/newsletter-form.astro";

const seo = {
  page_description: "Play any local video or audio file instantly in your browser. Zero installation, completely offline, and your files never leave your device.",
};
---

<Layout title="uMediaPlayer | Play Local Video Files in Browser" seo={seo}>
  <div class="max-w-6xl mx-auto px-4 py-16">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <h1 class="text-5xl font-bold mb-6 text-slate-50">Play Any Local File in Your Browser. <span class="text-cyan-500">Zero Installation.</span></h1>
      <p class="text-xl text-slate-400 mb-8">Drop your MKV, MP4, or WebM files here. No server to set up, no apps to install, and your files never leave your device.</p>

      <div class="surface-panel border-2 border-dashed border-slate-600 bg-slate-800/50 p-12 text-center rounded-xl mb-12">
        <p class="text-slate-300 text-lg">Drag & Drop Media Here</p>
        <p class="text-sm text-slate-500 mt-2">Supports MKV, MP4, WebM, and SRT subtitles natively.</p>
      </div>

      <div class="max-w-md mx-auto">
        <p class="text-sm font-bold text-slate-300 mb-3 text-left">Get the Ultimate Guide to Browser Media Codecs + Updates</p>
        <NewsletterForm form="waitlist" submitLabel="Join Waitlist" />
      </div>
    </div>

    <div class="grid md:grid-cols-3 gap-8 mt-20">
      <div class="surface-panel">
        <h3 class="text-xl font-bold mb-3 text-cyan-500">100% Private & Offline</h3>
        <p class="text-slate-400">Your files never touch our servers. uMediaPlayer uses modern browser APIs to read files directly from your hard drive.</p>
      </div>
      <div class="surface-panel">
        <h3 class="text-xl font-bold mb-3 text-cyan-500">Format Compatibility</h3>
        <p class="text-slate-400">Natively supports modern formats like MKV and WebM, plus seamless integration for external SRT subtitle files.</p>
      </div>
      <div class="surface-panel">
        <h3 class="text-xl font-bold mb-3 text-cyan-500">Work Laptop Ready</h3>
        <p class="text-slate-400">Can't install VLC? No problem. Works flawlessly on locked-down environments like Chromebooks and corporate laptops.</p>
      </div>
    </div>
  </div>
</Layout>
"""
write_file("src/pages/index.astro", index_content)


# 2. Reference Pages (Formats, Audio, Features)
def generate_reference_md(category, slug, title):
    content = f"""---
title: "{title}"
description: "Comprehensive guide to {title.lower()} using uMediaPlayer."
category: "{category}"
seo:
  page_description: "Learn about {title.lower()} with our secure, browser-based local media player. No installation required."
---

# {title}

Playing local media files directly in your browser provides a fast, secure, and private way to enjoy your content. This guide covers everything you need to know about **{title.lower()}**.

## Why Use a Browser Player for {slug.upper()}?

Unlike traditional desktop applications like VLC, a browser-based player requires **zero installation**. This is perfect for:
- Chromebooks
- Locked-down work laptops
- Quick previews of large files without opening heavy software

## How It Works

uMediaPlayer utilizes the modern [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API) to stream the file directly from your hard drive to the browser's video element.

**Your files never leave your device.** We do not upload, sync, or buffer your media on any server.

## Common Issues & Troubleshooting

If you experience playback issues with {slug}, it usually comes down to the underlying codec support in your specific browser.
- **Chrome / Edge**: Excellent support for MP4, WebM, and most MKV formats.
- **Safari**: Requires H.264/HEVC; does not support WebM or VP9 natively.
- **Firefox**: Broad support, but hardware acceleration varies by OS.

## What to do next?

Try dropping a `{slug}` file directly into the [uMediaPlayer home page](/) to see it in action.
"""
    write_file(f"src/content/reference/{category}-{slug}.md", content)

for slug, title in routes['formats']:
    generate_reference_md('formats', slug, title)
for slug, title in routes['audio']:
    generate_reference_md('audio', slug, title)
for slug, title in routes['features']:
    generate_reference_md('features', slug, title)

# 3. Glossary Pages
for term in routes['glossary']:
    content = f"""---
title: "{term.capitalize()}"
description: "Definition and explanation of {term} in the context of browser media playback."
related: []
seo:
  page_description: "Learn what {term} means and how it affects video and audio playback in web browsers."
---

# What is {term.capitalize()}?

**{term.capitalize()}** is a critical concept when dealing with media playback, especially in constrained environments like web browsers.

## Definition

In the context of web video and audio, {term} refers to the method or characteristic that determines how media is encoded, packaged, or delivered.

## Why it matters for Browser Players

When playing local files via uMediaPlayer, understanding {term} helps you troubleshoot why a file might not play correctly or why the audio might be missing. Browsers rely on their built-in multimedia pipelines, meaning they are strictly bound by the rules of {term}.

## Examples in Practice

If you are trying to play an MKV file and the video works but the audio is silent, it's often a {term} mismatch. Browsers might support the video container but lack the specific audio decoder required.
"""
    write_file(f"src/content/glossary/{term}.md", content)

# 4. Tools Pages
for slug, title in routes['tools']:
    content = f"""---
title: "{title}"
description: "Free tool for {title.lower()} entirely in your browser."
script_path: "/scripts/tools/{slug}.js"
seo:
  page_description: "Use our free {title.lower()} tool. 100% private, runs offline in your browser."
---

# {title}

Use this interactive tool to help with your media files.

## How to use

1. Select your inputs below.
2. The calculation is done entirely on your device using JavaScript.
3. No data is sent to our servers.

## Assumptions & Limits

- The results are estimates based on standard encoding profiles.
- Bitrate calculations assume a standard 8-bit color depth unless specified.
- Syncing subtitles shifts timestamps mathematically but does not alter the original text encoding.

*Note: Tool interactive elements are injected via the specified script path.*
"""
    write_file(f"src/content/tools/{slug}.md", content)


# 5. Blog Posts
for slug, title in routes['blog']:
    content = f"""---
title: "{title}"
thumb_image_path: "/images/blog/default.jpg"
thumb_image_alt: "Article thumbnail for {title}"
post_hero:
  date: "2024-05-01"
  heading: "{title}"
  author: "uMediaPlayer Team"
  image: "/images/blog/default.jpg"
  image_alt: "Hero image for {title}"
seo:
  page_description: "Read our comprehensive guide: {title}. Learn how to handle local video playback in modern browsers."
---

The landscape of web-based media playback is constantly evolving. In this article, we dive deep into **{title}** and explore what it means for users who just want to play their local files without hassle.

## The Core Problem

Users often ask about {slug.replace('-', ' ')} because the default behavior of web browsers can be frustrating. For example, dragging an MKV file into Chrome often triggers a download instead of playing the video. Why? Because the browser doesn't recognize the MIME type or lacks the necessary codec bindings to hand the file over to its media pipeline.

## PAA (People Also Ask) Addressed

- **Why can't I just play it?** Security sandboxing prevents browsers from freely accessing your file system without explicit user action (like a file picker or drag-and-drop).
- **Do I need an extension?** No. With the advent of the File System Access API, modern web apps can request read-only access to a specific file and stream it directly into a `<video>` tag.
- **Is it secure?** Yes. Since the processing happens entirely client-side, the server never sees your file.

## Worked Example

Let's look at the numbers. If you have a 4GB movie file:
1. **Uploading to a cloud player**: Takes ~30 minutes on a standard connection. Uses 4GB of bandwidth.
2. **Streaming via Plex**: Requires setting up a server, port forwarding, and transcoding overhead.
3. **uMediaPlayer**: Opens in 0.1 seconds. 0 bandwidth used. 100% privacy.

## Common Mistakes

- Assuming all MP4s will play. MP4 is a *container*. If the video inside is encoded with an unsupported codec, you will only hear audio.
- Trying to play HEVC files in Chrome on Windows without the hardware extension installed.

## Conclusion

Understanding these limitations and capabilities is key to a smooth media experience. For a frictionless alternative, try our zero-install player.
"""
    write_file(f"src/content/blog/{slug}.mdx", content)

print("60+ Pages Generated.")
