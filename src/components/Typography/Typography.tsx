import { ReactElement, ReactNode, ElementType } from "react";
import styles from "./Typography.module.scss";

export type TypographyVariant = "h1" | "h2" | "h3" | "p" | "span";

export type TypographyColor =
  | "primary"
  | "secondary"
  | "accent"
  | "light"
  | "dark"
  | "gradient";

export interface TypographyProps {
  children: ReactNode;
  variant?: TypographyVariant;
  color?: TypographyColor;
  className?: string;
}

const variantToElement: Record<TypographyVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p: "p",
  span: "span",
};

const Typography = ({
  children,
  variant = "p",
  color = "primary",
  className = "",
}: TypographyProps): ReactElement => {
  const Component = variantToElement[variant];

  const variantClass = `variant${
    variant.charAt(0).toUpperCase() + variant.slice(1)
  }`;
  const colorClass = `color${color.charAt(0).toUpperCase() + color.slice(1)}`;

  const classNames = [
    styles.typography,
    styles[variantClass],
    styles[colorClass],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Component className={classNames}>{children}</Component>;
};

export default Typography;
