import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";
import { ContactHeroSection } from "@/components/sections/contact/ContactHeroSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { generalFaqItems } from "@/lib/content/faq";

export default function ContactUsPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection/>
      <FaqSection items={generalFaqItems} />
    </>
  );
}