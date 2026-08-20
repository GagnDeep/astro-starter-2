import React, { useState } from 'react';

interface SearchItem {
  title: string;
  url: string;
  type: 'Condition' | 'Procedure' | 'Education';
  summary: string;
}

const searchIndex: SearchItem[] = [
  {
    title: "Hypothyroidism & Hashimoto's Thyroiditis",
    url: "/conditions/hypothyroidism-hashimotos/",
    type: "Condition",
    summary: "Root-cause diagnosis and personalized hormone adjustment beyond standard TSH monitoring."
  },
  {
    title: "Hyperthyroidism & Graves' Disease",
    url: "/conditions/hyperthyroidism-graves/",
    type: "Condition",
    summary: "Comprehensive care for overactive thyroid, antithyroid medications, and thyroid eye disease."
  },
  {
    title: "Thyroid Nodules & FNA Biopsy",
    url: "/conditions/thyroid-nodules-fna/",
    type: "Condition",
    summary: "In-office ultrasound evaluation and same-day fine needle aspiration biopsy."
  },
  {
    title: "Type 2 Diabetes & Insulin Resistance",
    url: "/conditions/type-2-diabetes/",
    type: "Condition",
    summary: "Modern diabetes protocols, GLP-1/SGLT2 therapies, and lifestyle remission plans."
  },
  {
    title: "Type 1 Diabetes & Continuous Glucose Monitors (CGM)",
    url: "/conditions/type-1-diabetes-cgm/",
    type: "Condition",
    summary: "Advanced Dexcom/Freestyle Libre data interpretation and automated insulin pump delivery."
  },
  {
    title: "Polycystic Ovary Syndrome (PCOS) & Metabolic Health",
    url: "/conditions/pcos-metabolic-health/",
    type: "Condition",
    summary: "Addressing hyperinsulinemia, hormonal acne, androgen excess, and fertility prep."
  },
  {
    title: "Osteoporosis & Bone Density Loss",
    url: "/conditions/osteoporosis-bone-health/",
    type: "Condition",
    summary: "DEXA scan T-score analysis, anabolic bone builders, and fracture prevention."
  },
  {
    title: "Ultrasound-Guided Fine Needle Aspiration (FNA) Biopsy",
    url: "/procedures/thyroid-ultrasound-fna/",
    type: "Procedure",
    summary: "Minimally invasive, 15-minute in-office diagnostic biopsy for thyroid nodules."
  },
  {
    title: "Continuous Glucose Monitor (CGM) Placement & Review",
    url: "/procedures/continuous-glucose-monitoring/",
    type: "Procedure",
    summary: "In-clinic sensor application, alarm customization, and trend pattern analysis."
  },
  {
    title: "Understanding TSH vs. Free T3 and Free T4",
    url: "/blog/understanding-tsh-free-t3-t4/",
    type: "Education",
    summary: "Why normal TSH lab results may not match how you actually feel."
  },
  {
    title: "GLP-1 Receptor Agonists: Benefits, Side Effects, & Protocol",
    url: "/blog/glp1-medications-guide/",
    type: "Education",
    summary: "Evidence-based guide to GLP-1 medications for metabolic health."
  }
];

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filtered = query.trim() === '' ? [] : searchIndex.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.summary.toLowerCase().includes(query.toLowerCase()) ||
    item.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="search-trigger flex items-center gap-2 bg-surface hover:bg-border/60 text-charcoal-muted text-xs px-3 py-2 rounded-lg border border-border transition-colors font-sans cursor-pointer"
        aria-label="Search conditions and procedures"
      >
        <svg className="w-4 h-4 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden sm:inline">Search conditions, procedures...</span>
        <span className="sm:hidden">Search</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-xs flex items-start justify-center p-4 pt-20">
          <div className="bg-cream border border-border rounded-xl shadow-2xl w-full max-w-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="p-4 border-b border-border flex items-center gap-3 bg-surface">
              <svg className="w-5 h-5 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a condition, symptom, or treatment..."
                className="w-full bg-transparent text-sm text-charcoal placeholder-charcoal-muted focus:outline-none font-sans"
                autoFocus
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs bg-border/60 hover:bg-border text-charcoal px-2.5 py-1 rounded-md transition-colors"
              >
                Esc
              </button>
            </div>

            <div className="p-4 max-h-96 overflow-y-auto">
              {query.trim() === '' && (
                <div className="text-center py-6 text-xs text-charcoal-muted font-sans">
                  Try searching for <span className="text-terracotta font-medium">"Hashimoto's"</span>, <span className="text-terracotta font-medium">"CGM"</span>, or <span className="text-terracotta font-medium">"Thyroid Biopsy"</span>
                </div>
              )}

              {query.trim() !== '' && filtered.length === 0 && (
                <div className="text-center py-6 text-xs text-charcoal-muted font-sans">
                  No matches found for "{query}". Contact Dr. Ameena's clinic directly at <a href="tel:5125550199" className="text-terracotta underline">(512) 555-0199</a> for specific inquiries.
                </div>
              )}

              <div className="space-y-2">
                {filtered.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    onClick={() => setIsOpen(false)}
                    className="block p-3 rounded-lg hover:bg-surface border border-transparent hover:border-border transition-colors group"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-terracotta mb-1">
                      <span>{item.title}</span>
                      <span className="text-[10px] uppercase tracking-wider bg-sage-light text-sage-dark px-2 py-0.5 rounded-full">
                        {item.type}
                      </span>
                    </div>
                    <p className="text-xs text-charcoal-muted line-clamp-2 leading-relaxed">
                      {item.summary}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
