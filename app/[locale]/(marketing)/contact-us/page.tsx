import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";
import { ContactHeroSection } from "@/components/sections/contact/ContactHeroSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";

export default function ContactUsPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection/>
      <FaqSection/>
    </>
  );
}