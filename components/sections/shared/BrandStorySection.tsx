 import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { BrainCircuit, Eye, Quote, Sparkle } from "lucide-react";

export async function BrandStorySection() {
  const t = await getTranslations("brandStory");

  return (
    <section className="relative overflow-hidden bg-drbg px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center justify-center gap-2 sm:mb-10">
          <div className="h-1 w-6 rounded-full bg-secondary sm:w-10" />
          <Sparkle size={10} className="text-secondary sm:size-3" fill="currentColor" />
          <p className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-secondary sm:text-xs sm:tracking-[0.6em]">
            {t("eyebrow")}
          </p>
          <Sparkle size={10} className="text-secondary sm:size-3" fill="currentColor" />
          <div className="h-1 w-6 rounded-full bg-secondary sm:w-10" />
        </div>

        {/* Philosophy & Vision */}
        <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-drbglight p-5 sm:p-10 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-10">
          {/* Philosophy */}
          <div className="text-center">
            <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-drbg sm:h-12 sm:w-12">
              <BrainCircuit size={18} className="text-secondary sm:size-5" />
            </span>
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              {t("philosophyLabel")}
            </p>
            <h3 className="mt-3 font-heading text-2xl font-extrabold leading-snug text-white sm:text-3xl">
              {t("philosophyHeadingLine1")}
              <br />
              {t("philosophyHeadingLine2")}
              <br />
              <span className="text-primary">{t("philosophyHeadingHighlight")}</span>
            </h3>

            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="h-1 w-8 rounded-full bg-secondary sm:w-12" />
              <Sparkle size={12} className="text-secondary" fill="currentColor" />
              <div className="h-1 w-8 rounded-full bg-secondary sm:w-12" />
            </div>

            <p className="mt-4 font-body text-sm font-bold text-white">
              {t("philosophyTagline")}
            </p>
            <p className="mt-2 font-body text-xs text-white/60">{t("philosophyBody")}</p>
          </div>

          {/* Center image */}
          <div className="relative mx-auto h-56 w-full max-w-sm overflow-hidden rounded-2xl sm:h-72 lg:h-96">
            <Image
              src="/images/philosophy-treatment-room.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Vision */}
          <div className="text-center">
            <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-drbg sm:h-12 sm:w-12">
              <Eye size={18} className="text-secondary sm:size-5" />
            </span>
            <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-secondary">
              {t("visionLabel")}
            </p>
            <p className="mt-4 font-body text-sm font-bold leading-relaxed text-white/90">
              {t("visionBodyPart1")}
              <span className="text-primary">{t("visionBodyHighlight1")}</span>
              {t("visionBodyPart2")}
              <span className="text-primary">{t("visionBodyHighlight2")}</span>
            </p>

            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="h-1 w-8 rounded-full bg-secondary sm:w-12" />
              <Sparkle size={12} className="text-secondary" fill="currentColor" />
              <div className="h-1 w-8 rounded-full bg-secondary sm:w-12" />
            </div>
          </div>
        </div>

        {/* CEO Message */}
        <div className="mt-10 grid items-center gap-8 sm:mt-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <p className="font-body text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary sm:text-xs sm:tracking-[0.6em]">
                {t("ceoLabel")}
              </p>
              <div className="h-1 max-w-24 flex-1 rounded-full bg-secondary" />
              <Sparkle size={12} className="text-secondary" fill="currentColor" />
            </div>

            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {t("ceoHeadingLine1")} {t("ceoHeadingLine2From")}{" "}
              <span className="text-secondary">{t("ceoHeadingHighlight")}</span>
            </h2>

            <div className="relative mt-6 py-6">
              {/* Top border */}
              <div className="absolute top-0 start-8 end-12 h-px translate-y-1.5 bg-white/10 sm:start-10 sm:end-14" />

              {/* Bottom border */}
              <div className="absolute bottom-0 start-6 end-6 h-px bg-white/10 sm:start-8 sm:end-8" />

              <Quote
                size={32}
                className="absolute -top-2   start-0 text-primary/30 sm:size-10"
                fill="currentColor"
              />

              <div className="px-6 sm:px-8 lg:px-10">
                <p className="font-body text-sm text-white/80">{t("ceoQuote1")}</p>
                <p className="mt-4 font-body text-sm text-white/80">{t("ceoQuote2")}</p>
                <p className="mt-4 font-body text-sm text-white/80">{t("ceoQuote3")}</p>
              </div>

              <Quote
                size={32}
                className="absolute -bottom-5 lg:-right-2 end-0 rotate-180 text-primary/30 sm:-bottom-5 sm:size-10"
                fill="currentColor"
              />
            </div>
          </div>

          {/* CEO photo with name badge */}
          <div className="relative mx-auto h-[320px] w-full max-w-sm overflow-hidden rounded-3xl border-2 border-secondary/50 p-2 sm:h-[420px]">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/dr frame.png"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-full bg-primary/90 px-4 py-2.5 text-center backdrop-blur-sm sm:px-6 sm:py-3">
                <p className="font-heading text-lg font-extrabold text-secondary sm:text-xl">
                  {t("ceoName")}
                </p>
                <p className="font-body text-xs text-white">{t("ceoTitle")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing banner */}
        <div className="mt-10 rounded-2xl bg-drmsg px-5 py-6 text-center sm:mt-16 sm:px-6 sm:py-8">
          <h3 className="font-heading text-xl font-bold text-secondary sm:text-2xl lg:text-3xl">
            {t("bannerHeading")}
          </h3>
          <p className="mt-2 font-body text-sm text-white">{t("bannerSubtext")}</p>
        </div>
      </div>
    </section>
  );
}