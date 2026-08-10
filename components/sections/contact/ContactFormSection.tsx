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
    <section
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      dir="ltr"
    >
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

  firstNameLabel={t("firstNameLabel")}
  firstNamePlaceholder={t("firstNamePlaceholder")}

  lastNameLabel={t("lastNameLabel")}
  lastNamePlaceholder={t("lastNamePlaceholder")}

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

              {/* <div className="mt-4 border grid grid-cols-2 gap-4 pb-2">
                <h4 className="font-body text-sm font-bold text-foreground">
                  {t("uaeLabel")}
                </h4>
                <h4 className="font-body text-sm font-bold text-foreground">
                  {t("sriLankaLabel")}
                </h4>
              </div>

              <div className="mt-3 flex border items-center justify-between gap-4 pb-4">
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
              </div> */}

              <div className="mt-4     pb-4 pe-14 relative">
  <div className="grid grid-cols-2 gap-4">
    <div>
      <h4 className="font-body text-sm font-bold text-foreground">
        {t("uaeLabel")}
      </h4>
      <p className="mt-1 whitespace-pre-line font-body font-medium text-sm text-foreground">
        {siteConfig.address1[locale]}
      </p>
    </div>

    <div>
      <h4 className="font-body text-sm font-bold text-foreground">
        {t("sriLankaLabel")}
      </h4>
      <p className="mt-1 whitespace-pre-line font-body text-sm font-medium text-foreground">
        {siteConfig.address2[locale]}
      </p>
    </div>
  </div>

  <span className="absolute end-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white">
    <MapPin size={16} />
  </span>
</div>

              <div className="flex items-center justify-between border-t border-b border-border py-4">
                <p className="font-body text-sm text-foreground font-medium">
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
                <p className="font-body text-sm text-foreground font-medium">
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

              <div className="mt-3 border-b border-border pb-4">
                <p className="font-body text-sm text-foreground font-medium">
                  {siteConfig.hours.days[locale]}
                </p>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  {siteConfig.hours.time}
                </p>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  {siteConfig.hours.frequency[locale]}
                </p>
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
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
      fill="currentColor"
      className="text-secondary"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.1c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94s.73-2.09.99-2.38c.26-.28.56-.35.75-.35.19 0 .38 0 .54.01.17.01.4-.07.63.48.24.57.8 1.98.87 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.28.37-.23.62-.14.26.09 1.64.77 1.92.91.28.14.47.21.53.33.07.12.07.68-.17 1.36z" />
    </svg>
  </span>
  <span className="flex-1">
    <span className="block font-body text-sm font-semibold text-foreground">
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
