"use client";

import { useState } from "react";
import { Send, User, Phone, Mail, ClipboardList, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ContactFormFieldsProps {
  formTitle: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  subjectLabel: string;
  subjectPlaceholder: string;
  contactMethodLabel: string;
  contactMethodPlaceholder: string;
  messageTitle: string;
  messagePlaceholder: string;
  ctaSend: string;
  sendNote: string;
  subjectOptions: string[];
}

export function ContactFormFields({
  formTitle,
  fullNameLabel,
  fullNamePlaceholder,
  phoneLabel,
  phonePlaceholder,
  emailLabel,
  emailPlaceholder,
  subjectLabel,
  subjectPlaceholder,
  contactMethodLabel,
  contactMethodPlaceholder,
  messageTitle,
  messagePlaceholder,
  ctaSend,
  sendNote,
  subjectOptions,
}: ContactFormFieldsProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend yet — real submission logic goes here later.
    setSubmitted(true);
  }

  const inputClasses =
    "w-full rounded-xl border border-border bg-white py-3 ps-4 pe-10 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary";

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-background-light p-6 sm:p-8">
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white">
          <Send size={16} />
        </span>
        <h3 className="font-body text-sm font-bold uppercase tracking-wide text-primary">{formTitle}</h3>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
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

        <div>
          <label className="font-body text-sm text-foreground">{subjectLabel}</label>
          <div className="relative mt-2">
            <select required defaultValue="" className={`${inputClasses} appearance-none`}>
              <option value="" disabled>
                {subjectPlaceholder}
              </option>
              {subjectOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ClipboardList size={16} className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-secondary" />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label className="font-body text-sm text-foreground">{contactMethodLabel}</label>
        <div className="relative mt-2">
          <select defaultValue="" className={`${inputClasses} appearance-none`}>
            <option value="" disabled>
              {contactMethodPlaceholder}
            </option>
            <option value="phone">Phone</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="email">Email</option>
          </select>
          <MessageCircle size={16} className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-secondary" />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <Send size={16} className="text-secondary" />
        <h3 className="font-body text-sm font-bold uppercase tracking-wide text-primary">{messageTitle}</h3>
      </div>
      <textarea
        required
        rows={4}
        placeholder={messagePlaceholder}
        className="mt-2 w-full rounded-xl border border-border bg-white p-4 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
      />

      <Button type="submit" variant="solid" className="mt-6 w-full justify-center">
        {ctaSend}
      </Button>

      {submitted && (
        <p className="mt-2 text-center font-body text-xs text-primary">
          Thanks — we've received your message!
        </p>
      )}

      <p className="mt-3 flex items-center justify-center gap-2 font-body text-xs text-muted-foreground">
        <ShieldCheck size={14} className="text-secondary" />
        {sendNote}
      </p>
    </form>
  );
}