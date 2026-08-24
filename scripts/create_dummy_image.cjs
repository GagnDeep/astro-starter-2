const fs = require('fs');

// A 1x1 transparent PNG base64 encoded
const pngBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
const pngBuffer = Buffer.from(pngBase64, 'base64');

fs.writeFileSync('src/assets/images/hero-home.jpg', pngBuffer);
fs.writeFileSync('src/assets/images/compliance-desk.jpg', pngBuffer);
fs.writeFileSync('src/assets/images/logo-placeholder-1.png', pngBuffer);
fs.writeFileSync('src/assets/images/logo-placeholder-2.png', pngBuffer);
fs.writeFileSync('src/assets/images/logo-placeholder-3.png', pngBuffer);
