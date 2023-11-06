import React from "react";
import styles from "./CustomButton.module.less";

interface BtnProps {
  children: React.ReactNode;
  isRegister?: boolean;
}
const CustomButton = ({ children, isRegister, ...otherProps }: BtnProps) => {
  return (
    <button
      className={`${styles.wrapper} ${isRegister && styles.fullWidth}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
