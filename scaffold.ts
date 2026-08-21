import fs from 'fs';
import path from 'path';

// Helpers
function mkdirp(dir: string) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

function write(file: string, content: string) {
    mkdirp(path.dirname(file));
    fs.writeFileSync(file, content.trim() + '\n');
}

// 1. Site config
const siteJson = {
  "site_title": "FoodLogTrack",
  "description": "The simple food log web app monetized with ads and diet affiliate products.",
  "tagline": "Track What You Eat. Skip The Bloat.",
  "image_alt": "FoodLogTrack logo",
  "theme_color": "#166534",
  "organization": {
    "name": "FoodLogTrack",
    "logo": "/images/logo.png",
    "same_as": []
  },
  "locale": "en_US"
};
write('data/site.json', JSON.stringify(siteJson, null, 2));

// Update astro.config.mjs to change the domain (will sed it later or do it here)

// Write components, content, etc. later
