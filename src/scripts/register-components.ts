import { registerAstroComponent } from "@cloudcannon/editable-regions/astro";
import "@cloudcannon/editable-regions/astro-react-renderer";

import Hero from "../components/blocks/Hero.astro";
import LeftRight from "../components/left-right/left-right.astro";
import TextBlock from "../components/text-block/text-block.astro";
import PostHero from "../components/blog/post-hero/post-hero.astro";
import UnequalSpanFeatureBlock from "../components/blocks/UnequalSpanFeatureBlock.astro";
import ComparisonTable from "../components/blocks/ComparisonTable.astro";
import CtaBand from "../components/blocks/CtaBand.astro";
import FaqAccordion from "../components/blocks/FaqAccordion.astro";
import ProofStrip from "../components/blocks/ProofStrip.astro";
import Byline from "../components/blocks/Byline.astro";
import SourcesList from "../components/blocks/SourcesList.astro";
import Breadcrumbs from "../components/blocks/Breadcrumbs.astro";

registerAstroComponent("Hero", Hero);
registerAstroComponent("LeftRight", LeftRight);
registerAstroComponent("TextBlock", TextBlock);
registerAstroComponent("PostHero", PostHero);
registerAstroComponent("UnequalSpanFeatureBlock", UnequalSpanFeatureBlock);
registerAstroComponent("ComparisonTable", ComparisonTable);
registerAstroComponent("CtaBand", CtaBand);
registerAstroComponent("FaqAccordion", FaqAccordion);
registerAstroComponent("ProofStrip", ProofStrip);
registerAstroComponent("Byline", Byline);
registerAstroComponent("SourcesList", SourcesList);
registerAstroComponent("Breadcrumbs", Breadcrumbs);
