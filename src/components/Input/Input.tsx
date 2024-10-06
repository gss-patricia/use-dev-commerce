import { ReactNode } from "react";
import Styles from "./Input.module.css";

type InputProps = {
  icon?: ReactNode;
  variant?: "primary" | "secondary";
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  style?: any;
  type?: string;
};

const Input = ({
  icon,
  variant = "primary",
  onChange,
  placeholder,
  id,
  style,
  type = "text",
  ...props
}: InputProps) => (
  <input
    type={type}
    style={style}
    className={Styles[variant]}
    {...props}
    onChange={onChange}
    id={id}
    placeholder={placeholder}
  />
);

export default Input;
