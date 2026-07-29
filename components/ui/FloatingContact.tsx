// components/ui/FloatingContact.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, MessageSquare, Phone, X, Plus } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.92C22 6.45 17.5 2 12.04 2zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.8-4.16-4.94-4.35-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.75 1.24 1.62 2 1.11.99 2.05 1.3 2.34 1.44.29.14.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.39-.24.65-.14.27.1 1.68.79 1.97.94.29.14.48.21.55.33.07.12.07.68-.17 1.35z" />
  </svg>
);

const contactLinks = [
  { icon: Calendar, href: "/book-appointment", label: "Book Appointment" },
  { icon: MessageSquare, href: "/contact-us", label: "Message Us" },
  { icon: Phone, href: siteConfig.phoneHref, label: "Call Us" },
  { icon: WhatsAppIcon, href: siteConfig.whatsappHref, label: "WhatsApp" },
] as const;

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed bottom-28 right-6 z-50 flex flex-col items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Icon stack — collapses to zero height when closed so it never
          occupies a hoverable "dead zone" above the toggle button */}
      <div
        className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "mb-3 max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {contactLinks.map(({ icon: Icon, href, label }) => (
          <Link
            key={label}
            href={href}
            aria-label={label}
            className="flex  h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-md transition-transform hover:scale-105"
          >
            <Icon size={18} />
          </Link>
        ))}

        {/* connector line to toggle button */}
        <span className="h-4   w-px border-l border-dashed border-secondary/60" />
      </div>

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        aria-expanded={isOpen}
        className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-primary shadow-lg transition-colors duration-300 hover:scale-105 ${
          isOpen ? "bg-secondary" : "bg-white"
        }`}
      >
        {isOpen ? <X size={20} /> : <Plus size={20} />}
      </button>
    </div>
  );
}
