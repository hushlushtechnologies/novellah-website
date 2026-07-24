 import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "solid" | "secondary" | "outline";
  icon?: ReactNode;
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

export function Button({ children, variant = "primary", icon, className = "", href, ...props }: ButtonProps) {
  const classes = `inline-flex w-fit items-center gap-2 rounded-md px-6 py-3 font-body text-sm font-medium
    shadow-soft transition-shadow duration-300 hover:shadow-hover
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
    ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as { onClick?: () => void })}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon}
    </button>
  );
}