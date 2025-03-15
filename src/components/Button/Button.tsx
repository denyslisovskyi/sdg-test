import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

export type ButtonVariant = "gradient";
export type ButtonSize = "medium";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

const Button = ({
  children,
  variant = "gradient",
  size = "medium",
  fullWidth = false,
  className = "",
  ...rest
}: ButtonProps) => {
  const buttonClasses = [
    styles.button,
    styles[
      `buttonVariant${variant.charAt(0).toUpperCase() + variant.slice(1)}`
    ],
    styles[`buttonSize${size.charAt(0).toUpperCase() + size.slice(1)}`],
    fullWidth ? styles.buttonFullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;
