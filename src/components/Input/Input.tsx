import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

type InputProps = {
  variant?: "primary" | "secondary";
  hasBorder?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ variant = "primary", ...props }: InputProps) => {
  return (
    <div className={`${styles.inputContainer} ${styles[variant]}`}>
      <input {...props} />
    </div>
  );
};

export default Input;
