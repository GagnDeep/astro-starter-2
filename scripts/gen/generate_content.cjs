const fs = require('fs');
const path = require('path');

const metrics = [
  'blood-pressure', 'weight', 'heart-rate', 'water-intake', 'sleep-duration',
  'reading-pages', 'caffeine', 'mood', 'calories', 'steps',
  'workouts', 'meditation-minutes', 'screentime', 'expenses', 'fasting-hours',
  'blood-sugar', 'temperature'
];

const features = [
  'csv-export', 'custom-metrics', 'privacy', 'fast-logging', 'no-streaks',
  'offline-first', 'simple-charts', 'multi-device', 'no-subscription', 'data-ownership'
];

const posts = [
  'why-streaks-ruin-habits', 'quantified-self-starter', 'spreadsheet-alternatives',
  'habit-tracker-without-gamification', 'how-to-track-metrics-daily', 'track-macros-spreadsheet-alternative',
  'personal-kpi-dashboard', 'open-source-habit-tracker-alternative', 'privacy-focused-health-logger',
  'habit-consistency-vs-streak', 'best-app-for-quantified-self-2024', 'data-visualization-for-personal-metrics'
];

const glossaryTerms = [
  'rolling-average', 'baseline', 'variance', 'outlier', 'standard-deviation',
  'binary-habit', 'continuous-metric', 'correlation', 'moving-average', 'data-export',
  'csv', 'self-quantification', 'streak', 'habit-fatigue', 'time-series',
  'y-axis', 'x-axis', 'data-smoothing', 'trend-line', 'regression'
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function generateFrontmatter(title, description, imageAlt = '') {
  return `---
title: "${title}"
seo:
  page_description: "${description}"
  open_graph_type: article
  no_index: false
---
`;
}

// Ensure directories
ensureDir('src/content/metrics');
ensureDir('src/content/features');
ensureDir('src/content/blog');
ensureDir('src/content/glossary');
ensureDir('src/pages/metrics');
ensureDir('src/pages/features');
ensureDir('src/pages/glossary');

// Metrics (Reference pages)
metrics.forEach(m => {
  const title = m.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const content = generateFrontmatter(`How to Track ${title}`, `Learn the best ways to log and track your ${title} daily without friction.`) + `
# How to Track ${title}

Tracking ${title.toLowerCase()} is essential for a quantified self. TrackAndLog provides a fast, no-nonsense way to record this metric daily.

## Why Track ${title}?

Consistent logging of ${title.toLowerCase()} helps establish a baseline and highlights long-term trends. By removing the friction of gamification, you get pure data.

## Best Practices
- **Consistency over streaks**: Missing a day doesn't reset your progress. Just log the next day.
- **Context matters**: Use notes to explain variance (e.g., "slept poorly").
- **Review weekly**: Don't obsess over daily numbers. Look at the 7-day rolling average.

<div class="metrics-example tabular-data">
Example Entry: 142.5 logged at 08:00 AM
</div>

[Read more about rolling averages](/glossary/rolling-average) or check out our [CSV export feature](/features/csv-export) to own your data.
`;
  fs.writeFileSync(`src/content/metrics/${m}.md`, content);
});

// Features (Taxonomy)
features.forEach(f => {
  const title = f.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const content = generateFrontmatter(`${title} - Core Feature`, `TrackAndLog supports ${title.toLowerCase()} for the best logging experience.`) + `
# Feature: ${title}

At TrackAndLog, we believe in **${title.toLowerCase()}**. We built this platform because too many apps hide your data behind paywalls or complex UIs.

## How it works

When you use our tool, you are guaranteed a seamless experience.

- No fluff.
- No confetti.
- Just your data.

[Explore our tracking capabilities for Weight](/metrics/weight) or [Blood Pressure](/metrics/blood-pressure).
`;
  fs.writeFileSync(`src/content/features/${f}.md`, content);
});

// Blog Posts
posts.forEach(p => {
  const title = p.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const content = generateFrontmatter(title, `An in-depth look at ${title.toLowerCase()} and how TrackAndLog can help.`) + `
# ${title}

When evaluating how to manage daily data, the concept of **${title.toLowerCase()}** frequently arises. Many people fall into the trap of using tools that aren't fit for purpose.

## The Problem with Current Solutions

Most apps focus on streaks or gamification. They are slow, require subscriptions, and don't let you export your data.

### Why Streaks Fail

- **Guilt**: Missing a day feels like a failure.
- **Inaccuracy**: People fake logs to keep a streak alive.
- **Burnout**: The pressure builds up.

## The Alternative

Instead of focusing on streaks, focus on **consistency** and **baselines**. Using a tool that supports [CSV exports](/features/csv-export) ensures you own your data.

### Comparison Table

| Feature | TrackAndLog | Spreadsheets | Traditional Habit Apps |
|---------|-------------|--------------|------------------------|
| Speed   | High        | Low          | Medium                 |
| Export  | Yes (CSV)   | Yes          | Rare                   |
| Cost    | Free        | Free/Paid    | Subscription           |

[Learn how to track caffeine](/metrics/caffeine) or read our [glossary on variance](/glossary/variance).
`;
  fs.writeFileSync(`src/content/blog/${p}.mdx`, content); // using mdx for blog
});

// Glossary
glossaryTerms.forEach(g => {
  const title = g.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const content = generateFrontmatter(title, `Definition of ${title.toLowerCase()} in the context of habit tracking.`) + `
# Glossary: ${title}

**${title}** is a critical concept in personal metrics and data tracking.

Understanding this term helps you better analyze the data you log every day, whether it's [Weight](/metrics/weight) or [Blood Pressure](/metrics/blood-pressure).

## Definition
In simple terms, ${title.toLowerCase()} refers to... [detailed explanation here].

[Back to Glossary](/glossary/)
`;
  fs.writeFileSync(`src/content/glossary/${g}.md`, content);
});

console.log("Content generated successfully.");
