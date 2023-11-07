import React from "react";
import styles from "./CustomButton.module.less";

interface BtnProps {
  children: React.ReactNode;
  isRegister?: boolean;
  isBack?: boolean;
}
const CustomButton = ({
  children,
  isRegister,
  isBack,
  ...otherProps
}: BtnProps) => {
  return (
    <button
      className={`${styles.wrapper} ${isRegister && styles.fullWidth}`}
      {...otherProps}
      style={{ width: `${isBack && "100%"}` }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
