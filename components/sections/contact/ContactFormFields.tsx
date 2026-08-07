 "use client";

import { useRef, useState, useEffect, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput, { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  Send,
  User,
  Mail,
  ChevronDown,
  Check,
  ShieldCheck,
  Loader2,
  AlertCircle,
  LucideIcon,
  ClipboardList,
  MessageCircle,
  Sparkles 
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormSuccessState } from "@/components/ui/FormSuccessState";
import { useTranslations } from "next-intl";

interface ContactFormFieldsProps {
  formTitle: string;
  firstNameLabel: string;
  firstNamePlaceholder: string;
  lastNameLabel: string;
  lastNamePlaceholder: string;
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

// Standard-shape email check (not fully RFC-compliant, but catches real typos)
function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

// First name: required — at least 3 characters, no digits anywhere
function isValidFirstName(value: string): boolean {
  const trimmed = value.trim();
  return trimmed.length >= 3 && !/\d/.test(trimmed);
}

// Last name: optional. Only flagged if the person typed something containing a digit —
// an empty value is always fine since this field isn't required.
function isValidLastName(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed === "") return true;
  return !/\d/.test(trimmed);
}

// Phone: must pass the library's per-country shape check AND resolve to
// exactly a 10-digit national number (i.e. country code + 10 digits).
// function isValidPhone(value?: string): boolean {
//   if (!value) return false;
//   return isValidPhoneNumber(value);
// }

function isValidPhone(value?: string) {
    if (!value) return false;

    if (!isValidPhoneNumber(value))
        return false;

    const parsed = parsePhoneNumber(value);

    if (!parsed)
        return false;

    const national = parsed.nationalNumber;

    // reject 1111111111
    if (/^(\d)\1+$/.test(national))
        return false;

    // reject 1234567890
    if (
        national === "1234567890" ||
        national === "0123456789"
    )
        return false;

    return true;
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
  icon?: LucideIcon;
  error?: boolean;
}

function CustomSelect({
  name,
  value,
  onChange,
  options,
  placeholder,
  required,
  icon: Icon,
  error,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
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
      {/* Hidden input keeps the value reachable by name for emailjs.sendForm.
          Note: `required` on a hidden input is NOT enforced by browsers — actual
          required-ness for this field is enforced in handleSubmit's JS validation. */}
      <input type="hidden" name={name} value={value} required={required} />

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={error}
        className={`flex w-full items-center justify-between rounded-xl border bg-white py-3 ps-4 pe-4 font-body text-sm outline-none transition-colors ${
          error
            ? "border-red-400"
            : open
              ? "border-primary"
              : "border-border hover:border-secondary/60"
        } ${selectedLabel ? "text-foreground" : "text-muted-foreground"}`}
      >
        <div className="flex items-center gap-3 min-w-0">
          {Icon && <Icon size={18} className="shrink-0 text-secondary" />}

          <span className="truncate">{selectedLabel ?? placeholder}</span>
        </div>

        <ChevronDown
          size={16}
          className={`ms-2 shrink-0 transition-transform ${
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
                  {isSelected && (
                    <Check size={14} className="ms-2 shrink-0 text-primary" />
                  )}
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
  firstNameLabel,
  firstNamePlaceholder,
  lastNameLabel,
  lastNamePlaceholder,
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
  const [subjectError, setSubjectError] = useState("");
  const [contactMethod, setContactMethod] = useState("");

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // react-phone-number-input stores value in E.164 format, e.g. "+9477..."
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [phoneError, setPhoneError] = useState("");

  // Translation keys are new — t() throws on a missing key rather than
  // returning undefined, so t.has() guards against a crash if these
  // haven't been added to the messages files yet.
  const firstNameInvalidMsg = t.has("firstNameInvalid")
    ? t("firstNameInvalid")
    : "First name must be at least 3 letters, with no numbers.";
  const lastNameInvalidMsg = t.has("lastNameInvalid")
    ? t("lastNameInvalid")
    : "Last name shouldn't contain numbers.";
  const subjectRequiredMsg = t.has("subjectRequired")
    ? t("subjectRequired")
    : "Please select a subject.";
  const phoneInvalidMsg = t.has("phoneInvalid")
    ? t("phoneInvalid")
    : "Enter a valid phone number with country code (10 digits).";

  const contactMethodOptions: CustomSelectOption[] = [
    { value: "phone", label: "Phone" },
    { value: "whatsapp", label: "WhatsApp" },
    { value: "email", label: "Email" },
  ];
  const subjectSelectOptions: CustomSelectOption[] = subjectOptions.map(
    (opt) => ({
      value: opt,
      label: opt,
    }),
  );

  function handleFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setFirstName(value);
    if (firstNameError && (value === "" || isValidFirstName(value))) {
      setFirstNameError("");
    }
  }

  function handleFirstNameBlur() {
    if (firstName !== "" && !isValidFirstName(firstName)) {
      setFirstNameError(firstNameInvalidMsg);
    } else {
      setFirstNameError("");
    }
  }

  function handleLastNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setLastName(value);
    if (lastNameError && isValidLastName(value)) {
      setLastNameError("");
    }
  }

  function handleLastNameBlur() {
    if (!isValidLastName(lastName)) {
      setLastNameError(lastNameInvalidMsg);
    } else {
      setLastNameError("");
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

  function handlePhoneChange(value?: string) {
    setPhone(value);
    if (phoneError && isValidPhone(value)) {
      setPhoneError("");
    }
  }

  function handlePhoneBlur() {
    if (phone && !isValidPhone(phone)) {
      setPhoneError(phoneInvalidMsg);
    } else if (!phone) {
      setPhoneError("");
    } else {
      setPhoneError("");
    }
  }

  function handleSubjectChange(value: string) {
    setSubject(value);
    if (subjectError && value !== "") {
      setSubjectError("");
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    let hasError = false;

    if (!isValidFirstName(firstName)) {
      setFirstNameError(firstNameInvalidMsg);
      hasError = true;
    }
    // Last name is optional — only blocks submission if it contains digits
    if (!isValidLastName(lastName)) {
      setLastNameError(lastNameInvalidMsg);
      hasError = true;
    }
    if (!isValidEmail(email)) {
      setEmailError(t("emailInvalid"));
      hasError = true;
    }
    if (!isValidPhone(phone)) {
      setPhoneError(phoneInvalidMsg);
      hasError = true;
    }
    if (subject.trim() === "") {
      setSubjectError(subjectRequiredMsg);
      hasError = true;
    }
    // contact method and message are optional — intentionally not validated

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
      setSubjectError("");
      setContactMethod("");
      setFirstName("");
      setFirstNameError("");
      setLastName("");
      setLastNameError("");
      setEmail("");
      setEmailError("");
      setPhone(undefined);
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

      {/* Row 1: First name (required) + Last name (optional) */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="font-body text-sm text-foreground">
            {firstNameLabel} <span className="text-primary">*</span>
          </label>
          <div className="relative mt-2">
            <input
              name="user_first_name"
              required
              minLength={3}
              value={firstName}
              onChange={handleFirstNameChange}
              onBlur={handleFirstNameBlur}
              placeholder={firstNamePlaceholder}
              aria-invalid={firstNameError !== ""}
              className={`${inputClasses} ${
                firstNameError ? "border-red-400 focus:border-red-500" : ""
              }`}
            />
            <User
              size={16}
              className="absolute end-4 top-1/2 -translate-y-1/2 text-secondary"
            />
          </div>
          {firstNameError && (
            <p className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-600">
              <AlertCircle size={12} />
              {firstNameError}
            </p>
          )}
        </div>

        <div>
          <label className="font-body text-sm text-foreground">
            {lastNameLabel}
          </label>
          <div className="relative mt-2">
            <input
              name="user_last_name"
              value={lastName}
              onChange={handleLastNameChange}
              onBlur={handleLastNameBlur}
              placeholder={lastNamePlaceholder}
              aria-invalid={lastNameError !== ""}
              className={`${inputClasses} ${
                lastNameError ? "border-red-400 focus:border-red-500" : ""
              }`}
            />
            <User
              size={16}
              className="absolute end-4 top-1/2 -translate-y-1/2 text-secondary"
            />
          </div>
          {lastNameError && (
            <p className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-600">
              <AlertCircle size={12} />
              {lastNameError}
            </p>
          )}
        </div>

        {/* Hidden combined name field, in case your EmailJS template uses {{user_name}} */}
        <input
          type="hidden"
          name="user_name"
          value={`${firstName} ${lastName}`.trim()}
        />
      </div>

      {/* Row 2: Phone with country code, full width */}
      <div className="mt-4">
        <label className="font-body text-sm text-foreground">
          {phoneLabel} <span className="text-primary">*</span>
        </label>
        <div className="mt-2">
          <PhoneInput
            name="user_phone"
            international
            defaultCountry="AE"
            value={phone}
            onChange={handlePhoneChange}
            onBlur={handlePhoneBlur}
            placeholder={phonePlaceholder}
            className={`phone-input-field flex w-full items-center rounded-xl border bg-white py-3 ps-4 pe-4 font-body text-sm outline-none transition-colors ${
              phoneError
                ? "border-red-400"
                : "border-border focus-within:border-primary"
            } [&_.PhoneInputInput]:border-0 [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:p-0 [&_.PhoneInputInput]:font-body [&_.PhoneInputInput]:text-sm [&_.PhoneInputInput]:text-foreground [&_.PhoneInputInput]:outline-none [&_.PhoneInputCountry]:me-3`}
          />
        </div>
        {phoneError && (
          <p className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-600">
            <AlertCircle size={12} />
            {phoneError}
          </p>
        )}
      </div>

      {/* Row 3: Email + Subject */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
              onChange={handleSubjectChange}
              options={subjectSelectOptions}
              placeholder={subjectPlaceholder}
              required
              icon={ClipboardList}
              error={subjectError !== ""}
            />
          </div>
          {subjectError && (
            <p className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-600">
              <AlertCircle size={12} />
              {subjectError}
            </p>
          )}
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
            icon={MessageCircle}
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
        rows={4}
        placeholder={messagePlaceholder}
        className="mt-2 w-full rounded-xl border border-border bg-white p-4 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground transition-colors focus:border-primary"
      />

      <Button
        type="submit"
        variant="solid"
        disabled={status === "sending"}
        className="mt-6 w-full justify-center cursor-pointer"
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