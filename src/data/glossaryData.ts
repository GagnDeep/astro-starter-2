export interface GlossaryTerm {
  term: string;
  slug: string;
  clinicalDefinition: string;
  plainLanguage: string;
  relatedCondition: string;
  relatedLink: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "HbA1c (Hemoglobin A1C)",
    slug: "hba1c",
    clinicalDefinition: "Glycated hemoglobin percentage representing time-averaged blood glucose levels over the preceding 60 to 90 days.",
    plainLanguage: "A simple blood test showing your average blood sugar level over the past 2 to 3 months.",
    relatedCondition: "Type 2 Diabetes / Prediabetes",
    relatedLink: "/conditions/type-2-diabetes/"
  },
  {
    term: "TSH (Thyroid-Stimulating Hormone)",
    slug: "tsh",
    clinicalDefinition: "Anterior pituitary glycoprotein hormone regulating thyroid gland synthesis and secretion of T4 and T3 via feedback control.",
    plainLanguage: "A hormone made by your brain's pituitary gland that tells your thyroid how much thyroid hormone to make.",
    relatedCondition: "Hypothyroidism & Hyperthyroidism",
    relatedLink: "/conditions/hypothyroidism/"
  },
  {
    term: "Free T4 (Free Thyroxine)",
    slug: "free-t4",
    clinicalDefinition: "Unbound, biologically active fraction of circulating thyroxine hormone available for cellular tissue uptake.",
    plainLanguage: "The active form of thyroid hormone circulating in your bloodstream that powers your body's metabolism.",
    relatedCondition: "Hypothyroidism",
    relatedLink: "/conditions/hypothyroidism/"
  },
  {
    term: "Anti-TPO (Thyroid Peroxidase Antibodies)",
    slug: "anti-tpo",
    clinicalDefinition: "Autoantibodies directed against thyroid peroxidase enzyme, diagnostic for autoimmune thyroiditis.",
    plainLanguage: "Antibodies made by an overactive immune system that mistakenly attack the thyroid gland (Hashimoto's disease).",
    relatedCondition: "Hashimoto's Thyroiditis",
    relatedLink: "/conditions/hashimotos-thyroiditis/"
  },
  {
    term: "Subclinical Hypothyroidism",
    slug: "subclinical-hypothyroidism",
    clinicalDefinition: "Biochemical state characterized by elevated serum TSH with normal Free T4 concentrations.",
    plainLanguage: "An early stage of underactive thyroid where brain signals (TSH) are high, but thyroid hormone levels are still within normal limits.",
    relatedCondition: "Hypothyroidism",
    relatedLink: "/conditions/hypothyroidism/"
  },
  {
    term: "Insulin Resistance",
    slug: "insulin-resistance",
    clinicalDefinition: "Impaired cellular sensitivity to insulin in peripheral skeletal muscle, liver, and adipose tissue.",
    plainLanguage: "A condition where your body's cells don't respond normally to insulin, causing sugar to build up in your bloodstream.",
    relatedCondition: "Prediabetes & PCOS",
    relatedLink: "/conditions/prediabetes/"
  },
  {
    term: "DEXA T-Score",
    slug: "dexa-t-score",
    clinicalDefinition: "Standard deviation comparison of a patient's bone mineral density against a healthy young adult reference population.",
    plainLanguage: "A score comparing your bone density to that of a healthy 30-year-old to assess your osteoporosis and fracture risk.",
    relatedCondition: "Osteoporosis",
    relatedLink: "/conditions/osteoporosis/"
  },
  {
    term: "Nodular Goiter",
    slug: "nodular-goiter",
    clinicalDefinition: "Enlargement of the thyroid gland containing one or more distinct macroscopic sonographic nodules.",
    plainLanguage: "An enlarged thyroid gland that has developed one or more lumps (nodules).",
    relatedCondition: "Thyroid Nodules",
    relatedLink: "/conditions/thyroid-nodules/"
  },
  {
    term: "Cortisol",
    slug: "cortisol",
    clinicalDefinition: "Essential glucocorticoid steroid hormone synthesized by the adrenal zona fasciculata regulating metabolism, vascular tone, and immune responses.",
    plainLanguage: "Your body's primary stress and survival hormone, crucial for blood pressure, blood sugar regulation, and energy.",
    relatedCondition: "Adrenal Insufficiency / Cushing's",
    relatedLink: "/conditions/adrenal-insufficiency/"
  },
  {
    term: "ACTH (Adrenocorticotropic Hormone)",
    slug: "acth",
    clinicalDefinition: "Pituitary peptide hormone stimulating adrenal cortical synthesis and secretion of cortisol.",
    plainLanguage: "A hormone made by the brain that triggers your adrenal glands to produce cortisol.",
    relatedCondition: "Cushing's Syndrome",
    relatedLink: "/conditions/cushings-syndrome/"
  },
  {
    term: "Aldosterone",
    slug: "aldosterone",
    clinicalDefinition: "Mineralocorticoid steroid hormone regulating renal distal tubule sodium reabsorption and potassium excretion.",
    plainLanguage: "An adrenal hormone that balances sodium and potassium levels in your kidneys to control blood pressure.",
    relatedCondition: "Hyperaldosteronism",
    relatedLink: "/treatments/adrenal-vein-sampling-consultation/"
  },
  {
    term: "Hypercalcemia",
    slug: "hypercalcemia",
    clinicalDefinition: "Serum corrected calcium concentration exceeding the upper reference limit (> 10.5 mg/dL).",
    plainLanguage: "A higher-than-normal level of calcium in your blood, often caused by overactive parathyroid glands.",
    relatedCondition: "Hyperparathyroidism",
    relatedLink: "/conditions/hyperparathyroidism/"
  },
  {
    term: "PTH (Parathyroid Hormone)",
    slug: "pth",
    clinicalDefinition: "Polypeptide hormone secreted by chief cells of parathyroid glands regulating serum calcium and phosphate homeostasis.",
    plainLanguage: "A hormone made by four tiny glands in your neck that keeps your blood calcium at the right level.",
    relatedCondition: "Hyperparathyroidism",
    relatedLink: "/conditions/hyperparathyroidism/"
  },
  {
    term: "Prolactin",
    slug: "prolactin",
    clinicalDefinition: "Anterior pituitary hormone stimulating lactation and inhibiting gonadotropin-releasing hormone (GnRH).",
    plainLanguage: "A pituitary hormone responsible for milk production that can cause irregular periods when elevated.",
    relatedCondition: "Pituitary Adenoma",
    relatedLink: "/conditions/pituitary-adenoma/"
  },
  {
    term: "GLP-1 (Glucagon-Like Peptide-1)",
    slug: "glp-1",
    clinicalDefinition: "Endogenous incretin hormone stimulating glucose-dependent insulin secretion and delaying gastric emptying.",
    plainLanguage: "A natural gut hormone that helps lower blood sugar after meals and increases feeling full.",
    relatedCondition: "Type 2 Diabetes / Weight Therapy",
    relatedLink: "/treatments/glp1-receptor-agonist-therapy/"
  },
  {
    term: "Euglycemia",
    slug: "euglycemia",
    clinicalDefinition: "The physiological state of normal blood glucose concentration (70–140 mg/dL).",
    plainLanguage: "A healthy, normal blood sugar level neither too high nor too low.",
    relatedCondition: "Diabetes Care",
    relatedLink: "/conditions/type-2-diabetes/"
  },
  {
    term: "Microalbuminuria",
    slug: "microalbuminuria",
    clinicalDefinition: "Urinary albumin excretion of 30–300 mg/day, an early indicator of diabetic nephropathy.",
    plainLanguage: "Tiny amounts of protein leaking into your urine, an early warning sign of kidney stress from diabetes.",
    relatedCondition: "Type 2 Diabetes",
    relatedLink: "/conditions/type-2-diabetes/"
  },
  {
    term: "Diabetic Neuropathy",
    slug: "neuropathy",
    clinicalDefinition: "Peripheral nerve damage resulting from chronic metabolic hyperglycemia and microvascular ischemia.",
    plainLanguage: "Nerve damage caused by long-term high blood sugar, often leading to numbness or tingling in the feet.",
    relatedCondition: "Type 2 Diabetes",
    relatedLink: "/conditions/type-2-diabetes/"
  },
  {
    term: "Thyroiditis",
    slug: "thyroiditis",
    clinicalDefinition: "Inflammatory destruction of thyroid parenchymal tissue, causing transient release of pre-formed hormones.",
    plainLanguage: "Inflammation of the thyroid gland, which can cause temporary thyroid hormone leaks.",
    relatedCondition: "Hashimoto's Thyroiditis",
    relatedLink: "/conditions/hashimotos-thyroiditis/"
  },
  {
    term: "Fine Needle Aspiration (FNA)",
    slug: "fna-biopsy",
    clinicalDefinition: "Diagnostic procedure using a micro-fine gauge needle under ultrasound guidance to harvest cells from nodules.",
    plainLanguage: "A quick, gentle office procedure using a tiny needle to test thyroid lump cells.",
    relatedCondition: "Thyroid Nodules",
    relatedLink: "/treatments/fine-needle-aspiration-biopsy/"
  },
  {
    term: "Basal Rate",
    slug: "basal-rate",
    clinicalDefinition: "Continuous background rate of insulin delivered by an insulin pump to maintain euglycemia during fasting.",
    plainLanguage: "The small, steady amount of background insulin your pump delivers 24/7 to keep blood sugar stable when not eating.",
    relatedCondition: "Type 1 Diabetes",
    relatedLink: "/treatments/insulin-pump-therapy/"
  },
  {
    term: "Bolus Insulin",
    slug: "bolus-insulin",
    clinicalDefinition: "Discrete dose of rapid-acting insulin administered to cover mealtime carbohydrates or correct acute hyperglycemia.",
    plainLanguage: "A dose of fast-acting insulin taken before meals to handle the sugar from food.",
    relatedCondition: "Type 1 Diabetes",
    relatedLink: "/treatments/type-1-diabetes/"
  },
  {
    term: "Somogyi Effect",
    slug: "somogyi-effect",
    clinicalDefinition: "Rebound morning hyperglycemia triggered by counter-regulatory stress hormone surge following undetected nocturnal hypoglycemia.",
    plainLanguage: "High blood sugar in the morning caused by your body overreacting to an unnoticed low blood sugar during the night.",
    relatedCondition: "Type 1 & Type 2 Diabetes",
    relatedLink: "/conditions/type-1-diabetes/"
  },
  {
    slug: "dawn-phenomenon",
    term: "Dawn Phenomenon",
    clinicalDefinition: "Early morning elevation in blood glucose caused by circadian surges in growth hormone, cortisol, and glucagon.",
    plainLanguage: "A natural morning rise in blood sugar caused by your body's waking hormones.",
    relatedCondition: "Type 1 & Type 2 Diabetes",
    relatedLink: "/conditions/type-2-diabetes/"
  },
  {
    slug: "metformin",
    term: "Metformin",
    clinicalDefinition: "Biguanide antihyperglycemic agent that suppresses hepatic gluconeogenesis and increases skeletal muscle glucose uptake.",
    plainLanguage: "A widely used, safe diabetes medication that lowers sugar production in the liver and improves insulin sensitivity.",
    relatedCondition: "Type 2 Diabetes / PCOS",
    relatedLink: "/conditions/type-2-diabetes/"
  }
];
