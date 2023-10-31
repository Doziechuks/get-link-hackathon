import { useEffect } from "react";
import styles from "./Header.module.less";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  curve,
  light,
  spark,
  link,
  mobileCurve,
  bobble,
  man,
} from "../../assets";
import { CustomButton } from "..";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <header className={styles.container}>
      <div className={styles.highlight} data-aos="slide-left">
        <span>Igniting a Revolution in HR Innovation</span>
        <img src={curve} alt="curve icon" className={styles.desktop} />
        <img src={mobileCurve} alt="curve icon" className={styles.mobile} />
      </div>
      <section className={styles.wrapper}>
        <div className={styles.writeupBox} data-aos="fade">
          <div className={styles.headingTitle}>
            <div className={styles.title}>
              <h1>
                <img src={light} alt="light bulb" className={styles.light} />
                getlinked Tech Hackathon <span>1.0</span>{" "}
                <div className={styles.titleImgBox}>
                  <img src={link} alt="link" />
                  <img src={spark} alt="spark" />
                </div>
              </h1>
            </div>
            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <CustomButton>
              <Link to="/register">Register</Link>
            </CustomButton>
          </div>
          <div className={styles.timerBox}>
            <div>
              00<span>H</span>
            </div>
            <div>
              00<span>M</span>
            </div>
            <div>
              00<span>S</span>
            </div>
          </div>
        </div>
        <div className={styles.imgBox} data-aos="fade">
          <img src={man} alt="man" className={styles.man} />
          <div className={styles.bobble}>
            <img src={bobble} alt="bobble light" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
