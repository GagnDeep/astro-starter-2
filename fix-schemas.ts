import fs from 'fs';
import path from 'path';

function writeMarkdown(filePath: string, frontmatter: any, body: string) {
    if (!fs.existsSync(path.dirname(filePath))) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }
    const lines = ['---'];
    for (const [key, value] of Object.entries(frontmatter)) {
        if (typeof value === 'object' && value !== null) {
            if (Array.isArray(value)) {
                lines.push(`${key}:`);
                for (const item of value) lines.push(`  - "${item}"`);
            } else {
                lines.push(`${key}:`);
                for (const [k, v] of Object.entries(value)) {
                    if (Array.isArray(v)) {
                        lines.push(`  ${k}:`);
                        for (const item of v) lines.push(`    - "${item}"`);
                    } else if (typeof v === 'boolean') {
                        lines.push(`  ${k}: ${v}`);
                    } else {
                        lines.push(`  ${k}: ${v !== undefined && v !== null && v !== "" ? `"${v}"` : ""}`);
                    }
                }
            }
        } else if (typeof value === 'boolean') {
            lines.push(`${key}: ${value}`);
        } else {
            lines.push(`${key}: ${value !== undefined && value !== null && value !== "" ? `"${value}"` : ""}`);
        }
    }
    lines.push('---');
    lines.push('');
    lines.push(body);
    fs.writeFileSync(filePath, lines.join('\n'));
}

const blogPosts = [
    "How to track calories accurately", "MyFitnessPal alternative without the bloat",
    "Why you are not losing weight in a deficit", "The best barcode scanning app for food",
    "How to track macros at a restaurant", "What happens when you overeat calories",
    "Do you need to track vegetables?", "How to set your macro split",
    "Weighing raw vs cooked food", "How to track alcohol macros",
    "Is intermittent fasting better than calorie restriction?", "Why protein is the most important macro"
];

for (let j = 0; j < blogPosts.length; j++) {
    const title = blogPosts[j];
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    writeMarkdown(`src/content/blog/${slug}.mdx`, {
        title: title,
        post_hero: {
            date: `2023-10-${(j+1).toString().padStart(2, '0')}`,
            heading: title,
            tags: ["Tracking"],
            author: "FoodLogTrack Team",
            image: "/src/assets/images/transparent-bg/undraw-hello.svg",
            image_alt: "Blog image"
        },
        thumb_image_path: "/src/assets/images/transparent-bg/undraw-hello.svg",
        thumb_image_alt: "Thumbnail",
        seo: {
            page_description: `Read our comprehensive guide on ${title.toLowerCase()}.`,
            canonical_url: "",
            featured_image: "",
            featured_image_alt: "",
            author_twitter_handle: "",
            open_graph_type: "article",
            no_index: false
        }
    }, `import CaptureForm from "../../components/forms/capture-form.astro";\n\n## Introduction\n\n${title} is a common topic of confusion.\n\n<CaptureForm form="waitlist" />`);
}

const libraryTopics = [
    "Macro Tracking Basics", "Protein for Muscle Growth", "Carbs Explained",
    "Healthy Fats", "Calorie Deficit Guide", "TDEE Explained",
    "BMR Explained", "Water Weight vs Fat Loss", "Reading Nutrition Labels",
    "Fiber and Digestion", "Micronutrients Guide", "Meal Prep Basics",
    "Dining Out on a Diet", "Alcohol and Macros", "Refeed Days"
];

for (const topic of libraryTopics) {
    const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    writeMarkdown(`src/content/pages/library/${slug}.md`, {
        _schema: 'default',
        title: topic,
        seo: {
            page_description: `Learn all about ${topic.toLowerCase()} to master your nutrition and diet goals.`,
            canonical_url: "",
            featured_image: "",
            featured_image_alt: "",
            author_twitter_handle: "",
            open_graph_type: "website",
            no_index: false
        }
    }, `## Understanding ${topic}\n\nTracking your food is the most reliable way to hit your goals.`);
}

const taxonomyTopics = [
    "Keto Diet", "Paleo Diet", "Vegan Macros", "Vegetarian Tracking",
    "High Protein Foods", "Low Carb Snacks", "High Fiber Foods",
    "Gluten Free Eating", "Intermittent Fasting", "Volume Eating"
];

for (const topic of taxonomyTopics) {
    const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    writeMarkdown(`src/content/pages/taxonomy/${slug}.md`, {
        _schema: 'default',
        title: topic,
        seo: {
            page_description: `A complete guide to ${topic.toLowerCase()} with food lists and tracking tips.`,
            canonical_url: "",
            featured_image: "",
            featured_image_alt: "",
            author_twitter_handle: "",
            open_graph_type: "website",
            no_index: false
        }
    }, `## ${topic}\n\nThis is our taxonomy page for ${topic}.`);
}
