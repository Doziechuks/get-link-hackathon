import { ContactFormBox } from "../../components";
import styles from "./Contact.module.less";
import { faceebook, instagram, x, linkedin, backIcon } from "../../assets";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.container}>
      <div className={styles.closeBox} onClick={() => navigate(-1)}>
        <img src={backIcon} alt="close icon" />
      </div>
      <div className={styles.addressWrapper}>
        <h3>Get in touch</h3>
        <span className={styles.info}>
          Contact <br /> Information
        </span>
        <span className={styles.info}>
          27,Alara Street <br /> Yaba 100012 <br /> Lagos State
        </span>
        <span className={styles.info}>Call Us : 07067981819</span>
        <span className={styles.info}>
          we are open from Monday-Friday 08:00am - 05:00pm
        </span>
        <div className={styles.smHandles}>
          <span>Share on</span>
          <div className={styles.smIcons}>
            <img src={instagram} alt="" />
            <img src={x} alt="" />
            <img src={faceebook} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
      </div>
      <ContactFormBox />
    </main>
  );
};

export default Contact;
