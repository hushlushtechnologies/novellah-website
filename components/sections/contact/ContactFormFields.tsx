"use client";

import {
  useRef,
  useState,
  useEffect,
  FormEvent,
  ChangeEvent,
} from "react";
import emailjs from "@emailjs/browser";
import {
  Send,
  User,
  Phone,
  Mail,
  ChevronDown,
  Check,
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

// Strips spaces/dashes/parens for readability, then requires exactly 10 digits
function isValidPhone(value: string): boolean {
  const digitsOnly = value.replace(/[\s\-()]/g, "");
  return /^[0-9]{10}$/.test(digitsOnly);
}

// Standard-shape email check (not fully RFC-compliant, but catches real typos)
function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

// At least 3 characters, and not just whitespace
function isValidName(value: string): boolean {
  return value.trim().length >= 3;
}

interface CustomSelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: CustomSelectOption[];
  placeholder: string;
  required?: boolean;
}

function CustomSelect({
  name,
  value,
  onChange,
  options,
  placeholder,
  required,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <div ref={containerRef} className="relative">
      {/* Hidden input keeps the value reachable by name for emailjs.sendForm */}
      <input type="hidden" name={name} value={value} required={required} />

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between rounded-xl border bg-white py-3 ps-4 pe-4 font-body text-sm outline-none transition-colors ${
          open
            ? "border-primary"
            : "border-border hover:border-secondary/60"
        } ${selectedLabel ? "text-foreground" : "text-muted-foreground"}`}
      >
        <span className="truncate">{selectedLabel ?? placeholder}</span>
        <ChevronDown
          size={16}
          className={`ms-2 shrink-0 text-secondary transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute start-0 end-0 top-[calc(100%+6px)] z-20 max-h-64 overflow-y-auto rounded-xl border border-border bg-white p-1.5 shadow-lg"
        >
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <li key={opt.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-start font-body text-sm transition-colors ${
                    isSelected
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground hover:bg-background-light"
                  }`}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && <Check size={14} className="ms-2 shrink-0 text-primary" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
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
  const t = useTranslations("contactForm");
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [subject, setSubject] = useState("");
  const [contactMethod, setContactMethod] = useState("");

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const contactMethodOptions: CustomSelectOption[] = [
    { value: "phone", label: "Phone" },
    { value: "whatsapp", label: "WhatsApp" },
    { value: "email", label: "Email" },
  ];
  const subjectSelectOptions: CustomSelectOption[] = subjectOptions.map((opt) => ({
    value: opt,
    label: opt,
  }));

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setName(value);
    if (nameError && (value === "" || isValidName(value))) {
      setNameError("");
    }
  }

  function handleNameBlur() {
    if (name !== "" && !isValidName(name)) {
      setNameError(t("nameInvalid"));
    } else {
      setNameError("");
    }
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmail(value);
    if (emailError && (value === "" || isValidEmail(value))) {
      setEmailError("");
    }
  }

  function handleEmailBlur() {
    if (email !== "" && !isValidEmail(email)) {
      setEmailError(t("emailInvalid"));
    } else {
      setEmailError("");
    }
  }

  function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setPhone(value);
    if (phoneError && (value === "" || isValidPhone(value))) {
      setPhoneError("");
    }
  }

  function handlePhoneBlur() {
    if (phone !== "" && !isValidPhone(phone)) {
      setPhoneError(t("phoneInvalid"));
    } else {
      setPhoneError("");
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    let hasError = false;

    if (!isValidName(name)) {
      setNameError(t("nameInvalid"));
      hasError = true;
    }
    if (!isValidEmail(email)) {
      setEmailError(t("emailInvalid"));
      hasError = true;
    }
    if (!isValidPhone(phone)) {
      setPhoneError(t("phoneInvalid"));
      hasError = true;
    }

    if (hasError) return;

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
      setSubject("");
      setContactMethod("");
      setName("");
      setNameError("");
      setEmail("");
      setEmailError("");
      setPhone("");
      setPhoneError("");
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
    "w-full rounded-xl border border-border bg-white py-3 ps-4 pe-10 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground transition-colors focus:border-primary";

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
            {fullNameLabel} <span className="text-primary">*</span>
          </label>
          <div className="relative mt-2">
            <input
              name="user_name"
              required
              value={name}
              onChange={handleNameChange}
              onBlur={handleNameBlur}
              placeholder={fullNamePlaceholder}
              aria-invalid={nameError !== ""}
              className={`${inputClasses} ${
                nameError ? "border-red-400 focus:border-red-500" : ""
              }`}
            />
            <User
              size={16}
              className="absolute end-4 top-1/2 -translate-y-1/2 text-secondary"
            />
          </div>
          {nameError && (
            <p className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-600">
              <AlertCircle size={12} />
              {nameError}
            </p>
          )}
        </div>

        <div>
          <label className="font-body text-sm text-foreground">
            {phoneLabel} <span className="text-primary">*</span>
          </label>
          <div className="relative mt-2">
            <input
              name="user_phone"
              required
              type="tel"
              inputMode="numeric"
              maxLength={12}
              value={phone}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
              placeholder={phonePlaceholder}
              aria-invalid={phoneError !== ""}
              className={`${inputClasses} ${
                phoneError ? "border-red-400 focus:border-red-500" : ""
              }`}
            />
            <Phone
              size={16}
              className="absolute end-4 top-1/2 -translate-y-1/2 text-secondary"
            />
          </div>
          {phoneError && (
            <p className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-600">
              <AlertCircle size={12} />
              {phoneError}
            </p>
          )}
        </div>

        <div>
          <label className="font-body text-sm text-foreground">
            {emailLabel} <span className="text-primary">*</span>
          </label>
          <div className="relative mt-2">
            <input
              name="user_email"
              required
              type="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              placeholder={emailPlaceholder}
              aria-invalid={emailError !== ""}
              className={`${inputClasses} ${
                emailError ? "border-red-400 focus:border-red-500" : ""
              }`}
            />
            <Mail
              size={16}
              className="absolute end-4 top-1/2 -translate-y-1/2 text-secondary"
            />
          </div>
          {emailError && (
            <p className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-600">
              <AlertCircle size={12} />
              {emailError}
            </p>
          )}
        </div>

        <div>
          <label className="font-body text-sm text-foreground">
            {subjectLabel} <span className="text-primary">*</span>
          </label>
          <div className="mt-2">
            <CustomSelect
              name="subject"
              value={subject}
              onChange={setSubject}
              options={subjectSelectOptions}
              placeholder={subjectPlaceholder}
              required
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label className="font-body text-sm text-foreground">
          {contactMethodLabel}
        </label>
        <div className="mt-2">
          <CustomSelect
            name="contact_method"
            value={contactMethod}
            onChange={setContactMethod}
            options={contactMethodOptions}
            placeholder={contactMethodPlaceholder}
          />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <Send size={16} className="text-secondary" />
        <h3 className="font-body text-sm font-bold uppercase tracking-wide text-primary">
          {messageTitle} <span className="text-primary">*</span>
        </h3>
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder={messagePlaceholder}
        className="mt-2 w-full rounded-xl border border-border bg-white p-4 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground transition-colors focus:border-primary"
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