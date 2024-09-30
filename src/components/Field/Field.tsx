import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./Field.module.css";

interface FieldProps {
  label: string;
  inputId: string;
  inputPlaceholder: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Field = ({
  label,
  inputId,
  inputPlaceholder,
  buttonText,
  onButtonClick,
}: FieldProps) => {
  return (
    <div className={styles.field}>
      <label htmlFor={inputId}>{label}</label>
      <div className={styles.inputFieldContainer}>
        <Input id={inputId} placeholder={inputPlaceholder} />
        <Button text={buttonText} onClick={onButtonClick} />
      </div>
    </div>
  );
};

export default Field;
