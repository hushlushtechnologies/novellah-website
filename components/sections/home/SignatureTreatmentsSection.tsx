//  "use client";

// import { useRef, useState } from "react";
// import { useTranslations, useLocale } from "next-intl";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { treatmentsMegaMenu } from "@/lib/navigation";
// import { treatments } from "@/lib/content/treatments";
// import { SectionHeader } from "@/components/ui/SectionHeader";
// import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
// import { TreatmentCard } from "@/components/ui/TreatmentCard";
// import { CategoryTabs } from "@/components/ui/CategoryTabs";

// import "swiper/css";
// import "swiper/css/navigation";

// const trustPoints = [
//   {
//     icon: "/images/icons/visible-results.svg",
//     titleKey: "trust1Title",
//     descKey: "trust1Desc",
//   },
//   {
//     icon: "/images/icons/safe-proven.svg",
//     titleKey: "trust2Title",
//     descKey: "trust2Desc",
//   },
//   {
//     icon: "/images/icons/personalized-care-3.svg",
//     titleKey: "trust3Title",
//     descKey: "trust3Desc",
//   },
//   {
//     icon: "/images/icons/premium-experience.svg",
//     titleKey: "trust4Title",
//     descKey: "trust4Desc",
//   },
// ] as const;

// // Reusable nav-arrow button — refCallback wires it into Swiper's
// // navigation.prevEl/nextEl via onBeforeInit below.
// function SwiperArrowButton({
//   direction,
//   refCallback,
//   ariaLabel,
//   className = "",
// }: {
//   direction: "prev" | "next";
//   refCallback: (el: HTMLButtonElement | null) => void;
//   ariaLabel: string;
//   className?: string;
// }) {
//   const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
//   return (
//     <button
//       ref={refCallback}
//       type="button"
//       aria-label={ariaLabel}
//       className={`flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
//     >
//       <Icon className="h-5 w-5" />
//     </button>
//   );
// }

// export function SignatureTreatmentsSection() {
//   const t = useTranslations("signatureTreatments");
//   const locale = useLocale() as "en" | "ar";
//   const [activeCategory, setActiveCategory] = useState(
//     treatmentsMegaMenu[0].categorySlug,
//   );
//   const [desktopIndex, setDesktopIndex] = useState(0);
//   const mobileSwiperRef = useRef<SwiperType | null>(null);
//   const desktopSwiperRef = useRef<SwiperType | null>(null);

//   // Nav button DOM refs — handed to Swiper's navigation config on init
//   const mobilePrevRef = useRef<HTMLButtonElement | null>(null);
//   const mobileNextRef = useRef<HTMLButtonElement | null>(null);
//   const desktopPrevRef = useRef<HTMLButtonElement | null>(null);
//   const desktopNextRef = useRef<HTMLButtonElement | null>(null);

//   const categoryTabs = treatmentsMegaMenu.map((category) => ({
//     id: category.categorySlug,
//     label: category.title[locale],
//   }));

//   const categoryTreatments = treatments.filter(
//     (tr) => tr.categorySlug === activeCategory,
//   );
//   const desktopDotCount = Math.max(1, Math.ceil(categoryTreatments.length / 4));

//   const showMobileArrows = categoryTreatments.length > 1;
//   const showDesktopArrows = categoryTreatments.length > 4;

//   // t() throws on a missing key rather than returning undefined, so a
//   // `?? "fallback"` never actually protects you — use t.has() instead.
//   const prevLabel = t.has("prevSlide") ? t("prevSlide") : "Previous";
//   const nextLabel = t.has("nextSlide") ? t("nextSlide") : "Next";

//   function selectCategory(slug: string) {
//     setActiveCategory(slug);
//     setDesktopIndex(0);
//     mobileSwiperRef.current?.slideTo(0);
//     desktopSwiperRef.current?.slideTo(0);
//   }

//   function goToDesktopPage(pageIndex: number) {
//     desktopSwiperRef.current?.slideTo(pageIndex * 4);
//     setDesktopIndex(pageIndex);
//   }

