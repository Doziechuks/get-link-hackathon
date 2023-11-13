import { useEffect } from "react";
import styles from "./Faq.module.less";
import { faq } from "../../assets";
import Aos from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className={styles.container} id="f">
      <div className={styles.faqWrapper}>
        <div className={styles.titleWrapper}>
          <h3 data-aos="fade-up">
            Frequently Ask <br /> <span>Question</span>
          </h3>
          <p data-aos="fade-up">
            We got answers to the questions that you might want to ask about{" "}
            <span>getlinked Hackathon 1.0</span>
          </p>
        </div>
        <div className={styles.questionsBox}>
          <div className={styles.question} data-aos="fade-up">
            <p>Can I work on a project I started before the hackathon?</p>
            <span>+</span>
          </div>
          <div className={styles.question} data-aos="fade-up">
            <p>What happens if I need help during the hackathon?</p>
            <span>+</span>
          </div>
          <div className={styles.question} data-aos="fade-up">
            <p>What happens if I don't have an idea for a project?</p>
            <span>+</span>
          </div>
          <div className={styles.question} data-aos="fade-up">
            <p>Can I join a team or do I have to come with one?</p>
            <span>+</span>
          </div>
          <div className={styles.question} data-aos="fade-up">
            <p>What happens after the hackathon ends</p>
            <span>+</span>
          </div>
          <div className={styles.question} data-aos="fade-up">
            <p>Can I work on a project I started before the hackathon?</p>
            <span>+</span>
          </div>
        </div>
      </div>
      <div className={styles.imgBox} data-aos="fade-up">
        <img src={faq} alt="faq illustrator" />
      </div>
    </section>
  );
};

export default Faq;
