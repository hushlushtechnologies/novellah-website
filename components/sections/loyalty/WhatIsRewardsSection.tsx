import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Quote, Sparkle } from "lucide-react";
 

const points = [
  { icon: "/images/icons/exclusive-privileges.svg", titleKey: "point1Title", descKey: "point1Desc" },
  { icon: "/images/icons/rewarded-every-time.svg", titleKey: "point2Title", descKey: "point2Desc" },
  { icon: "/images/icons/personalized-care-4.svg", titleKey: "point3Title", descKey: "point3Desc" },
] as const;

export async function WhatIsRewardsSection() {
  const t = await getTranslations("whatIsRewards");

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
     

      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: framed image with quote overlay */}
          <div className="relative h-[380px] w-full overflow-hidden rounded-3xl border border-secondary/40 p-2 sm:h-[460px]">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/loyalty-card.png"
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
              {t("headingLine1Prefix")} <span className="text-primary">{t("headingLine1Highlight")}</span>
              <br />
              {t("headingLine2")}
            </h2>

            <p className="mt-4 font-body font-medium text-sm text-muted-foreground">{t("description")}</p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {points.map((point) => (
                <div key={point.titleKey} className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/40">
                    <Image src={point.icon} alt="" width={20} height={20} />
                  </span>
                  <div>
                    <p className="font-heading text-base font-bold text-primary">{t(point.titleKey)}</p>
                    <div className="mt-1 mb-1.5 h-1 rounded-full w-6 bg-secondary" />
                    <p className="font-body text-sm text-muted-foreground">{t(point.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}