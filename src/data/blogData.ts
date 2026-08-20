export interface BlogPostData {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  contentHtml: string;
  citations: string[];
}

export const blogData: BlogPostData[] = [
  {
    slug: "understanding-tsh-fluctuations",
    title: "Understanding TSH Fluctuations: Why Your Labs Change",
    subtitle: "Circadian rhythms, lab assay variations, biotin interference, and seasonal thyroid shifts.",
    author: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    date: "January 12, 2025",
    readTime: "6 min read",
    category: "Thyroid Health",
    summary: "Patients are often alarmed when Thyroid-Stimulating Hormone (TSH) varies between blood draws. Learn the physiological reasons behind TSH swings and how to ensure consistent testing.",
    contentHtml: `
      <p>It is common for patients on levothyroxine or being monitored for subclinical thyroid dysfunction to see TSH levels fluctuate between tests—for example, moving from 2.1 mIU/L in January to 4.2 mIU/L in April. Understanding the underlying biology prevents premature dosage changes.</p>

      <h2>1. Circadian Rhythm of TSH Secretion</h2>
      <p>TSH follows a distinct diurnal rhythm driven by the hypothalamic suprachiasmatic nucleus. TSH levels peak in the early morning hours (between 2:00 AM and 4:00 AM) and reach their lowest trough in the late afternoon (between 4:00 PM and 6:00 PM). A blood draw taken at 8:00 AM can yield a TSH value up to 30% higher than a draw taken at 4:00 PM on the same day.</p>

      <h2>2. Biotin (Vitamin B7) Interference</h2>
      <p>High-dose biotin contained in hair, skin, and nail supplements binds to streptavidin-biotin immunoassays used in standard laboratory testing platforms. This leads to falsely suppressed TSH and falsely elevated Free T4 readings—mimicking Graves' hyperthyroidism in a completely euthyroid individual.</p>

      <h2>3. Seasonal Temperature & Intercurrent Illness</h2>
      <p>Thyroid hormone metabolism speeds up slightly in cold winter months to maintain core thermogenesis, leading to slight winter rises in TSH. Furthermore, non-thyroidal illness (such as acute viral infections) transiently alters central TSH secretion.</p>
    `,
    citations: [
      "Roelfsema F, Veldhuis JD. Thyrotropin secretion by the anterior pituitary. Endocr Rev. 2013;34(5):698-757.",
      "Li D, et al. Association of Biotin Ingestion With Performance of Hormone Assays. JAMA. 2017;318(12):1150-1160."
    ]
  },
  {
    slug: "prediabetes-reversal-evidence-based-guide",
    title: "Prediabetes Reversal: An Evidence-Based Clinical Blueprint",
    subtitle: "Actionable strategies from the Diabetes Prevention Program to restore insulin sensitivity.",
    author: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    date: "January 08, 2025",
    readTime: "7 min read",
    category: "Metabolic Care",
    summary: "Prediabetes is not a permanent trajectory. Discover how 7% body weight reduction, fiber timing, and resistance training reduce 3-year diabetes progression risk by 58%.",
    contentHtml: `
      <p>A prediabetes diagnosis (A1C 5.7–6.4%) is a crucial window for intervention. The landmark Diabetes Prevention Program (DPP) trial proved that lifestyle intervention was more effective than metformin at restoring normal glucose tolerance.</p>

      <h2>Key Pillars of Reversal:</h2>
      <ul>
        <li><strong>7% Weight Reduction:</strong> Target modest visceral adiposity loss to relieve hepatic and pancreatic lipid accumulation.</li>
        <li><strong>150 Minutes Weekly Aerobic + Resistance Exercise:</strong> Muscle contraction translocates GLUT4 glucose transporters independent of insulin.</li>
        <li><strong>Fiber-First Meal Ordering:</strong> Consuming vegetables and protein before refined carbohydrates reduces postprandial glucose spikes by up to 40%.</li>
      </ul>
    `,
    citations: [
      "Diabetes Prevention Program Research Group. 10-Year Follow-up of Diabetes Prevention Program Outcomes. Lancet. 2009;374(9702):1677-1686."
    ]
  },
  {
    slug: "pcos-and-insulin-resistance-connection",
    title: "The Unseen Connection Between PCOS and Insulin Resistance",
    subtitle: "Pathophysiology, hyperandrogenism, and targeted metabolic treatments.",
    author: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    date: "December 28, 2024",
    readTime: "6 min read",
    category: "Hormones",
    summary: "Over 70% of women with PCOS experience underlying insulin resistance regardless of body weight. Explore how compensatory hyperinsulinemia drives ovarian androgen production.",
    contentHtml: `
      <p>Polycystic Ovary Syndrome is primarily a endocrine-metabolic disorder rather than solely a gynaecological issue. Hyperinsulinemia directly stimulates ovarian theca cells to produce excess testosterone while inhibiting liver production of Sex Hormone-Binding Globulin (SHBG).</p>
    `,
    citations: [
      "Teede HJ, et al. 2023 International Evidence-Based PCOS Guideline. Fertil Steril. 2023."
    ]
  },
  {
    slug: "thyroid-nodules-when-to-worry",
    title: "Thyroid Nodules: When to Worry and When to Watch",
    subtitle: "TI-RADS scoring, sonographic features, and biopsy decision trees.",
    author: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    date: "December 18, 2024",
    readTime: "5 min read",
    category: "Thyroid Health",
    summary: "Discovering a thyroid nodule can cause anxiety, but over 90% are completely benign. Learn how endocrinologists use ACR TI-RADS risk scoring to avoid unnecessary biopsies.",
    contentHtml: `
      <p>High-resolution sonography frequently detects incidental thyroid nodules. Understanding sonographic risk features—such as microcalcifications, solid composition, hypoechogenicity, and irregular margins—helps categorize nodules into TI-RADS levels 1 through 5.</p>
    `,
    citations: [
      "Tessler FN, et al. ACR TI-RADS White Paper. J Am Coll Radiol. 2017."
    ]
  },
  {
    slug: "navigating-glp1-medications-safely",
    title: "Navigating GLP-1 Medications Safely: Nausea, Protein, and Muscle Retention",
    subtitle: "Clinical advice for managing gastrointestinal side effects and preserving lean mass.",
    author: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    date: "December 05, 2024",
    readTime: "8 min read",
    category: "Metabolic Care",
    summary: "GLP-1 and dual GIP/GLP-1 receptor agonists (Semaglutide, Tirzepatide) represent a breakthrough in metabolic medicine. Here is how to navigate gastrointestinal side effects and prevent lean muscle loss.",
    contentHtml: `
      <p>Preserving skeletal muscle mass during rapid weight loss requires adequate dietary protein intake (1.2–1.6 g/kg/day) and progressive resistance training. Gradual dose titration prevents severe nausea and dehydration.</p>
    `,
    citations: [
      "Wilding JPH, et al. Once-Weekly Semaglutide in Adults with Overweight or Obesity. N Engl J Med. 2021."
    ]
  },
  {
    slug: "dexa-scans-and-bone-health-after-50",
    title: "DEXA Scans and Bone Health After 50",
    subtitle: "Understanding T-scores, fracture prevention, and modern bone therapies.",
    author: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    date: "November 24, 2024",
    readTime: "6 min read",
    category: "Bone Health",
    summary: "Bone loss accelerates rapidly during the perimenopausal transition. Learn when to schedule a DEXA scan and how anabolic bone-building therapies restore bone mineral density.",
    contentHtml: `
      <p>Osteoporosis is silent until a fragility fracture occurs. Regular central DEXA densitometry quantifies bone loss at the spine and hip, guiding timely anti-resorptive or anabolic therapy.</p>
    `,
    citations: [
      "AACE Postmenopausal Osteoporosis Guidelines 2020."
    ]
  },
  {
    slug: "cortisol-and-stress-separating-myth-from-medicine",
    title: "Cortisol and Stress: Separating Myth from Medicine",
    subtitle: "Debunking 'adrenal fatigue' while diagnosing true adrenal insufficiency.",
    author: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    date: "November 12, 2024",
    readTime: "7 min read",
    category: "Adrenal Health",
    summary: "Social media frequently blames 'adrenal fatigue' for chronic exhaustion. Discover what clinical endocrinology says about HPA axis physiology and true Cushing's/Addison's diagnoses.",
    contentHtml: `
      <p>The term 'adrenal fatigue' is not a recognized medical diagnosis. Real adrenal disorders involve measurable structural failure (Addison's) or cortisol hypersecretion (Cushing's) evaluated through standardized morning blood and salivary assays.</p>
    `,
    citations: [
      "Cadegiani FA, Kater CE. Misconceptions about Adrenal Fatigue. BMC Endocr Disord. 2016."
    ]
  },
  {
    slug: "cgm-for-non-diabetics-what-science-says",
    title: "Continuous Glucose Monitoring for Non-Diabetics: What Science Says",
    subtitle: "Evaluating glucose spikes, normal physiological variability, and wellness claims.",
    author: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    date: "October 30, 2024",
    readTime: "6 min read",
    category: "Diabetes Tech",
    summary: "Should individuals without diabetes wear continuous glucose monitors? We examine clinical trial data regarding normal glucose spikes after carbohydrate meals.",
    contentHtml: `
      <p>Transient postprandial glucose rises up to 140 mg/dL after high-carbohydrate meals are normal physiological responses in healthy individuals with intact insulin sensitivity.</p>
    `,
    citations: [
      "Shah VN, et al. Continuous Glucose Monitoring Profiles in Healthy Individuals. Diabetes Care. 2019."
    ]
  },
  {
    slug: "hashimotos-diet-myths-vs-evidence",
    title: "Hashimoto's Diet Myths vs. Evidence: Gluten, Dairy, and Selenium",
    subtitle: "What clinical trials reveal about dietary interventions for autoimmune thyroiditis.",
    author: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    date: "October 14, 2024",
    readTime: "7 min read",
    category: "Thyroid Health",
    summary: "Do all Hashimoto's patients need to eliminate gluten and dairy? We review the scientific evidence behind elimination diets, selenium supplementation, and antibody reduction.",
    contentHtml: `
      <p>While patients with co-existing Celiac Disease require strict gluten-free diets, routine universal gluten elimination for all Hashimoto's patients is not supported by high-quality randomized controlled trials.</p>
    `,
    citations: [
      "Liontiris MI, Mazokopakis EE. A concise review of Hashimoto's thyroiditis and the role of selenium. Hell J Nucl Med. 2014."
    ]
  },
  {
    slug: "early-signs-of-thyroid-dysfunction",
    title: "Early Signs of Thyroid Dysfunction Women Often Overlook",
    subtitle: "Subtle warning signs of hypothyroidism and hyperthyroidism.",
    author: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    date: "September 28, 2024",
    readTime: "5 min read",
    category: "Thyroid Health",
    summary: "Thyroid symptoms develop slowly and are frequently attributed to stress or aging. Recognize subtle changes in skin texture, thermal comfort, heart rate, and mood.",
    contentHtml: `
      <p>Subtle symptoms such as outer eyebrow thinning (Queen Anne's sign), sluggish digestion, cold hands, and mild cognitive slowing warrant a routine morning TSH and Free T4 blood test.</p>
    `,
    citations: [
      "ATA Guidelines for the Detection of Thyroid Disease. 2014."
    ]
  },
  {
    slug: "understanding-vitamin-d-and-calcium-balance",
    title: "Understanding Vitamin D, Calcium, and Parathyroid Interplay",
    subtitle: "How parathyroid hormone (PTH) regulates bone mineral metabolism.",
    author: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    date: "September 15, 2024",
    readTime: "6 min read",
    category: "Bone & Parathyroid",
    summary: "Calcium metabolism relies on a delicate balance between parathyroid hormone, active Vitamin D (calcitriol), and kidney excretion. Learn how deficiencies trigger secondary hyperparathyroidism.",
    contentHtml: `
      <p>When serum calcium drops, parathyroid glands release PTH to stimulate osteoclast bone resorption and renal Vitamin D activation, preserving blood calcium at the expense of bone mass if uncorrected.</p>
    `,
    citations: [
      "Endocrine Society Vitamin D Clinical Practice Guidelines. 2024."
    ]
  },
  {
    slug: "menopause-hormone-therapy-risks-and-benefits",
    title: "Menopause Hormone Therapy in 2025: Risks, Benefits, and Consensus Review",
    subtitle: "Evaluating the 2022-2025 Menopause Society guidelines.",
    author: "Dr. Ameena, MD, FACP [NEEDS CONFIRMATION]",
    date: "August 30, 2024",
    readTime: "8 min read",
    category: "Hormones",
    summary: "Modern transdermal bioidentical hormone therapy differs significantly from older synthetic oral formulations. Review current safety data for women under age 60.",
    contentHtml: `
      <p>Re-analysis of the Women's Health Initiative (WHI) and recent clinical trials confirm that transdermal estradiol carries lower venous thromboembolism risk compared to oral estrogens when initiated within 10 years of menopause.</p>
    `,
    citations: [
      "The NAMS 2022 Hormone Therapy Position Statement. Menopause. 2022."
    ]
  }
];
