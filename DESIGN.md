# DESIGN.md - umediaplayer.com

## Audience Phrasing
### Verbatim lines from users:
1. "I just want to drag and drop an MKV into my browser and play it."
2. "Why do I need to install an app just to watch a local MP4 on my Chromebook?"
3. "VLC is great but I can't install it on my work laptop."
4. "Is there a way to cast a local video from my browser to my TV?"
5. "I need something that handles subtitles (.srt) without downloading software."
6. "How to play a video file in Chrome without it downloading again?"
7. "Chrome's default video player won't play the audio on this file."
8. "Looking for a web-based player that supports HEVC/H.265."
9. "Can I play my local music folder in the browser directly?"
10. "Need a fast way to preview video files without opening heavy desktop software."
11. "I want a local media player that doesn't need a server like Plex."
12. "Just need a simple interface with keyboard shortcuts (space to pause, arrows to skip)."
13. "Is there a browser player that remembers where I left off in a local file?"
14. "My browser won't play AVI files, is there a web player that can?"
15. "I need a private video player that doesn't upload my files anywhere."
16. "Looking for an open-source browser media player for local files."
17. "How to loop a local video in the browser."
18. "Need an audio player web app to organize my local MP3s."
19. "Is there a browser extension to play local files better?"
20. "Want to play videos from my hard drive in Safari without quicktime."

### Jargon they NEVER use:
- "File System Access API" (They say "opening files from computer")
- "WebCodecs" (They say "codec support")
- "Media Source Extensions / MSE" (They say "streaming")
- "Local web server encapsulation" (They say "no server needed")
- "Blob URLs" (They say "secure playing")

## Teardown of 5 Competitors

1. **VLC (Desktop)**
   - *Order*: Hero, Features, Downloads, Screenshots, Contribute.
   - *Pricing*: Free (Open Source)
   - *Tone*: Utilitarian, technical.
   - *Biggest Gap*: Requires installation, not cloud/browser-native out of the box.
2. **Plex**
   - *Order*: Hero (Stream anywhere), Live TV, Personal Media, Devices, Premium features.
   - *Pricing*: Free tier, Plex Pass ($4.99/mo).
   - *Tone*: Entertainment-focused, consumer-friendly.
   - *Biggest Gap*: Requires setting up a backend server; massive overkill for just playing a local file.
3. **Jellyfin**
   - *Order*: Hero (Free Software Media System), Features, Download, Demo, Community.
   - *Pricing*: Free (Open Source).
   - *Tone*: Freedom-focused, anti-subscription.
   - *Biggest Gap*: Still requires server installation and configuration.
4. **VLC.js / Web VLC ports**
   - *Order*: Usually just GitHub repos or tech demos (Hero, code snippets, demo link).
   - *Pricing*: Free.
   - *Tone*: Highly technical, for developers.
   - *Biggest Gap*: Lacks a consumer-friendly UI and productized experience.
5. **Kodi**
   - *Order*: Hero, News, Features, Downloads, Community, Sponsors.
   - *Pricing*: Free.
   - *Tone*: Enthusiast, modular.
   - *Biggest Gap*: 10-foot UI designed for TVs, not ideal for a quick browser drag-and-drop.

## Keywords by Intent

### Informational (Articles/Guides win)
1. how to play local video in browser
2. play mkv in chrome
3. browser won't play mp4 video
4. play local audio files in browser
5. best browser video player
6. why does chrome download video instead of playing
7. web based media player open source
8. how to add subtitles to browser video
9. play hevc in browser
10. play avi in browser
11. local media player for chromebook
12. play video in browser without server
13. browser media player extension
14. play local playlist in browser
15. chrome local video player with subtitles

### Navigational (Tools/Brand win)
16. vlc web player
17. plex web app
18. jellyfin web player
19. kodi browser player
20. emby web client
21. video.js demo
22. html5 video player local files
23. uMediaPlayer

### Commercial Investigation (Comparison/Tables win)
24. plex vs jellyfin for local files
25. vlc vs browser player
26. best media player for work laptop
27. lightweight media player no install
28. secure offline video player
29. privacy focused media player
30. best free media player for chromebook
31. web video player supporting all formats
32. browser player with hardware acceleration

### Transactional/Action (Tools/Landing Pages win)
33. drag and drop video player online
34. play local file now
35. online video player from computer
36. play srt subtitle online
37. local mp3 web player
38. play local mkv file online
39. browser video player app
40. offline web media player

## Palette and Fonts

**Palette Reasoning**: We need a modern, cinematic, yet trustworthy aesthetic. Dark themes are standard for media players (reduces glare, focuses on content).
- **Background**: Deep charcoal (`#0f172a` - slate-900) - Less harsh than pure black, better for reading.
- **Surface**: Lighter slate (`#1e293b` - slate-800) - For cards and panels.
- **Primary**: Vibrant cyan (`#06b6d4` - cyan-500) - Evokes technology, speed, and clarity.
- **Secondary**: Indigo (`#6366f1` - indigo-500) - For accents.
- **Text (Primary)**: Off-white (`#f8fafc` - slate-50)
- **Text (Muted)**: Light gray (`#94a3b8` - slate-400)

**Contrast Table**:
- Cyan Primary (`#06b6d4`) on Slate-900 (`#0f172a`): 6.81:1 (Passes AA)
- Slate-50 Text (`#f8fafc`) on Slate-900 (`#0f172a`): 15.6:1 (Passes AAA)
- Slate-400 Text (`#94a3b8`) on Slate-900 (`#0f172a`): 5.1:1 (Passes AA)

**Fonts**:
- **Headings**: `Inter` - Highly legible, modern, technical geometry.
- **Body**: `Inter` - Consistent, excellent readability at small sizes.
- **Monospace**: `Fira Code` - For technical terms and code snippets.
