 import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, UserPlus, Gift, TrendingUp, Crown, Phone } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";

const steps = [
  { icon: UserPlus, titleKey: "step1Title", descKey: "step1Desc" },
  { icon: Gift, titleKey: "step2Title", descKey: "step2Desc" },
  { icon: TrendingUp, titleKey: "step3Title", descKey: "step3Desc" },
  { icon: Crown, titleKey: "step4Title", descKey: "step4Desc" },
] as const;

export async function LoyaltyPromoSection() {
  const t = await getTranslations("loyaltyPromo");

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
         <DecorativeFlower position="center-right" size="lg" opacity={0.9} />
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left: text */}
          <div>
            <SectionHeader
              eyebrow={t("eyebrow")}
              align="start"
              sides="start"
              heading={
                <>
                  {t("headingLine1")}
                  <br />
                  {t("headingLine2Prefix")}{" "}
                  <span className="text-primary">{t("headingLine2Highlight")}</span>
                  <br />
                  {t("headingLine3")}
                </>
              }
              subheading={t("subheading")}
            />
          </div>

          {/* Right: card image */}
          <div className="relative h-[200px] w-full overflow-hidden rounded-2xl sm:h-[280px] lg:h-[400px]">
            <Image
              src="/images/loyalty-card.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 4-step process */}
        <div className="mt-8 grid grid-cols-1 gap-5 rounded-2xl border border-border bg-background-light p-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 sm:p-8 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.titleKey} className="flex items-center gap-3 sm:gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white sm:h-12 sm:w-12">
                <step.icon size={16} className="text-secondary sm:size-[18px]" />
              </span>

              <div className="flex-1">
                <p className="font-heading text-sm font-extrabold leading-tight text-primary sm:text-base">
                  {t(step.titleKey)}
                </p>

                <p className="mt-1 font-body text-xs leading-snug text-muted-foreground sm:text-sm">
                  {t(step.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact banner */}
        <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl bg-gradient-primary p-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 sm:h-12 sm:w-12">
              <Phone size={18} className="text-white sm:size-5" />
            </span>
            <div>
              <p className="font-body text-xs text-white/90 sm:text-sm">{t("bannerHeading")}</p>
              <p className="font-body text-sm font-semibold text-white">{t("bannerSubtext")}</p>
            </div>
          </div>

          <Button
            href="/contact-us"
            variant="outline"
            icon={<ArrowRight size={16} />}
            className="w-full justify-center sm:w-fit"
          >
            {t("ctaContact")}
          </Button>
        </div>
      </div>
    </section>
  );
}