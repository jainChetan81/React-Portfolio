import styles from "../styles/About.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "next/image";
import type { FC } from "react";

const About: FC = () => {
	return (
		<section className={styles.about} id="about">
			<div className={styles.about_text}>
				<ScrollAnimation animateIn="fadeInLeft">
					<h2>About me</h2>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
					<p>
						My name is Chetan Jain, I am a computer technician with a great passion for programming. I am
						passionate about delivering solutions that add to people lives and at the same time challenge
						me. Improved my skills as a Front-End and Back-End developer
					</p>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="fadeInLeft"
					delay={0.4 * 1000}
					style={{ marginTop: "2rem", marginBottom: "2rem" }}>
					<p>
						I develop websites and applications using HTML, CSS, and JavaScript. I am familiar with
						developing layouts that they provide me. I am always improving myself with each project they put
						in my hands.
					</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
					<p>
						I am a dedicated person who pursues his dreams, hardworking and results oriented, I always seek
						to achieve my best version.
					</p>
				</ScrollAnimation>

				<ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
					<h3>Here are my main skills:</h3>
				</ScrollAnimation>
				<div className={styles.hard_skills}>
					<div className={styles.hard_ability}>
						<ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
							<Image
								src={`https://ik.imagekit.io/clhowstalgz/icons/react-icon.svg?tr=f-png`}
								alt="React"
								height={34}
								width={34}
							/>
						</ScrollAnimation>
					</div>

					<div className={styles.hard_ability}>
						<ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
							<Image
								src={`https://ik.imagekit.io/clhowstalgz/icons/vue-icon.svg?tr=f-png`}
								alt="Vue"
								height={34}
								width={34}
							/>
						</ScrollAnimation>
					</div>

					<div className={styles.hard_ability}>
						<ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
							<Image
								src={`https://ik.imagekit.io/clhowstalgz/icons/js-icon.svg?tr=f-png`}
								alt="JavaScript"
								height={34}
								width={34}
							/>
						</ScrollAnimation>
					</div>

					<div className={styles.hard_ability}>
						<ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
							<Image
								src={`https://ik.imagekit.io/clhowstalgz/icons/html-icon.svg?tr=f-png`}
								alt="Html"
								height={34}
								width={34}
							/>
						</ScrollAnimation>
					</div>

					<div className={styles.hard_ability}>
						<ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
							<Image
								src={`https://ik.imagekit.io/clhowstalgz/icons/css-icon.svg?tr=f-png`}
								alt="Css"
								height={34}
								width={34}
							/>
						</ScrollAnimation>
					</div>
					<div className={styles.hard_ability}>
						<ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
							<Image
								src={`https://ik.imagekit.io/clhowstalgz/icons/node-icon.svg?tr=f-png`}
								alt="Node"
								height={34}
								width={34}
							/>
						</ScrollAnimation>
					</div>

					<div className={styles.hard_ability}>
						<ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
							<Image
								src={`https://ik.imagekit.io/clhowstalgz/icons/typescript-icon.svg?tr=f-png`}
								alt="Typescript"
								height={34}
								width={34}
							/>
						</ScrollAnimation>
					</div>
				</div>
			</div>
			<div className={styles.about_image}>
				<ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
					<Image
						src={`https://ik.imagekit.io/clhowstalgz/chetan2.jpg?tr=h-600,w-500`}
						alt="Chetan Jain Profile"
						height={600}
						width={500}
						className="rounded"
					/>
				</ScrollAnimation>
			</div>
		</section>
	);
};
export default About;
