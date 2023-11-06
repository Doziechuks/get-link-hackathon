import { useState, ChangeEvent, FormEvent } from "react";
import { CustomButton, CustomInput, CustomSelectInput } from "..";
import styles from "./FormBox.module.less";

const initialState = {
  team_name: "",
  phone_number: "",
  email: "",
  project_topic: "",
};
const FormBox = () => {
  const [user, setUser] = useState(initialState);
  const [isChecked, setisChecked] = useState(false);
  const [category, setCategory] = useState("Select your category");
  const [group_size, setGroup_size] = useState("Select");

  const handleCheckBox = () => {
    setisChecked((prev) => !prev);
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    if (name === "category") {
      setCategory(value);
    } else if (name === "group_size") {
      setGroup_size(value);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      name: user.team_name,
      phone: user.phone_number,
      email: user.email,
      topic: user.project_topic,
      category,
      group_size,
    });
    setUser(initialState);
    setCategory("Select your category");
    setGroup_size("Select");
    setisChecked(false);
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <div className={styles.inputWrap}>
        <CustomInput
          label="Team’s Name"
          name="team_name"
          type="text"
          value={user.team_name}
          onChange={handleChange}
          required
          placeholder="Enter the name of your group"
        />
        <CustomInput
          label="Phone"
          name="phone_number"
          type="number"
          value={user.phone_number}
          onChange={handleChange}
          required
          placeholder="Enter your phone number"
        />
      </div>
      <div className={styles.inputWrap}>
        <CustomInput
          label="Email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
          required
          placeholder="Enter your email address"
        />
        <CustomInput
          label="Project Topic"
          name="project_topic"
          type="text"
          value={user.project_topic}
          onChange={handleChange}
          required
          placeholder="What is your group project topic"
        />
      </div>
      <div className={`${styles.inputWrap} ${styles.selectWrap}`}>
        <CustomSelectInput
          label="Category"
          name="category"
          value={category}
          onChange={handleSelectChange}
        >
          <option value="Select your category">Select your category</option>
          <option value="frontend">frontend</option>
          <option value="backend">backend</option>
          <option value="mobile">mobile</option>
        </CustomSelectInput>
        <CustomSelectInput
          label="Group Size"
          name="group_size"
          value={group_size}
          onChange={handleSelectChange}
        >
          <option value="Select">Select</option>
          <option value="2-3">2-3</option>
          <option value="3-5">3-5</option>
          <option value="5-10">5-10</option>
        </CustomSelectInput>
      </div>

      <div className={styles.agreementBox}>
        <span>Please review your registration details before submitting</span>
        <div className={styles.checkboxWrap}>
          <input
            type="checkbox"
            checked={isChecked}
            className={styles.customCheckbox}
            id="customCheckbox"
            required
            onChange={handleCheckBox}
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
