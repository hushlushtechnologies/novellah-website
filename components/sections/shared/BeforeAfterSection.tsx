 "use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { beforeAfterResults } from "@/lib/content/beforeAfter";
import { treatments } from "@/lib/content/treatments";
import { treatmentsMegaMenu } from "@/lib/navigation";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { cardBaseClasses, CardDescriptionClasses, cardDividerClasses, cardHeadingClasses } from "@/lib/styles";

import "swiper/css";
import "swiper/css/navigation";

interface BeforeAfterSectionProps {
  treatmentSlug?: string;
}

// Reusable nav-arrow button — refCallback wires it into Swiper's
// navigation.prevEl/nextEl via onBeforeInit below.
function SwiperArrowButton({
  direction,
  refCallback,
  ariaLabel,
  className = "",
}: {
  direction: "prev" | "next";
  refCallback: (el: HTMLButtonElement | null) => void;
  ariaLabel: string;
  className?: string;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      ref={refCallback}
      type="button"
      aria-label={ariaLabel}
      className={`flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}

export function BeforeAfterSection({ treatmentSlug }: BeforeAfterSectionProps) {
  const t = useTranslations("beforeAfter");
  const locale = useLocale() as "en" | "ar";
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);
  const mobileSwiperRef = useRef<SwiperType | null>(null);
  const desktopSwiperRef = useRef<SwiperType | null>(null);

  // Nav button DOM refs — handed to Swiper's navigation config on init
  const mobilePrevRef = useRef<HTMLButtonElement | null>(null);
  const mobileNextRef = useRef<HTMLButtonElement | null>(null);
  const desktopPrevRef = useRef<HTMLButtonElement | null>(null);
  const desktopNextRef = useRef<HTMLButtonElement | null>(null);

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

  const showMobileArrows = results.length > 1;
  const showDesktopArrows = results.length > 4;

  // t() throws on a missing key rather than returning undefined, so a
  // `?? "fallback"` never actually protects you — use t.has() instead.
  const prevLabel = t.has("prevSlide") ? t("prevSlide") : "Previous";
  const nextLabel = t.has("nextSlide") ? t("nextSlide") : "Next";

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
      <div className={`flex h-full min-h-[380px] flex-col overflow-hidden ${cardBaseClasses}`}>
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
          <h3 className={`${cardHeadingClasses} line-clamp-2 h-[2rem]`}>
            {result.title[locale]}
          </h3>
          <div className={cardDividerClasses} />
          <p className={`${CardDescriptionClasses} h-[4.5rem] pb-2 line-clamp-3`}>
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

        {/* Mobile: single-card swiper with autoplay + arrows below */}
        <div className="mt-12 sm:hidden">
          <Swiper
            key={`mobile-${results.length}`}
            dir={locale === "ar" ? "rtl" : "ltr"}
            modules={[Autoplay, Navigation]}
            slidesPerView={1.15}
            spaceBetween={16}
            loop={false}
            autoplay={
              results.length > 1
                ? { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }
                : false
            }
            navigation={
              showMobileArrows
                ? { prevEl: mobilePrevRef.current, nextEl: mobileNextRef.current }
                : false
            }
            onBeforeInit={(swiper) => {
              if (
                showMobileArrows &&
                typeof swiper.params.navigation !== "boolean" &&
                swiper.params.navigation
              ) {
                swiper.params.navigation.prevEl = mobilePrevRef.current;
                swiper.params.navigation.nextEl = mobileNextRef.current;
              }
            }}
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

          {showMobileArrows && (
            <div className="mt-6 flex justify-center gap-3">
              <SwiperArrowButton
                direction="prev"
                refCallback={(el) => {
                  mobilePrevRef.current = el;
                }}
                ariaLabel={prevLabel}
              />
              <SwiperArrowButton
                direction="next"
                refCallback={(el) => {
                  mobileNextRef.current = el;
                }}
                ariaLabel={nextLabel}
              />
            </div>
          )}
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

        {/* Desktop/tablet: multi-card swiper with autoplay + overlaid arrows */}
        <div className="relative mt-12 hidden sm:block">
       <Swiper
  key={`desktop-${results.length}`}
  dir={locale === "ar" ? "rtl" : "ltr"}
  modules={[Autoplay, Navigation]}
  slidesPerGroup={4}
  spaceBetween={24}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  }}
  loop={false}
  autoplay={
    results.length > 4
      ? { delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }
      : false
  }
  navigation={
    showDesktopArrows
      ? { prevEl: desktopPrevRef.current, nextEl: desktopNextRef.current }
      : false
  }
  onBeforeInit={(swiper) => {
    if (
      showDesktopArrows &&
      typeof swiper.params.navigation !== "boolean" &&
      swiper.params.navigation
    ) {
      swiper.params.navigation.prevEl = desktopPrevRef.current;
      swiper.params.navigation.nextEl = desktopNextRef.current;
    }
  }}
  onSwiper={(swiper) => {
    desktopSwiperRef.current = swiper;
  }}
  onSlideChange={(swiper) => {
    setDesktopIndex(
      swiper.isEnd ? desktopDotCount - 1 : Math.floor(swiper.realIndex / 4),
    );
  }}
  className="[&_.swiper-slide]:h-auto"
>
  {results.map((result) => (
    <SwiperSlide key={result.id} className="h-auto">
      {renderCard(result)}
    </SwiperSlide>
  ))}
</Swiper>

          {showDesktopArrows && (
            <>
              <SwiperArrowButton
                direction="prev"
                refCallback={(el) => {
                  desktopPrevRef.current = el;
                }}
                ariaLabel={prevLabel}
                className="absolute top-1/2 -left-5 z-10 -translate-y-1/2 rtl:right-[-1.25rem] rtl:left-auto"
              />
              <SwiperArrowButton
                direction="next"
                refCallback={(el) => {
                  desktopNextRef.current = el;
                }}
                ariaLabel={nextLabel}
                className="absolute top-1/2 -right-5 z-10 -translate-y-1/2 rtl:left-[-1.25rem] rtl:right-auto"
              />
            </>
          )}
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