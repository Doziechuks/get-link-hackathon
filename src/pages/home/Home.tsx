import styles from "./Home.module.less";
import { Header } from "../../components";

const Home = () => {
  return (
    <main className={styles.container}>
      <Header />
    </main>
  );
};

export default Home;
