import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const points = [
  { icon: "/images/icons/safe-approved.svg", titleKey: "point1Title", descKey: "point1Desc" },
  { icon: "/images/icons/precise-effective.svg", titleKey: "point2Title", descKey: "point2Desc" },
  { icon: "/images/icons/minimal-downtime.svg", titleKey: "point3Title", descKey: "point3Desc" },
  { icon: "/images/icons/experts-hands.svg", titleKey: "point4Title", descKey: "point4Desc" },
] as const;

export async function TechnologyMeetsBeautySection() {
  const t = await getTranslations("technologyMeetsBeauty");

  return (
    <section className="relative overflow-hidden py-12 lg:py-20">

           <Image
        src="/images/decorative/swirl-welcome.png"
        alt=""
        width={707}
        height={1692}
        aria-hidden
        className="pointer-events-none absolute -translate-x-1/2 start-0 top-0 -z-10 hidden w-auto   opacity-90 md:block"
        style={{ height: "100%" }}
      />


      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: text — full padding until lg, start-only inset from lg up */}
        <div className="px-4 sm:px-6 lg:ps-8 lg:pe-4 xl:ps-16 xl:pe-6">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-1 w-8 rounded-full bg-primary sm:w-10" />
            <Sparkle size={12} className="text-primary" fill="currentColor" />
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.6em] text-primary sm:text-xs">
              {t("eyebrow")}
            </p>
          </div>

          <h2 className="font-heading text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-primary">{t("headingLine1").split(" ")[0]}</span>{" "}
            {t("headingLine1").split(" ").slice(1).join(" ")}
            <br />
            <span className="text-primary">{t("headingLine2").split(" ")[0]}</span>{" "}
            {t("headingLine2").split(" ").slice(1).join(" ")}
          </h2>

          <p className="mt-4 font-body text-sm font-medium text-muted-foreground sm:mt-6">
            {t("description1")}
          </p>
          <p className="mt-4 font-body text-sm font-medium text-muted-foreground">
            {t("description2")}
          </p>

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
              href="/contact-us"
              variant="outline"
              className="w-full justify-center border-secondary sm:w-fit"
            >
              {t("ctaConnect")}
            </Button>
          </div>
        </div>

        {/* Right: clinic image — full-bleed both edges below lg, right-edge bleed only from lg up */}
        <div className="relative h-[220px] border-primary/40 sm:h-[300px] lg:h-[420px] xl:h-[460px] lg:rounded-tl-[90px] lg:rounded-bl-[90px] lg:border-l-2 lg:border-t-2 lg:border-b-2 lg:py-4">
          <div className="relative h-full w-full overflow-hidden lg:rounded-tl-[90px] lg:rounded-bl-[90px]">
            <Image
              src="/images/technology-treatment-room.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Trust points — 4 columns */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-4 sm:gap-6">
          {points.map((point) => (
            <div
              key={point.titleKey}
              className="rounded-xl border border-border bg-card p-5 text-center"
            >
              <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-secondary/40">
                <Image src={point.icon} alt="" width={20} height={20} />
              </span>
              <p className="font-body text-sm font-bold text-foreground">{t(point.titleKey)}</p>
              <p className="mt-1 font-body text-xs text-muted-foreground">{t(point.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}