const fs = require('fs');
const path = require('path');

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

function writeFrontmatter(filePath, data, content) {
  const fm = `---
${Object.entries(data).map(([k, v]) => {
  if (typeof v === 'object' && v !== null) {
    return `${k}:\n${Object.entries(v).map(([sk, sv]) => `  ${sk}: ${sv}`).join('\n')}`;
  }
  if (typeof v === 'string') return `${k}: "${v}"`;
  return `${k}: ${v}`;
}).join('\n')}
---
`;
  fs.writeFileSync(filePath, fm + '\n' + content);
}

// Generate Blog Posts (12 posts)
const blogTopics = [
  "How to Build a Fitness App in 2024",
  "Apple HealthKit vs Google Fit API",
  "HIPAA Compliance for Fitness Apps",
  "Integrating BLE Heart Rate Monitors",
  "Fitness App Retention Strategies",
  "Cost to Build a Fitness App",
  "Best Tech Stack for Fitness Apps",
  "Wearable Integration Guide",
  "Fitness App Monetization Models",
  "Video Streaming for Workout Apps",
  "AI in Fitness Applications",
  "Designing UX for Gym Goers"
];

blogTopics.forEach((topic, i) => {
  const slug = slugify(topic);
  const data = {
    title: topic,
    thumb_image_path: "/images/og/og-default.png",
    thumb_image_alt: topic,
    post_hero: {
      date: `"2024-03-${String(i+1).padStart(2, '0')}"`,
      heading: `"${topic}"`,
      tags: `\n    - Fitness\n    - Development`,
      author: `"CreateFitnessApp Team"`,
      image: `"/images/og/og-default.png"`,
      image_alt: `"${topic}"`,
      image_width: 1200,
      image_height: 630
    },
    seo: {
      page_description: `"Complete guide on ${topic}. Learn from top fitness app developers."`
    }
  };
  const content = `## Understanding ${topic}\n\nWhen it comes to building high-performance fitness applications, understanding ${topic} is critical. We dive deep into the technical implementation, common pitfalls, and architecture best practices.\n\n### The Challenge\n\nMany agencies struggle with the domain-specific requirements of fitness apps. We outline the key strategies to succeed here.\n\n### Solution\n\nBy leveraging correct data structures and integrating securely, you can ensure a robust application.`;
  writeFrontmatter(path.join(__dirname, '../src/content/blog', `${slug}.mdx`), data, content);
});

// Generate Reference Pages (15 pages)
const referenceTopics = [
  "Apple HealthKit Integration Guide",
  "Google Fit API Documentation",
  "Bluetooth Low Energy (BLE) for Fitness",
  "HIPAA Compliance Checklist",
  "Garmin API Integration",
  "Strava API Integration",
  "Oura Ring API Guide",
  "Whoop API Integration",
  "Video Streaming Architecture",
  "Offline Support for Workouts",
  "CoreMotion Framework Guide",
  "Health Data Privacy Policies",
  "Gamification in Fitness",
  "Social Features in Workout Apps",
  "Analytics for Fitness Apps"
];

referenceTopics.forEach((topic) => {
  const slug = slugify(topic);
  const data = {
    title: topic,
    description: `Definitive guide on ${topic} for fitness app development.`,
    seo: {
      page_description: `"Technical reference for ${topic}."`
    }
  };
  const content = `## ${topic}\n\nTechnical details and edge cases for implementing ${topic} in custom fitness applications.\n\n### Key Concepts\n\n- Data Synchronization\n- Battery Optimization\n- Security & Privacy`;
  writeFrontmatter(path.join(__dirname, '../src/content/reference', `${slug}.md`), data, content);
});

// Generate Glossary (20 terms)
const glossaryTerms = [
  "HealthKit", "Google Fit", "BLE", "HIPAA", "Wearable",
  "Heart Rate Variability (HRV)", "VO2 Max", "Resting Heart Rate",
  "Metadata", "JSON-LD", "CoreMotion", "Activity Rings",
  "Step Counter", "Calorie Burn", "METs", "Workout Session",
  "Biometrics", "Telemetry", "RUM", "Gait Analysis"
];

glossaryTerms.forEach((term) => {
  const slug = slugify(term);
  const data = {
    title: term,
    description: `Definition and implementation details for ${term}.`,
    seo: {
      page_description: `"Fitness app development glossary: ${term}."`
    }
  };
  const content = `## What is ${term}?\n\n${term} refers to a core concept in health and fitness application development.\n\n### Importance\n\nUnderstanding ${term} is vital for building accurate and performant fitness software.`;
  writeFrontmatter(path.join(__dirname, '../src/content/glossary', `${slug}.md`), data, content);
});

// Generate Tools (3 tools)
const tools = [
  "Development Cost Calculator",
  "ROI Estimator",
  "Health Data Privacy Checker"
];

tools.forEach((tool) => {
  const slug = slugify(tool);
  const data = {
    title: tool,
    description: `Interactive ${tool} for fitness app projects.`,
    seo: {
      page_description: `"Use our ${tool} to plan your custom fitness app."`
    }
  };
  const content = `## ${tool}\n\nUse this tool to calculate your project needs.\n\n<div id="tool-container" class="my-8 p-6 bg-surface rounded-xl border border-border">Interactive tool loading...</div>`;
  writeFrontmatter(path.join(__dirname, '../src/content/tools', `${slug}.md`), data, content);
});

console.log("Content generated successfully.");
