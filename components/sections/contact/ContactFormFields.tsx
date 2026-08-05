 "use client";

import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  Send,
  User,
  Phone,
  Mail,
  ClipboardList,
  MessageCircle,
  ShieldCheck,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormSuccessState } from "@/components/ui/FormSuccessState";
import { useTranslations } from "next-intl";

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

type SubmitStatus = "idle" | "sending" | "success" | "error";

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
  const t = useTranslations("contactForm");
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
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
        lines={[t("successLine1"), t("successLine2"), t("successLine3")]}
        buttonLabel={t("successBackHome")}
        buttonHref="/"
        footerNote={t("successFooterNote")}
        imageSrc="/images/contact-success.png"
      />
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-border bg-white py-3 ps-4 pe-10 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-2xl bg-background-light p-6 sm:p-8"
    >
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white">
          <Send size={16} />
        </span>
        <h3 className="font-body text-sm font-bold uppercase tracking-wide text-primary">
          {formTitle}
        </h3>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="font-body text-sm text-foreground">
            {fullNameLabel}
          </label>
          <div className="relative mt-2">
            <input
              name="user_name"
              required
              placeholder={fullNamePlaceholder}
              className={inputClasses}
            />
            <User
              size={16}
              className="absolute end-4 top-1/2 -translate-y-1/2 text-secondary"
            />
          </div>
        </div>

        <div>
          <label className="font-body text-sm text-foreground">
            {phoneLabel}
          </label>
          <div className="relative mt-2">
            <input
              name="user_phone"
              required
              type="tel"
              placeholder={phonePlaceholder}
              className={inputClasses}
            />
            <Phone
              size={16}
              className="absolute end-4 top-1/2 -translate-y-1/2 text-secondary"
            />
          </div>
        </div>

        <div>
          <label className="font-body text-sm text-foreground">
            {emailLabel}
          </label>
          <div className="relative mt-2">
            <input
              name="user_email"
              required
              type="email"
              placeholder={emailPlaceholder}
              className={inputClasses}
            />
            <Mail
              size={16}
              className="absolute end-4 top-1/2 -translate-y-1/2 text-secondary"
            />
          </div>
        </div>

        <div>
          <label className="font-body text-sm text-foreground">
            {subjectLabel}
          </label>
          <div className="relative mt-2">
            <select
              name="subject"
              required
              defaultValue=""
              className={`${inputClasses} appearance-none`}
            >
              <option value="" disabled>
                {subjectPlaceholder}
              </option>
              {subjectOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ClipboardList
              size={16}
              className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-secondary"
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label className="font-body text-sm text-foreground">
          {contactMethodLabel}
        </label>
        <div className="relative mt-2">
          <select
            name="contact_method"
            defaultValue=""
            className={`${inputClasses} appearance-none`}
          >
            <option value="" disabled>
              {contactMethodPlaceholder}
            </option>
            <option value="phone">Phone</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="email">Email</option>
          </select>
          <MessageCircle
            size={16}
            className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-secondary"
          />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <Send size={16} className="text-secondary" />
        <h3 className="font-body text-sm font-bold uppercase tracking-wide text-primary">
          {messageTitle}
        </h3>
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder={messagePlaceholder}
        className="mt-2 w-full rounded-xl border border-border bg-white p-4 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
      />

      <Button
        type="submit"
        variant="solid"
        disabled={status === "sending"}
        className="mt-6 w-full justify-center"
      >
        {status === "sending" ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 size={16} className="animate-spin" />
            {ctaSend}
          </span>
        ) : (
          ctaSend
        )}
      </Button>

      {status === "error" && (
        <p className="mt-2 flex items-center justify-center gap-2 text-center font-body text-xs text-red-600">
          <AlertCircle size={14} />
          Something went wrong. Please try again or contact us directly.
        </p>
      )}

      <p className="mt-3 flex items-center justify-center gap-2 font-body text-xs text-muted-foreground">
        <ShieldCheck size={14} className="text-secondary" />
        {sendNote}
      </p>
    </form>
  );
}