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
	summary: string;
	githubUrl: string;
	displayImage: StrapiImage;
	externalUrl: string;
	technologies: { name: string; icon: string }[];
};
const Card: FC<Props> = ({ rank, name, slug, summary, githubUrl, displayImage, externalUrl, technologies }) => {
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
					{technologies.slice(0, 6).map((tech, i) => (
						<div className={styles.streamer} key={tech.icon + i}>
							<div className={styles.icon}>
								<Image
									src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/${tech.icon}?tr=w-30,h-30,r-20`}
									width={30}
									height={30}
									alt={`${tech} icon`}
								/>
							</div>
							<p className={styles.name}>{tech.name}</p>
						</div>
					))}
				</div>
			</div>
			<div className={styles.background}></div>
		</article>
	);
};

export default Card;
