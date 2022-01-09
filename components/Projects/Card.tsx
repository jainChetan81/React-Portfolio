import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Projects.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { StrapiImage } from "../../@types";
type Props = {
	rank: number;
	name: string;
	slug: string;
	startDate: string;
	endDate: string;
	summary: string;
	githubUrl: string;
	displayImage: StrapiImage;
	externalUrl: string;
};
const Card: FC<Props> = ({ rank, name, slug, startDate, endDate, summary, githubUrl, displayImage, externalUrl }) => {
	function monthDiff(d1: string, d2: string) {
		const start: Date = new Date(d1);
		const end: Date = new Date(d2);
		var months;
		months = (end.getFullYear() - start.getFullYear()) * 12;
		months -= start.getMonth();
		months += end.getMonth();
		return months <= 0 ? 0 : months;
	}
	return (
		<article className={styles.card}>
			<span className={styles.rank}>{rank}</span>
			<div className={styles.front}>
				<Image
					className={styles.thumbnail}
					src={`${displayImage?.url || "https://ik.imagekit.io/clhowstalgz/games/skyrim.jpg"}?tr=w-250,h-300`}
					height={300}
					width={250}
					alt="game"
				/>
				<h2 className={styles.name}>{name}</h2>
				<p className={styles.links}>
					<a href={githubUrl} target="_blank" rel="noreferrer">
						<FaGithub />
					</a>
					{externalUrl && (
						<a href={externalUrl} target="_blank" rel="noreferrer">
							<FaExternalLinkAlt />
						</a>
					)}
				</p>
			</div>
			<div className={styles.back}>
				<div className={styles.streaming_info}>
					<p className={styles.game_stat}>{summary}</p>
				</div>
				<Link href={`/projects/${slug}`}>
					<a className={styles.btn}>Read More</a>
				</Link>
				<div className={styles.streamers}>
					<div className={styles.streamer}>
						<div className={styles.icon}>
							<Image
								src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/react-icon.svg?tr=w-30,h-30`}
								width={30}
								height={30}
								alt="react icon"
							/>
						</div>
						<p className={styles.name}>React</p>
					</div>
					<div className={styles.streamer}>
						<div className={styles.icon}>
							<Image
								src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/typescript-icon.svg?tr=w-30,h-30`}
								width={30}
								height={30}
								alt="typescript icon"
							/>
						</div>
						<p className={styles.name}>Typescript</p>
					</div>
					<div className={styles.streamer}>
						<div className={styles.icon}>
							<Image
								src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/css-icon.svg?tr=w-30,h-30`}
								width={30}
								height={30}
								alt="css icon"
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
