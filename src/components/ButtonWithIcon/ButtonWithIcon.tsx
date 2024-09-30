import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./ButtonWithIcon.module.css";
import Button from "../Button/Button";

interface ButtonWithIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon: ReactNode;
  iconPosition?: "left" | "right";
}

const ButtonWithIcon = ({
  children,
  icon,
  iconPosition = "left",
  ...props
}: ButtonWithIconProps) => {
  return (
    <Button {...props}>
      {iconPosition === "left" && <span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>{children}</span>
    </Button>
  );
};

export default ButtonWithIcon;
