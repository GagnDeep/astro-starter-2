# PLAN.md - umediaplayer.com

## Positioning
**uMediaPlayer is the instant, zero-install, browser-based media player for your local files.** It runs entirely offline in your browser, keeping your files completely private while supporting modern formats and subtitles—no servers, no setup, no downloads required.

### 4 Rejected Alternatives
1. **The Server Model (Plex/Jellyfin)**: Rejected because it requires users to install backend software, configure ports, and manage libraries. Too heavy for "I just want to play a file."
2. **The Desktop App (VLC/IINA)**: Rejected because many users are on restricted machines (work laptops, Chromebooks) where they cannot install software.
3. **The Cloud Storage Model (Google Drive/Dropbox)**: Rejected because uploading large video files is slow, wastes bandwidth, and raises privacy concerns.
4. **The Extension Model**: Rejected because browser extensions require installation and permissions. A pure web app using the File System Access API is frictionless.

## Voice Rules
- **Tone**: Direct, capable, private, and frictionless.
- **Banned Words**: "Upload" (we don't upload, we open locally), "Server", "Buffer", "Cloud", "Sync".
- **Preferred Words**: "Instant", "Private", "Zero-install", "Browser-native", "Local".

## Capture Strategy
- **Offer**: "Get the Ultimate Guide to Browser Media Codecs + uMediaPlayer Updates"
- **Locations**:
  - Hero section on Homepage (Waitlist/Early Access).
  - Bottom of every Reference and Glossary page.
  - Mid-article and end-of-article in Blog posts.
  - Sidebar on Tool results pages.
  - Global footer.

## Homepage Block Order
(Differs from VLC/Plex by leading with privacy and no-install, rather than "stream anywhere" or downloads)

1. **Hero**: "Play Any Local File in Your Browser. Zero Installation." (Interactive dropzone + Email Capture for early access/updates).
2. **Privacy Promise**: "Your Files Never Leave Your Device." (Visualizing the local-only architecture).
3. **Format Compatibility Grid**: "Plays MKV, MP4, WebM, and SRT Subtitles natively."
4. **Use Cases**: "Perfect for Chromebooks, Work Laptops, and Quick Previews."
5. **Comparison**: "uMediaPlayer vs. Desktop Players vs. Media Servers."
6. **FAQ**: Addressed common questions (How does it work without uploading?).
7. **Final CTA**: "Try it right now—drop a file above."

## Route Tree (60+ Pages)

### Core (7)
- `/` - (browser media player)
- `/about/` - (about umediaplayer)
- `/pricing/` - (umediaplayer pricing)
- `/comparison/` - (best media player alternatives)
- `/faq/` - (local video player faq)
- `/contact/` - (contact umediaplayer)
- `/legal/` - (privacy policy umediaplayer)

### Reference Library (15) (Formats & Features)
- `/formats/mp4/` - (play mp4 in browser)
- `/formats/mkv/` - (play mkv in chrome)
- `/formats/webm/` - (play webm files)
- `/formats/avi/` - (play avi without software)
- `/formats/hevc/` - (browser hevc player)
- `/audio/mp3/` - (local mp3 web player)
- `/audio/flac/` - (play flac in browser)
- `/features/subtitles/` - (browser player with srt)
- `/features/hardware-acceleration/` - (smooth video playback browser)
- `/features/keyboard-shortcuts/` - (media player shortcuts)
- `/features/playlists/` - (local m3u browser)
- `/features/offline-mode/` - (offline web player)
- `/features/casting/` - (cast local video browser)
- `/features/audio-tracks/` - (change audio track browser)
- `/features/privacy/` - (secure local video player)

### Tools / Calculators (4)
- `/tools/codec-compatibility-checker/` - (browser video format checker)
- `/tools/bitrate-calculator/` - (video bitrate calculator)
- `/tools/subtitle-sync/` - (sync srt file online)
- `/tools/storage-calculator/` - (video file size estimator)

### Taxonomy (10)
- `/blog/` - (media player blog)
- `/blog/guides/` - (video playback guides)
- `/blog/troubleshooting/` - (fix video playback)
- `/blog/updates/` - (umediaplayer news)
- `/blog/codecs/` - (video codec explained)
- `/glossary/` - (media player terminology)
- `/glossary/video/` - (video terms)
- `/glossary/audio/` - (audio terms)
- `/glossary/streaming/` - (streaming terms)
- `/glossary/subtitles/` - (subtitle terms)

### Glossary Terms (20)
- `/glossary/codec/`, `/glossary/container/`, `/glossary/bitrate/`, `/glossary/framerate/`, `/glossary/resolution/`, `/glossary/hevc/`, `/glossary/h264/`, `/glossary/av1/`, `/glossary/srt/`, `/glossary/vtt/`, `/glossary/muxing/`, `/glossary/transcoding/`, `/glossary/hardware-acceleration/`, `/glossary/buffering/`, `/glossary/lossless/`, `/glossary/flac/`, `/glossary/mkv/`, `/glossary/mp4/`, `/glossary/metadata/`, `/glossary/aspect-ratio/`

### Blog Posts (12)
- `/blog/why-chrome-downloads-videos/` - (why does chrome download mp4)
- `/blog/best-media-players-for-chromebook/` - (chromebook video player)
- `/blog/how-to-play-mkv-files-without-vlc/` - (play mkv without vlc)
- `/blog/understanding-browser-video-support/` - (html5 video codecs)
- `/blog/security-risks-of-online-video-converters/` - (safe video converter)
- `/blog/how-to-add-subtitles-to-movies-in-browser/` - (add subtitles to video browser)
- `/blog/hevc-vs-h264-browser-compatibility/` - (hevc browser support)
- `/blog/playing-local-music-libraries-in-safari/` - (safari local audio player)
- `/blog/the-future-of-webcodecs/` - (webcodecs api)
- `/blog/how-to-fix-audio-out-of-sync/` - (fix video audio sync)
- `/blog/vlc-web-alternatives/` - (vlc web player alternative)
- `/blog/watching-movies-on-restricted-work-laptops/` - (watch video on work laptop)
