 import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, ChevronDown, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export async function TreatmentsHeroSection() {
  const t = await getTranslations("treatmentsHero");

  return (
    <section>
      <div className="relative mx-auto h-[520px] max-w-[1800px] overflow-hidden sm:h-[590px]">
        <Image
          src="/images/treatments-hero-room.png"
          alt=""
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

        <div className="relative flex h-full max-w-2xl flex-col justify-center gap-4 px-5 sm:gap-6 sm:px-12 lg:px-20 xl:max-w-5xl">
          <p className="font-body text-xs font-semibold uppercase tracking-wider text-secondary sm:text-sm">
            {t("eyebrow")}
          </p>

          <h1 className="font-heading text-3xl leading-tight sm:text-5xl">
            <span className="text-white">{t("headingLine1")}</span>
            <br />
            <span className="text-secondary">{t("headingLine2")}</span>
          </h1>

          <div className="flex items-center gap-2">
            <div className="h-1 w-20 rounded bg-secondary sm:w-36" />
            <Sparkle size={14} className="text-secondary" fill="currentColor" />
          </div>

          <p className="font-body w-xl text-sm text-white/90 sm:text-base">
            {t("subheading")}
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
              href="/book-appointment"
              variant="outline"
              className="w-full justify-center border-secondary bg-white/90 text-secondary sm:w-fit"
            >
              {t("ctaBook")}
            </Button>
          </div>
        </div>

        {/* Scroll cue */}

        
        <a  href="#next-section"
          className="absolute bottom-6 start-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white sm:bottom-10 md:flex"
        >
          <span className="font-body text-xs uppercase tracking-wide">
            {t("scrollToDiscover")}
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60">
            <ChevronDown size={14} />
          </span>
        </a>
      </div>
    </section>
  );
}