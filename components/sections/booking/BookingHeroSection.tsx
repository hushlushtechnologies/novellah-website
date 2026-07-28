 import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export async function BookingHeroSection() {
  const t = await getTranslations("bookingHero");

  return (
    <section className="relative flex min-h-[440px] items-end justify-center overflow-hidden pb-10 sm:min-h-[560px] sm:pb-20 lg:min-h-[720px] lg:pb-36">
      <Image
        src="/images/booking-hero-lounge.png"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />

      <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <p className="font-body text-[10px] font-bold uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.2em] lg:text-sm">
          {t("eyebrow")}
        </p>

        <h1 className="mt-2 font-heading text-2xl font-extrabold leading-tight text-foreground sm:mt-3 sm:text-3xl lg:text-4xl xl:text-5xl">
          {t("headingLine1")}
          <br />
          <span className="text-primary">{t("headingHighlight")}</span>
        </h1>

        <div className="mx-auto mt-3 flex items-center justify-center gap-2 sm:mt-4 sm:gap-3 sm:mt-5">
          <div className="h-1 w-10 rounded-full bg-secondary sm:w-16 lg:w-24" />
          <Sparkle size={10} className="text-secondary sm:size-3" fill="currentColor" />
          <div className="h-1 w-10 rounded-full bg-secondary sm:w-16 lg:w-24" />
        </div>

        <p className="mx-auto mt-3 font-body text-sm font-medium text-muted-foreground sm:mt-4 sm:text-base lg:mt-5">
          {t("subheading")}
        </p>

        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:mt-6 sm:flex-row sm:gap-4 lg:mt-8">
          <Button
            href="/treatments"
            variant="solid"
            icon={<ArrowRight size={16} />}
            className="w-full justify-center sm:w-fit"
          >
            {t("ctaViewTreatment")}
          </Button>
          <Button href="/contact-us" variant="outline" className="w-full justify-center sm:w-fit">
            {t("ctaContact")}
          </Button>
        </div>
      </div>
    </section>
  );
}