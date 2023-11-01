import { useEffect } from "react";
import styles from "./Prices.module.less";
import { trophy, gold_medal, silver_medal, bronze_medal } from "../../assets";
import Aos from "aos";
import "aos/dist/aos.css";

const Prices = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.heading} data-aos="fade-up">
        <h3>
          Prizes and <br /> <span>Rewards</span>
        </h3>
        <p>
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.trophyBox} data-aos="fade-up">
          <img src={trophy} alt="trophy" />
        </div>
        <div className={styles.medalBox} data-aos="fade-up">
          <div className={styles.third}>
            <img src={silver_medal} alt="" />
            <div>
              <h6>
                2nd
                <br />
                Runner
              </h6>
              <span>N300,000</span>
            </div>
          </div>
          <div className={styles.first}>
            <img src={gold_medal} alt="" />
            <div>
              <h6>
                1st
                <br />
                Runner
              </h6>
              <span>N400,000</span>
            </div>
          </div>
          <div className={styles.second}>
            <img src={bronze_medal} alt="" />
            <div>
              <h6>
                3rd
                <br />
                Runner
              </h6>
              <span>N150,000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
