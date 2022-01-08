import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import type { FC } from "react";

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Link href="/">
				<a className={styles.logo}>
					<span>J</span>
					<span>Chetan</span>
				</a>
			</Link>
			<div>
				<p>
					This site was made with{" "}
					<Image
						src="https://ik.imagekit.io/clhowstalgz/icons/react-icon.svg?tr=f-png"
						alt="react icon"
						width={35}
						height={35}
					/>{" "}
					lot of <span>💓</span>
				</p>
			</div>

			<div className={styles.social_media}>
				<a href="https://www.linkedin.com/in/jtsoares/" target="_blank" rel="noreferrer">
					<Image
						src="https://ik.imagekit.io/clhowstalgz/icons/linkedin.png"
						alt="Linkedin"
						width={35}
						height={35}
					/>
				</a>

				<a href="https://github.com/joaotuliojt" target="_blank" rel="noreferrer">
					<Image
						src="https://ik.imagekit.io/clhowstalgz/icons/github.png"
						alt="GitHub"
						width={35}
						height={35}
					/>
				</a>

				<a href="https://www.instagram.com/tulio_joaob/" target="_blank" rel="noreferrer">
					<Image
						src="https://ik.imagekit.io/clhowstalgz/icons/instagram.png"
						alt="Instagram"
						width={35}
						height={35}
					/>
				</a>

				<a href="https://discord.com/users/426120432991862784" target="_blank" rel="noreferrer">
					<Image
						src="https://ik.imagekit.io/clhowstalgz/icons/discord.png"
						alt="Discord"
						width={35}
						height={35}
					/>
				</a>
			</div>
		</footer>
	);
};
export default Footer;