//   return (
//     <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
//       <DecorativeFlower />
//       <div className="mx-auto max-w-7xl">
//         <SectionHeader
//           eyebrow={t("eyebrow")}
//           heading={
//             <>
//               {t("headingLine1")}{" "}
//               <span className="text-primary">{t("headingLine2")}</span>
//             </>
//           }
//           subheading={t("subheading")}
//           ctaLabel={t("ctaViewAll")}
//           ctaHref="/treatments"
//         />

//         {/* Trust points */}
//         <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
//           {trustPoints.map((point) => (
//             <div key={point.titleKey} className="flex items-start gap-3">
//               <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/40 shadow-soft">
//                 <Image src={point.icon} alt="" width={18} height={18} />
//               </span>
//               <div>
//                 <p className="font-body text-sm font-semibold text-foreground">
//                   {t(point.titleKey)}
//                 </p>
//                 <p className="mt-2 font-body text-xs text-muted-foreground">
//                   {t(point.descKey)}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Category tabs */}
//         <CategoryTabs
//           className="mt-8 sm:mt-12"
//           items={categoryTabs}
//           activeId={activeCategory}
//           onChange={selectCategory}
//         />

//         {/* Mobile: one-card-at-a-time swiper with autoplay + arrows below */}
//         <div className="mt-10 sm:hidden">
//           <Swiper
//             key={`mobile-${activeCategory}`}
//             dir={locale === "ar" ? "rtl" : "ltr"}
//             modules={[Autoplay, Navigation]}
//             slidesPerView={1.15}
//             spaceBetween={16}
//             // loop={categoryTreatments.length > 1}
//             loop={false}
//             autoplay={
//               categoryTreatments.length > 1
//                 ? { delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }
//                 : false
//             }
//             navigation={
//               showMobileArrows
//                 ? { prevEl: mobilePrevRef.current, nextEl: mobileNextRef.current }
//                 : false
//             }
//             onBeforeInit={(swiper) => {
//               if (
//                 showMobileArrows &&
//                 typeof swiper.params.navigation !== "boolean" &&
//                 swiper.params.navigation
//               ) {
//                 swiper.params.navigation.prevEl = mobilePrevRef.current;
//                 swiper.params.navigation.nextEl = mobileNextRef.current;
//               }
//             }}
//             onSwiper={(swiper) => {
//               mobileSwiperRef.current = swiper;
//             }}
//           >
//             {categoryTreatments.map((treatment) => (
//               <SwiperSlide key={treatment.slug}>
//                 <TreatmentCard
//                   treatment={treatment}
//                   locale={locale}
//                   durationUnit={t("durationUnit")}
//                   ctaLabel={t("ctaExplore")}
//                   className="h-full"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {showMobileArrows && (
//             <div className="mt-6 flex justify-center gap-3">
//               <SwiperArrowButton
//                 direction="prev"
//                 refCallback={(el) => {
//                   mobilePrevRef.current = el;
//                 }}
//                 ariaLabel={prevLabel}
//               />
//               <SwiperArrowButton
//                 direction="next"
//                 refCallback={(el) => {
//                   mobileNextRef.current = el;
//                 }}
//                 ariaLabel={nextLabel}
//               />
//             </div>
//           )}
//         </div>

