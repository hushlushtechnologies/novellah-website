import { getTranslations } from "next-intl/server";
import { ArrowRight, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { siteConfig } from "@/lib/siteConfig";

export async function BlogHeroSection() {
  const t = await getTranslations("blogHero");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <DecorativeFlower position="top-left" size="lg" opacity={0.5} />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary sm:text-sm">
          {t("eyebrow")}
        </p>

        <h1 className="mt-4 font-extrabold font-heading text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
          {t("headingLine1")}
          <br />
          {t("headingLine2")}
        </h1>

        <div className="mx-auto mt-5 flex items-center justify-center gap-3">
          <div className="h-1 rounded-full w-24 bg-secondary sm:w-36" />
          <Sparkle size={12} className="text-secondary" fill="currentColor" />
          <div className="h-1 rounded-full w-24 bg-secondary sm:w-36" />
        </div>

        <p className="mx-auto mt-5 font-body text-sm text-muted-foreground sm:text-base">
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
          <Button href={siteConfig.whatsappHref} variant="outline" className="w-full justify-center sm:w-fit">
            {t("ctaWhatsapp")}
          </Button>
        </div>
      </div>
    </section>
  );
}