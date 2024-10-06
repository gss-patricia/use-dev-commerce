import { ReactNode, MouseEvent } from "react";
import classnames from "classnames"; // Para combinar classes dinamicamente
import Styles from "./Button.module.css";

type StyleProps = {
  [key: string]: any;
};

type ButtonProps = {
  children?: ReactNode;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  style?: StyleProps;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large"; // Define diferentes tamanhos
  borderRadius?: "none" | "small" | "medium" | "large"; // Opções de border-radius
};

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  borderRadius = "medium",
  onClick,
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
      onClick={() => onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
