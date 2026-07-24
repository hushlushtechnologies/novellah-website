 import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const features = [
  { icon: "/images/icons/modern-beauty.svg", titleKey: "feature1Title", descKey: "feature1Desc" },
  { icon: "/images/icons/personalized-care.svg", titleKey: "feature2Title", descKey: "feature2Desc" },
  { icon: "/images/icons/exceptional-experience.svg", titleKey: "feature3Title", descKey: "feature3Desc" },
] as const;

const stats = [
  { valueKey: "stat1Value", labelKey: "stat1Label" },
  { valueKey: "stat2Value", labelKey: "stat2Label" },
  { valueKey: "stat3Value", labelKey: "stat3Label" },
  { valueKey: "stat4Value", labelKey: "stat4Label" },
] as const;

export async function WelcomeSection() {
  const t = await getTranslations("welcome");

  return (
    <section className="relative overflow-hidden py-12 lg:py-20">
  

      {/* Grid row — NOT wrapped in max-w, so the image column can reach the true page edge on lg+ */}
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 lg:gap-12">
        {/* Left: text — full symmetric padding until lg, then start-only inset (unchanged from lg up) */}
        <div className="px-4 sm:px-6 lg:ps-8 lg:pe-4 xl:ps-16 xl:pe-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-1 w-10 rounded-4xl bg-primary sm:w-12" />
            <Sparkle size={12} className="text-primary" fill="currentColor" />
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs sm:tracking-[0.6em]">
              {t("eyebrow")}
            </p>
          </div>

          <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("headingLine1")}
            <br />
            <span className="text-primary">{t("headingLine2")}</span>
          </h2>

          <p className="mt-4 font-body text-sm font-medium text-muted-foreground sm:mt-6">
            {t("description1")}
          </p>
          <p className="mt-4 font-body text-sm font-medium text-muted-foreground">
            {t("description2")}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-2">
            {features.map((feature) => (
              <div
                key={feature.titleKey}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-3 text-start sm:flex-col sm:px-2 sm:text-center"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 sm:mx-auto sm:mb-3 sm:h-12 sm:w-12">
                  <Image src={feature.icon} alt="" width={20} height={20} />
                </span>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">
                    {t(feature.titleKey)}
                  </p>
                  <p className="mt-0.5 font-body text-xs text-muted-foreground">
                    {t(feature.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              href="/about-us"
              variant="solid"
              icon={<ArrowRight size={16} />}
              className="w-full justify-center sm:w-fit"
            >
              {t("ctaLearnMore")}
            </Button>
            <Button
              href="/treatments"
              variant="outline"
              className="w-full justify-center border-secondary sm:w-fit"
            >
              {t("ctaExplore")}
            </Button>
          </div>
        </div>

        {/* Right: clinic image — plain full-width below lg, exact original frame/bleed treatment from lg up */}
    <div className="relative h-[220px] border-primary/40 sm:h-[300px] lg:h-[420px] xl:h-[460px] lg:rounded-tl-[90px] lg:rounded-bl-[90px] lg:border-l-2 lg:border-t-2 lg:border-b-2 lg:py-4">
  <div className="relative h-full w-full overflow-hidden lg:rounded-tl-[80px] lg:rounded-bl-[80px]">
    <Image
      src="/images/welcome-clinics.png"
      alt=""
      fill
      className="object-cover"
    />
  </div>
</div>
      </div>

      {/* Stats bar — stays in its own centered, padded container (unchanged structure, sizes scale down) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl bg-background-light p-5 sm:mt-14 sm:grid-cols-4 sm:gap-0 sm:p-6 sm:divide-x sm:divide-border lg:p-8">
          {stats.map((stat) => (
            <div key={stat.valueKey} className="text-center sm:px-4">
              <p className="font-heading text-xl text-primary sm:text-2xl lg:text-3xl">
                {t(stat.valueKey)}
              </p>
              <p className="mt-1 font-body text-xs text-muted-foreground sm:text-sm">
                {t(stat.labelKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}