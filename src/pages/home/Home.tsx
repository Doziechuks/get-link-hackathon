import styles from "./Home.module.less";
import { Criteria, Header, Idea, Rules } from "../../components";

const Home = () => {
  return (
    <main className={styles.container}>
      <Header />
      <Idea />
      <Rules />
      <Criteria />
    </main>
  );
};

export default Home;
