import { useEffect } from "react";
import styles from "./Register.module.less";
import { registerImage } from "../../assets";
import { RegisterationForm } from "../../components";
import Aos from "aos";
import "aos/dist/aos.css";

const Register = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <main className={styles.container}>
      <h3 className={styles.mobileHeading} data-aos="fade-right">
        Register
      </h3>
      <section className={styles.wrapper}>
        <div className={styles.imgBox} data-aos="fade-right">
          <img src={registerImage} alt="register banner" />
        </div>
        <RegisterationForm />
      </section>
    </main>
  );
};

export default Register;
