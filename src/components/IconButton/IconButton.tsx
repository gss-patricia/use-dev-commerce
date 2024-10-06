import { ReactNode } from "react";
import Button, { ButtonProps } from "../Button/Button";

type IconButtonProps = {
  children: ReactNode;
} & ButtonProps;

const IconButton = ({ children, variant, ...props }: IconButtonProps) => (
  <Button {...props}>{children}</Button>
);

export default IconButton;
