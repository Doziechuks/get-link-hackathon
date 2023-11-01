import { useEffect } from "react";
import styles from "./Partners.module.less";
import {
  vizual,
  liberty,
  libertyPay,
  wisper,
  winwise,
  paybox,
} from "../../assets";
import Aos from "aos";
import "aos/dist/aos.css";

const Partner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.heading} data-aos="fade-up">
        <h3>Partners and Sponsors</h3>
        <p>
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className={styles.logoswrapper} data-aos="flip-up">
        <div className={styles.box1}>
          <img src={liberty} alt="liberty logo" />
          <div className={styles.circleLeft} />
        </div>
        <div className={styles.box2}>
          <img src={libertyPay} alt="liberty pay logo" />
        </div>
        <div className={styles.box3}>
          <img src={winwise} alt="winwise logo" />
          <div className={styles.circleRight} />
        </div>
        <div className={styles.box4}>
          <img src={wisper} alt="wisper logo" />
        </div>
        <div className={styles.box5}>
          <img src={paybox} alt="paybox logo" />
        </div>
        <div className={styles.box6}>
          <img src={vizual} alt="vizual logo" />
        </div>
      </div>
    </section>
  );
};

export default Partner;
