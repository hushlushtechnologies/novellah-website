import { ChevronLeft, ChevronRight } from "lucide-react";

function SwiperArrowButton({
  direction,
  onClick,
  refCallback,
  ariaLabel,
  className = "",
}: {
  direction: "prev" | "next";
  onClick?: () => void;
  refCallback: (el: HTMLButtonElement | null) => void;
  ariaLabel: string;
  className?: string;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      ref={refCallback}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition-colors hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 ${className}`}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}