import { DoctorsHeroSection } from "@/components/sections/doctors/DoctorsHeroSection";
import { DoctorsListSection } from "@/components/sections/doctors/DoctorsListSection";
import { FinalCtaSection } from "@/components/sections/shared/FinalCtaSection";

export default function OurDoctorsPage() {
  return (
    <>
      <DoctorsHeroSection />
      <DoctorsListSection/>
      <FinalCtaSection/>
    </>
  );
}