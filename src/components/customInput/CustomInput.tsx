import React from "react";
import styles from "./CustomInput.module.less";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isContact?: boolean;
}
export const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { label, isContact, ...otherProps } = props;
  return (
    <div className={styles.inputBox}>
      <label>{label}</label>
      <input
        {...otherProps}
        className={`${isContact && styles.contactInput}`}
      />
    </div>
  );
};

interface CustomSelectInputProps
  extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
  children: React.ReactNode;
}
export const CustomSelectInput: React.FC<CustomSelectInputProps> = ({
  label,
  children,
  ...otherProps
}) => {
  return (
    <div className={styles.inputBox}>
      <label>{label}</label>
      <select {...otherProps}>{children}</select>
    </div>
  );
};
