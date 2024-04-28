import Image from "next/image";
import Link from "next/link";
import { TypedHeading } from ".";
import styles from "../styles/Hero.module.css";
const Hero = () => (
  <section className={styles.hero} id="home">
    <div className={styles.hero_text}>
      <p>Hello 👋, I am</p>
      <h1>Chetan Jain</h1>
      <TypedHeading
        text={["I am a <b>Front End Developer</b>", "I am a <b>Back End Developer</b>"]}
      />
      <p className={styles.small_resume}>
        I am a Full stack developer with a focus on web and hybrid Mobile Application.
      </p>

      <Link href="#contact" className={styles.button}>
        Contact Me
      </Link>
    </div>
    <div className={styles.hero_image}>
      <Image src="/images/research.svg" width={500} height={550} alt="Chetan Jain Hero" />

    </div>
  </section>
);
export default Hero;
