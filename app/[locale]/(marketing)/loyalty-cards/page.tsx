import { HowRewardsWorksSection } from "@/components/sections/loyalty/HowRewardsWorksSection";
import { LoyaltyHeroSection } from "@/components/sections/loyalty/LoyaltyHeroSection";
import { MembershipTiersSection } from "@/components/sections/loyalty/MembershipTiersSection";
import { WhatIsRewardsSection } from "@/components/sections/loyalty/WhatIsRewardsSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { FinalCtaSection } from "@/components/sections/shared/FinalCtaSection";

export default function LoyaltyCardsPage() {
  return (
    <>
      <LoyaltyHeroSection />
      <WhatIsRewardsSection/>
      <HowRewardsWorksSection/>
      <MembershipTiersSection/>
      <FaqSection/>
      <FinalCtaSection/>
    </>
  );
}