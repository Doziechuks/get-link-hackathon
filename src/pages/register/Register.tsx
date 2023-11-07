import { useEffect, useState } from "react";
import styles from "./Register.module.less";
import { registerImage } from "../../assets";
import { RegisterationForm, SuccessModal } from "../../components";
import Aos from "aos";
import "aos/dist/aos.css";

const Register = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <main
        className={`${styles.container} ${openModal && styles.fixedHeight}`}
      >
        <h3 className={styles.mobileHeading} data-aos="fade-right">
          Register
        </h3>
        <section className={styles.wrapper}>
          <div className={styles.imgBox} data-aos="fade-right">
            <img src={registerImage} alt="register banner" loading="lazy" />
          </div>
          <RegisterationForm setOpenModal={setOpenModal} />
        </section>
      </main>
      {openModal && <SuccessModal handleCloseModal={handleCloseModal} />}
    </>
  );
};

export default Register;
