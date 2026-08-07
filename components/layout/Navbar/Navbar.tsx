"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Search, Menu, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/navigation";
import Image from "next/image";
import { TreatmentsMegaMenu } from "./TreatmentsMegaMenu";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui/Button";
import { usePathname } from "next/navigation";
import { SearchTooltip } from "../SearchTooltip";

export function Navbar() {
  const t = useTranslations("nav");
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const tSearch = useTranslations("search");

  useEffect(() => {
    setMegaMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  function openMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaMenuOpen(true);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setMegaMenuOpen(false), 150);
  }

  return (
    <header className="sticky top-0 z-50 shadow-xl bg-card">
   <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 xl:px-10 2xl:max-w-[1600px] 2xl:px-12">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo.svg"
            alt="Novellah"
            width={90}
            height={40}
            priority
          />
        </Link>

        <nav className="hidden items-center font-medium gap-4 xl:gap-8 lg:flex">
          {navLinks.map((link) =>
            link.hasMegaMenu ? (
              <div
                key={link.href}
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
              >
                <button
                  className="flex items-center font-medium gap-1 font-body text-sm text-foreground"
                  aria-expanded={megaMenuOpen}
                  aria-haspopup="true"
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 font-body text-sm text-foreground whitespace-nowrap"
                  >
                    {t(link.key)}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      className={`transition-transform ${
                        megaMenuOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M2 4l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  </Link>
                </button>
                {megaMenuOpen && <TreatmentsMegaMenu />}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-foreground whitespace-nowrap"
              >
                {t(link.key)}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 xl:gap-3 lg:flex shrink-0">
          <button
            ref={searchButtonRef}
            aria-label={tSearch("label")}
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((v) => !v)}
            title={tSearch("label")}
            className="flex cursor-pointer h-10 w-10 items-center justify-center rounded-full bg-background text-primary shrink-0"
          >
            <Search size={16} />
          </button>
          <LocaleSwitcher />
          <Button href="/book-appointment">{t("bookAppointment")} </Button>
        </div>

        <SearchTooltip
          open={searchOpen}
          onClose={() => setSearchOpen(false)}
          anchorRef={searchButtonRef}
        />

        <button
          onClick={() => setMobileNavOpen(true)}
          aria-label="Open menu"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white lg:hidden"
        >
          <Menu size={18} />
        </button>
      </div>

      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </header>
  );
}
