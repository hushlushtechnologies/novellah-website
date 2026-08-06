import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { ContactFormFields } from "./ContactFormFields";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  ShareIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";

const socialIcons = [
  { icon: InstagramIcon, href: siteConfig.socials.instagram },
  { icon: LinkedinIcon, href: siteConfig.socials.linkedin },
  { icon: FacebookIcon, href: siteConfig.socials.facebook },
  { icon: YoutubeIcon, href: siteConfig.socials.youtube },
];

export async function ContactFormSection() {
  const t = await getTranslations("contactForm");
  const locale = (await getLocale()) as "en" | "ar";

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={
            <>
              {t("headingPrefix")}{" "}
              <span className="text-primary">{t("headingHighlight")}</span>
            </>
          }
          subheading={t("subheading")}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left: form + map */}
          <div className="flex flex-col gap-6">
            <ContactFormFields
              formTitle={t("formTitle")}
              fullNameLabel={t("fullNameLabel")}
              fullNamePlaceholder={t("fullNamePlaceholder")}
              phoneLabel={t("phoneLabel")}
              phonePlaceholder={t("phonePlaceholder")}
              emailLabel={t("emailLabel")}
              emailPlaceholder={t("emailPlaceholder")}
              subjectLabel={t("subjectLabel")}
              subjectPlaceholder={t("subjectPlaceholder")}
              contactMethodLabel={t("contactMethodLabel")}
              contactMethodPlaceholder={t("contactMethodPlaceholder")}
              messageTitle={t("messageTitle")}
              messagePlaceholder={t("messagePlaceholder")}
              ctaSend={t("ctaSend")}
              sendNote={t("sendNote")}
              subjectOptions={[
                t("subjectGeneral"),
                t("subjectTreatment"),
                t("subjectAppointment"),
                t("subjectOther"),
              ]}
            />

            <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-border">
              <iframe
                src={siteConfig.mapEmbedUrl}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Novellah Restyle location"
              />
            </div>
          </div>

          {/* Right: clinic photo + info card */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative h-56 w-full sm:h-64">
              <Image
                src="/images/philosophy-treatment-room.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <h3 className="font-body text-sm font-bold uppercase tracking-wide text-primary">
                  {t("clinicInfoTitle")}
                </h3>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 pb-2">
                <h4 className="font-body text-sm font-bold text-foreground">
                  {t("uaeLabel")}
                </h4>
                <h4 className="font-body text-sm font-bold text-foreground">
                  {t("sriLankaLabel")}
                </h4>
              </div>

              <div className="mt-3 flex items-center justify-between gap-4 pb-4">
                <div className="grid flex-1 grid-cols-2 gap-4">
                  <p className="whitespace-pre-line font-body text-sm text-foreground">
                    {siteConfig.address1[locale]}
                  </p>
                  <p className="whitespace-pre-line font-body text-sm text-foreground">
                    {siteConfig.address2[locale]}
                  </p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <MapPin size={16} />
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-b border-border py-4">
                <p className="font-body text-sm text-foreground">
                  {siteConfig.phone}
                </p>

                <a
                  href={siteConfig.phoneHref}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white"
                >
                  <Phone size={16} />
                </a>
              </div>

              <div className="flex items-center justify-between border-b border-border py-4">
                <p className="font-body text-sm text-foreground">
                  {siteConfig.email}
                </p>

                <a
                  href={siteConfig.emailHref}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white"
                >
                  <Mail size={16} />
                </a>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <h3 className="font-body text-sm font-bold uppercase tracking-wide text-primary">
                  {t("workingHoursTitle")}
                </h3>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-4 border-b border-border pb-4">
                <div>
                  <p className="font-body text-sm text-foreground">
                    {siteConfig.hours.weekdays[locale]}
                  </p>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    {siteConfig.hours.weekdaysTime}
                  </p>
                </div>
                <div>
                  <p className="font-body text-sm text-foreground">
                    {siteConfig.hours.weekend[locale]}
                  </p>
                  <p className="mt-1 font-body text-sm text-muted-foreground">
                    {siteConfig.hours.weekendTime[locale]}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <ShareIcon size={16} className="text-secondary" />
                <h3 className="font-body text-sm font-bold uppercase tracking-wide text-primary">
                  {t("socialMediaTitle")}
                </h3>
              </div>

              <div className="mt-3 flex items-center gap-3">
                {socialIcons.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary/40 text-secondary"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>

              <div className="mt-5 divide-y divide-border rounded-xl border border-border">
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-secondary/40">
                    <Phone size={16} className="text-secondary" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-body text-sm font-semibold uppercase text-foreground">
                      {t("whatsappTitle")}
                    </span>
                    <span className="block font-body text-xs text-muted-foreground">
                      {t("whatsappSubtext")}
                    </span>
                  </span>
                  <ArrowRight size={14} className="text-primary" />
                </a>
                <a
                  href="/book-appointment"
                  className="flex items-center gap-3 p-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-secondary/40">
                    <CalendarCheck size={16} className="text-secondary" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-body text-sm font-semibold text-foreground">
                      {t("consultationTitle")}
                    </span>
                    <span className="block font-body text-xs text-muted-foreground">
                      {t("consultationSubtext")}
                    </span>
                  </span>
                  <ArrowRight size={14} className="text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
