import { useEffect } from "react";
import styles from "./Criteria.module.less";
import { ellipse, criteria } from "../../assets";
import { Link } from "react-router-dom";
import { CustomButton } from "..";
import Aos from "aos";
import "aos/dist/aos.css";

const Criteria = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.imgBox} data-aos="fade-up">
        <img src={criteria} alt="criteria illustrator" />
        <div className={styles.circleBox}>
          <img src={ellipse} alt="ellipse" />
        </div>
      </div>
      <div className={styles.writeUp}>
        <h3 data-aos="fade-up">
          Judging Criteria <br /> <span>Key attributes</span>
        </h3>
        <div className={styles.infoBox}>
          <p data-aos="fade-up">
            <span>Innovation and Creativity</span>: Evaluate the uniqueness and
            creativity of the solution. Consider whether it addresses a
            real-world problem in a novel way or introduces innovative features.
          </p>
          <p data-aos="fade-up">
            <span>Functionality</span>: Assess how well the solution works. Does
            it perform its intended functions effectively and without major
            issues? Judges would consider the completeness and robustness of the
            solution.
          </p>
          <p data-aos="fade-up">
            <span>Impact and Relevance</span>: Determine the potential impact of
            the solution in the real world. Does it address a significant
            problem, and is it relevant to the target audience? Judges would
            assess the potential social, economic, or environmental benefits.
          </p>
          <p data-aos="fade-up">
            <span>Technical Complexity</span>: Evaluate the technical
            sophistication of the solution. Judges would consider the complexity
            of the code, the use of advanced technologies or algorithms, and the
            scalability of the solution.
          </p>
          <p data-aos="fade-up">
            <span>Adherence to Hackathon Rules</span>: Judges will Ensure that
            the team adhered to the rules and guidelines of the hackathon,
            including deadlines, use of specific technologies or APIs, and any
            other competition-specific requirements
          </p>
        </div>
        <CustomButton data-aos="fade-up">
          <Link to="#">Read More</Link>
        </CustomButton>
      </div>
    </section>
  );
};

export default Criteria;
