"use client";

import { useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";

interface DateFieldProps {
  name: string;
  /** ISO date string "yyyy-MM-dd", or "" when empty — same shape a native <input type="date"> gives you */
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
  /** Earliest selectable date. Defaults to today (matches the old `min={today}` behavior). */
  minDate?: Date;
}

export function DateField({
  name,
  value,
  onChange,
  onBlur,
  placeholder = "Choose a date",
  required,
  error,
  minDate,
}: DateFieldProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const floor = minDate ?? today;

  const selected = value ? new Date(`${value}T00:00:00`) : undefined;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen((wasOpen) => {
          if (wasOpen) onBlur?.();
          return false;
        });
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
  }, [onBlur]);

  return (
    <div ref={containerRef} className="relative">
      {/* Hidden input keeps the value reachable by name for emailjs.sendForm */}
      <input type="hidden" name={name} value={value} required={required} />

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-invalid={error}
        className={`flex w-full items-center justify-between rounded-xl border bg-white py-3 ps-4 pe-4 font-body text-sm outline-none transition-colors ${
          error
            ? "border-red-400"
            : open
              ? "border-primary"
              : "border-border hover:border-secondary/60"
        } ${selected ? "text-foreground" : "text-muted-foreground"}`}
      >
        <span className="truncate">
          {selected ? format(selected, "dd MMM yyyy") : placeholder}
        </span>
        <CalendarDays size={16} className="ms-2 shrink-0 text-secondary" />
      </button>

      {open && (
        <div className="absolute start-0 top-[calc(100%+6px)] z-20 rounded-xl border border-border bg-white p-3 shadow-lg">
          <div
            style={
              {
                // Theme react-day-picker to match the site's primary color.
                // Swap the hex for your actual primary token if it differs.
                "--rdp-accent-color": "#7c2d12",
                "--rdp-today-color": "#7c2d12",
                "--rdp-selected-border": "none",
              } as React.CSSProperties
            }
          >
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={(date) => {
                if (!date) return;
                onChange(format(date, "yyyy-MM-dd"));
                setOpen(false);
              }}
              disabled={{ before: floor }}
              defaultMonth={selected ?? floor}
            />
          </div>
        </div>
      )}
    </div>
  );
}