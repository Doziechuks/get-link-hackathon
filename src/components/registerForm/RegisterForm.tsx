import { FormBox } from "..";
import styles from "./RegisterForm.module.less";

const RegisterForm = () => {
  return (
    <section className={styles.container} data-aos="fade-left">
      <div className={styles.headingWrapper}>
        <h3 className={styles.desktopTitle}>Register</h3>
        <span>Be part of this movement!</span>
        <h6 className={styles.subTitle}>CREATE YOUR ACCOUNT</h6>
      </div>
      <FormBox />
    </section>
  );
};

export default RegisterForm;
