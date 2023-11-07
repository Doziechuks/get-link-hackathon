import styles from "./successfulRegistration.module.less";
import { successImg } from "../../assets";
import { CustomButton } from "..";
import { useNavigate } from "react-router-dom";

interface ModalProp {
  handleCloseModal: () => void;
}
const SuccessfulRegistration = ({ handleCloseModal }: ModalProp) => {
  const navigate = useNavigate();
  const handleClosePopUp = () => {
    handleCloseModal();
    navigate("/");
  };
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgBox}>
          <img
            src={successImg}
            alt="successful registration_image"
            loading="lazy"
          />
        </div>
        <div className={styles.writeUpWrapper}>
          <p className={styles.congrats}>
            Congratulations <br /> you have successfully Registered!
          </p>
          <div className={styles.info}>
            Yes, it was easy and you did it! <br /> check your mail box for next
            step
          </div>
          <div className={styles.btnWrapper} onClick={handleClosePopUp}>
            <CustomButton isBack>
              <span>Back</span>
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessfulRegistration;
