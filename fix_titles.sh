sed -i 's/<Layout seo={seo}>/<Layout seo={seo} title="TrackAndLog">/g' src/pages/index.astro
sed -i 's/<Layout seo={seo}>/<Layout seo={seo} title="FAQ | TrackAndLog">/g' src/pages/faq.astro
sed -i 's/<Layout seo={seo}>/<Layout seo={seo} title="Pricing | TrackAndLog">/g' src/pages/pricing.astro
sed -i 's/<Layout seo={seo}>/<Layout seo={seo} title="Privacy Policy | TrackAndLog">/g' src/pages/legal/privacy.astro
sed -i 's/<Layout seo={seo}>/<Layout seo={seo} title="Terms of Service | TrackAndLog">/g' src/pages/legal/terms.astro
sed -i 's/<Layout seo={seo}>/<Layout seo={seo} title="Rolling Average Calculator | TrackAndLog">/g' src/pages/calculators/rolling-average.astro
sed -i 's/<Layout seo={entry.data.seo}>/<Layout seo={entry.data.seo} title={entry.data.title || "TrackAndLog"}>/g' src/pages/metrics/[slug].astro
sed -i 's/<Layout seo={entry.data.seo}>/<Layout seo={entry.data.seo} title={entry.data.title || "TrackAndLog"}>/g' src/pages/features/[slug].astro
sed -i 's/<Layout seo={entry.data.seo}>/<Layout seo={entry.data.seo} title={entry.data.title || "TrackAndLog"}>/g' src/pages/glossary/[slug].astro
sed -i 's/submitLabel="Send message"/cta="Send message"/g' src/pages/contact.astro
