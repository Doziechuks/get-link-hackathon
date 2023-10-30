import styles from "./Rules.module.less";
import { lady } from "../../assets";

const Rules = () => {
  return (
    <section className={styles.container}>
      <div className={styles.writeUp} data-aos="fade-up">
        <h3>
          Rules and <br />
          <span>Guidelines</span>
        </h3>
        <p>
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <div className={styles.imgBox} data-aos="fade-up">
        <img src={lady} alt="lady illustrator" />
      </div>
    </section>
  );
};

export default Rules;
