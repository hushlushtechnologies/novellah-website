import { BeforeAfterSection } from "@/components/sections/shared/BeforeAfterSection";
import { DoctorsSection } from "@/components/sections/shared/DoctorsSection";
import { FinalCtaSection } from "@/components/sections/shared/FinalCtaSection";
import { TreatmentsHeroSection } from "@/components/sections/treatments/TreatmentsHeroSection";
import { TreatmentsListSection } from "@/components/sections/treatments/TreatmentsListSection";

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/content/pageMeta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, pageMeta.treatments);
}


export default function TreatmentsPage() {
  return (
    <>
      <TreatmentsHeroSection />
      <TreatmentsListSection />
      <DoctorsSection />
      <BeforeAfterSection />
      <FinalCtaSection />
    </>
  );
}
