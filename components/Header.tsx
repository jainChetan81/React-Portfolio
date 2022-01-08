import styles from "../styles/Header.module.css";
import Link from "next/link";
import { FC, useState } from "react";

const Header: FC = () => {
	const [isActive, setActive] = useState(false);

	function toggleTheme() {
		const html = document.getElementsByTagName("html")[0];
		html.classList.toggle("light");
	}

	function closeMenu() {
		setActive(false);
	}

	return (
		<header className={styles.headerFixed}>
			<Link href="#home">
				<a className={styles.logo}>
					<span>J</span>
					<span>Chetan</span>
				</a>
			</Link>

			<input onChange={toggleTheme} type="checkbox" id="switch" name="mode" />
			<label htmlFor="switch">Toggle</label>

			<nav className={isActive ? styles.active : ""}>
				<Link href="#home">
					<a onClick={closeMenu}>Home</a>
				</Link>
				<Link href="#about">
					<a onClick={closeMenu}>About Me</a>
				</Link>
				<Link href="#projects">
					<a onClick={closeMenu}>My Projects</a>
				</Link>
				<Link href="#contact">
					<a onClick={closeMenu}>Contact me</a>
				</Link>
				<Link href="/api/resume">
					<a className={styles.button}>CV</a>
				</Link>
			</nav>

			<div
				aria-expanded={isActive ? "true" : "false"}
				aria-haspopup="true"
				aria-label={isActive ? "active" : "menu"}
				className={isActive ? styles.menu + " " + styles.active : styles.menu}
				onClick={() => {
					setActive(!isActive);
				}}></div>
		</header>
	);
};
export default Header;
