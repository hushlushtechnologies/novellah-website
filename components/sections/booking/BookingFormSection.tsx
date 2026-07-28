import { getTranslations } from "next-intl/server";
import { Info } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BookingFormFields } from "./BookingFormFields";


export async function BookingFormSection() {
  const t = await getTranslations("bookingForm");

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
     
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow={t("eyebrow")}
          heading={
            <>
              {t("headingPrefix")} <span className="text-primary">{t("headingHighlight")}</span>
            </>
          }
          subheading={t("subheading")}
        />

        <div className="mt-12">
          <BookingFormFields
            personalInfoTitle={t("personalInfoTitle")}
            fullNameLabel={t("fullNameLabel")}
            fullNamePlaceholder={t("fullNamePlaceholder")}
            phoneLabel={t("phoneLabel")}
            phonePlaceholder={t("phonePlaceholder")}
            emailLabel={t("emailLabel")}
            emailPlaceholder={t("emailPlaceholder")}
            appointmentDetailsTitle={t("appointmentDetailsTitle")}
            treatmentLabel={t("treatmentLabel")}
            treatmentPlaceholder={t("treatmentPlaceholder")}
            doctorLabel={t("doctorLabel")}
            doctorPlaceholder={t("doctorPlaceholder")}
            dateLabel={t("dateLabel")}
            messageTitle={t("messageTitle")}
            messageOptional={t("messageOptional")}
            messagePlaceholder={t("messagePlaceholder")}
            ctaSubmit={t("ctaSubmit")}
            submitNote={t("submitNote")}
          />
        </div>

        <div className="mt-6 flex items-center gap-4 rounded-2xl border border-border bg-background-light p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
            <Info size={18} className="text-primary" />
          </span>
          <div>
            <p className="font-body text-sm font-semibold text-foreground">{t("footerTitle")}</p>
            <p className="mt-0.5 font-body text-sm text-muted-foreground">{t("footerSubtext")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}