#!/bin/bash
mkdir -p public/fonts

# JetBrains Mono (Body / Utility)
curl -s 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap' -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36' > /tmp/jb-mono.css
JB_MONO_URL=$(grep -o "url(https://fonts.gstatic.com/s/jetbrainsmono/[^\)]*woff2)" /tmp/jb-mono.css | grep -v italic | head -1 | sed 's/url(//' | sed 's/)//')
curl -s $JB_MONO_URL -o public/fonts/jetbrains-mono-regular.woff2

JB_MONO_BOLD_URL=$(grep -o "url(https://fonts.gstatic.com/s/jetbrainsmono/[^\)]*woff2)" /tmp/jb-mono.css | grep -v italic | tail -1 | sed 's/url(//' | sed 's/)//')
curl -s $JB_MONO_BOLD_URL -o public/fonts/jetbrains-mono-bold.woff2

# IBM Plex Serif (Display)
curl -s 'https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;500;600&display=swap' -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36' > /tmp/ibm-plex.css
IBM_PLEX_URL=$(grep -o "url(https://fonts.gstatic.com/s/ibmplexserif/[^\)]*woff2)" /tmp/ibm-plex.css | grep -v italic | head -1 | sed 's/url(//' | sed 's/)//')
curl -s $IBM_PLEX_URL -o public/fonts/ibm-plex-serif-regular.woff2

IBM_PLEX_BOLD_URL=$(grep -o "url(https://fonts.gstatic.com/s/ibmplexserif/[^\)]*woff2)" /tmp/ibm-plex.css | grep -v italic | tail -1 | sed 's/url(//' | sed 's/)//')
curl -s $IBM_PLEX_BOLD_URL -o public/fonts/ibm-plex-serif-bold.woff2

ls -la public/fonts
