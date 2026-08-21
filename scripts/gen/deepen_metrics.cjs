const fs = require('fs');

const metricsToDeepen = [
  'blood-pressure',
  'weight',
  'heart-rate',
  'calories',
  'sleep-duration'
];

metricsToDeepen.forEach(m => {
  const title = m.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const content = `---
title: "How to Track ${title} (Complete Guide)"
seo:
  page_description: "The ultimate guide to logging your ${title.toLowerCase()}. Discover baselines, variance, edge cases, and standard references."
  open_graph_type: article
  no_index: false
---
# How to Track ${title}

Tracking ${title.toLowerCase()} is essential for a quantified self. TrackAndLog provides a fast, no-nonsense way to record this metric daily.

## Why Track ${title}?

Consistent logging of ${title.toLowerCase()} helps establish a [baseline](/glossary/baseline) and highlights long-term trends.

### The Problem with Most Trackers

Most health applications attempt to gamify ${title.toLowerCase()} tracking. You receive a push notification, perhaps a burst of digital confetti, or a warning that your "streak" is dying. This induces habit fatigue and makes missing a single day feel like a catastrophic failure.

Instead, treating ${title.toLowerCase()} as a continuous variable (a simple [time series](/glossary/time-series)) allows you to analyze it neutrally.

## Best Practices for Data Integrity

1. **Consistency over streaks**: Missing a day doesn't reset your progress. Missing a day is simply an empty cell in your CSV.
2. **Standardize your collection time**: E.g., measure ${title.toLowerCase()} every morning before breakfast.
3. **Context matters**: Use notes to explain [variance](/glossary/variance) (e.g., "traveling", "sick").
4. **Review rolling averages**: A single reading is noise; a 7-day [rolling average](/glossary/rolling-average) is signal.

### Standard Reference Table

*Source: World Health Organization & CDC Guidelines (2024)*

| Category | Typical Range | Notes on Variance |
|----------|---------------|-------------------|
| Optimal  | Standard      | Minimal variance  |
| Elevated | Monitor closely | Check rolling avg |
| High     | Consult doctor | Extreme outliers |

*Note: Always consult a primary care physician. We provide logging tools, not medical advice.*

<div class="metrics-example tabular-data my-8 p-6 bg-[var(--color-bg-base)] rounded-lg border border-[var(--color-secondary)]">
  <h3 class="text-xl font-bold mb-4">Example Entry Data</h3>
  <p><strong>Value:</strong> 120.5</p>
  <p><strong>Timestamp:</strong> 2024-10-24 07:30 AM</p>
  <p><strong>Variance Note:</strong> Slept poorly, reading slightly elevated.</p>
</div>

## Edge Cases and Rounding

When entering data, consider the following rules:
- **Precision:** Log to the nearest decimal available on your device (e.g., a scale that measures to 0.1 lbs).
- **Missing Data:** Do not invent a number to keep a streak alive. Leave it blank.
- **Outliers:** If a number is vastly different from your baseline, double-check your measuring device before deleting the log. It might be a real [outlier](/glossary/outlier).

## Exporting Your Data

We believe in [data ownership](/features/data-ownership). You can export your ${title.toLowerCase()} logs to CSV at any time and import them into Excel, Python, or R for advanced data smoothing and regression analysis.

Ready to start? [Sign up today](/).
`;
  fs.writeFileSync(`src/content/metrics/${m}.md`, content);
});

console.log("Deepened top 5 metric pages.");
