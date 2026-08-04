import { BookingFormSection } from "@/components/sections/booking/BookingFormSection";
import { BookingHeroSection } from "@/components/sections/booking/BookingHeroSection";
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
  return buildMetadata(locale, pageMeta.bookAppointment);
}


export default function BookAppointmentPage() {
  return (
    <>
      <BookingHeroSection />
      <BookingFormSection/>
      <FaqSection items={generalFaqItems}/>
    </>
  );
}