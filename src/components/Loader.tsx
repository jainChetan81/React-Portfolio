import Head from "next/head";
import styles from "../styles/Loader.module.css";
const Loader = () => (
  <>
    <Head>
      <title>Loading...</title>
      <link rel="manifest" href="manifest.json" />
    </Head>
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
      <h1>Chetan Jain</h1>
    </div>
  </>
);

export default Loader;
