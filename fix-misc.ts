import fs from 'fs';

// site.json
const siteData = JSON.parse(fs.readFileSync('data/site.json', 'utf8'));
siteData.image = "/images/og-default.png";
siteData.lang = "en";
siteData.twitter_site = "@foodlogtrack";
siteData.default_author = "FoodLogTrack Team";
fs.writeFileSync('data/site.json', JSON.stringify(siteData, null, 2));

// bmr
let bmr = fs.readFileSync('src/pages/tools/bmr-calculator.astro', 'utf8');
bmr = bmr.replace(/<CaptureForm formLabel="quote" \/>/g, '<CaptureForm form="quote" />');
bmr = bmr.replace(/resultDiv\.classList\.remove\('hidden'\);/g, "resultDiv?.classList.remove('hidden');");
bmr = bmr.replace(/bmrValueSpan\.textContent/g, "if (bmrValueSpan) bmrValueSpan.textContent");
fs.writeFileSync('src/pages/tools/bmr-calculator.astro', bmr);

// nav
const nav = JSON.parse(fs.readFileSync('data/navigation.json', 'utf8'));
nav.footer = [
  {
    heading: "Tools",
    links: [{ text: "BMR Calculator", url: "/tools/bmr-calculator/" }]
  }
];
nav.footer_brand = {
    logo: "/favicon.svg",
    logo_alt_text: "FoodLogTrack Logo",
    logo_url: "/",
    copyright: "FoodLogTrack. All rights reserved."
};
fs.writeFileSync('data/navigation.json', JSON.stringify(nav, null, 2));

const content = `---
import { footer, footer_brand } from "../../../data/navigation.json";
---

<footer class="bg-gray-800 text-white">
  <div class="mx-auto max-w-6xl px-8 py-12">
    <div class="grid grid-cols-1 sm:grid-cols-3 items-center gap-8">
      <a class="flex justify-center sm:justify-start" href={footer_brand.logo_url}>
        <img class="w-48" src={footer_brand.logo} alt={footer_brand.logo_alt_text} />
      </a>
      <ul class="flex gap-6 items-center justify-center">
        {Array.isArray(footer) ? footer.map((col) => (
            col.links.map((link: { url: string, text: string }) => (
              <li>
                <a class="hover:text-gray-300 transition-colors" href={link.url}>
                  {link.text}
                </a>
              </li>
            ))
        )) : null}
      </ul>
      <div class="text-center sm:text-end text-sm text-gray-400">
        &copy; {new Date().getFullYear()} {footer_brand.copyright}
      </div>
    </div>
  </div>
</footer>`;
fs.writeFileSync('src/components/navigation/footer.astro', content);
