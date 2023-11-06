import { useState, useEffect } from "react";
import styles from "./Footer.module.less";
import { Link, useLocation } from "react-router-dom";
import {
  faceebook,
  instagram,
  x,
  linkedin,
  location,
  phone,
} from "../../assets";

const Footer = () => {
  const [pathName, setPathName] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  return (
    <footer
      className={styles.container}
      style={{ display: `${pathName !== "/" ? "none" : "flex"}` }}
    >
      <section className={styles.wrapper}>
        <div className={styles.about}>
          <div className={styles.title}>
            <Link to="/" className={styles.logo}>
              get<span>linked</span>
            </Link>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className={styles.termsBox}>
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className={styles.linkBox}>
          <h6>Useful Links</h6>
          <ul>
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
          </ul>
          <div className={styles.smLinks}>
            <div className={styles.follow}>Follow us</div>
            <span>
              <img src={instagram} alt="instagram" />
            </span>
            <span>
              <img src={x} alt="x app" />
            </span>
            <span>
              <img src={faceebook} alt="facebook" />
            </span>
            <span>
              <img src={linkedin} alt="linkedin" />
            </span>
          </div>
        </div>
        <div className={styles.contact}>
          <h6>Contact Us</h6>
          <div className={styles.contactInfo}>
            <img src={phone} alt="phone" />
            <span>+234 6707653444</span>
          </div>
          <div className={styles.contactInfo}>
            <img src={location} alt="phone" />
            <span>
              27,Alara Street <br /> Yaba 100012 <br /> Lagos State
            </span>
          </div>
        </div>
      </section>
      <p className={styles.copy}>All rights reserved. © getlinked Ltd.</p>
    </footer>
  );
};

export default Footer;
