 "use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Search, Menu, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const tSearch = useTranslations("search");

  useEffect(() => {
    setMegaMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 12);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function openMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaMenuOpen(true);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setMegaMenuOpen(false), 150);
  }

  function isActive(href: string) {
    const normalized = pathname.replace(/^\/(en|ar)(?=\/|$)/, "") || "/";
    if (href === "/") return normalized === "/";
    return normalized === href || normalized.startsWith(`${href}/`);
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-border/60 bg-card/80 shadow-md backdrop-blur-xl"
            : "border-transparent bg-card shadow-xl"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 xl:px-10 2xl:max-w-[1600px] 2xl:px-12 ${
            scrolled ? "py-1" : "py-2"
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/logo.svg"
              alt="Novellah"
              width={90}
              height={40}
              priority
              className={`origin-left transition-all duration-300 ${scrolled ? "scale-75" : "scale-100"}`}
            />
          </Link>

          <nav
            className={`hidden items-center font-medium transition-all duration-300 lg:flex ${
              scrolled ? "gap-3 xl:gap-6" : "gap-4 xl:gap-8"
            }`}
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return link.hasMegaMenu ? (
                <div
                  key={link.href}
                  onMouseEnter={openMenu}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    className="group flex items-center font-medium gap-1"
                    aria-expanded={megaMenuOpen}
                    aria-haspopup="true"
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 whitespace-nowrap font-body text-sm transition-colors duration-300 ${
                        active || megaMenuOpen
                          ? "text-primary"
                          : "text-foreground group-hover:text-primary"
                      }`}
                    >
                      {t(link.key)}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        className={`transition-transform duration-300 ${
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

                  <AnimatePresence>
                    {megaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute inset-x-0 top-full z-50"
                      >
                        <TreatmentsMegaMenu />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap font-body text-sm transition-colors duration-300 ${
                    active ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {t(link.key)}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 xl:gap-3 lg:flex shrink-0">
            <button
              ref={searchButtonRef}
              aria-label={tSearch("label")}
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((v) => !v)}
              title={tSearch("label")}
              className={`flex shrink-0 cursor-pointer items-center justify-center rounded-full bg-background text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_16px_-2px] hover:shadow-primary/40 ${
                scrolled ? "h-8 w-8" : "h-10 w-10"
              }`}
            >
              <Search size={16} />
            </button>
            <LocaleSwitcher />

            <Button
              href="/book-appointment"
              icon={<ArrowRight size={14} />}
              size={scrolled ? "sm" : "md"}
            >
              {t("bookAppointment")}
            </Button>
          </div>

          <SearchTooltip
            open={searchOpen}
            onClose={() => setSearchOpen(false)}
            anchorRef={searchButtonRef}
          />

          <button
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-300 hover:-translate-y-0.5 lg:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
}