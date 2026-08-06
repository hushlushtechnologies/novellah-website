 import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Sparkle, Star, Award, Globe2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { siteConfig } from "@/lib/siteConfig";
import type { Doctor } from "@/lib/content/doctors";

export async function DoctorDetailHeroSection({
  doctor,
  locale,
}: {
  doctor: Doctor;
  locale: "en" | "ar";
}) {
  const t = await getTranslations("doctorDetail");
  const [firstName, ...restName] = doctor.name.replace("Dr. ", "").split(" ");

  const stats = [
    { icon: Star, label: `${doctor.experienceYears}+`, sub: t("experienceLabel") },
    { icon: Award, label: doctor.specialty[locale], sub: t("specializationLabel") },
    { icon: Globe2, label: doctor.languages[locale], sub: t("languagesLabel") },
    { icon: GraduationCap, label: doctor.educationDetail[locale], sub: t("educationLabel") },
  ];

  return (
    <section className="relative overflow-hidden py-10 lg:py-0">
      <DecorativeFlower position="top-left" size="lg" opacity={0.5} />

      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
        {/* Left: text */}
        <div className="relative z-10 px-4 sm:px-6 lg:ps-8 lg:pe-4 xl:ps-16 xl:pe-6">
          <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary sm:text-sm sm:tracking-[0.3em]">
            {t("eyebrow")}
          </p>

          <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-foreground sm:mt-4 sm:text-5xl lg:text-6xl">
            {firstName}
            <br />
            <span className="text-primary">{restName.join(" ")}</span>
          </h1>

          <div className="mt-4 flex items-center gap-2 sm:mt-5">
            <div className="h-1 w-12 rounded-full bg-secondary sm:w-24" />
            <Sparkle size={12} className="text-secondary" fill="currentColor" />
          </div>

          <p className="mt-4 font-body text-sm font-medium text-muted-foreground sm:mt-5 sm:text-base">
            {doctor.bio[locale]}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:mt-8 sm:grid-cols-2 sm:gap-y-6">
            {stats.map((stat) => (
              <div key={stat.sub} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-secondary bg-white sm:h-11 sm:w-11">
                  <stat.icon size={16} className="text-secondary sm:size-[18px]" />
                </span>
                <div>
                  <p className="font-heading text-sm font-extrabold text-primary sm:text-base">
                    {stat.label}
                  </p>
                  <div className="mt-1 mb-1 h-px w-6 bg-secondary" />
                  <p className="font-body text-xs text-muted-foreground sm:text-sm">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              href="/book-appiontment"
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

        {/* Right: room photo + doctor cutout, layered */}
        <div className="relative h-[320px] sm:h-[420px] lg:h-[640px]">
          <div className="absolute inset-0 lg:overflow-hidden">
            <Image src={doctor.roomImage} alt="" fill className="object-cover" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-full">
            <Image
              src={doctor.cutoutImage}
              alt={doctor.name}
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}