#!/bin/bash

# Create a page helper function
create_page() {
  local path=$1
  local title=$2
  local canonical=$3
  cat << YML > src/content/pages/$path.md
---
title: "$title"
seo:
  page_description: "$title"
  canonical_url: "$canonical"
  featured_image: "/images/og/og-default.png"
  featured_image_alt: "$title"
  author_twitter_handle: null
  open_graph_type: "website"
  no_index: false
content_blocks:
  - _name: "TextBlock"
    text_content: "This page is currently under construction."
---
YML
}

# Hub 1
create_page "requirements/index" "Regulatory Requirements" "/requirements/"
create_page "requirements/carbon-footprint" "Carbon Footprint" "/requirements/carbon-footprint/"
create_page "requirements/supply-chain-due-diligence" "Supply Chain Due Diligence" "/requirements/supply-chain-due-diligence/"
create_page "requirements/recycled-content" "Recycled Content" "/requirements/recycled-content/"

# Hub 2
create_page "data-model/index" "Data Model & Technical Specs" "/data-model/"
create_page "data-model/materials" "Materials & Composition" "/data-model/materials/"
create_page "data-model/performance" "Performance & Durability" "/data-model/performance/"
create_page "data-model/circularity" "Circularity Information" "/data-model/circularity/"
create_page "data-model/general-info" "General Public Info" "/data-model/general-info/"

# Hub 3
create_page "timeline/index" "Timeline & Enforcement" "/timeline/"
create_page "timeline/2025-obligations" "2025 Obligations" "/timeline/2025-obligations/"
create_page "timeline/2027-passport" "2027 Digital Passport" "/timeline/2027-passport/"

# Hub 4
create_page "readiness/index" "Readiness & Assessment" "/readiness/"
create_page "readiness/gap-analysis" "Gap Analysis Guide" "/readiness/gap-analysis/"
create_page "readiness/vendor-selection" "Vendor Selection" "/readiness/vendor-selection/"
