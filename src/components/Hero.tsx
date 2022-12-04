import styles from "../styles/Hero.module.css";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import type { FC } from "react";
import { TypedHeading } from ".";
const Hero: FC = () => (
  <section className={styles.hero} id="home">
    <div className={styles.hero_text}>
      <p>Hello 👋, I am</p>
      <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
        <h1>Chetan Jain</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
        <TypedHeading
          text={["I am a <b>Front End Developer</b>", "I am a <b>Web Developer with 2 years of experience</b>"]}
        />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
        <p className={styles.small_resume}>
          I am a Full stack developer with a focus on web and hybrid Mobile Application.
        </p>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
        <Link href="#contact" className={styles.button}>
          Contact Me
        </Link>
      </ScrollAnimation>
    </div>
    <div className={styles.hero_image}>
      <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
        <Image src="/images/research.svg" width={500} height={550} alt="Chetan Jain Hero" />
      </ScrollAnimation>
    </div>
  </section>
);
export default Hero;
