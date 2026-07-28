"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { User, Phone, Mail, Grape, UserRound, CalendarDays, Send, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
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
  const locale = useLocale() as "en" | "ar";
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend yet — real submission logic goes here later.
    setSubmitted(true);
  }

  const inputClasses =
    "w-full rounded-xl border border-border bg-white py-3 ps-4 pe-10 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-background-light p-6 sm:p-10">
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
            <input required placeholder={fullNamePlaceholder} className={inputClasses} />
            <User size={16} className="absolute end-4 top-1/2 -translate-y-1/2 text-secondary" />
          </div>
        </div>
        <div>
          <label className="font-body text-sm text-foreground">{phoneLabel}</label>
          <div className="relative mt-2">
            <input required type="tel" placeholder={phonePlaceholder} className={inputClasses} />
            <Phone size={16} className="absolute end-4 top-1/2 -translate-y-1/2 text-secondary" />
          </div>
        </div>
        <div>
          <label className="font-body text-sm text-foreground">{emailLabel}</label>
          <div className="relative mt-2">
            <input required type="email" placeholder={emailPlaceholder} className={inputClasses} />
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
            <select defaultValue="" className={`${inputClasses} appearance-none`}>
              <option value="">{treatmentPlaceholder}</option>
              {treatmentsMegaMenu.map((cat) => (
                <option key={cat.categorySlug} value={cat.categorySlug}>
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
            <select defaultValue="" className={`${inputClasses} appearance-none`}>
              <option value="">{doctorPlaceholder}</option>
              {doctors.map((doc) => (
                <option key={doc.slug} value={doc.slug}>
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
            <input type="date" min={new Date().toISOString().split("T")[0]} className={inputClasses} />
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
        rows={4}
        placeholder={messagePlaceholder}
        className="mt-2 w-full rounded-xl border border-border bg-white p-4 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
      />

      <Button
        type="submit"
        variant="solid"
        icon={<ArrowRight size={16} />}
        className="mt-8 w-full justify-center"
      >
        {ctaSubmit}
      </Button>

      {submitted && (
        <p className="mt-2 text-center font-body text-xs text-primary">
          Thanks — we've received your request!
        </p>
      )}

      <p className="mt-3 flex items-center justify-center gap-2 font-body text-xs text-muted-foreground">
        <ShieldCheck size={14} className="text-secondary" />
        {submitNote}
      </p>
    </form>
  );
}