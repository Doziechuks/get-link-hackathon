import { useEffect } from "react";
import styles from "./Privacy.module.less";
import { lock, shield, listImg } from "../../assets";
import { Link } from "react-router-dom";
import { CustomButton } from "..";
import Aos from "aos";
import "aos/dist/aos.css";

const Privacy = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className={styles.container}>
      <div className={styles.writeUp}>
        <div className={styles.headingBox} data-aos="fade-up">
          <h3>
            Privacy Policy and <br />
            <span>Terms</span>
          </h3>
          <span className={styles.lastUpdated}>
            Last updated on September 12, 2023
          </span>
          <p>
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
        </div>
        <div className={styles.cardBox} data-aos="fade-up">
          <p>
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <div className={styles.listBox}>
            <h6>Licensing Policy</h6>
            <span>Here are terms of our Standard License:</span>
            <div className={styles.listWrapper}>
              <div className={styles.listElement}>
                <img src={listImg} alt="list image" />
                <span>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </span>
              </div>
              <div className={styles.listElement}>
                <img src={listImg} alt="list image" />
                <span>
                  You are licensed to use the item available at any free source
                  sites, for your project developement
                </span>
              </div>
            </div>
            <CustomButton>
              <Link to="#">Read More</Link>
            </CustomButton>
          </div>
        </div>
      </div>
      <div className={styles.imgBox}>
        <img src={lock} alt="padlock" loading="lazy" data-aos="fade-up" />
        <div className={styles.background}>
          <img src={shield} alt="shield" loading="lazy" data-aos="fade" />
        </div>
      </div>
    </section>
  );
};

export default Privacy;
