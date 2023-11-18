import { useState, ChangeEvent, FormEvent } from "react";
import { CustomButton, CustomInput, FormLoader } from "..";
import styles from "./contactFormBox.module.less";
import { axiosRequest } from "../../misc/axiosInstance";
import "aos/dist/aos.css";

const initialState = {
  first_name: "",
  email: "",
  phone_number: "",
};
const ContactFormBox = () => {
  const [user, setUser] = useState(initialState);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
    setError("");
  };
  const handleChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = "/hackathon/contact-form";
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      setIsLoading(true);
      const response = await axiosRequest.post(
        url,
        {
          ...user,
          message,
        },
        { headers }
      );
      if (response) {
        setIsLoading(false);
        setSuccess(true);
      }
    } catch (error: unknown) {
      if (typeof error === "string") {
        setError("Something went wrong!!");
        console.log(error);
      } else if (error instanceof Error) {
        setError("Something went wrong!!");
        console.log(error.message);
      }
    } finally {
      setUser(initialState);
      setMessage("");
      setIsLoading(false);
    }
  };
  return (
    <section
      className={styles.container}
      onSubmit={handleSubmit}
      data-aos="fade-left"
    >
      <div className={styles.heading}>
        <h3>
          Questions or need assistance? <br /> Let us know about it!
        </h3>
        <span className={styles.mobileInfo}>
          Email us below to any question related to our event
        </span>
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
      {isLoading && <FormLoader />}
      {success && (
        <span className={styles.success}>Thank you for contacting us!!</span>
      )}
      <form className={styles.formWrapper}>
        <CustomInput
          placeholder="First Name"
          name="first_name"
          type="text"
          value={user.first_name}
          onChange={handleChange}
          required
          isContact
        />
        <CustomInput
          placeholder="Email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
          required
          isContact
        />
        <CustomInput
          placeholder="Phone Number"
          name="phone_number"
          type="number"
          value={user.phone_number}
          onChange={handleChange}
          required
          isContact
        />
        <textarea
          placeholder="Message"
          name="message"
          value={message}
          onChange={handleChangeTextArea}
          required
        />
        <CustomButton>
          <span>Submit</span>
        </CustomButton>
      </form>
    </section>
  );
};

export default ContactFormBox;
