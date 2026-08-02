import { BookingFormSection } from "@/components/sections/booking/BookingFormSection";
import { BookingHeroSection } from "@/components/sections/booking/BookingHeroSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";
import { generalFaqItems } from "@/lib/content/faq";

export default function BookAppointmentPage() {
  return (
    <>
      <BookingHeroSection />
      <BookingFormSection/>
      <FaqSection items={generalFaqItems}/>
    </>
  );
}