import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";
import { ContactHeroSection } from "@/components/sections/contact/ContactHeroSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { generalFaqItems } from "@/lib/content/faq";

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { pageMeta } from "@/lib/content/pageMeta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, pageMeta.contactUs);
}



export default function ContactUsPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection/>
      <section id="faq">
      <FaqSection items={generalFaqItems} />
      </section>
    </>
  );
}