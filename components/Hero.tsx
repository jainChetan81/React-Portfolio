import styles from "../styles/Hero.module.css";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import type { FC } from "react";
const Hero: FC = () => {
	return (
		<section className={styles.hero} id="home">
			<div className={styles.hero_text}>
				<p>Hello 👋, I am</p>
				<ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
					<h1>Chetan Jain</h1>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
					<h3>Full Stack Developer</h3>
				</ScrollAnimation>
				<ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
					<p className={styles.small_resume}>
						I am a computer technician with a focus on web development with JavaScript.
					</p>
				</ScrollAnimation>

				<ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
					<Link href="#contact">
						<a className={styles.button}>Contact Me</a>
					</Link>
				</ScrollAnimation>
			</div>
			<div className={styles.hero_image}>
				<ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
					<Image
						src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/research`}
						width={500}
						height={450}
						alt="Chetan Jain"
					/>
				</ScrollAnimation>
			</div>
		</section>
	);
};
export default Hero;
