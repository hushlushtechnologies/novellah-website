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
  //
  // IMPORTANT: this deliberately does NOT use el.scrollIntoView(). That API
  // walks up every scrollable ancestor — including the page/document — so
  // if this section is below the fold (e.g. on the homepage) it makes the
  // whole page jump to the tabs on load. Instead we scroll only the tab
  // row's own scrollLeft, which can never affect page/document scroll.
  useEffect(() => {
    const activeButton = buttonRefs.current.get(activeId);
    const container = containerRef.current;
    if (!activeButton || !container) return;

    const containerWidth = container.clientWidth;
    const buttonLeft = activeButton.offsetLeft;
    const buttonWidth = activeButton.offsetWidth;

    // Center the active button within the visible width of the row.
    const targetScrollLeft =
      buttonLeft - containerWidth / 2 + buttonWidth / 2;

    container.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: "smooth",
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