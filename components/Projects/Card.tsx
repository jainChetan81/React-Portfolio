import { FC } from "react";
import Image from "next/image";
import styles from "../../styles/Projects.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
type Props = {
	index: number;
	name: string;
	description: string;
};
const Card: FC<Props> = ({ index, name, description }) => {
	return (
		<article className={styles.card}>
			<span className={styles.rank}>{index + 1}</span>
			<div className={styles.front}>
				<Image
					className={styles.thumbnail}
					src="https://ik.imagekit.io/clhowstalgz/games/anthem.jpg?tr=w-250,h-300"
					height={300}
					width={250}
					alt="game"
				/>
				<h2 className={styles.name}>{name}</h2>
				<p className={styles.links}>
					<a href="https://github.com/joaotuliojt/github-search" target="_blank" rel="noreferrer">
						<FaGithub />
					</a>
					<a href="https://github-search-blond.vercel.app/" target="_blank" rel="noreferrer">
						<FaExternalLinkAlt />
					</a>
				</p>
				<div className={styles.stats}>
					<p className={styles.viewers}>539.9k</p>
					<div className={styles.streamers}>
						<Image
							src="https://ik.imagekit.io/clhowstalgz/chetan"
							width={40}
							height={40}
							alt="Contributor"
						/>
					</div>
				</div>
			</div>
			<div className={styles.back}>
				<div className={styles.streaming_info}>
					<p className={styles.game_stat}>{description}</p>
				</div>
				<button className={styles.btn}>Read More</button>
				<div className={styles.streamers}>
					<div className={styles.streamer}>
						<div className={styles.icon}>
							<Image
								src="https://ik.imagekit.io/clhowstalgz/icons/react-icon.svg"
								width={30}
								height={30}
								alt="a"
							/>
						</div>
						<p className={styles.name}>React</p>
					</div>
					<div className={styles.streamer}>
						<div className={styles.icon}>
							<Image
								src="https://ik.imagekit.io/clhowstalgz/icons/typescript-icon.svg"
								width={30}
								height={30}
								alt="a"
							/>
						</div>
						<p className={styles.name}>Typescript</p>
					</div>
					<div className={styles.streamer}>
						<div className={styles.icon}>
							<Image
								src="https://ik.imagekit.io/clhowstalgz/icons/css-icon.svg?tr=w-30,h-30"
								width={30}
								height={30}
								alt="a"
							/>
						</div>
						<p className={styles.name}>CSS</p>
					</div>
				</div>
			</div>
			<div className={styles.background}></div>
		</article>
	);
};

export default Card;
