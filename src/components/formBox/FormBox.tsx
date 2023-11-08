import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { CustomButton, CustomInput, CustomSelectInput, FormLoader } from "..";
import styles from "./FormBox.module.less";
import { axiosRequest } from "../../misc/axiosInstance";

interface ModalProp {
  setOpenModal: (param: boolean) => void;
}
interface CategoryProps {
  id: string;
  name: string;
}
const initialState = {
  team_name: "",
  phone_number: "",
  email: "",
  project_topic: "",
};
const FormBox = ({ setOpenModal }: ModalProp) => {
  const [user, setUser] = useState(initialState);
  const [isChecked, setisChecked] = useState(false);
  const [category, setCategory] = useState("Select your category");
  const [categoryOptions, setCategoryOptions] = useState<CategoryProps[]>([]);
  const [group_size, setGroup_size] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckBox = () => {
    setisChecked((prev) => !prev);
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    if (name === "category") {
      setCategory(value);
    } else if (name === "group_size") {
      setGroup_size(Number(value));
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "/hackathon/registration";
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      setIsLoading(true);
      const response = await axiosRequest.post(
        url,
        {
          ...user,
          group_size,
          category,
          privacy_poclicy_accepted: isChecked,
        },
        { headers }
      );
      if (response) {
        setIsLoading(false);
        // console.log(response);
        setOpenModal(true);
      }
    } catch (error: unknown) {
      if (typeof error === "string") {
        setError("Something went wrong!!");
        // console.log(error);
      } else if (error instanceof Error) {
        setError("Something went wrong!!");
        // console.log(error.message);
      }
    } finally {
      setIsLoading(false);
      setUser(initialState);
      setCategory("Select your category");
      setGroup_size(0);
      setisChecked(false);
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axiosRequest.get("/hackathon/categories-list");
        if (response) {
          // console.log(response.data);
          setCategoryOptions(response.data);
        }
      } catch (error: unknown) {
        if (typeof error === "string") {
          console.log(error);
        } else if (error instanceof Error) {
          console.log(error.message);
        }
      }
    };
    getCategories();
  }, []);
  // console.log(categoryOptions);

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      {error && <span className={styles.errorMessage}>{error}</span>}
      {isLoading && <FormLoader />}
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
          {categoryOptions.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </CustomSelectInput>
        <CustomSelectInput
          label="Group Size"
          name="group_size"
          value={group_size}
          onChange={handleSelectChange}
        >
          <option value="Select">Select</option>
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
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
