import styles from "./Home.module.less";
import { Criteria, Header, Idea, Rules, Faq } from "../../components";

const Home = () => {
  return (
    <main className={styles.container}>
      <Header />
      <Idea />
      <Rules />
      <Criteria />
      <Faq />
    </main>
  );
};

export default Home;
