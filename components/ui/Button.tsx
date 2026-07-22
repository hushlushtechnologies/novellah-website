import Link, { LinkProps } from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "solid" | "secondary" | "outline";
  icon?: ReactNode;
  className?: string;
}

interface ButtonAsLink
  extends BaseProps,
    LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {}

interface ButtonAsButton
  extends BaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variants = {
  primary: "bg-primary text-white",
  solid: "bg-gradient-primary text-white",
  secondary: "bg-gradient-secondary text-foreground",
  outline: "border border-border text-foreground bg-transparent",
};

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    icon,
    className = "",
  } = props;

  const classes = `
    inline-flex w-fit items-center gap-2 rounded-md px-6 py-3
    font-body text-sm font-medium
    shadow-soft transition-shadow duration-300
    hover:shadow-hover
    focus-visible:outline focus-visible:outline-2
    focus-visible:outline-offset-2
    focus-visible:outline-primary
    ${variants[variant]}
    ${className}
  `;

  if ("href" in props && props.href) {
    const {
      href,
      children,
      variant,
      icon,
      className,
      ...linkProps
    } = props;

    return (
      <Link
        href={href}
        className={classes}
        {...linkProps}
      >
        {children}
        {icon}
      </Link>
    );
  }

  const {
    children: _children,
    variant: _variant,
    icon: _icon,
    className: _className,
    ...buttonProps
  } = props;

  return (
    <button
      className={classes}
      {...buttonProps}
    >
      {children}
      {icon}
    </button>
  );
}