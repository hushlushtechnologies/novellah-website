import { BookingFormSection } from "@/components/sections/booking/BookingFormSection";
import { BookingHeroSection } from "@/components/sections/booking/BookingHeroSection";
import { FaqSection } from "@/components/sections/shared/FaqSection";

export default function BookAppointmentPage() {
  return (
    <>
      <BookingHeroSection />
      <BookingFormSection/>
      <FaqSection/>
    </>
  );
}