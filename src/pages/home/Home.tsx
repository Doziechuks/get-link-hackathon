import styles from "./Home.module.less";
import { Header, Idea, Rules } from "../../components";

const Home = () => {
  return (
    <main className={styles.container}>
      <Header />
      <Idea />
      <Rules />
    </main>
  );
};

export default Home;
