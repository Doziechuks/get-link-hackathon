import styles from "./Home.module.less";
import { Criteria, Header, Idea, Rules, Faq, Partners } from "../../components";

const Home = () => {
  return (
    <main className={styles.container}>
      <Header />
      <Idea />
      <Rules />
      <Criteria />
      <Faq />
      <Partners />
    </main>
  );
};

export default Home;
