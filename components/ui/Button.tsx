import { Link } from "@/i18n/navigation"
import { ButtonHTMLAttributes, ReactNode } from "react";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "solid" | "secondary" | "outline";
  size?: "md" | "sm";
  icon?: ReactNode;
  shine?: boolean;
  className?: string;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  onClick?: () => void;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: undefined;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variants = {
  solid: "bg-gradient-primary text-white border-none",
  primary: "bg-primary text-white border-none",
  secondary: "bg-gradient-secondary text-foreground border-none",
  outline: "bg-white text-secondary border border-secondary",
};

const sizes = {
  md: "px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm gap-1.5 sm:gap-2",
  sm: "px-3 py-1.5 text-[11px] sm:px-4 sm:py-2 sm:text-xs gap-1 sm:gap-1.5",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  shine = true,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `group relative inline-flex w-fit max-w-full items-center whitespace-nowrap rounded-md font-body font-medium
  shadow-soft uppercase
  transition-all duration-300 ease-out
  hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-hover
  active:translate-y-0 active:scale-[0.98]
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
  ${shine ? "overflow-hidden" : ""}
  ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
      {shine && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as { onClick?: () => void })}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}