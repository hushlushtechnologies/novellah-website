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

<<<<<<< HEAD
interface ButtonAsLink
  extends BaseProps,
    LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {}

interface ButtonAsButton
  extends BaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
=======
interface ButtonAsLink extends BaseProps {
  href: string;
  onClick?: () => void;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
>>>>>>> 5187fbf (ts error fixed)
  href?: undefined;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variants = {
  solid: "bg-gradient-primary text-white",
  primary: "bg-primary text-white",
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
<<<<<<< HEAD
      <Link
        href={href}
        className={classes}
        {...linkProps}
      >
=======
      <Link href={href} className={classes} {...(props as { onClick?: () => void })}>
>>>>>>> 5187fbf (ts error fixed)
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