import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import type { FC } from "react";
import { FaGithubSquare, FaLinkedin, FaStackOverflow, FaTwitter } from "react-icons/fa";

const Footer: FC = () => (
	<footer className={styles.footer}>
		<Link href="/">
			<a className={styles.logo} itemProp="name" id="Chetan Jain Logo">
				<span>J</span>
				<span>Chetan</span>
			</a>
		</Link>
		<div>
			<p>
				This site was made with{" "}
				<Image
					src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/react?tr=f-png,h-35,w-35`}
					alt="react icon"
					width={35}
					height={35}
				/>{" "}
				lot of <span>💓</span>
			</p>
		</div>

		<div className={styles.social_media}>
			<Link href="/linkedin">
				<a target="_blank" rel="noreferrer nofollow " aria-label="Chetan Jain LinkedIn Profile">
					<FaLinkedin className="h-10 w-10 text-blue-600" />
				</a>
			</Link>

			<Link href="/github">
				<a target="_blank" rel="noreferrer nofollow" aria-label="Chetan Jain Github Profile">
					<FaGithubSquare className="h-10 w-10 text-white" />
				</a>
			</Link>

			<Link href="/twitter">
				<a target="_blank" rel="noreferrer nofollow" aria-label="Chetan Jain Twitter Profile">
					<FaTwitter className="h-10 w-10 text-blue-400" />
				</a>
			</Link>

			<Link href="/stackoverflow">
				<a target="_blank" rel="noreferrer nofollow" aria-label="Chetan Jain Stack Overflow Profile">
					<FaStackOverflow className="h-10 w-10 text-orange-600" />
				</a>
			</Link>
		</div>
	</footer>
);
export default Footer;
