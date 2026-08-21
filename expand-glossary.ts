import fs from 'fs';

const terms = [
  { name: "Amino Acids", desc: "The building blocks of protein, essential for muscle repair and growth. Examples include leucine and valine." },
  { name: "Anabolic", desc: "A metabolic state where the body builds tissue, usually muscle, typically requiring a calorie surplus and resistance training." },
  { name: "Catabolic", desc: "A metabolic state where the body breaks down tissue, usually fat or muscle, typically resulting from a calorie deficit." },
  { name: "Basal Metabolic Rate (BMR)", desc: "The number of calories your body burns at rest to maintain basic life-sustaining functions. [Calculate yours](/tools/bmr-calculator/)." },
  { name: "Total Daily Energy Expenditure (TDEE)", desc: "The total number of calories you burn in a day, including BMR, TEF, NEAT, and EAT. [Calculate yours](/tools/tdee-calculator/)." },
  { name: "Macronutrients (Macros)", desc: "The three primary nutrients that provide energy: protein (4 kcal/g), carbohydrates (4 kcal/g), and fats (9 kcal/g)." },
  { name: "Micronutrients", desc: "Vitamins and minerals essential for health, required in smaller amounts than macros." },
  { name: "Calorie", desc: "A unit of energy. In nutrition, it refers to a kilocalorie (kcal), the amount of energy needed to raise 1kg of water by 1°C." },
  { name: "Calorie Deficit", desc: "Consuming fewer calories than your TDEE, the fundamental requirement for weight loss." },
  { name: "Calorie Surplus", desc: "Consuming more calories than your TDEE, required for weight gain (muscle or fat)." },
  { name: "Maintenance Calories", desc: "Consuming the exact number of calories as your TDEE, resulting in weight stability." },
  { name: "Thermic Effect of Food (TEF)", desc: "The energy required to digest, absorb, and metabolize food. Protein has the highest TEF (20-30%)." },
  { name: "Non-Exercise Activity Thermogenesis (NEAT)", desc: "Energy expended for everything we do that is not sleeping, eating, or sports-like exercise (e.g., walking, fidgeting)." },
  { name: "Exercise Activity Thermogenesis (EAT)", desc: "Energy expended during intentional exercise sessions." },
  { name: "Ketosis", desc: "A metabolic state where the body burns fat for fuel instead of carbohydrates, typically achieved by consuming <50g carbs daily." },
  { name: "Glycogen", desc: "The stored form of carbohydrates in the body, primarily in the liver and muscles." },
  { name: "Insulin", desc: "A hormone that regulates blood sugar levels by facilitating the uptake of glucose into cells." },
  { name: "Insulin Resistance", desc: "A condition where cells fail to respond effectively to insulin, leading to elevated blood sugar levels." },
  { name: "Body Mass Index (BMI)", desc: "A ratio of weight to height used as a general indicator of health, though it does not account for body composition." },
  { name: "Lean Body Mass (LBM)", desc: "Total body weight minus body fat weight. Includes muscle, bone, organs, and water." },
  { name: "Body Fat Percentage", desc: "The proportion of total body weight that consists of fat tissue." },
  { name: "Satiety", desc: "The feeling of fullness and satisfaction after eating, which helps prevent overeating." },
  { name: "Energy Density", desc: "The number of calories in a given volume or weight of food. High-energy-dense foods have many calories per gram." },
  { name: "Nutrient Density", desc: "The amount of beneficial nutrients (vitamins, minerals) relative to the calorie content of a food." },
  { name: "Flexible Dieting (IIFYM)", desc: "If It Fits Your Macros. A dietary approach focusing on hitting daily macro targets rather than restricting specific foods." },
  { name: "Intermittent Fasting (IF)", desc: "An eating pattern that cycles between periods of fasting and eating, such as the 16:8 method." },
  { name: "Refeed Day", desc: "A planned day of higher calorie intake (usually carbs) during a diet to replenish glycogen and potentially boost metabolism." },
  { name: "Cheat Meal", desc: "A planned, unstructured meal deviating from strict dietary guidelines, often used for psychological relief." },
  { name: "Water Weight", desc: "Temporary fluctuations in body weight caused by water retention, often influenced by sodium and carbohydrate intake." },
  { name: "Hypertrophy", desc: "The process of muscle growth, usually stimulated by resistance training and adequate protein intake." }
];

let glossaryMd = `---
_schema: default
title: "Nutrition Glossary"
seo:
  page_description: "A comprehensive glossary of over 30 essential nutrition and tracking terms."
  canonical_url: ""
  featured_image: ""
  featured_image_alt: ""
  author_twitter_handle: ""
  open_graph_type: "website"
  no_index: false
---

## Glossary of Terms

Understanding nutrition science starts with the terminology. Here are 30 essential terms you need to know:

`;

terms.forEach(term => {
  glossaryMd += `- **${term.name}:** ${term.desc}\n`;
});

glossaryMd += `\nReady to put this knowledge into action? [Join FoodLogTrack](/) today to start tracking effortlessly.\n`;

fs.writeFileSync('src/content/pages/glossary.md', glossaryMd);
