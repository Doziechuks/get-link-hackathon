import { CustomButton, CustomInput } from "..";
import styles from "./FormBox.module.less";

const FormBox = () => {
  return (
    <form className={styles.wrapper}>
      <div className={styles.inputWrap}>
        <CustomInput
          label="Team’s Name"
          placeholder="Enter the name of your group"
        />
        <CustomInput label="Phone" placeholder="Enter your phone number" />
      </div>
      <div className={styles.inputWrap}>
        <CustomInput label="Email" placeholder="Enter your email address" />
        <CustomInput
          label="Project Topic"
          placeholder="What is your group project topic"
        />
      </div>
      <div className={`${styles.inputWrap} ${styles.selectWrap}`}>
        <CustomInput
          label="Project Topic"
          placeholder="Select your category"
          isSelect
        >
          <option value="Select your category">Select your category</option>
          <option value="Select">frontend</option>
          <option value="Select">backend</option>
          <option value="Select">mobile</option>
        </CustomInput>
        <CustomInput label="Group Size" placeholder="Select" isSelect>
          <option value="Select">Select</option>
          <option value="Select">2-3</option>
          <option value="Select">3-5</option>
          <option value="Select">5-10</option>
        </CustomInput>
      </div>

      <div className={styles.agreementBox}>
        <span>Please review your registration details before submitting</span>
        <div className={styles.checkboxWrap}>
          <input
            type="checkbox"
            className={styles.customCheckbox}
            id="customCheckbox"
          />

          <p>I agreed with the event terms and conditions and privacy policy</p>
        </div>
      </div>
      <CustomButton isRegister>
        <span>Register Now</span>
      </CustomButton>
    </form>
  );
};

export default FormBox;
