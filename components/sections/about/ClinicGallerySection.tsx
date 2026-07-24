import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { galleryImages } from "@/lib/content/gallery";

export async function ClinicGallerySection() {
  const t = await getTranslations("clinicGallery");
  const [img1, img2, img3, img4, img5, img6, img7, img8] = galleryImages;

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <DecorativeFlower position="top-left" size="lg" opacity={0.9} />
      <DecorativeFlower position="top-right-half" size="lg" opacity={0.9} />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={t("heading")}
          subheading={t("subheading")}
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:auto-rows-[220px] lg:auto-rows-[280px]">
          {/* Large featured image — spans 2 cols x 2 rows */}
          <div className="relative col-span-2 row-span-2 h-56 overflow-hidden rounded-2xl sm:h-auto">
            <Image src={img1.src} alt={img1.alt} fill className="object-cover" />
          </div>

          {/* 2x2 cluster */}
          <div className="relative h-28 overflow-hidden rounded-2xl sm:h-auto">
            <Image src={img2.src} alt={img2.alt} fill className="object-cover" />
          </div>
          <div className="relative h-28 overflow-hidden rounded-2xl sm:h-auto">
            <Image src={img3.src} alt={img3.alt} fill className="object-cover" />
          </div>
          <div className="relative h-28 overflow-hidden rounded-2xl sm:h-auto">
            <Image src={img4.src} alt={img4.alt} fill className="object-cover" />
          </div>
          <div className="relative h-28 overflow-hidden rounded-2xl sm:h-auto">
            <Image src={img5.src} alt={img5.alt} fill className="object-cover" />
          </div>

          {/* Bottom row: 2 regular + 1 double-width */}
          <div className="relative h-40 overflow-hidden rounded-2xl sm:h-auto">
            <Image src={img6.src} alt={img6.alt} fill className="object-cover" />
          </div>
          <div className="relative h-40 overflow-hidden rounded-2xl sm:h-auto">
            <Image src={img7.src} alt={img7.alt} fill className="object-cover" />
          </div>
          <div className="relative col-span-2 h-40 overflow-hidden rounded-2xl sm:h-auto">
            <Image src={img8.src} alt={img8.alt} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}