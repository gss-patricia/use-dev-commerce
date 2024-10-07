import { ReactNode } from "react";
import Button from "../Button/Button";
import Input, { InputProps } from "../Input/Input";
import Styles from "./IconInput.module.css";

type IconInputProps = {
  children: ReactNode;
} & InputProps;

const IconInput = ({
  variant = "primary",
  children,
  ...props
}: IconInputProps) => (
  <div className={Styles.iconInputContainer}>
    <Input variant={variant} {...props} />
    <div className={Styles.iconContainer}> {children}</div>
  </div>
);

export default IconInput;
