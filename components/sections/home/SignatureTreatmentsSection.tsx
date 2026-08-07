 "use client";

import { useRef, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { treatmentsMegaMenu } from "@/lib/navigation";
import { treatments } from "@/lib/content/treatments";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { TreatmentCard } from "@/components/ui/TreatmentCard";
import { CategoryTabs } from "@/components/ui/CategoryTabs";

import "swiper/css";

const trustPoints = [
  {
    icon: "/images/icons/visible-results.svg",
    titleKey: "trust1Title",
    descKey: "trust1Desc",
  },
  {
    icon: "/images/icons/safe-proven.svg",
    titleKey: "trust2Title",
    descKey: "trust2Desc",
  },
  {
    icon: "/images/icons/personalized-care-3.svg",
    titleKey: "trust3Title",
    descKey: "trust3Desc",
  },
  {
    icon: "/images/icons/premium-experience.svg",
    titleKey: "trust4Title",
    descKey: "trust4Desc",
  },
] as const;

export function SignatureTreatmentsSection() {
  const t = useTranslations("signatureTreatments");
  const locale = useLocale() as "en" | "ar";
  const [activeCategory, setActiveCategory] = useState(
    treatmentsMegaMenu[0].categorySlug,
  );
  const [desktopIndex, setDesktopIndex] = useState(0);
  const mobileSwiperRef = useRef<SwiperType | null>(null);
  const desktopSwiperRef = useRef<SwiperType | null>(null);

  const categoryTabs = treatmentsMegaMenu.map((category) => ({
    id: category.categorySlug,
    label: category.title[locale],
  }));

  const categoryTreatments = treatments.filter(
    (tr) => tr.categorySlug === activeCategory,
  );
  const desktopDotCount = Math.max(1, Math.ceil(categoryTreatments.length / 4));

  function selectCategory(slug: string) {
    setActiveCategory(slug);
    setDesktopIndex(0);
    mobileSwiperRef.current?.slideTo(0);
    desktopSwiperRef.current?.slideTo(0);
  }

  function goToDesktopPage(pageIndex: number) {
    desktopSwiperRef.current?.slideTo(pageIndex * 4);
    setDesktopIndex(pageIndex);
  }

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <DecorativeFlower />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={
            <>
              {t("headingLine1")}{" "}
              <span className="text-primary">{t("headingLine2")}</span>
            </>
          }
          subheading={t("subheading")}
          ctaLabel={t("ctaViewAll")}
          ctaHref="/treatments"
        />

        {/* Trust points */}
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.titleKey} className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/40 shadow-soft">
                <Image src={point.icon} alt="" width={18} height={18} />
              </span>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">
                  {t(point.titleKey)}
                </p>
                <p className="mt-2 font-body text-xs text-muted-foreground">
                  {t(point.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Category tabs */}
        <CategoryTabs
          className="mt-8 sm:mt-12"
          items={categoryTabs}
          activeId={activeCategory}
          onChange={selectCategory}
        />

        {/* Mobile: one-card-at-a-time swiper with autoplay */}
        <div className="mt-10 sm:hidden">
          <Swiper
            key={`mobile-${activeCategory}`}
            dir={locale === "ar" ? "rtl" : "ltr"}
            modules={[Autoplay]}
            slidesPerView={1.15}
            spaceBetween={16}
            loop={categoryTreatments.length > 1}
            autoplay={
              categoryTreatments.length > 1
                ? { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }
                : false
            }
            onSwiper={(swiper) => {
              mobileSwiperRef.current = swiper;
            }}
          >
            {categoryTreatments.map((treatment) => (
              <SwiperSlide key={treatment.slug}>
                <TreatmentCard
                  treatment={treatment}
                  locale={locale}
                  durationUnit={t("durationUnit")}
                  ctaLabel={t("ctaExplore")}
                  className="h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Tablet/desktop: page-at-a-time swiper with autoplay */}
        <div className="mt-10 hidden sm:block">
          <Swiper
            key={`desktop-${activeCategory}`}
            dir={locale === "ar" ? "rtl" : "ltr"}
            modules={[Autoplay]}
            slidesPerGroup={4}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            loop={categoryTreatments.length > 4}
            autoplay={
              categoryTreatments.length > 4
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
            {categoryTreatments.map((treatment) => (
              <SwiperSlide key={treatment.slug} className="h-auto">
                <TreatmentCard
                  treatment={treatment}
                  locale={locale}
                  durationUnit={t("durationUnit")}
                  ctaLabel={t("ctaExplore")}
                  className="h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pagination dots — desktop/tablet only, hidden on mobile */}
        {desktopDotCount > 1 && (
          <div className="mt-8 hidden justify-center gap-2 sm:flex">
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