import { ReactNode } from "react";
import Button from "../Button/Button";
import Input, { InputProps } from "../Input/Input";
import Styles from "./IconInput.module.css";

type IconInputProps = {
  children?: ReactNode;
} & InputProps;

const IconInput = ({
  variant = "primary",
  children,
  ...props
}: IconInputProps) => (
  <div className={Styles.iconInputContainer}>
    <Input variant={variant} {...props} />
    {children && (
      <Button className={Styles.iconButton} variant="secondary">
        {children}
      </Button>
    )}
  </div>
);

export default IconInput;