//         {/* Tablet/desktop: page-at-a-time swiper with autoplay + overlaid arrows */}
//         <div className="relative mt-10 hidden sm:block">
//          <Swiper
//   key={`desktop-${activeCategory}`}
//   dir={locale === "ar" ? "rtl" : "ltr"}
//   modules={[Autoplay, Navigation]}
//   slidesPerGroup={4}
//   spaceBetween={24}
//   breakpoints={{
//     640: { slidesPerView: 2 },
//     1024: { slidesPerView: 4 },
//   }}
//   // loop={categoryTreatments.length > 4}
//   loop={false}
//   autoplay={
//     categoryTreatments.length > 4
//       ? { delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }
//       : false
//   }
//   navigation={
//     showDesktopArrows
//       ? { prevEl: desktopPrevRef.current, nextEl: desktopNextRef.current }
//       : false
//   }
//   onBeforeInit={(swiper) => {
//     if (
//       showDesktopArrows &&
//       typeof swiper.params.navigation !== "boolean" &&
//       swiper.params.navigation
//     ) {
//       swiper.params.navigation.prevEl = desktopPrevRef.current;
//       swiper.params.navigation.nextEl = desktopNextRef.current;
//     }
//   }}
//   onSwiper={(swiper) => {
//     desktopSwiperRef.current = swiper;
//   }}
//   onSlideChange={(swiper) => {
//     setDesktopIndex(
//       swiper.isEnd ? desktopDotCount - 1 : Math.floor(swiper.realIndex / 4),
//     );
//   }}
//   className="[&_.swiper-slide]:h-auto"
// >
//   {categoryTreatments.map((treatment) => (
//     <SwiperSlide key={treatment.slug} className="h-auto">
//       <TreatmentCard
//         treatment={treatment}
//         locale={locale}
//         durationUnit={t("durationUnit")}
//         ctaLabel={t("ctaExplore")}
//         className="h-full"
//       />
//     </SwiperSlide>
//   ))}
// </Swiper>

//           {showDesktopArrows && (
//             <>
//               <SwiperArrowButton
//                 direction="prev"
//                 refCallback={(el) => {
//                   desktopPrevRef.current = el;
//                 }}
//                 ariaLabel={prevLabel}
//                 className="absolute top-1/2 -left-5 z-10 -translate-y-1/2 rtl:right-[-1.25rem] rtl:left-auto"
//               />
//               <SwiperArrowButton
//                 direction="next"
//                 refCallback={(el) => {
//                   desktopNextRef.current = el;
//                 }}
//                 ariaLabel={nextLabel}
//                 className="absolute top-1/2 -right-5 z-10 -translate-y-1/2 rtl:left-[-1.25rem] rtl:right-auto"
//               />
//             </>
//           )}
//         </div>

//         {/* Pagination dots — desktop/tablet only, hidden on mobile */}
//         {desktopDotCount > 1 && (
//           <div className="mt-8 hidden justify-center gap-2 sm:flex">
//             {Array.from({ length: desktopDotCount }).map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => goToDesktopPage(i)}
//                 aria-label={`Page ${i + 1}`}
//                 className={`h-2 rounded-full cursor-pointer transition-all ${
//                   desktopIndex === i ? "w-6 bg-primary" : "w-2 bg-border"
//                 }`}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }








"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { treatmentsMegaMenu } from "@/lib/navigation";
import { treatments } from "@/lib/content/treatments";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { DecorativeFlower } from "@/components/ui/DecorativeFlower";
import { TreatmentCard } from "@/components/ui/TreatmentCard";
import { CategoryTabs } from "@/components/ui/CategoryTabs";

import "swiper/css";
import "swiper/css/navigation";

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

// Reusable nav-arrow button — refCallback hands the mounted DOM node up to
// the parent as STATE (not a plain ref), so the parent re-renders once the
// button actually exists and Swiper's `navigation` prop can be built with
// real elements instead of null on first paint.
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

