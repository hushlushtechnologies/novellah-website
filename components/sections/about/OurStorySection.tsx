import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Quote, Sparkle } from "lucide-react";

const features = [
  { icon: "/images/icons/expert-care.svg", titleKey: "feature1Title", descKey: "feature1Desc" },
  { icon: "/images/icons/natural-results.svg", titleKey: "feature2Title", descKey: "feature2Desc" },
  { icon: "/images/icons/premium-experience.svg", titleKey: "feature3Title", descKey: "feature3Desc" },
  { icon: "/images/icons/safe-trusted.svg", titleKey: "feature4Title", descKey: "feature4Desc" },
] as const;

const stats = [
  { valueKey: "stat1Value", labelKey: "stat1Label" },
  { valueKey: "stat2Value", labelKey: "stat2Label" },
  { valueKey: "stat3Value", labelKey: "stat3Label" },
  { valueKey: "stat4Value", labelKey: "stat4Label" },
] as const;

export async function OurStorySection() {
  const t = await getTranslations("ourStory");

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: framed image with quote overlay */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-secondary/40 p-2 sm:h-[500px]">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/about-story-lobby.png"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-start gap-3 rounded-2xl bg-primary/90 p-5 backdrop-blur-sm">
                <Quote size={28} className="shrink-0 text-secondary/70" fill="currentColor" />
                <p className="font-body text-sm font-medium text-white">{t("quote")}</p>
              </div>
            </div>
          </div>

          {/* Right: text + feature grid */}
          <div>
            <div className="flex items-center gap-2">
              <div className="h-1 rounded-full w-10 bg-primary" />
               <Sparkle size={10} className="text-primary sm:size-3" fill="currentColor" />
              <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-primary">
                {t("eyebrow")}
              </p>
            </div>

            <h2 className="mt-4 font-heading font-extrabold text-4xl leading-tight text-foreground sm:text-5xl">
              {t("headingLine1")}
              <br />
              {t("headingLine2Prefix")} <span className="text-primary">{t("headingLine2Highlight")}</span>
            </h2>

            <p className="mt-4 font-body text-sm text-muted-foreground">{t("description1")}</p>
            <p className="mt-4 font-body text-sm text-muted-foreground">{t("description2")}</p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.titleKey} className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/40">
                    <Image src={feature.icon} alt="" width={20} height={20} />
                  </span>
                  <div>
                    <p className="font-heading font-bold text-base text-primary">{t(feature.titleKey)}</p>
                    <div className="mt-1 mb-1.5 h-px w-6 bg-secondary" />
                    <p className="font-body text-sm text-muted-foreground">{t(feature.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-14 grid grid-cols-2 gap-6 rounded-2xl bg-background-light p-6 sm:grid-cols-4 sm:divide-x sm:divide-border sm:p-8">
          {stats.map((stat) => (
            <div key={stat.valueKey} className="text-center sm:px-4">
              <p className="font-heading font-extrabold text-2xl text-primary sm:text-3xl">{t(stat.valueKey)}</p>
              <p className="mt-1 font-body text-sm text-muted-foreground">{t(stat.labelKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}