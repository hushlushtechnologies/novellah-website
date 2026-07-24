 import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { Phone, Mail, MapPin, HelpCircle, Clock, Sparkle } from "lucide-react";
import { navLinks, treatmentsMegaMenu } from "@/lib/navigation";

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const locale = (await getLocale()) as "en" | "ar";

  return (
    <footer className="bg-drbg px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div className="border-e-0 pe-0 sm:col-span-2 lg:col-span-1 lg:border-e lg:pe-1">
            <Image src="/images/logo-white.png" alt="Novellah" width={100} height={44} />
            <p className="mt-4 font-body text-sm text-white/70">{t("tagline")}</p>

            <div className="mt-4 flex items-center gap-2">
              <div className="h-1 w-10 rounded-full bg-secondary sm:w-18" />
              <Sparkle size={10} className="text-secondary sm:size-3" fill="currentColor" />
              <div className="h-1 w-10 rounded-full bg-secondary sm:w-18" />
            </div>

            <div className="mt-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-secondary/40">
                  <Phone size={15} className="text-secondary" />
                </span>
                <p className="font-body text-sm text-white">{t("phone")}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-secondary/40">
                  <Mail size={15} className="text-secondary" />
                </span>
                <p className="font-body text-sm text-white">{t("email")}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-secondary/40">
                  <MapPin size={15} className="text-secondary" />
                </span>
                <p className="font-body text-sm text-white">{t("address")}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="border-e-0 pe-0 lg:border-e lg:pe-1">
            <h3 className="font-body text-sm font-semibold uppercase tracking-wide text-secondary">
              {t("quickLinksHeading")}
            </h3>
            <div className="mt-2 mb-4 flex items-center gap-2">
              <div className="h-1 w-8 rounded-full bg-secondary" />
              <Sparkle size={10} className="text-secondary sm:size-3" fill="currentColor" />
            </div>
            <ul className="space-y-3">
             <li>
  <a href="/" className="font-body text-sm text-white/80 hover:text-white">
    {t("homeLabel")}
  </a>
</li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-body text-sm text-white/80 hover:text-white">
                    {tNav(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Treatments */}
          <div className="border-e-0 pe-0 lg:border-e lg:pe-1">
            <h3 className="font-body text-sm font-semibold uppercase tracking-wide text-secondary">
              {t("treatmentsHeading")}
            </h3>
            <div className="mt-2 mb-4 flex items-center gap-2">
              <div className="h-1 w-8 rounded-full bg-secondary" />
              <Sparkle size={10} className="text-secondary sm:size-3" fill="currentColor" />
            </div>
            <ul className="space-y-3">
              {treatmentsMegaMenu.map((category) => (
                <li key={category.categorySlug}>
                  <a
                    href={`/treatments/${category.categorySlug}`}
                    className="font-body text-sm text-white/80 hover:text-white"
                  >
                    {category.title[locale]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="border-e-0 pe-0 lg:border-e lg:pe-1">
            <h3 className="font-body text-sm font-semibold uppercase tracking-wide text-secondary">
              {t("customerCareHeading")}
            </h3>
            <div className="mt-2 mb-4 flex items-center gap-2">
              <div className="h-1 w-8 rounded-full bg-secondary" />
              <Sparkle size={10} className="text-secondary sm:size-3" fill="currentColor" />
            </div>
            <ul className="space-y-3">
              <li>
                <a href="/book-appintment" className="font-body text-sm text-white/80 hover:text-white">
                  {t("careBookAppointment")}
                </a>
              </li>
              <li>
                <a href="/faqs" className="font-body text-sm text-white/80 hover:text-white">
                  {t("careFaqs")}
                </a>
              </li>
              <li>
                <a href="/contact-us" className="font-body text-sm text-white/80 hover:text-white">
                  {t("careContactUs")}
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="font-body text-sm text-white/80 hover:text-white">
                  {t("carePrivacyPolicy")}
                </a>
              </li>
            </ul>
          </div>

          {/* We Are Here For You */}
          <div>
            <h3 className="font-body text-sm font-semibold uppercase tracking-wide text-secondary">
              {t("hereForYouHeading")}
            </h3>
            <div className="mt-2 mb-4 flex items-center gap-2">
              <div className="h-1 w-8 rounded-full bg-secondary" />
              <Sparkle size={10} className="text-secondary sm:size-3" fill="currentColor" />
            </div>

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary/40">
              <HelpCircle size={18} className="text-secondary" />
            </span>

            <p className="mt-4 font-body text-sm text-white/70">{t("questionPrompt")}</p>
            <p className="font-body text-sm text-white/70">{t("questionSubtext")}</p>

            
            <a  href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-secondary px-5 py-2.5 font-body text-sm font-semibold text-secondary"
            >
              {t("ctaWhatsapp")}
            </a>

            <div className="mt-6 flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-secondary/40">
                <Clock size={16} className="text-secondary" />
              </span>
              <div>
                <p className="font-body text-xs uppercase tracking-wide text-white/50">
                  {t("hoursLabel")}
                </p>
                <p className="font-body text-sm font-semibold text-white">{t("hours")}</p>
                <p className="font-body text-sm font-semibold text-white">{t("hoursSubtext")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-4 border-t-2 border-secondary pt-6 sm:mt-12 sm:flex-row sm:justify-between">
          <p className="text-center font-body text-xs text-white/50 sm:text-start">
            {t("copyright")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
  <Image
    src="/images/payment/koko.png"
    className="rounded-lg border border-secondary/30 bg-white/5 p-3"
    alt="Koko"
    width={64}
    height={40}
  />
  <Image
    src="/images/payment/visa.svg"
    className="rounded-lg border border-secondary/30 bg-white/5 p-3"
    alt="Visa"
    width={64}
    height={40}
  />
  <Image
    src="/images/payment/apple-pay.svg"
    className="rounded-lg border border-secondary/30 bg-white/5 p-3"
    alt="Apple Pay"
    width={64}
    height={40}
  />
  <Image
    src="/images/payment/mastercard.svg"
    className="rounded-lg border border-secondary/30 bg-white/5 p-3"
    alt="Mastercard"
    width={64}
    height={40}
  />
</div>
        </div>
      </div>
    </footer>
  );
}