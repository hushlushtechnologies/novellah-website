import { AboutHeroSection } from "@/components/sections/about/AboutHeroSection";
import { ClinicGallerySection } from "@/components/sections/about/ClinicGallerySection";
import { OurStorySection } from "@/components/sections/about/OurStorySection";
import { TechnologyMeetsBeautySection } from "@/components/sections/shared/TechnologyMeetsBeautySection";
import { WhyChooseSection } from "@/components/sections/shared/WhyChooseSection";
import { BrandStorySection } from "@/components/sections/shared/BrandStorySection";
import { DoctorsSection } from "@/components/sections/shared/DoctorsSection";
import { FinalCtaSection } from "@/components/sections/shared/FinalCtaSection";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/content/pageMeta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, pageMeta.aboutUs);
}




export default function AboutUsPage() {
  return (
    <>
      <AboutHeroSection />
      <OurStorySection/>
      <BrandStorySection/>
      <WhyChooseSection/>
      <TechnologyMeetsBeautySection/>
      <DoctorsSection/>
      <ClinicGallerySection/>
      <TestimonialsSection/>
      <FinalCtaSection/>
    
    </>
  );
}