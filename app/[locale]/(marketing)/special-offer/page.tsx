import { OffersHeroSection } from "@/components/sections/offers/OffersHeroSection";
import { FinalCtaSection } from "@/components/sections/shared/FinalCtaSection";
import { SpecialOffersSection } from "@/components/sections/shared/SpecialOffersSection";

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/content/pageMeta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, pageMeta.specialOffers);
}


export default function SpecialOfferPage() {
  return (
    <>
      <OffersHeroSection />
      <SpecialOffersSection/>
      <FinalCtaSection/>
    </>
  );
}