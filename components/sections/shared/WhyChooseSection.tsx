 import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WhyChooseFeatureGrid } from "./WhyChooseFeatureGrid";

const features = [
  { icon: "/images/icons/expert-certified.svg", titleKey: "feature1Title", descKey: "feature1Desc" },
  { icon: "/images/icons/advanced-technology.svg", titleKey: "feature2Title", descKey: "feature2Desc" },
  { icon: "/images/icons/personalized-care-2.svg", titleKey: "feature3Title", descKey: "feature3Desc" },
  { icon: "/images/icons/safe-hygienic.svg", titleKey: "feature4Title", descKey: "feature4Desc" },
  { icon: "/images/icons/luxury-experience.svg", titleKey: "feature5Title", descKey: "feature5Desc" },
  { icon: "/images/icons/proven-results.svg", titleKey: "feature6Title", descKey: "feature6Desc" },
] as const;

export async function WhyChooseSection() {
  const t = await getTranslations("whyChoose");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={
            <>
              {t("headingLine1")}{" "}
              <span className="text-primary">{t("headingLine2")}</span>
            </>
          }
          subheading={t("subheading")}
        />

        {/* Feature grid */}
        <WhyChooseFeatureGrid
          features={features.map((f) => ({
            icon: f.icon,
            title: t(f.titleKey),
            desc: t(f.descKey),
          }))}
        />

        {/* Awards row — commented out in source, left untouched */}
        {/*
        <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-center">
          <p className="shrink-0 border-e-0 pe-0 font-bold font-heading text-base text-foreground sm:border-e sm:border-border sm:pe-6">
            {t("awardLabel").split(" by ")[0]} by
            <br />
            {t("awardLabel").split(" by ")[1]}
          </p>
          <div className="flex min-w-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="flex shrink-0 snap-start items-center justify-center rounded-2xl border border-border bg-white p-3"
              >
                <Image
                  src="/images/awards/global-health-award.png"
                  alt="Global Health Awards 2019"
                  width={80}
                  height={64}
                />
              </div>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  );
}