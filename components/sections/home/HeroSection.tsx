 import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Play, ChevronDown, ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export async function HeroSection() {
  const t = await getTranslations("home");

  return (
    <section className="px-4 pt-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto grayscale-25 h-[520px] max-w-[1820px] overflow-hidden rounded-2xl sm:h-[590px] sm:rounded-3xl">
        <Image
          src="/images/hero-treatments.png"
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative flex h-full max-w-xl flex-col justify-center gap-4 px-5 sm:gap-6 sm:px-12 lg:px-16">
          <p className="font-body text-xs font-semibold uppercase tracking-wider text-[#FFCA62] sm:text-sm">
            {t("eyebrow")}
          </p>

          <h1 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-5xl">
            {t("headingLine1")}
            <br />
            {t("headingLine2")}
          </h1>

          <div className="flex items-center gap-2">
            <div className="h-1 w-20 rounded bg-secondary sm:w-36" />
            <Sparkle size={14} className="text-secondary" fill="currentColor" />
          </div>

          <p className="font-body text-sm text-white/90 sm:text-base">
            {t("description")}
            <br />
            <span className="font-semibold">{t("descriptionBold")}</span>
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Button
              href="/about-us"
              variant="solid"
              icon={<ArrowRight size={16} />}
              className="w-full justify-center sm:w-fit"
            >
              {t("ctaExplore")}
            </Button>
            <Button
              href="/book-appintment"
              variant="outline"
              className="w-full justify-center border-secondary bg-white/90 text-secondary sm:w-fit"
            >
              {t("ctaBook")}
            </Button>
          </div>
        </div>

        {/* Scroll cue — hidden on mobile, no room once badge is present */}
        <a
          href="#next-section"
          className="absolute bottom-6 start-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white sm:bottom-10 md:flex"
        >
          <span className="font-body text-xs uppercase tracking-wide">
            {t("scrollToDiscover")}
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60">
            <ChevronDown size={14} />
          </span>
        </a>

        {/* Watch gallery badge */}
   <button className="hidden sm:flex absolute bottom-10 end-8 items-center gap-3 rounded-full border border-secondary/60 bg-black/20 backdrop-blur-sm py-2 pe-5 ps-2 shadow-card">
  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
    <Play size={14} fill="currentColor" />
  </span>

  <span className="text-start">
    <span className="block font-body text-xs font-semibold text-white">
      {t("watchGallery")}
    </span>

    <span className="block font-body text-[11px] text-white/80">
      {t("discoverNovellah")}
    </span>
  </span>
</button>
      </div>
    </section>
  );
}