import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.less";
import { Link, useLocation } from "react-router-dom";
import { menu, close } from "../../assets";
import { CustomButton } from "..";
import Aos from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [pathName, setPathName] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpenNavbar(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`${styles.container} ${
        pathName === "/contact" && styles.hideNavbar
      } ${pathName === "/register" && styles.hideRegisterNavbar}`}
      data-aos="slide-down"
    >
      <Link to="/" className={styles.logo}>
        get<span>linked</span>
      </Link>

      <div
        className={styles.optionsWrapper}
        style={{ left: openNavbar ? 0 : "-100%" }}
      >
        <div className={styles.options}>
          <Link to="#">Timeline</Link>
          <Link to="#">Overview</Link>
          <Link to="#">FAQs</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <CustomButton>
          <Link to="/register">Register</Link>
        </CustomButton>
      </div>

      {/* mobile view */}
      <div ref={navbarRef} className={styles.imgBox}>
        {openNavbar ? (
          <div className={styles.closeBox} onClick={() => setOpenNavbar(false)}>
            <img src={close} alt="close icon" />
          </div>
        ) : (
          <div onClick={() => setOpenNavbar(true)}>
            <img src={menu} alt="menu icon" />
          </div>
          //
        )}
      </div>
    </nav>
  );
};

export default Navbar;
