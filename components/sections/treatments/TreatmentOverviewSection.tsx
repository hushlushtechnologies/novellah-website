import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Users } from "lucide-react";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import type { Treatment } from "@/lib/content/treatments";

export async function TreatmentOverviewSection({
  treatment,
  locale,
}: {
  treatment: Treatment;
  locale: "en" | "ar";
}) {
  const t = await getTranslations("treatmentOverview");

  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <DecorativeFlower position="center-right" size="lg" opacity={0.5} />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Left: framed image with credential badge */}
          <div className="relative h-[380px]  w-full overflow-hidden rounded-3xl border border-secondary/40 p-2 sm:h-full">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image src={treatment.image} alt="" fill className="object-cover" />
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-primary/90 p-4 backdrop-blur-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white/20">
                  <Users size={20} className="text-white" />
                </span>
                <div>
                  <p className="font-body text-sm text-white/80">{t("recommendedByLabel")}</p>
                  <p className="font-heading text-base text-secondary">{t("recommendedBySuffix")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: overview + benefits */}
          <div>
            <div className="flex items-center gap-2">
              <div className="h-1 rounded-full w-10 bg-primary" />
              <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-primary">
                {t("eyebrow")}
              </p>
            </div>

            <h2 className="mt-4 font-heading font-extrabold text-4xl leading-tight text-foreground sm:text-5xl">
              {t("headingPrefix")} <span className="text-primary">{treatment.title[locale]}</span>
            </h2>

            <p className="mt-4 font-body text-sm text-muted-foreground">{treatment.overview[locale]}</p>

            <h3 className="mt-8 font-heading font-bold text-2xl text-foreground">{t("benefitsHeading")}</h3>

            <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {treatment.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/40">
                    <Image src={benefit.icon} alt="" width={20} height={20} />
                  </span>
                  <div>
                    <p className="font-heading text-base font-semibold text-primary">{benefit.title[locale]}</p>
                    <div className="mt-1 mb-1.5 h-px w-6 bg-secondary" />
                    <p className="font-body text-sm text-muted-foreground">{benefit.description[locale]}</p>
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