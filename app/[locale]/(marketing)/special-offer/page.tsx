import { OffersHeroSection } from "@/components/sections/offers/OffersHeroSection";
import { FinalCtaSection } from "@/components/sections/shared/FinalCtaSection";
import { SpecialOffersSection } from "@/components/sections/shared/SpecialOffersSection";

export default function SpecialOfferPage() {
  return (
    <>
      <OffersHeroSection />
      <SpecialOffersSection/>
      <FinalCtaSection/>
    </>
  );
}