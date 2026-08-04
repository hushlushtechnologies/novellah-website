import { HowRewardsWorksSection } from "@/components/sections/loyalty/HowRewardsWorksSection";
import { LoyaltyHeroSection } from "@/components/sections/loyalty/LoyaltyHeroSection";
import { MembershipTiersSection } from "@/components/sections/loyalty/MembershipTiersSection";
import { WhatIsRewardsSection } from "@/components/sections/loyalty/WhatIsRewardsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { FinalCtaSection } from "@/components/sections/shared/FinalCtaSection";
import { generalFaqItems } from "@/lib/content/faq";

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/content/pageMeta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, pageMeta.loyaltyCard);
}

export default function LoyaltyCardsPage() {
  return (
    <>
      <LoyaltyHeroSection />
      <WhatIsRewardsSection/>
      <HowRewardsWorksSection/>
      <MembershipTiersSection/>
   <FaqSection items={generalFaqItems}/>
      <FinalCtaSection/>
    </>
  );
}