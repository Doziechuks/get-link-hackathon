import { useEffect } from "react";
import styles from "./Idea.module.less";
import { idea } from "../../assets";
import Aos from "aos";
import "aos/dist/aos.css";

const Idea = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.imgBox} data-aos="fade-up">
        <img src={idea} alt="idea" />
        <span>The Big Idea!</span>
      </div>
      <div className={styles.writeUp} data-aos="fade-up">
        <h3>
          Introduction to getlinked <br />
          <span>tech Hackathon 1.0</span>
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
    </section>
  );
};

export default Idea;
