"use client";

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
  return (
    <div
       className={`mx-auto w-fit max-w-full rounded-2xl border border-border bg-card p-2 ${className}`}
    >
      <div
        className="
          flex gap-2 overflow-x-auto scroll-smooth
          snap-x snap-mandatory
          scrollbar-hide
          sm:flex-wrap sm:justify-center sm:overflow-visible sm:snap-none
        "
      >
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            className={`shrink-0 cursor-pointer snap-start whitespace-nowrap rounded-full px-3 py-1.5 font-body text-xs font-medium transition-colors sm:px-4 sm:py-2 sm:text-sm ${
              activeId === item.id
                ? "bg-gradient-primary text-white"
                : "text-foreground hover:bg-background-light"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}  