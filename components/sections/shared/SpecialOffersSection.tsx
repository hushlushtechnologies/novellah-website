import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { offers } from "@/lib/content/offers";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { Button } from "@/components/ui/Button";

export async function SpecialOffersSection() {
  const t = await getTranslations("specialOffers");

  const featured = offers.find((o) => o.featured) ?? offers[0];
  const rest = offers.filter((o) => o.slug !== featured.slug).slice(0, 4);

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
           <DecorativeFlower position="top-left" size="lg" opacity={0.9} />
              <DecorativeFlower position="top-right-half" size="lg" opacity={0.9} />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={
            <>
              {t("headingLine1")} <span className="text-primary">{t("headingLine2")}</span>
            </>
          }
          subheading={t("subheading")}
          ctaLabel={t("ctaViewAll")}
          ctaHref="/special-offer"
        />

       <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
  {/* Featured large card */}
  <div className="relative h-[420px] overflow-hidden rounded-2xl sm:h-[500px]">
    <Image src={featured.image} alt="" fill className="object-cover" />

    <Button
      href={`/special-offer/${featured.slug}`}
      variant="solid"
      icon={<ArrowRight size={16} />}
      className="absolute bottom-6 start-1/2 -translate-x-1/2 justify-center"
    >
      {t("ctaBookNow")}
    </Button>
  </div>

  {/* 2x2 grid of smaller cards */}
  <div className="grid grid-cols-2 gap-6">
    {rest.map((offer) => (
      <div
        key={offer.slug}
        className="relative h-[200px] overflow-hidden rounded-2xl sm:h-[237px]"
      >
        <Image src={offer.image} alt="" fill className="object-cover" />

        <Button
          href={`/special-offer/${offer.slug}`}
          variant="solid"
          icon={<ArrowRight size={14} />}
          className="absolute bottom-4 start-1/2 -translate-x-1/2 justify-center"
        >
          {t("ctaBookNow")}
        </Button>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}