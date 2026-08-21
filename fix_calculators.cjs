const fs = require('fs');

function addCaptureToCalculator(file) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('import NewsletterForm')) {
    content = content.replace('---\n---', '---\nimport NewsletterForm from "../forms/newsletter-form.astro";\nimport { capture } from "../../../capture.config";\n---');
  }

  if (!content.includes('<NewsletterForm')) {
    content = content.replace('</div>\n  \n  <noscript>', `</div>\n  \n  <div id="calculator-capture" class="hidden mt-4 p-4 border border-slate-200 rounded">\n    <p class="font-bold mb-2">Want weekly macro tips?</p>\n    <NewsletterForm form={capture.forms.newsletter} />\n  </div>\n\n  <noscript>`);
    content = content.replace("resultDiv.classList.remove('hidden');", "resultDiv.classList.remove('hidden');\n      document.getElementById('calculator-capture')?.classList.remove('hidden');");
  }
  fs.writeFileSync(file, content);
}

addCaptureToCalculator('src/components/calculators/ProteinCalculator.astro');
addCaptureToCalculator('src/components/calculators/FiberCalculator.astro');
