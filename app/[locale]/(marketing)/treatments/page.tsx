import { BeforeAfterSection } from "@/components/sections/shared/BeforeAfterSection";
import { DoctorsSection } from "@/components/sections/shared/DoctorsSection";
import { FinalCtaSection } from "@/components/sections/shared/FinalCtaSection";
import { TreatmentsHeroSection } from "@/components/sections/treatments/TreatmentsHeroSection";
import { TreatmentsListSection } from "@/components/sections/treatments/TreatmentsListSection";

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
