import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowRight, Phone, MapPin, Clock, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { NewsletterForm } from "./NewsletterForm";

export async function FinalCtaSection() {
  const t = await getTranslations("finalCta");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* CTA banner */}
        <div className="grid items-center gap-8 rounded-3xl bg-gradient-background p-6 sm:p-10 lg:grid-cols-2 lg:gap-10">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1 rounded-full w-10 bg-secondary" />
               <Sparkle size={10} className="text-secondary sm:size-3" fill="currentColor" />
              <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                {t("eyebrow")}
              </p>
               <Sparkle size={10} className="text-secondary sm:size-3" fill="currentColor" />
              <div className="h-1 rounded-full w-10 bg-secondary" />
            </div>

            <h2 className="font-heading font-extrabold text-4xl leading-tight text-foreground sm:text-5xl">
              {t("headingLine1Prefix")} <span className="text-primary">{t("headingLine1Highlight")}</span>
              <br />
              {t("headingLine2Prefix")} <span className="text-secondary">{t("headingLine2Highlight")}</span>
            </h2>

            <p className="mt-4 font-semibold font-body text-sm text-muted-foreground sm:text-base">
              {t("subheading")}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                href="/book-appintment"
                variant="solid"
                icon={<ArrowRight size={16} />}
                className="w-full justify-center sm:w-fit"
              >
                {t("ctaBook")}
              </Button>
              <Button
                href="/contact-us"
                variant="outline"
                className="w-full justify-center sm:w-fit"
              >
                {t("ctaContact")}
              </Button>
            </div>
          </div>

          <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72 lg:h-80">
            <Image src="/images/final-cta-room.png" alt="" fill className="object-cover" />
          </div>
        </div>

        {/* Newsletter */}
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <h3 className="font-heading font-extrabold text-2xl text-foreground sm:text-3xl">
                {t("newsletterHeadingPrefix")}{" "}
                <span className="text-secondary">{t("newsletterHeadingHighlight")}</span>{" "}
                {t("newsletterHeadingSuffix")}
              </h3>
              <p className="mt-3 font-body text-sm text-muted-foreground">
                {t("newsletterBody")}
              </p>
            </div>

            <NewsletterForm
              emailLabel={t("emailLabel")}
              emailPlaceholder={t("emailPlaceholder")}
              ctaSubscribe={t("ctaSubscribe")}
              disclaimer={t("newsletterDisclaimer")}
            />
          </div>
        </div>

        {/* Contact info strip */}
        <div className="rounded-3xl bg-drmsg px-6 py-8 sm:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-center lg:gap-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Phone size={18} className="text-white" />
              </span>
              <div>
                <p className="font-body font-bold text-xs uppercase tracking-wide text-white">
                  {t("callLabel")}
                </p>
                <p className="font-body text-sm font-semibold text-white">{t("phone")}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                <MapPin size={18} className="text-white" />
              </span>
              <div>
                <p className="font-body font-bold text-xs uppercase tracking-wide text-white">
                  {t("visitLabel")}
                </p>
                <p className="font-body text-sm font-semibold text-white">{t("address")}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Clock size={18} className="text-white" />
              </span>
              <div>
                <p className="font-body font-bold text-xs uppercase tracking-wide text-white">
                  {t("hoursLabel")}
                </p>
                <p className="font-body text-sm font-semibold text-white">
                  {t("hours")} <span className="block sm:inline">{t("hoursSubtext")}</span>
                </p>
              </div>
            </div>

            <p className="font-heading  font bold text-lg text-secondary lg:text-end">
              {t("welcomeNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}