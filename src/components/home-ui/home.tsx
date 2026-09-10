/*
|-----------------------------------------
| setting up home.tsx for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: TeccBuzz, 10 September, 2026
|-----------------------------------------
*/

"use client";

import { MotionConfig } from "framer-motion";

import { AdCreativeSection } from "./home-components/AdCreativeSection";
import { CapabilitiesSection } from "./home-components/CapabilitiesSection";
import { ClaritySection } from "./home-components/ClaritySection";
import { DemosSection } from "./home-components/DemosSection";
import { FaqSection } from "./home-components/FaqSection";
import { FinalCtaSection } from "./home-components/FinalCtaSection";
import { FlowSection } from "./home-components/FlowSection";
import { HeroSection } from "./home-components/HeroSection";
import { PricingSection } from "./home-components/PricingSection";
import { ProblemsSection } from "./home-components/ProblemsSection";
import { ProcessSection } from "./home-components/ProcessSection";
import { ProofSection } from "./home-components/ProofSection";
import { TrustStrip } from "./home-components/TrustStrip";

const HomeSection = () => (
  <MotionConfig reducedMotion="user">
    <main className="-mt-20 overflow-hidden bg-[#f8fbff] text-[#0b1736]">
      <HeroSection />
      <TrustStrip />
      <ProblemsSection />
      <FlowSection />
      <CapabilitiesSection />
      <AdCreativeSection />
      <DemosSection />
      <ClaritySection />
      <PricingSection />
      <ProcessSection />
      <ProofSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  </MotionConfig>
);

export default HomeSection;
