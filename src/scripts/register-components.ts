import { registerAstroComponent } from "@cloudcannon/editable-regions/astro";
import "@cloudcannon/editable-regions/astro-react-renderer";

// Existing components
import Hero from "../components/heroes/hero/hero.astro";
import LeftRight from "../components/left-right/left-right.astro";
import TextBlock from "../components/text-block/text-block.astro";
import PostHero from "../components/blog/post-hero/post-hero.astro";

// New section components
import FeatureBlock from "../components/feature-block/feature-block.astro";
import ComparisonTable from "../components/comparison-table/comparison-table.astro";
import CtaBand from "../components/cta-band/cta-band.astro";
import FaqAccordion from "../components/faq-accordion/faq-accordion.astro";
import ProofStrip from "../components/proof-strip/proof-strip.astro";
import Byline from "../components/byline/byline.astro";
import SourcesList from "../components/sources-list/sources-list.astro";
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs.astro";

registerAstroComponent("Hero", Hero);
registerAstroComponent("LeftRight", LeftRight);
registerAstroComponent("TextBlock", TextBlock);
registerAstroComponent("PostHero", PostHero);
registerAstroComponent("FeatureBlock", FeatureBlock);
registerAstroComponent("ComparisonTable", ComparisonTable);
registerAstroComponent("CtaBand", CtaBand);
registerAstroComponent("FaqAccordion", FaqAccordion);
registerAstroComponent("ProofStrip", ProofStrip);
registerAstroComponent("Byline", Byline);
registerAstroComponent("SourcesList", SourcesList);
registerAstroComponent("Breadcrumbs", Breadcrumbs);
