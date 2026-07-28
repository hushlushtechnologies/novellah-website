import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";

 const steps = [
  { icon: "/images/icons/join.svg", number: "01", titleKey: "step1Title", descKey: "step1Desc" },
  { icon: "/images/icons/enjoy-treatments.svg", number: "02", titleKey: "step2Title", descKey: "step2Desc" },
  { icon: "/images/icons/upgrade-tier.svg", number: "03", titleKey: "step3Title", descKey: "step3Desc" },
  { icon: "/images/icons/exclusive-rewards.svg", number: "04", titleKey: "step4Title", descKey: "step4Desc" },
] as const;

export async function HowRewardsWorksSection() {
  const t = await getTranslations("howRewardsWorks");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <DecorativeFlower position="top-left" size="lg" opacity={0.5} />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={
            <>
              {t("headingPrefix")} <span className="text-primary">{t("headingHighlight")}</span>{" "}
              {t("headingSuffix")}
            </>
          }
          subheading={t("subheading")}
        />

        {/* Desktop/tablet: horizontal stepper with connectors */}
        <div className="mt-16 hidden sm:grid sm:grid-cols-4 sm:gap-4">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Connector line to the next step */}
              {i < steps.length - 1 && (
                <div className="absolute start-1/2 top-12 -z-10 h-px w-full border-t-2 border-dotted border-secondary/60" />
              )}

             <span className="flex h-24 w-24 items-center justify-center rounded-full border border-secondary/50 bg-background lg:h-28 lg:w-28">
  <Image src={step.icon} alt="" width={32} height={32} />
</span>

              <span className="mt-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary font-body text-xs font-bold text-white shadow-card">
                {step.number}
              </span>

              <div className="  h-10 w-px rounded-full bg-secondary/50" />
        <div className="-mt-1 h-2 w-2 rounded-full bg-secondary" />
              <h3 className="font-heading font-bold text-lg text-primary">{t(step.titleKey)}</h3>
              <div className=" mb-2 h-px rounded-full w-8 bg-secondary" />
              <p className="max-w-[220px] font-body text-sm text-muted-foreground">
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical stacked steps */}
        <div className="mt-10 flex flex-col gap-8 sm:hidden">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <div className="flex flex-col items-center">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-secondary/50 bg-background">
  <Image src={step.icon} alt="" width={24} height={24} />
</span>
                <span className="-mt-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-primary font-body text-[10px] font-bold text-white shadow-card">
                  {step.number}
                </span>
              </div>
              <div className="pt-2">
                <h3 className="font-heading text-base text-primary">{t(step.titleKey)}</h3>
                <div className="mt-1 mb-1.5 h-px w-6 bg-secondary" />
                <p className="font-body text-sm text-muted-foreground">{t(step.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}