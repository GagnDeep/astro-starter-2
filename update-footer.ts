import fs from 'fs';
const data = JSON.parse(fs.readFileSync('data/navigation.json', 'utf8'));

data.footer = [
  {
    heading: "Tools",
    links: [
      { text: "BMR Calculator", url: "/tools/bmr-calculator/" },
      { text: "TDEE Calculator", url: "/tools/tdee-calculator/" },
      { text: "Macro Calculator", url: "/tools/macro-calculator/" }
    ]
  },
  {
    heading: "Compare",
    links: [
      { text: "MyFitnessPal Alternative", url: "/compare/myfitnesspal-alternative/" },
      { text: "LoseIt Alternative", url: "/compare/loseit-alternative/" }
    ]
  },
  {
    heading: "Library",
    links: [
      { text: "Nutrition Glossary", url: "/glossary/" },
      { text: "Diet Types", url: "/taxonomy/keto-diet/" },
      { text: "Calorie Deficit Guide", url: "/library/calorie-deficit-guide/" }
    ]
  },
  {
    heading: "Legal",
    links: [
      { text: "Privacy Policy", url: "/legal/privacy/" },
      { text: "Terms of Service", url: "/legal/terms/" },
      { text: "Contact", url: "/contact/" }
    ]
  }
];

fs.writeFileSync('data/navigation.json', JSON.stringify(data, null, 2));
