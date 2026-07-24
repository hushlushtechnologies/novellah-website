import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";

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
        <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-secondary sm:text-sm">
          {t("eyebrow")}
        </p>

        <h1 className="mt-4 font-extrabold font-heading text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          {t("line1Word")} <span className="text-secondary">{t("line1Highlight")}</span>
          <br />
          {t("line2Word")} <span className="text-secondary">{t("line2Highlight")}</span>
        </h1>

        <div className="mx-auto mt-6 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-secondary sm:w-24" />
 
          <Sparkle size={12} className="text-secondary" fill="currentColor" />
          <div className="h-px w-16 bg-secondary sm:w-24" />
        </div>

        <p className="mx-auto mt-6 max-w-xl font-body text-sm text-white/90 sm:text-base">
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
            href="https://wa.me/971501234567"
            variant="outline"
    
          >
            {t("ctaWhatsapp")}
          </Button>
        </div>
      </div>
    </section>
  );
}