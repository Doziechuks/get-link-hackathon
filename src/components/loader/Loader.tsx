import styles from "./Loader.module.less";

const Loader = () => {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
