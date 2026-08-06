"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation"
import { useLocale, useTranslations } from "next-intl";
import { Search, X } from "lucide-react";
import { treatments } from "@/lib/content/treatments";

const MAX_RESULTS = 6;

export function SearchTooltip({
  open,
  onClose,
  anchorRef,
}: {
  open: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLElement | null>;
}) {
  const locale = useLocale() as "en" | "ar";
  const t = useTranslations("search");
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return treatments
      .filter((treatment) => {
        const title = treatment.title[locale].toLowerCase();
        const overview = treatment.overview[locale].toLowerCase();
        return title.includes(q) || overview.includes(q);
      })
      .slice(0, MAX_RESULTS);
  }, [query, locale]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    } else {
      setQuery("");
      setActiveIndex(-1);
    }
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        !anchorRef.current?.contains(target)
      ) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose, anchorRef]);

  // Close on Escape, basic arrow-key navigation
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") {
      onClose();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    }
    if (e.key === "Enter" && activeIndex >= 0 && results[activeIndex]) {
      const result = results[activeIndex];
      window.location.href = `/treatments/${result.categorySlug}/${result.slug}`;
    }
  }

  if (!open) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-label={t("label")}
  className="absolute start-1/2 top-full z-50 mt-2 w-[28rem] max-w-[90vw] -translate-x-1/2 rounded-2xl border border-border bg-card p-3 shadow-xl"    >
      <div className="flex items-center gap-2 rounded-full bg-background px-4 py-2">
        <Search size={16} className="shrink-0 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          placeholder={t("placeholder")}
          className="min-w-0 flex-1 bg-transparent font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        {query && (
          <button
            type="button"
            aria-label={t("clear")}
            onClick={() => setQuery("")}
            className="shrink-0 text-muted-foreground"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {query.trim() && (
        <div className="mt-2 max-h-80 overflow-y-auto">
          {results.length === 0 ? (
            <p className="px-3 py-4 text-center font-body text-sm text-muted-foreground">
              {t("noResults", { query })}
            </p>
          ) : (
            <ul className="flex flex-col gap-1">
              {results.map((result, i) => (
                <li key={`${result.categorySlug}-${result.slug}`}>
                  <Link
                    href={`/treatments/${result.categorySlug}/${result.slug}`}
                    onClick={onClose}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`flex items-center gap-3 rounded-xl p-2 transition-colors ${
                      activeIndex === i ? "bg-background" : ""
                    }`}
                  >
                    <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={result.overviewImage}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-heading text-sm font-semibold text-foreground">
                        {result.title[locale]}
                      </span>
                      <span className="block truncate font-body text-xs text-muted-foreground">
                        {result.overview[locale]}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}