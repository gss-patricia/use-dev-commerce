import { ReactNode, InputHTMLAttributes } from "react";
import Input from "../Input/Input";
import styles from "./InputWithIcon.module.css";

type InputProps = {
  icon: ReactNode;
  variant?: "primary" | "secondary";
} & InputHTMLAttributes<HTMLInputElement>; //Princípio da Substituição de Liskov (LSP)

const InputWithIcon = ({ icon, variant = "primary", ...props }: InputProps) => {
  return (
    <div className={styles.inputContainer}>
      <Input variant={variant} {...props} />
      <span className={styles.iconContainer}>{icon && icon}</span>
    </div>
  );
};

export default InputWithIcon;
