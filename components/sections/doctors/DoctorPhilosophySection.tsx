 import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import type { Doctor } from "@/lib/content/doctors";

const points = [
  { icon: "/images/icons/patient-centered.svg", titleKey: "point1Title", descKey: "point1Desc" },
  { icon: "/images/icons/natural-safe.svg", titleKey: "point2Title", descKey: "point2Desc" },
  { icon: "/images/icons/excellence-aesthetics.svg", titleKey: "point3Title", descKey: "point3Desc" },
  { icon: "/images/icons/compassionate-care.svg", titleKey: "point4Title", descKey: "point4Desc" },
] as const;

export async function DoctorPhilosophySection({
  doctor,
  locale,
}: {
  doctor: Doctor;
  locale: "en" | "ar";
}) {
  const t = await getTranslations("doctorPhilosophy");
  const firstName = doctor.name.replace("Dr. ", "").split(" ")[0];

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <DecorativeFlower position="top-left" size="lg" opacity={0.5} />
      <DecorativeFlower position="top-right-half" size="lg" opacity={0.9} />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={
            <>
              {t("headingLine1")}
              <br />
              <span className="text-primary">{t("headingHighlight")}</span>
            </>
          }
          subheading={doctor.philosophySubheading[locale]}
        />

        <div className="mt-8 grid items-start gap-8 sm:mt-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Left: plain framed photo */}
          <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-secondary/40 p-1.5 sm:h-96 sm:rounded-4xl sm:p-2 lg:h-[420px] xl:h-[500px]">
            <div className="relative h-full w-full overflow-hidden rounded-xl top-2 -end-2 sm:top-5 sm:-end-4 sm:rounded-2xl">
              <Image src={doctor.image} alt={doctor.name} fill className="object-cover" />
            </div>
          </div>

          {/* Right: approach grid + about text */}
          <div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 sm:gap-y-6">
              {points.map((point) => (
                <div key={point.titleKey} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-secondary/40 bg-white sm:h-11 sm:w-11">
                    <Image src={point.icon} alt="" width={18} height={18} className="sm:h-5 sm:w-5" />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-bold text-primary sm:text-base">
                      {t(point.titleKey)}
                    </p>
                    <div className="mt-1 mb-1.5 h-1 w-8 rounded-full bg-secondary" />
                    <p className="font-body text-sm text-muted-foreground">{t(point.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 sm:mt-10 sm:pt-8">
              <h3 className="font-heading text-xl font-extrabold text-primary sm:text-2xl">
                {t("aboutHeadingPrefix")} {firstName}
              </h3>
              <p className="mt-3 font-body text-sm font-medium text-muted-foreground sm:mt-4">
                {doctor.aboutParagraph1[locale]}
              </p>
              <p className="mt-3 font-body text-sm font-medium text-muted-foreground sm:mt-4">
                {doctor.aboutParagraph2[locale]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}