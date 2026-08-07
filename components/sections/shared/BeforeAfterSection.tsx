"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { beforeAfterResults } from "@/lib/content/beforeAfter";
import { treatments } from "@/lib/content/treatments";
import { treatmentsMegaMenu } from "@/lib/navigation";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { cardBaseClasses, CardDescriptionClasses, cardDividerClasses, cardHeadingClasses } from "@/lib/styles";

import "swiper/css";

interface BeforeAfterSectionProps {
  treatmentSlug?: string;
}

export function BeforeAfterSection({ treatmentSlug }: BeforeAfterSectionProps) {
  const t = useTranslations("beforeAfter");
  const locale = useLocale() as "en" | "ar";
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);
  const mobileSwiperRef = useRef<SwiperType | null>(null);
  const desktopSwiperRef = useRef<SwiperType | null>(null);

  const exactResults = treatmentSlug
    ? beforeAfterResults.filter((r) => r.treatmentSlug === treatmentSlug)
    : beforeAfterResults;

  let results = exactResults;
  let isFallback = false;

  if (treatmentSlug && exactResults.length === 0) {
    const currentTreatment = treatments.find((tr) => tr.slug === treatmentSlug);
    if (currentTreatment) {
      const sameCategorySlugs = treatments
        .filter((tr) => tr.categorySlug === currentTreatment.categorySlug)
        .map((tr) => tr.slug);

      const categoryResults = beforeAfterResults.filter((r) =>
        sameCategorySlugs.includes(r.treatmentSlug),
      );

      if (categoryResults.length > 0) {
        results = categoryResults;
        isFallback = true;
      }
    }
  }

  if (results.length === 0) return null;

  // Desktop dots represent "pages" of 4, matching slidesPerGroup below
  const desktopDotCount = Math.max(1, Math.ceil(results.length / 4));

  function goToMobileSlide(index: number) {
    mobileSwiperRef.current?.slideToLoop(index);
    setMobileIndex(index);
  }

  function goToDesktopPage(pageIndex: number) {
    desktopSwiperRef.current?.slideTo(pageIndex * 4);
    setDesktopIndex(pageIndex);
  }

  function getCategoryLabel(resultTreatmentSlug: string): string | null {
    const treatment = treatments.find((tr) => tr.slug === resultTreatmentSlug);
    if (!treatment) return null;
    const category = treatmentsMegaMenu.find(
      (c) => c.categorySlug === treatment.categorySlug,
    );
    return category?.title[locale] ?? null;
  }

  function renderCard(result: (typeof results)[number]) {
    const categoryLabel = getCategoryLabel(result.treatmentSlug);

    return (
      <div className={`flex h-full flex-col overflow-hidden ${cardBaseClasses}`}>
        {/* Before / After image pair */}
        <div className="grid grid-cols-2 gap-0.5">
          <div className="relative h-48 w-full">
            <Image
              src={result.beforeImage}
              alt={`${result.title[locale]} — ${t("beforeLabel")}`}
              fill
              sizes="(max-width: 640px) 42vw, (max-width: 1024px) 25vw, 12vw"
              className="object-cover"
            />
            <span className="absolute start-2 top-2 rounded-full bg-white/95 px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-wide text-primary">
              {t("beforeLabel")}
            </span>
          </div>
          <div className="relative h-48 w-full">
            <Image
              src={result.afterImage}
              alt={`${result.title[locale]} — ${t("afterLabel")}`}
              fill
              sizes="(max-width: 640px) 42vw, (max-width: 1024px) 25vw, 12vw"
              className="object-cover"
            />
            <span className="absolute end-2 top-2 rounded-full bg-white/95 px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-wide text-primary">
              {t("afterLabel")}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className={cardHeadingClasses}>{result.title[locale]}</h3>
          <div className={cardDividerClasses} />
          <p className={`${CardDescriptionClasses} pb-2 line-clamp-3`}>
            {result.description[locale]}
          </p>

          {categoryLabel && (
            <>
              <div className="mt-auto border-t border-border pt-3" />
              <span className="mt-3 font-body text-xs font-semibold uppercase tracking-wide text-secondary">
                {categoryLabel}
              </span>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <DecorativeFlower position="top-right" size="lg" opacity={0.9} />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          align="start"
          heading={
            <>
              {t("headingLine1")}{" "}
              <span className="text-primary">{t("headingLine2")}</span>
            </>
          }
          subheading={isFallback ? t("subheadingFallback") : t("subheading")}
        />

        {/* Mobile: single-card swiper with autoplay */}
        <div className="mt-12 sm:hidden">
          <Swiper
            key={`mobile-${results.length}`}
            dir={locale === "ar" ? "rtl" : "ltr"}
            modules={[Autoplay]}
            slidesPerView={1.15}
            spaceBetween={16}
            loop={results.length > 1}
            autoplay={
              results.length > 1
                ? { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }
                : false
            }
            onSwiper={(swiper) => {
              mobileSwiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setMobileIndex(swiper.realIndex);
            }}
          >
            {results.map((result) => (
              <SwiperSlide key={result.id}>{renderCard(result)}</SwiperSlide>
            ))}
          </Swiper>
        </div>
{results.length > 1 && (
  <div className="mt-6 hidden justify-center gap-2 sm:hidden">
    {results.map((_, i) => (
      <button
        key={i}
        onClick={() => goToMobileSlide(i)}
        aria-label={`Go to slide ${i + 1}`}
        className={`h-2 rounded-full cursor-pointer transition-all ${
          mobileIndex === i ? "w-6 bg-primary" : "w-2 bg-border"
        }`}
      />
    ))}
  </div>
)}

        {/* Desktop/tablet: multi-card swiper with autoplay */}
        <div className="mt-12 hidden sm:block">
          <Swiper
            key={`desktop-${results.length}`}
            dir={locale === "ar" ? "rtl" : "ltr"}
            modules={[Autoplay]}
            slidesPerGroup={4}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            loop={results.length > 4}
            autoplay={
              results.length > 4
                ? { delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }
                : false
            }
            onSwiper={(swiper) => {
              desktopSwiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setDesktopIndex(Math.floor(swiper.realIndex / 4));
            }}
            className="[&_.swiper-slide]:h-auto"
          >
            {results.map((result) => (
              <SwiperSlide key={result.id} className="h-auto">
                {renderCard(result)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

{desktopDotCount > 1 && (
  <div className="mt-6 hidden justify-center gap-2 lg:flex">
    {Array.from({ length: desktopDotCount }).map((_, i) => (
      <button
        key={i}
        onClick={() => goToDesktopPage(i)}
        aria-label={`Page ${i + 1}`}
        className={`h-2 rounded-full cursor-pointer transition-all ${
          desktopIndex === i ? "w-6 bg-primary" : "w-2 bg-border"
        }`}
      />
    ))}
  </div>
)}
      </div>
    </section>
  );
}