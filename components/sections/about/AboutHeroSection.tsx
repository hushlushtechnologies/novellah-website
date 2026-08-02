import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";
import { heroDescriptionClasses, heroEyebrowClasses, heroHeadingClasses } from "@/lib/styles";

export async function AboutHeroSection() {
  const t = await getTranslations("aboutHero");

  return (
    <section className="relative flex min-h-[640px] items-center justify-center overflow-hidden py-20">
      <Image
        src="/images/about-hero-lobby.png"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0  " />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className={heroEyebrowClasses}>
          {t("eyebrow")}
        </p>

        <h1 className={`${heroHeadingClasses} lg:text-6xl mt-4 font-extrabold text-white`}>
          {t("line1Word")} <span className="text-secondary">{t("line1Highlight")}</span>
          <br />
          {t("line2Word")} <span className="text-secondary">{t("line2Highlight")}</span>
        </h1>

        <div className="mx-auto mt-6 flex items-center justify-center gap-3">
          <div className="h-0.5 rounded-full w-16 bg-secondary sm:w-28" />
 
          <Sparkle size={12} className="text-secondary" fill="currentColor" />
          <div className="h-0.5 rounded-full  w-16 bg-secondary sm:w-28" />
        </div>

        <p className={`${heroDescriptionClasses} mx-auto mt-6 max-w-xl`}>
          {t("subheading")}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button
            href="/book-appintment"
            variant="solid"
            icon={<ArrowRight size={16} />}
            className="w-full justify-center sm:w-fit"
          >
            {t("ctaBook")}
          </Button>
          <Button
            href={siteConfig.whatsappHref}
            variant="outline"
    
          >
            {t("ctaWhatsapp")}
          </Button>
        </div>
      </div>
    </section>
  );
}