---
title: "Framerate"
description: "Definition and explanation of framerate in the context of browser media playback."
related: []
seo:
  page_description: "Learn what framerate means and how it affects video and audio playback in web browsers."
---

# What is Framerate?

**Framerate** is a critical concept when dealing with media playback, especially in constrained environments like web browsers.

## Definition

In the context of web video and audio, framerate refers to the method or characteristic that determines how media is encoded, packaged, or delivered.

## Why it matters for Browser Players

When playing local files via uMediaPlayer, understanding framerate helps you troubleshoot why a file might not play correctly or why the audio might be missing. Browsers rely on their built-in multimedia pipelines, meaning they are strictly bound by the rules of framerate.

## Examples in Practice

If you are trying to play an MKV file and the video works but the audio is silent, it's often a framerate mismatch. Browsers might support the video container but lack the specific audio decoder required.
