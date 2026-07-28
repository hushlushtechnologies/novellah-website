import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export async function LoyaltyHeroSection() {
  const t = await getTranslations("loyaltyHero");

  return (
    <section className="relative min-h-[480px] overflow-hidden sm:min-h-[560px] lg:min-h-[640px]">
      <Image
        src="/images/loyalty-hero-cards.png"
        alt=""
        fill
        priority
        className="object-cover object-right"
      />

      {/* Fade from solid white (text side) to transparent (photo side) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent sm:via-white/70" />

      <div className="relative flex min-h-[480px] items-center px-4 sm:min-h-[560px] sm:px-6 lg:min-h-[640px] lg:px-8">
        <div className="max-w-md lg:max-w-lg">
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary sm:text-sm sm:tracking-[0.3em]">
            {t("eyebrow")}
          </p>

          <h1 className="mt-3 font-heading font-extrabold text-3xl leading-tight text-foreground sm:mt-4 sm:text-5xl lg:text-6xl">
            {t("headingLine1")}
            <br />
            <span className="text-primary">{t("headingHighlight")}</span> {t("headingSuffix")}
          </h1>

          <div className="mt-4 h-px w-16 bg-secondary sm:mt-5 sm:w-24" />

          <p className="mt-4 font-body text-sm text-muted-foreground sm:mt-5 sm:text-base">
            {t("subheading")}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              href="/contact-us"
              variant="solid"
              icon={<ArrowRight size={16} />}
              className="w-full justify-center sm:w-fit"
            >
              {t("ctaContact")}
            </Button>
            <Button
              href="/book-appintment"
              variant="outline"
              className="w-full justify-center sm:w-fit"
            >
              {t("ctaConsultation")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}