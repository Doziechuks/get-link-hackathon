import styles from "./Home.module.less";
import {
  Criteria,
  Header,
  Idea,
  Rules,
  Faq,
  Partners,
  Prices,
} from "../../components";

const Home = () => {
  return (
    <main className={styles.container}>
      <Header />
      <Idea />
      <Rules />
      <Criteria />
      <Faq />
      <Prices />
      <Partners />
    </main>
  );
};

export default Home;
