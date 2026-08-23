const fs = require('fs');

let css = fs.readFileSync('public/fonts/fonts.css', 'utf-8');
const processedCss = css.replace(/@font-face\s*{([^}]+)}/g, (match, body) => {
  if (body.includes("font-display: swap;") && !body.includes("size-adjust:")) {
     let sizeAdjust = "size-adjust: 100%;";
     if(body.includes("'Space Grotesk'")) {
        sizeAdjust = "size-adjust: 105%;"; // Adjust if needed
     } else if(body.includes("'IBM Plex Sans'")) {
        sizeAdjust = "size-adjust: 98%;";
     }
     return `@font-face {${body}  ${sizeAdjust}\n}`;
  }
  return match;
});

fs.writeFileSync('public/fonts/fonts.css', processedCss);
