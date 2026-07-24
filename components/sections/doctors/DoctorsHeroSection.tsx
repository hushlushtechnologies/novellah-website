import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Sparkle, UserCheck, HeartHandshake, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";

const points = [
  { icon: UserCheck, titleKey: "point1Title", descKey: "point1Desc" },
  { icon: HeartHandshake, titleKey: "point2Title", descKey: "point2Desc" },
  { icon: ShieldCheck, titleKey: "point3Title", descKey: "point3Desc" },
] as const;

export async function DoctorsHeroSection() {
  const t = await getTranslations("doctorsHero");

  return (
    <section className="relative overflow-hidden pb-16 sm:pb-24 lg:pb-32">
      <DecorativeFlower position="top-left" size="lg" opacity={0.5} />

      <div className="grid items-center gap-8 pt-8 sm:pt-10 lg:grid-cols-2 lg:gap-12 lg:pt-0">
        {/* Left: text — full padding until lg, start-only inset from lg up */}
        <div className="relative z-10 px-4 sm:px-6 lg:ps-8 lg:pe-4 xl:ps-16 xl:pe-6">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary sm:text-sm">
            {t("eyebrow")}
          </p>

          <h1 className="mt-4 font-heading text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
            {t("headingLine1Prefix")} <span className="text-primary">{t("headingLine1Highlight")}</span>
            <br />
            {t("headingLine2Prefix")} <span className="text-primary">{t("headingLine2Highlight")}</span>
          </h1>

          <div className="mt-5 flex items-center gap-2">
            <div className="h-px w-16 bg-secondary sm:w-24" />
            <Sparkle size={12} className="text-secondary" fill="currentColor" />
          </div>

          <p className="mt-5 font-body text-sm text-muted-foreground sm:text-base">
            {t("subheading")}
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
            <Button
              href="https://wa.me/971501234567"
              variant="outline"
              className="w-full justify-center sm:w-fit"
            >
              {t("ctaWhatsapp")}
            </Button>
          </div>
        </div>

        {/* Right: doctors photo — full-bleed both edges below lg, right-edge bleed + top-left radius from lg up */}
        <div className="relative h-[240px] sm:h-[320px] lg:h-[460px] xl:h-[500px] lg:rounded-tl-[100px]">
          <div className="relative h-full w-full overflow-hidden lg:rounded-tl-[100px]">
            <Image
              src="/images/doctors-team-hero.png"
              alt=""
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 3-point feature row — pulled up to overlap the image's bottom edge */}
      <div className="relative z-10 mx-auto -mt-10 max-w-6xl px-4 sm:-mt-14 sm:px-6 lg:-mt-16 lg:px-8">
        <div className="grid grid-cols-1 gap-5 rounded-2xl border border-border bg-background-light p-5 shadow-card sm:grid-cols-3 sm:gap-6 sm:p-8">
          {points.map((point) => (
            <div key={point.titleKey} className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/40 bg-white sm:h-12 sm:w-12">
                <point.icon size={18} className="text-primary" />
              </span>
              <div>
                <p className="font-heading text-base text-primary">{t(point.titleKey)}</p>
                <div className="mt-1 mb-1.5 h-px w-6 bg-secondary" />
                <p className="font-body text-sm text-muted-foreground">{t(point.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}