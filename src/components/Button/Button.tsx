import { ButtonHTMLAttributes, ReactNode } from "react";
import classnames from "classnames"; // Para combinar classes dinamicamente
import Styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  text?: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large"; // Define diferentes tamanhos
  borderRadius?: "none" | "small" | "medium" | "large"; // Opções de border-radius
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  borderRadius = "medium",
  text,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classnames(
        Styles.button,
        Styles[variant],
        Styles[size],
        Styles[borderRadius]
      )}
      {...props}
    >
      {text ? text : children}
    </button>
  );
};

export default Button;
