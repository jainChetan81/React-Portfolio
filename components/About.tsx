// @ts-nocheck
import styles from "../styles/About.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "next/image";
import type { FC } from "react";

const About: FC = () => {
	const abilities: string[] = [
		"react",
		"nextjs",
		"typescript",
		"html",
		"css",
		"node",
		"javascript",
		"mysql",
		"tailwindcss",
		"redux",
		"sass",
		"jest",
		"mongodb",
	];
	return (
		<section className={styles.about} id="about">
			<div className={styles.about_text}>
				<ScrollAnimation animateIn="fadeInLeft">
					<h2 className="inline-block sm:hidden">About me</h2>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
					<p>
						My name is Chetan Jain, I am a Full Stack Developer with great passion for programming. I am
						passionate about delivering solutions that add to people lives and at the same time challenge
						me. Improved my skills as a Front-End and Back-End developer
					</p>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="fadeInLeft"
					delay={0.4 * 1000}
					style={{ marginTop: "2rem", marginBottom: "2rem" }}>
					<p>
						I develop websites and applications using HTML, CSS, and JavaScript. I choose different
						technologies ranging from front end and back end to mobile applications and I always improve
						myself with each project that I choose to challenge myself with.
					</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
					<p>
						I am seeking to find an opportunity to work in a fun and challenging environment that will
						encourage me to improve my skills and learn new ones as well as my aim is to work in the minimum
						amount required and delivering the fastest and best product desired.
					</p>
				</ScrollAnimation>

				<ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
					<h3>Here are my main skills:</h3>
				</ScrollAnimation>
				<div className={styles.hard_skills}>
					{abilities.map((ability: string) => (
						<div className={styles.hard_ability} key={ability}>
							<ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
								<Image
									src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/${ability}?tr=w-34,h-34,r-20`}
									alt={ability + " Icon"}
									height={34}
									width={34}
								/>
							</ScrollAnimation>
						</div>
					))}
				</div>
			</div>
			<div className={styles.about_image}>
				<ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
					<Image
						src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/chetan2.jpg?tr=h-420,w-350`}
						alt="Chetan Jain Profile"
						height={420}
						width={350}
						className="rounded"
					/>
				</ScrollAnimation>
			</div>
		</section>
	);
};
export default About;
