 "use client";

import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useLocale, useTranslations } from "next-intl";
import {
  User, Phone, Mail, Grape, UserRound, CalendarDays, Send,
  ArrowRight, ShieldCheck, Loader2, AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormSuccessState } from "@/components/ui/FormSuccessState";
import { treatmentsMegaMenu } from "@/lib/navigation";
import { doctors } from "@/lib/content/doctors";

interface BookingFormFieldsProps {
  personalInfoTitle: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  appointmentDetailsTitle: string;
  treatmentLabel: string;
  treatmentPlaceholder: string;
  doctorLabel: string;
  doctorPlaceholder: string;
  dateLabel: string;
  messageTitle: string;
  messageOptional: string;
  messagePlaceholder: string;
  ctaSubmit: string;
  submitNote: string;
}

type SubmitStatus = "idle" | "sending" | "success" | "error";

export function BookingFormFields({
  personalInfoTitle,
  fullNameLabel,
  fullNamePlaceholder,
  phoneLabel,
  phonePlaceholder,
  emailLabel,
  emailPlaceholder,
  appointmentDetailsTitle,
  treatmentLabel,
  treatmentPlaceholder,
  doctorLabel,
  doctorPlaceholder,
  dateLabel,
  messageTitle,
  messageOptional,
  messagePlaceholder,
  ctaSubmit,
  submitNote,
}: BookingFormFieldsProps) {
  const t = useTranslations("bookingForm");
  const locale = useLocale() as "en" | "ar";
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <FormSuccessState
        heading={t("successHeading")}
        lines={[t("successLine1"), t("successLine2")]}
        buttonLabel={t("successBackHome")}
        buttonHref="/"
        footerNote={t("successFooterNote")}
      />
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-border bg-white py-3 ps-4 pe-10 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="rounded-2xl bg-background-light p-6 sm:p-10">
      {/* Personal Information */}
      <div className="flex items-center gap-2">
        <UserRound size={18} className="text-secondary" />
        <h3 className="font-body text-sm font-bold uppercase tracking-wide text-primary">
          {personalInfoTitle}
        </h3>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label className="font-body text-sm text-foreground">{fullNameLabel}</label>
          <div className="relative mt-2">
            <input name="user_name" required placeholder={fullNamePlaceholder} className={inputClasses} />
            <User size={16} className="absolute end-4 top-1/2 -translate-y-1/2 text-secondary" />
          </div>
        </div>
        <div>
          <label className="font-body text-sm text-foreground">{phoneLabel}</label>
          <div className="relative mt-2">
            <input name="user_phone" required type="tel" placeholder={phonePlaceholder} className={inputClasses} />
            <Phone size={16} className="absolute end-4 top-1/2 -translate-y-1/2 text-secondary" />
          </div>
        </div>
        <div>
          <label className="font-body text-sm text-foreground">{emailLabel}</label>
          <div className="relative mt-2">
            <input name="user_email" required type="email" placeholder={emailPlaceholder} className={inputClasses} />
            <Mail size={16} className="absolute end-4 top-1/2 -translate-y-1/2 text-secondary" />
          </div>
        </div>
      </div>

      {/* Appointment Details */}
      <div className="mt-8 flex items-center gap-2">
        <CalendarDays size={18} className="text-secondary" />
        <h3 className="font-body text-sm font-bold uppercase tracking-wide text-primary">
          {appointmentDetailsTitle}
        </h3>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label className="font-body text-sm text-foreground">{treatmentLabel}</label>
          <div className="relative mt-2">
            <select name="treatment" defaultValue="" className={`${inputClasses} appearance-none`}>
              <option value="">{treatmentPlaceholder}</option>
              {treatmentsMegaMenu.map((cat) => (
                <option key={cat.categorySlug} value={cat.title[locale]}>
                  {cat.title[locale]}
                </option>
              ))}
            </select>
            <Grape size={16} className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-secondary" />
          </div>
        </div>
        <div>
          <label className="font-body text-sm text-foreground">{doctorLabel}</label>
          <div className="relative mt-2">
            <select name="doctor" defaultValue="" className={`${inputClasses} appearance-none`}>
              <option value="">{doctorPlaceholder}</option>
              {doctors.map((doc) => (
                <option key={doc.slug} value={doc.name}>
                  {doc.name}
                </option>
              ))}
            </select>
            <UserRound size={16} className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-secondary" />
          </div>
        </div>
        <div>
          <label className="font-body text-sm text-foreground">{dateLabel}</label>
          <div className="relative mt-2">
            <input
              name="appointment_date"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className={inputClasses}
            />
          </div>
        </div>
      </div>

      {/* Additional Messages */}
      <div className="mt-8 flex items-center gap-2">
        <Send size={16} className="text-secondary" />
        <h3 className="font-body text-sm font-bold uppercase tracking-wide text-primary">
          {messageTitle} <span className="font-normal text-muted-foreground">{messageOptional}</span>
        </h3>
      </div>
      <textarea
        name="message"
        rows={4}
        placeholder={messagePlaceholder}
        className="mt-2 w-full rounded-xl border border-border bg-white p-4 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
      />

      <Button
        type="submit"
        variant="solid"
        disabled={status === "sending"}
        icon={status === "sending" ? <Loader2 size={16} className="animate-spin" /> : <ArrowRight size={16} />}
        className="mt-8 w-full justify-center"
      >
        {ctaSubmit}
      </Button>

      {status === "error" && (
        <p className="mt-2 flex items-center justify-center gap-2 text-center font-body text-xs text-red-600">
          <AlertCircle size={14} />
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <p className="mt-3 flex items-center justify-center gap-2 font-body text-xs text-muted-foreground">
        <ShieldCheck size={14} className="text-secondary" />
        {submitNote}
      </p>
    </form>
  );
}