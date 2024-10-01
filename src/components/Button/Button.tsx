import { ReactNode } from "react";
import classnames from "classnames"; // Para combinar classes dinamicamente
import Styles from "./Button.module.css";

interface ButtonProps {
  style?: any;
  children?: ReactNode;
  text?: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large"; // Define diferentes tamanhos
  borderRadius?: "none" | "small" | "medium" | "large"; // Opções de border-radius
  onClick?: () => void; // Manipulação de click adicional
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  borderRadius = "medium",
  text,
  icon,
  onClick,
  style,
  ...props
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      style={style}
      className={classnames(
        Styles.button,
        Styles[variant],
        Styles[size],
        Styles[borderRadius]
      )}
      onClick={handleClick}
      {...props}
    >
      <span className={Styles.icon}>{icon}</span>
      <span className={Styles.text}>{text ? text : children}</span>
    </button>
  );
};

export default Button;
