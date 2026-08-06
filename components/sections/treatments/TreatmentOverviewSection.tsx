 import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Sparkle, Users } from "lucide-react";
import type { Treatment } from "@/lib/content/treatments";
import {
  sectionDescriptionClasses,
  sectionEyebrowClasses,
  sectionHeadingClasses,
} from "@/lib/styles";

export async function TreatmentOverviewSection({
  treatment,
  locale,
}: {
  treatment: Treatment;
  locale: "en" | "ar";
}) {
  const t = await getTranslations("treatmentOverview");

  return (
    <section className="relative overflow-hidden px-4  sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Left: framed image with credential badge */}
          <div className="relative h-[240px] w-full overflow-hidden rounded-2xl border border-secondary/40 xs:h-[300px] sm:h-[360px] sm:rounded-3xl md:h-[440px] lg:h-[600px] lg:rounded-4xl">
            <div className="relative h-full w-full overflow-hidden sm:-end-4 sm:top-3 lg:-end-5">
         <Image
  src={treatment.overviewImage}
  alt=""
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 45vw, 40vw"
  className="rounded-xl object-contain sm:object-cover"
/>
            </div>
          </div>

          {/* Right: overview + benefits */}
          <div>
            <div className="flex items-center gap-2">
              <div className="h-1 w-10 rounded-full bg-primary" />
              <Sparkle size={12} className="text-primary" fill="currentColor" />
              <p className={`${sectionEyebrowClasses} text-primary`}>
                {t("eyebrow")}
              </p>
            </div>

            <h2 className={`mt-3 sm:mt-4 ${sectionHeadingClasses} text-foreground`}>
              {t("headingPrefix")}{" "}
              <span className="text-primary">{treatment.title[locale]}</span>
            </h2>

            <p className={sectionDescriptionClasses}>
              {treatment.overview[locale]}
            </p>

            <h3 className="mt-6 font-heading text-lg font-bold text-foreground sm:mt-8 sm:text-xl lg:text-2xl">
              {t("benefitsHeading")}
            </h3>

            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-5 sm:mt-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
              {treatment.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-card shadow-md sm:h-11 sm:w-11">
                    <Image src={benefit.icon} alt="" width={20} height={20} />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-primary sm:text-base">
                      {benefit.title[locale]}
                    </p>
                    <div className="mt-1 mb-1.5 h-0.5 w-8 rounded-full bg-secondary" />
                    <p className="font-body text-sm text-muted-foreground">
                      {benefit.description[locale]}
                    </p>
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