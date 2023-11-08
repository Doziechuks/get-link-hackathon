import { useState } from "react";
import styles from "./ScrollToTop.module.less";
import { handleScrollTop } from "../../misc/handleScrollToTop";

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  const handleShowBtn = () => {
    if (window.scrollY >= 50) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };
  window.addEventListener("scroll", handleShowBtn);
  return (
    <div
      className={`${styles.container} ${showBtn && styles.showBtn}`}
      onClick={handleScrollTop}
    >
      <span />
    </div>
  );
};

export default ScrollToTop;
