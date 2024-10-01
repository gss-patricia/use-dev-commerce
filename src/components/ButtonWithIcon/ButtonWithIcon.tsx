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
  return <div>oi</div>;
};

export default ButtonWithIcon;
