import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Sparkle, Hourglass, CalendarClock, Droplet, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { siteConfig } from "@/lib/siteConfig";
import type { Treatment } from "@/lib/content/treatments";

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
    { icon: Hourglass, label: `${treatment.durationMinutes} ${t("durationUnit")}`, sub: t("durationLabel") },
    { icon: CalendarClock, label: treatment.sessions, sub: t("sessionsLabel") },
    { icon: Droplet, label: treatment.skinType[locale], sub: t("suitableForLabel") },
    { icon: ShieldCheck, label: treatment.procedureType[locale], sub: t("procedureTypeLabel") },
  ];

  return (
    <section className="relative overflow-hidden pb-16 pt-12 sm:pb-24 lg:pb-32 lg:pt-0">
      <DecorativeFlower position="top-left" size="lg" opacity={0.5} />

      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Left: text */}
        <div className="relative z-10 px-4 sm:px-6 lg:ps-8 lg:pe-4 xl:ps-16 xl:pe-6">
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary sm:text-sm">
            {categoryTitle}
          </p>

          <h1 className="mt-3 font-heading font-extrabold text-4xl leading-tight sm:mt-4 sm:text-5xl lg:text-6xl">
            <span className="text-primary">{treatment.title[locale].split(" ")[0]}</span>{" "}
            <span className="text-foreground">
              {treatment.title[locale].split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <div className="mt-4 flex items-center gap-2 sm:mt-5">
            <div className="h-1 w-16 rounded-full bg-secondary sm:w-24" />
            <Sparkle size={12} className="text-secondary" fill="currentColor" />
          </div>

          <p className="mt-4 font-body text-sm text-muted-foreground sm:mt-5 sm:text-base">
            {treatment.detailDescription[locale]}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              href="/book-appintment"
              variant="solid"
              icon={<ArrowRight size={16} />}
              className="w-full justify-center sm:w-fit"
            >
              {t("ctaBook")}
            </Button>
            <Button href={siteConfig.whatsappHref} variant="outline" className="w-full justify-center sm:w-fit">
              {t("ctaWhatsapp")}
            </Button>
          </div>
        </div>

        {/* Right: large circular image */}
        <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-full border-2 border-secondary/50 sm:max-w-[380px] lg:max-w-none lg:rounded-none lg:rounded-s-full">
          <Image
            src={treatment.image}
            alt={treatment.title[locale]}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* 4-point stat bar — overlapping the bottom */}
      <div className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:-mt-14 sm:px-6 lg:-mt-16 lg:px-8">
        <div className="grid grid-cols-2 gap-5 rounded-2xl border border-border bg-background-light p-5 shadow-card sm:grid-cols-4 sm:gap-6 sm:p-8">
          {stats.map((stat) => (
            <div key={stat.sub} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/40 bg-white sm:h-12 sm:w-12">
                <stat.icon size={18} className="text-primary" />
              </span>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">{stat.label}</p>
                <p className="mt-0.5 font-body text-xs uppercase text-muted-foreground">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}