export function SignatureTreatmentsSection() {
  const t = useTranslations("signatureTreatments");
  const locale = useLocale() as "en" | "ar";
  const [activeCategory, setActiveCategory] = useState(
    treatmentsMegaMenu[0].categorySlug,
  );
  const [desktopIndex, setDesktopIndex] = useState(0);

  // Swiper instances (imperative control only — fine as plain state, we
  // never need to react to these changing).
  const [mobileSwiper, setMobileSwiper] = useState<SwiperType | null>(null);
  const [desktopSwiper, setDesktopSwiper] = useState<SwiperType | null>(null);

  // Nav button DOM nodes — MUST be React state, not useRef. Swiper's
  // `navigation` prop is evaluated on the render that mounts <Swiper>, and
  // a plain ref's .current is still null at that point (refs don't cause
  // re-renders). Using state means once the buttons mount, we re-render
  // and pass real elements into `navigation`, so Swiper wires them up
  // correctly instead of silently disabling the module.
  const [mobilePrevEl, setMobilePrevEl] = useState<HTMLButtonElement | null>(
    null,
  );
  const [mobileNextEl, setMobileNextEl] = useState<HTMLButtonElement | null>(
    null,
  );
  const [desktopPrevEl, setDesktopPrevEl] =
    useState<HTMLButtonElement | null>(null);
  const [desktopNextEl, setDesktopNextEl] =
    useState<HTMLButtonElement | null>(null);

  const categoryTabs = treatmentsMegaMenu.map((category) => ({
    id: category.categorySlug,
    label: category.title[locale],
  }));

  const categoryTreatments = treatments.filter(
    (tr) => tr.categorySlug === activeCategory,
  );
  const desktopDotCount = Math.max(1, Math.ceil(categoryTreatments.length / 4));

  const showMobileArrows = categoryTreatments.length > 1;
  const showDesktopArrows = categoryTreatments.length > 4;

  // t() throws on a missing key rather than returning undefined, so a
  // `?? "fallback"` never actually protects you — use t.has() instead.
  const prevLabel = t.has("prevSlide") ? t("prevSlide") : "Previous";
  const nextLabel = t.has("nextSlide") ? t("nextSlide") : "Next";

  function selectCategory(slug: string) {
    setActiveCategory(slug);
    setDesktopIndex(0);
    mobileSwiper?.slideTo(0);
    desktopSwiper?.slideTo(0);
  }

  function goToDesktopPage(pageIndex: number) {
    desktopSwiper?.slideTo(pageIndex * 4);
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

        {/* Mobile: one-card-at-a-time swiper with autoplay + arrows below */}
        <div className="mt-10 sm:hidden">
          <Swiper
            key={`mobile-${activeCategory}`}
            dir={locale === "ar" ? "rtl" : "ltr"}
            modules={[Autoplay, Navigation]}
            slidesPerView={1.15}
            spaceBetween={16}
            loop={false}
            autoplay={
              categoryTreatments.length > 1
                ? {
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            // Only pass real elements — never null — so Swiper doesn't
            // initialize with navigation disabled and then never recover.
            navigation={
              showMobileArrows && mobilePrevEl && mobileNextEl
                ? { prevEl: mobilePrevEl, nextEl: mobileNextEl }
                : false
            }
            onSwiper={setMobileSwiper}
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

          {showMobileArrows && (
            <div className="mt-6 flex justify-center gap-3">
              <SwiperArrowButton
                direction="prev"
                refCallback={setMobilePrevEl}
                ariaLabel={prevLabel}
              />
              <SwiperArrowButton
                direction="next"
                refCallback={setMobileNextEl}
                ariaLabel={nextLabel}
              />
            </div>
          )}
        </div>

        {/* Tablet/desktop: page-at-a-time swiper with autoplay + overlaid arrows */}
        <div className="relative mt-10 hidden sm:block">
          <Swiper
            key={`desktop-${activeCategory}`}
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
              categoryTreatments.length > 4
                ? {
                    delay: 4500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            navigation={
              showDesktopArrows && desktopPrevEl && desktopNextEl
                ? { prevEl: desktopPrevEl, nextEl: desktopNextEl }
                : false
            }
            onSwiper={setDesktopSwiper}
            onSlideChange={(swiper) => {
              setDesktopIndex(
                swiper.isEnd
                  ? desktopDotCount - 1
                  : Math.floor(swiper.realIndex / 4),
              );
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

          {showDesktopArrows && (
            <>
              <SwiperArrowButton
                direction="prev"
                refCallback={setDesktopPrevEl}
                ariaLabel={prevLabel}
                className="absolute top-1/2 -left-5 z-10 -translate-y-1/2 rtl:right-[-1.25rem] rtl:left-auto"
              />
              <SwiperArrowButton
                direction="next"
                refCallback={setDesktopNextEl}
                ariaLabel={nextLabel}
                className="absolute top-1/2 -right-5 z-10 -translate-y-1/2 rtl:left-[-1.25rem] rtl:right-auto"
              />
            </>
          )}
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