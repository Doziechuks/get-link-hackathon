import { useEffect } from "react";
import styles from "./TimeLine.module.less";
import Aos from "aos";
import "aos/dist/aos.css";

const TimeLine = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section className={styles.container} id="timeline">
      <div className={styles.headingBox} data-aos="fade-up">
        <h3>Timeline</h3>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className={styles.treeBox}>
        <div className={styles.box1} data-aos="fade-down">
          <div className={styles.bigCircle}>
            <div className={styles.smallCircle}>
              <span>1</span>
            </div>
          </div>
          <div className={styles.left}>
            <h4>Hackathon Announcement</h4>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
          <div className={styles.right}>
            <h4>November 18, 2023</h4>
          </div>
        </div>
        <div className={styles.box1} data-aos="fade-down">
          <div className={styles.bigCircle}>
            <div className={styles.smallCircle}>
              <span>2</span>
            </div>
          </div>
          <div className={styles.left}>
            <h4>November 18, 2023</h4>
          </div>
          <div className={styles.right}>
            <h4>Teams Registration begins</h4>
            <p>
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
        </div>
        <div className={styles.box1} data-aos="fade-down">
          <div className={styles.bigCircle}>
            <div className={styles.smallCircle}>
              <span>3</span>
            </div>
          </div>
          <div className={styles.left}>
            <h4>Teams Registration ends</h4>
            <p>Interested Participants are no longer Allowed to register</p>
          </div>
          <div className={styles.right}>
            <h4>November 18, 2023</h4>
          </div>
        </div>
        <div className={styles.box1} data-aos="fade-down">
          <div className={styles.bigCircle}>
            <div className={styles.smallCircle}>
              <span>4</span>
            </div>
          </div>
          <div className={styles.left}>
            <h4>November 18, 2023</h4>
          </div>
          <div className={styles.right}>
            <h4>Announcement of the accepted teams and ideas</h4>
            <p>
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
        </div>
        <div className={styles.box1} data-aos="fade-down">
          <div className={styles.bigCircle}>
            <div className={styles.smallCircle}>
              <span>5</span>
            </div>
          </div>
          <div className={styles.left}>
            <h4>Getlinked Hackathon 1.0 Offically Begins</h4>
            <p>
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </div>
          <div className={styles.right}>
            <h4>November 18, 2023</h4>
          </div>
        </div>
        <div className={styles.box1} data-aos="fade-down">
          <div className={styles.bigCircle}>
            <div className={styles.smallCircle}>
              <span>6</span>
            </div>
          </div>
          <div className={styles.left}>
            <h4>November 18, 2023</h4>
          </div>
          <div className={styles.right}>
            <h4>Demo Day</h4>
            <p>
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
