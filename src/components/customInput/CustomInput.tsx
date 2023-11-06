import React from "react";
import styles from "./CustomInput.module.less";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isSelect?: boolean;
  name?: string;
  value?: string;
  onChange?: () => void;
  children?: React.ReactNode;
}
const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { label, isSelect, name, value, onChange, children, ...otherProps } =
    props;
  return (
    <div className={styles.inputBox}>
      <label>{label}</label>
      {isSelect ? (
        <select name={name} value={value} onChange={onChange}>
          {children}
        </select>
      ) : (
        <input {...otherProps} />
      )}
    </div>
  );
};

export default CustomInput;
