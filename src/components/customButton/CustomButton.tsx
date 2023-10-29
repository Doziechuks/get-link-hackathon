import React from "react";
import styles from "./CustomButton.module.less";

interface BtnProps {
  children: React.ReactNode;
}
const CustomButton = ({ children }: BtnProps) => {
  return <button className={styles.wrapper}>{children}</button>;
};

export default CustomButton;
