import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  Sparkle,
  Hourglass,
  CalendarClock,
  Droplet,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { siteConfig } from "@/lib/siteConfig";
import type { Treatment } from "@/lib/content/treatments";
import { heroEyebrowClasses, heroHeadingClasses } from "@/lib/styles";

export async function TreatmentDetailHeroSection({
  treatment,
  categoryTitle,
  locale,
}: {
  treatment: Treatment;
  categoryTitle: string;
  locale: "en" | "ar";
}) {
  const t = await getTranslations("treatmentDetail");

  const stats = [
    {
      icon: "/images/icons/duration.svg",
      label: `${treatment.durationMinutes} ${t("durationUnit")}`,
      sub: t("durationLabel"),
    },
    {
      icon: "/images/icons/sessions.svg",
      label: treatment.sessions,
      sub: t("sessionsLabel"),
    },
    {
      icon: "/images/icons/skin-type.svg",
      label: treatment.skinType[locale],
      sub: t("suitableForLabel"),
    },
    {
      icon: "/images/icons/procedure-type.svg",
      label: treatment.procedureType[locale],
      sub: t("procedureTypeLabel"),
    },
  ];

  return (
    <section className="relative overflow-hidden pb-16 pt-24 lg:pb-0 lg:pt-0" dir="ltr">
      <DecorativeFlower position="top-left" size="lg" opacity={0.8} />

      <div className="relative grid w-full items-center gap-10 lg:grid-cols-2">
        {/* Left: text */}
        <div className="relative mb-5 z-10 px-4 sm:px-6 lg:ps-8 lg:pe-4 lg:pb-16 lg:pt-16 xl:ps-44 xl:pe-6 xl:pb-20 xl:pt-20">
          <p className={`${heroEyebrowClasses} text-secondary`}>
            {categoryTitle}
          </p>

          <h1 className={`mt-3 ${heroHeadingClasses}`}>
            <span className="text-primary">
              {treatment.title[locale].split(" ")[0]}
            </span>{" "}
            <span className="text-foreground">
              {treatment.title[locale].split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <div className="mt-4 flex items-center gap-2 sm:mt-5">
            <div className="h-1 w-20 rounded-full bg-secondary sm:w-24" />
            <Sparkle size={12} className="text-secondary" fill="currentColor" />
          </div>

          <p className="mt-4 max-w-md font-body text-sm text-muted-foreground sm:mt-5 sm:text-base">
            {treatment.detailDescription[locale]}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              href="/book-appointment"
              variant="solid"
              icon={<ArrowRight size={16} />}
              className="w-full justify-center sm:w-fit"
            >
              {t("ctaBook")}
            </Button>
            <Button
              href={siteConfig.whatsappHref}
              variant="outline"
              className="w-full justify-center sm:w-fit"
            >
              {t("ctaWhatsapp")}
            </Button>
          </div>
        </div>

        {/* Right: large circular image, bleeding off the true top and right edge */}
        <div className="relative z-0 mx-auto aspect-square w-full max-w-[280px] sm:max-w-[380px] lg:absolute lg:inset-y-0 lg:end-0 lg:top-0 lg:mx-0 lg:my-0 lg:h-[680px] lg:w-[680px] lg:max-w-none xl:h-[780px] xl:w-[780px]">
          {/* Glow behind the circle */}
          <div className="absolute inset-0 -z-10 rounded-full bg-secondary/30 blur-2xl" />

          <div className="relative h-full  xl:-top-16 xl:-end-36 w-full overflow-hidden rounded-full border-2 border-secondary/50 shadow-[0_0_60px_-10px] shadow-secondary/40">
            <Image
              src={treatment.image}
              alt={treatment.title[locale]}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 4-point stat bar — overlapping the circle's bottom edge */}
      <div className="relative z-20 order-3 mx-auto mt-8 w-full max-w-7xl px-4 sm:mt-10 sm:px-6 lg:mt-0 lg:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-4 shadow-card sm:grid-cols-4 sm:gap-6 sm:p-6 lg:-mt-16 lg:p-8 xl:-mt-20">
          {stats.map((stat) => (
            <div key={stat.sub} className="flex items-center gap-2 sm:gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full  bg-white">
                <Image
                  src={stat.icon}
                  alt={stat.sub}
                  width={26}
                  height={26}
                  className="h-5 w-5 object-contain"
                />
              </span>
              <div>
                <p className="font-body text-xs font-semibold text-foreground sm:text-sm">
                  {stat.label}
                </p>
                <p className="mt-0.5 font-body text-[10px] uppercase text-muted-foreground sm:text-xs">
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}