import fs from 'fs';

const macroCalc = `---
import Layout from "../../layouts/Layout.astro";
import CaptureForm from "../../components/forms/capture-form.astro";

const seo = {
  page_description: "Calculate your optimal macronutrient split for your specific goals (fat loss, maintenance, muscle gain) with our free Macro Calculator.",
  title: "Macro Calculator"
};
---

<Layout title="Macro Calculator" seo={seo}>
  <main class="max-w-3xl mx-auto px-4 py-12 prose">
    <h1>Macro Calculator</h1>
    <p>Finding your optimal macronutrient split—protein, carbohydrates, and fats—is the next step after calculating your <a href="/tools/tdee-calculator/">TDEE (Total Daily Energy Expenditure)</a>. This calculator uses evidence-based formulas to recommend a starting split based on your goals.</p>

    <div class="bg-white p-6 rounded shadow my-8 not-prose border border-gray-200">
      <form id="macro-form" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Your Daily Calorie Target (TDEE +/- goal)</label>
          <input type="number" id="calories" class="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-green-500 focus:border-green-500" required placeholder="e.g., 2000" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Your Current Weight (kg)</label>
          <input type="number" id="weight" class="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-green-500 focus:border-green-500" required placeholder="e.g., 75" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Goal</label>
          <select id="goal" class="w-full border-gray-300 rounded-md shadow-sm p-2 border focus:ring-green-500 focus:border-green-500">
            <option value="cut">Fat Loss (High Protein)</option>
            <option value="maintain">Maintenance (Balanced)</option>
            <option value="bulk">Muscle Gain (High Carb, High Protein)</option>
            <option value="keto">Keto (Very Low Carb, High Fat)</option>
          </select>
        </div>

        <button type="submit" class="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded transition duration-150">Calculate Macros</button>
      </form>

      <div id="result" class="mt-8 hidden">
        <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Your Recommended Daily Macros</h3>

        <div class="grid grid-cols-3 gap-4 text-center mb-6">
            <div class="bg-blue-50 p-4 rounded shadow-sm border border-blue-100">
                <p class="text-xs text-blue-800 font-bold uppercase tracking-wider mb-1">Protein</p>
                <p class="text-2xl font-bold text-blue-900"><span id="protein-val"></span>g</p>
                <p class="text-xs text-blue-600 mt-1"><span id="protein-cal"></span> kcal</p>
            </div>
            <div class="bg-yellow-50 p-4 rounded shadow-sm border border-yellow-100">
                <p class="text-xs text-yellow-800 font-bold uppercase tracking-wider mb-1">Fats</p>
                <p class="text-2xl font-bold text-yellow-900"><span id="fat-val"></span>g</p>
                <p class="text-xs text-yellow-600 mt-1"><span id="fat-cal"></span> kcal</p>
            </div>
            <div class="bg-green-50 p-4 rounded shadow-sm border border-green-100">
                <p class="text-xs text-green-800 font-bold uppercase tracking-wider mb-1">Carbs</p>
                <p class="text-2xl font-bold text-green-900"><span id="carb-val"></span>g</p>
                <p class="text-xs text-green-600 mt-1"><span id="carb-cal"></span> kcal</p>
            </div>
        </div>

        <p class="text-sm text-gray-600 text-center mb-6">Total Calories: <span id="total-cal"></span></p>

        <div class="mt-4 pt-6 border-t border-gray-200">
            <p class="text-sm font-medium mb-3 text-gray-900 text-center">Get these results sent to your email with a PDF guide:</p>
            <CaptureForm form="quote" />
        </div>
      </div>
    </div>

    <noscript>
      <div class="bg-yellow-50 p-4 border border-yellow-200 rounded my-4">
        <p><strong>JavaScript is required to use the interactive calculator.</strong></p>
        <p>To calculate manually: <br/>
        1. Protein: Multiply your weight in kg by 2.2 (gives grams of protein). Multiply grams by 4 for calories.<br/>
        2. Fat: Allocate 25-30% of your total calories to fat. Divide by 9 for grams.<br/>
        3. Carbs: Fill the remaining calories with carbs. Divide by 4 for grams.</p>
      </div>
    </noscript>

    <h2>How We Calculate Your Macros</h2>
    <p>There is no "magic" ratio, but evidence-based sports nutrition generally recommends the following hierarchy of importance:</p>

    <ol>
        <li><strong>Total Calories:</strong> This dictates whether you gain or lose weight.</li>
        <li><strong>Protein:</strong> This is set first based on your body weight to ensure muscle retention (during a cut) or muscle growth (during a bulk). We generally recommend ~2.2g per kg of body weight for active individuals.</li>
        <li><strong>Fat:</strong> Essential for hormone regulation and joint health. We allocate 25% to 35% of total calories to fat depending on the goal.</li>
        <li><strong>Carbohydrates:</strong> These make up the remainder of your calorie budget. Carbs are your body's preferred energy source for high-intensity training.</li>
    </ol>

    <h3>Goal Specific Adjustments</h3>
    <ul>
        <li><strong>Fat Loss (Cut):</strong> Protein is kept high to prevent muscle breakdown while in a calorie deficit. Fats are kept moderate, and carbs fill the rest.</li>
        <li><strong>Muscle Gain (Bulk):</strong> Carbohydrates are increased significantly to fuel intense workouts and create an anabolic environment.</li>
        <li><strong>Keto:</strong> Carbohydrates are restricted to under 50g per day, forcing the body to use fat for fuel. Fats make up the vast majority of daily calories.</li>
    </ul>

    <p>Read more in our comprehensive <a href="/library/macro-tracking-basics/">Macro Tracking Basics</a> guide.</p>
  </main>
</Layout>

<script>
  const form = document.getElementById('macro-form');
  const resultDiv = document.getElementById('result');

  // URL Params
  const urlParams = new URLSearchParams(window.location.search);
  const stateCal = urlParams.get('c');
  const stateWeight = urlParams.get('w');
  const stateGoal = urlParams.get('g');

  if (stateCal) (document.getElementById('calories') as HTMLInputElement).value = stateCal;
  if (stateWeight) (document.getElementById('weight') as HTMLInputElement).value = stateWeight;
  if (stateGoal) (document.getElementById('goal') as HTMLSelectElement).value = stateGoal;

  function calculateMacros() {
    const calories = parseFloat((document.getElementById('calories') as HTMLInputElement).value);
    const weight = parseFloat((document.getElementById('weight') as HTMLInputElement).value);
    const goal = (document.getElementById('goal') as HTMLSelectElement).value;

    if (isNaN(calories) || isNaN(weight)) return;

    let proteinGrams = 0;
    let fatGrams = 0;
    let carbGrams = 0;

    if (goal === 'keto') {
      carbGrams = 30; // strict limit
      proteinGrams = weight * 1.8; // slightly lower than standard bodybuilding
      const remainingCalories = calories - (carbGrams * 4) - (proteinGrams * 4);
      fatGrams = remainingCalories / 9;
    } else {
      // Standard approach
      proteinGrams = weight * 2.2;

      let fatPercentage = 0.25;
      if (goal === 'maintain') fatPercentage = 0.30;
      if (goal === 'cut') fatPercentage = 0.25;
      if (goal === 'bulk') fatPercentage = 0.20; // more room for carbs

      const fatCalories = calories * fatPercentage;
      fatGrams = fatCalories / 9;

      const remainingCalories = calories - (proteinGrams * 4) - fatCalories;
      carbGrams = remainingCalories / 4;
    }

    // Ensure we don't display negative carbs if someone inputs crazy numbers
    if (carbGrams < 0) carbGrams = 0;

    const pCal = proteinGrams * 4;
    const fCal = fatGrams * 9;
    const cCal = carbGrams * 4;
    const totalCal = pCal + fCal + cCal;

    // Update DOM
    const el = (id: string, val: string | number) => {
        const element = document.getElementById(id);
        if (element) element.textContent = Math.round(val as number).toString();
    };

    el('protein-val', proteinGrams);
    el('protein-cal', pCal);
    el('fat-val', fatGrams);
    el('fat-cal', fCal);
    el('carb-val', carbGrams);
    el('carb-cal', cCal);
    el('total-cal', totalCal);

    resultDiv?.classList.remove('hidden');

    // Update URL
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('c', calories.toString());
    newUrl.searchParams.set('w', weight.toString());
    newUrl.searchParams.set('g', goal);
    window.history.replaceState({}, '', newUrl);
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      calculateMacros();
    });

    if (stateCal && stateWeight) calculateMacros();
  }
</script>
`;

