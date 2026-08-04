import { DoctorsHeroSection } from "@/components/sections/doctors/DoctorsHeroSection";
import { DoctorsListSection } from "@/components/sections/doctors/DoctorsListSection";
import { FinalCtaSection } from "@/components/sections/shared/FinalCtaSection";

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/content/pageMeta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, pageMeta.ourDoctors);
}


export default function OurDoctorsPage() {
  return (
    <>
      <DoctorsHeroSection />
      <DoctorsListSection/>
      <FinalCtaSection/>
    </>
  );
}