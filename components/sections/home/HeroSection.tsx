import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollCue } from "@/components/ui/ScrollCue";
import { WatchGalleryButton } from "@/components/ui/WatchGalleryButton";
import { heroDescriptionClasses, heroEyebrowClasses, heroHeadingClasses } from "@/lib/styles";
import heroImage from "@/public/images/hero-treatments.png";

export async function HeroSection() {
  const t = await getTranslations("home");

  return (
    <section className="px-4 pt-4 sm:px-6 lg:px-6">
      <div className="relative mx-auto grayscale-25 h-[520px] max-w-[1820px] overflow-hidden rounded-2xl sm:h-[590px] sm:rounded-3xl">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative flex h-full max-w-xl flex-col justify-center gap-4 px-5 sm:gap-6 sm:px-12 lg:px-16">
          <p className={heroEyebrowClasses}>
            {t("eyebrow")}
          </p>

          <h1 className={`${heroHeadingClasses} font-extrabold text-white`}>
            {t("headingLine1")}
            <br />
            {t("headingLine2")}
          </h1>

          <div className="flex items-center gap-2">
            <div className="h-1 w-20 rounded bg-secondary sm:w-36" />
            <Sparkle size={14} className="text-secondary" fill="currentColor" />
          </div>

          <p className={heroDescriptionClasses}>
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
              href="/book-appointment"
              variant="outline"
              className="w-full justify-center border-secondary bg-white/90 text-secondary sm:w-fit"
            >
              {t("ctaBook")}
            </Button>
          </div>
        </div>

        {/* Scroll cue — hidden on mobile, no room once badge is present */}

        <ScrollCue label={t("scrollToDiscover")} targetId="welcome" />

        {/* Watch gallery badge */}
        <WatchGalleryButton />
      </div>
    </section>
  );
}
