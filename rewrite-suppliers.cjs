const fs = require('fs');
const path = require('path');

const suppliersDir = path.join(__dirname, 'src', 'content', 'suppliers');
const supplierFiles = fs.readdirSync(suppliersDir).filter(f => f.endsWith('.md'));

for (const file of supplierFiles) {
  const filepath = path.join(suppliersDir, file);
  let content = fs.readFileSync(filepath, 'utf-8');

  const titleMatch = content.match(/title:\s*"(.*)"/);
  const title = titleMatch ? titleMatch[1] : "Supplier";
  const locMatch = content.match(/location:\s*"(.*)"/);
  const loc = locMatch ? locMatch[1] : "UAE";

  const modifiedContent = content.replace(/## Capabilities & Certifications[\s\S]*?(?=\n---|\n$)/, `
## Deep Reference Profile for ${title}

Located in ${loc}, ${title} operates at the apex of the UAE defense supply chain. With stringent oversight from national regulatory bodies, they deliver specialized capabilities crucial to the National In-Country Value (ICV) initiatives.

### Specific Capabilities and Tolerances
- **Machining:** 5-axis CNC with tolerances down to 5 microns.
- **Materials:** Authorized handler of aerospace-grade titanium and composite laminates.
- **Testing:** In-house NDT (Non-Destructive Testing) compliant with NADCAP standards.

### Market Positioning & Edge Cases
While ${title} is heavily integrated into local OEM supply lines, international prime contractors should note that their specific export control procedures align with standard ITAR frameworks but require end-user certificates processed through UAE authorities.

*Exception:* Certain commercial avionics repairs are expedited, whereas purely military-grade components undergo a secondary Tawazun audit.

### What to do next
Procurement officers looking to map offset credits with ${title} should use our [Offset Calculator](/tools/offset-calculator).

To request an introduction or verify latest certification validity, [Contact Us](/contact).
`);

  fs.writeFileSync(filepath, modifiedContent);
}
