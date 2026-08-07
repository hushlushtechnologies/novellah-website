"use client";

import {
  useRef,
  useState,
  useEffect,
  FormEvent,
  ChangeEvent,
} from "react";
import emailjs from "@emailjs/browser";
import { useLocale, useTranslations } from "next-intl";
import PhoneInput, {
  isValidPhoneNumber,
  parsePhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  User, Mail, Grape, UserRound, CalendarDays, Send,
  ArrowRight, ShieldCheck, Loader2, AlertCircle, ChevronDown, Check, Sparkles 
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FormSuccessState } from "@/components/ui/FormSuccessState";
import { DateField } from "@/components/ui/DateField";
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

// Phone: must pass the library's per-country shape check AND resolve to a
// national number that isn't an obvious placeholder/test pattern.
// Same logic as the contact form's isValidPhone.
function isValidPhone(value?: string): boolean {
  if (!value) return false;

  if (!isValidPhoneNumber(value)) return false;

  const parsed = parsePhoneNumber(value);
  if (!parsed) return false;

  const national = parsed.nationalNumber;

  // reject numbers where every digit is identical, e.g. 1111111111
  if (/^(\d)\1+$/.test(national)) return false;

  // reject the two most common "fake" sequential numbers
  if (national === "1234567890" || national === "0123456789") return false;

  return true;
}

// Standard-shape email check
function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

// At least 3 characters, not just whitespace
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
  icon?: React.ReactNode;
  required?: boolean;
  hasError?: boolean;
}

function CustomSelect({
  name,
  value,
  onChange,
  options,
  placeholder,
  icon,
  required,
  hasError,
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
        className={`flex w-full items-center justify-between rounded-xl border bg-white py-3 ${
          icon ? "ps-10" : "ps-4"
        } pe-4 font-body text-sm outline-none transition-colors ${
          hasError
            ? "border-red-400"
            : open
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

      {icon && (
        <span className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-secondary">
          {icon}
        </span>
      )}

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

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  // react-phone-number-input stores the value in E.164 format, e.g. "+9715xxxxxxxx"
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [phoneError, setPhoneError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [treatment, setTreatment] = useState("");
  const [treatmentError, setTreatmentError] = useState("");

  const [doctor, setDoctor] = useState("");
  const [doctorError, setDoctorError] = useState("");

  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");

  const treatmentOptions: CustomSelectOption[] = treatmentsMegaMenu.map((cat) => ({
    value: cat.title[locale],
    label: cat.title[locale],
  }));
  const doctorOptions: CustomSelectOption[] = doctors.map((doc) => ({
    value: doc.name,
    label: doc.name,
  }));

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setName(value);
    if (nameError && (value === "" || isValidName(value))) setNameError("");
  }
  function handleNameBlur() {
    setNameError(name !== "" && !isValidName(name) ? t("nameInvalid") : "");
  }

  function handlePhoneChange(value?: string) {
    setPhone(value);
    if (phoneError && isValidPhone(value)) setPhoneError("");
  }
  function handlePhoneBlur() {
    setPhoneError(phone && !isValidPhone(phone) ? t("phoneInvalid") : "");
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmail(value);
    if (emailError && (value === "" || isValidEmail(value))) setEmailError("");
  }
  function handleEmailBlur() {
    setEmailError(email !== "" && !isValidEmail(email) ? t("emailInvalid") : "");
  }

  function handleDateChange(value: string) {
    setDate(value);
    if (dateError && value !== "") setDateError("");
  }
  function handleDateBlur() {
    setDateError(date === "" ? t("dateRequired") : "");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    let hasError = false;

    if (!isValidName(name)) {
      setNameError(t("nameInvalid"));
      hasError = true;
    }
    if (!isValidPhone(phone)) {
      setPhoneError(t("phoneInvalid"));
      hasError = true;
    }
    if (!isValidEmail(email)) {
      setEmailError(t("emailInvalid"));
      hasError = true;
    }
    if (treatment === "") {
      setTreatmentError(t("treatmentRequired"));
      hasError = true;
    }
    if (doctor === "") {
      setDoctorError(t("doctorRequired"));
      hasError = true;
    }
    if (date === "") {
      setDateError(t("dateRequired"));
      hasError = true;
    }

    if (hasError) return;

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
      setName("");
      setNameError("");
      setPhone(undefined);
      setPhoneError("");
      setEmail("");
      setEmailError("");
      setTreatment("");
      setTreatmentError("");
      setDoctor("");
      setDoctorError("");
      setDate("");
      setDateError("");
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
         imageSrc="/images/contact-success.png"
      />
    );
  }

  const inputClasses =
    "w-full rounded-xl border border-border bg-white py-3 ps-4 pe-10 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground transition-colors focus:border-primary";

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
              className={`${inputClasses} ${nameError ? "border-red-400 focus:border-red-500" : ""}`}
            />
            <User size={16} className="absolute end-4 top-1/2 -translate-y-1/2 text-secondary" />
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
          <div className="mt-2">
            <PhoneInput
              name="user_phone"
              international
              defaultCountry="AE"
              value={phone}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
              placeholder={phonePlaceholder}
              aria-invalid={phoneError !== ""}
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
              className={`${inputClasses} ${emailError ? "border-red-400 focus:border-red-500" : ""}`}
            />
            <Mail size={16} className="absolute end-4 top-1/2 -translate-y-1/2 text-secondary" />
          </div>
          {emailError && (
            <p className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-600">
              <AlertCircle size={12} />
              {emailError}
            </p>
          )}
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
          <label className="font-body text-sm text-foreground">
            {treatmentLabel} <span className="text-primary">*</span>
          </label>
          <div className="mt-2">
            <CustomSelect
              name="treatment"
              value={treatment}
              onChange={(v) => {
                setTreatment(v);
                if (treatmentError) setTreatmentError("");
              }}
              options={treatmentOptions}
              placeholder={treatmentPlaceholder}
              icon={<Sparkles  size={16} />}
              required
              hasError={treatmentError !== ""}
            />
          </div>
          {treatmentError && (
            <p className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-600">
              <AlertCircle size={12} />
              {treatmentError}
            </p>
          )}
        </div>

        <div>
          <label className="font-body text-sm text-foreground">
            {doctorLabel} <span className="text-primary">*</span>
          </label>
          <div className="mt-2">
            <CustomSelect
              name="doctor"
              value={doctor}
              onChange={(v) => {
                setDoctor(v);
                if (doctorError) setDoctorError("");
              }}
              options={doctorOptions}
              placeholder={doctorPlaceholder}
              icon={<UserRound size={16} />}
              required
              hasError={doctorError !== ""}
            />
          </div>
          {doctorError && (
            <p className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-600">
              <AlertCircle size={12} />
              {doctorError}
            </p>
          )}
        </div>

        <div>
          <label className="font-body text-sm text-foreground">
            {dateLabel} <span className="text-primary">*</span>
          </label>
          <div className="mt-2">
            <DateField
              name="appointment_date"
              value={date}
              onChange={handleDateChange}
              onBlur={handleDateBlur}
              placeholder="Choose a date"
              required
              error={dateError !== ""}
            />
          </div>
          {dateError && (
            <p className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-red-600">
              <AlertCircle size={12} />
              {dateError}
            </p>
          )}
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
        className="mt-2 w-full rounded-xl border border-border bg-white p-4 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground transition-colors focus:border-primary"
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