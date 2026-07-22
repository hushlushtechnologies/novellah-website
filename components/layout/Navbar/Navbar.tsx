 "use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Search, Menu, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/navigation";
import Image from "next/image";
import { TreatmentsMegaMenu } from "./TreatmentsMegaMenu";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const t = useTranslations("nav");
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaMenuOpen(true);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setMegaMenuOpen(false), 150);
  }

  return (
    <header className="relative border-b border-border bg-background-light">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.svg" alt="Novellah" width={90} height={40} priority />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.hasMegaMenu ? (
              <div key={link.href} onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
                <button
                  className="flex items-center gap-1 font-body text-sm text-foreground"
                  aria-expanded={megaMenuOpen}
                  aria-haspopup="true"
                >
                  {t(link.key)}
                  <svg width="12" height="12" viewBox="0 0 12 12" className={`transition-transform ${megaMenuOpen ? "rotate-180" : ""}`}>
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </button>
                {megaMenuOpen && <TreatmentsMegaMenu />}
              </div>
            ) : (
              <Link key={link.href} href={link.href} className="font-body text-sm text-foreground">
                {t(link.key)}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button aria-label="Search" className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-primary">
            <Search size={16} />
          </button>
          <LocaleSwitcher />
           <Button href="/book-appintment" icon={<ArrowRight size={14} />}>{t("bookAppointment")} </Button>
        </div>

        <button
          onClick={() => setMobileNavOpen(true)}
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white lg:hidden"
        >
          <Menu size={18} />
        </button>
      </div>

      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </header>
  );
}