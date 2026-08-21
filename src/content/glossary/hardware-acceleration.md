---
title: "Hardware-acceleration"
description: "Definition and explanation of hardware-acceleration in the context of browser media playback."
related: []
seo:
  page_description: "Learn what hardware-acceleration means and how it affects video and audio playback in web browsers."
---

# What is Hardware-acceleration?

**Hardware-acceleration** is a critical concept when dealing with media playback, especially in constrained environments like web browsers.

## Definition

In the context of web video and audio, hardware-acceleration refers to the method or characteristic that determines how media is encoded, packaged, or delivered.

## Why it matters for Browser Players

When playing local files via uMediaPlayer, understanding hardware-acceleration helps you troubleshoot why a file might not play correctly or why the audio might be missing. Browsers rely on their built-in multimedia pipelines, meaning they are strictly bound by the rules of hardware-acceleration.

## Examples in Practice

If you are trying to play an MKV file and the video works but the audio is silent, it's often a hardware-acceleration mismatch. Browsers might support the video container but lack the specific audio decoder required.
