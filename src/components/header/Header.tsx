import styles from "./Header.module.less";
import { Link } from "react-router-dom";
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
  return (
    <header className={styles.container}>
      <div className={styles.highlight}>
        <span>Igniting a Revolution in HR Innovation</span>
        <img src={curve} alt="curve icon" className={styles.desktop} />
        <img src={mobileCurve} alt="curve icon" className={styles.mobile} />
      </div>
      <section className={styles.wrapper}>
        <div className={styles.writeupBox}>
          <div className={styles.headingTitle}>
            <div className={styles.title}>
              <h1>
                <img src={light} alt="light bulb" className={styles.light} />
                getlinked Tech Hackathon <span>1.0</span>
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
        <div className={styles.imgBox}>
          <img src={man} alt="man" />
          <div className={styles.bobble}>
            <img src={bobble} alt="bobble light" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;

{
  /* <div className={styles.title1}>
              <img src={light} alt="light bulb" />
              <h1>getlinked Tech</h1>
            </div>
            <div className={styles.title2}>
              <h1>
                Hackathon <span>1.0</span>
              </h1>
              <div className={styles.titleImgBox}>
                <img src={link} alt="link" />
                <img src={spark} alt="spark" />
              </div>
            </div> */
}
