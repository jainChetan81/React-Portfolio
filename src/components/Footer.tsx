import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaGithubSquare, FaLinkedin, FaStackOverflow, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className={styles.footer}>
    <Link href="/" className={styles.logo} itemProp="name" id="Chetan Jain Logo">
      <span>J</span>
      <span>Chetan</span>
    </Link>
    <div>
      <p>
        This site was made with <Image src="/images/react.svg" alt="react icon" width={35} height={35} /> lot of{" "}
        <span>💓</span>
      </p>
    </div>

    <div className={styles.social_media}>
      <Link href="/linkedin" target="_blank" rel="noreferrer nofollow " aria-label="Chetan Jain LinkedIn Profile">
        <FaLinkedin className="h-10 w-10 text-blue-600" />
      </Link>

      <Link href="/github" target="_blank" rel="noreferrer nofollow" aria-label="Chetan Jain Github Profile">
        <FaGithubSquare className="h-10 w-10 text-white" />
      </Link>

      <Link href="/twitter" target="_blank" rel="noreferrer nofollow" aria-label="Chetan Jain Twitter Profile">
        <FaTwitter className="h-10 w-10 text-blue-400" />
      </Link>

      <Link
        href="/stackoverflow"
        target="_blank"
        rel="noreferrer nofollow"
        aria-label="Chetan Jain Stack Overflow Profile"
      >
        <FaStackOverflow className="h-10 w-10 text-orange-600" />
      </Link>
    </div>
  </footer>
);
export default Footer;