fs.writeFileSync('src/pages/tools/macro-calculator.astro', macroCalc);

const macroBasics = `---
_schema: "default"
title: "Macro Tracking Basics"
seo:
  page_description: "A comprehensive guide to macronutrients, how to track them, and why they matter more than just calories for body composition."
  canonical_url: ""
  featured_image: ""
  featured_image_alt: ""
  author_twitter_handle: ""
  open_graph_type: "website"
  no_index: false
---
import CaptureForm from "../../components/forms/capture-form.astro";

## Understanding Macro Tracking Basics

While tracking your calories is the key to weight *loss* or weight *gain*, tracking your macronutrients (macros) is the key to **body composition**—determining whether the weight you lose is fat or muscle.

### What are Macros?

"Macros" is short for macronutrients. These are the three main suppliers of nutrients in your diet that provide energy (calories).

| Macronutrient | Calories per Gram | Primary Role |
| :--- | :--- | :--- |
| **Protein** | 4 kcal/g | Muscle repair, growth, enzyme production, satiety. |
| **Carbohydrates** | 4 kcal/g | Primary energy source, especially for high-intensity exercise. |
| **Fats** | 9 kcal/g | Hormone production, joint health, absorption of fat-soluble vitamins. |

*Note: Alcohol is sometimes considered a fourth macro, yielding 7 kcal/g, but it provides no essential nutrients.*

### Why Macros Matter Over Just Calories

Imagine two people, Alice and Bob. Both eat exactly 2,000 calories a day in a 500-calorie deficit.

- **Alice** eats 150g of protein, 200g of carbs, and 66g of fat. She lifts weights.
- **Bob** eats 40g of protein, 350g of carbs, and 48g of fat. He lifts weights.

After 12 weeks, both have lost exactly 12 pounds. However, Alice has retained almost all of her muscle mass and lost primarily body fat. Bob, due to his extremely low protein intake, has lost a significant amount of muscle mass alongside the fat. Bob ends up looking "skinny fat," while Alice looks toned.

**This is the power of macro tracking.**

### How to Calculate Your Macros

You can do this manually, or use our [Macro Calculator](/tools/macro-calculator/) to do it instantly. If you want the manual method:

1. **Find your Calories:** Use a [TDEE Calculator](/tools/tdee-calculator/) to find your maintenance, then subtract 500 for fat loss. Let's assume your target is 2,000 calories and you weigh 75kg.
2. **Set Protein First:** A safe, evidence-based target for active individuals is 2.2g per kg of body weight. \`75kg × 2.2 = 165g of protein\`.
   - 165g × 4 kcal = **660 calories from protein**.
3. **Set Fats Second:** Fat is essential. Do not drop it too low. A good rule of thumb is 25% of your total calories.
   - \`2000 × 0.25 = 500 calories\`.
   - 500 / 9 kcal = **55g of fat**.
4. **Carbs Fill the Rest:** Subtract your protein and fat calories from your total.
   - \`2000 - 660 - 500 = 840 remaining calories\`.
   - 840 / 4 kcal = **210g of carbs**.

**Final Split:** 165g Protein / 55g Fat / 210g Carbs.

### Do I Need to Hit Them Exactly?

No. Macro tracking, often called IIFYM (If It Fits Your Macros), is about flexibility, not perfection.

**The Golden Rules of Adherence:**
1. **Hit your Calorie target:** within +/- 50 to 100 calories.
2. **Hit your Protein target:** within +/- 10g.
3. **Fats and Carbs can fluctuate:** If you eat 20g more carbs one day, just eat 9g less fat to balance the calories. As long as protein and total calories are stable, you will succeed.

### What to do next

1. Go to the [Macro Calculator](/tools/macro-calculator/) to find your exact numbers.
2. Read our guide on [How to track calories accurately](/blog/how-to-track-calories-accurately) to avoid the "Peanut Butter Problem."
3. Join the waitlist for the FoodLogTrack app below to get a tracker that doesn't put macro breakdowns behind a paywall.

<CaptureForm form="waitlist" />
`;

fs.writeFileSync('src/content/pages/library/macro-tracking-basics.md', macroBasics);
