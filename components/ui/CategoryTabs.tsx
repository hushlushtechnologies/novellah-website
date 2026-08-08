 "use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TabItem {
  id: string;
  label: string;
}

interface CategoryTabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export function CategoryTabs({
  items,
  activeId,
  onChange,
  className = "",
}: CategoryTabsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  // Whenever the active tab changes — including on first mount, e.g. when
  // arriving from the footer with a category already pre-selected — make
  // sure it's actually visible inside the horizontally-scrollable row on
  // small screens. Without this, the pill can be selected on a button
  // that's scrolled off-screen and the user has no idea it's active.
  useEffect(() => {
    const activeButton = buttonRefs.current.get(activeId);
    const container = containerRef.current;
    if (!activeButton || !container) return;

    activeButton.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeId]);

  return (
    <div
      className={`mx-auto w-fit max-w-full rounded-2xl border border-border bg-card p-2 ${className}`}
    >
      <div
        ref={containerRef}
        className="
          flex gap-2 overflow-x-auto scroll-smooth
          snap-x snap-mandatory
          scrollbar-hide
          sm:flex-wrap sm:justify-center sm:overflow-visible sm:snap-none
        "
      >
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <motion.button
              key={item.id}
              ref={(el) => {
                if (el) buttonRefs.current.set(item.id, el);
                else buttonRefs.current.delete(item.id);
              }}
              type="button"
              onClick={() => onChange(item.id)}
              whileTap={{ scale: 0.95 }}
              className={`relative shrink-0 cursor-pointer snap-start whitespace-nowrap rounded-full px-3 py-1.5 font-body text-xs font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                isActive ? "text-white" : "text-foreground hover:bg-background-light"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="category-tab-active-pill"
                  className="absolute inset-0 rounded-full bg-gradient-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}