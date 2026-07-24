import { CategoryTreatmentsSection } from "@/components/sections/home/CategoryTreatmentsSection";
import { FlowerDivider } from "@/components/sections/home/FlowerDivider";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { HomeIntroWrapper } from "@/components/sections/home/HomeIntroWrapper";
import { SignatureTreatmentsSection } from "@/components/sections/home/SignatureTreatmentsSection";
import { TechnologyMeetsBeautySection } from "@/components/sections/shared/TechnologyMeetsBeautySection";
import { WelcomeSection } from "@/components/sections/home/WelcomeSection";
import { WhyChooseSection } from "@/components/sections/shared/WhyChooseSection";
import { BeforeAfterSection } from "@/components/sections/shared/BeforeAfterSection";
import { BlogFeaturedSection } from "@/components/sections/shared/BlogFeaturedSection";
import { BrandStorySection } from "@/components/sections/shared/BrandStorySection";
import { DoctorsSection } from "@/components/sections/shared/DoctorsSection";
import { FinalCtaSection } from "@/components/sections/shared/FinalCtaSection";
import { LoyaltyPromoSection } from "@/components/sections/shared/LoyaltyPromoSection";
import { SpecialOffersSection } from "@/components/sections/shared/SpecialOffersSection";
import { TestimonialsSection } from "@/components/sections/shared/TestimonialsSection";
 

export default function HomePage() {
 
  return (
 <>
 <HeroSection/>
  <HomeIntroWrapper>
        <WelcomeSection />
        <WhyChooseSection />
     <FlowerDivider />
      <CategoryTreatmentsSection/>
       <FlowerDivider />
      <SignatureTreatmentsSection/>
       </HomeIntroWrapper>
       <TechnologyMeetsBeautySection/>
       <BrandStorySection/>
  
       <DoctorsSection/>
       <BeforeAfterSection/>
       <LoyaltyPromoSection/>
       <SpecialOffersSection/>
       <BlogFeaturedSection/>
       <TestimonialsSection/>
       <FinalCtaSection/>
 </>
  );
}