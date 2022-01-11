import Head from "next/head";
import { FC } from "react";
import styles from "../styles/Loader.module.css";
const Loader: FC = () => {
	return (
		<div className={styles.loader}>
			<Head>
				<title>Loading... | Chetan Jain</title>
				<link rel="manifest" href="manifest.json" />
			</Head>
			<div className={styles.spinner}></div>
			<h1>Chetan Jain</h1>
		</div>
	);
};

export default Loader;
