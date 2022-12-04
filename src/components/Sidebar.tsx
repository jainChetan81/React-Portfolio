import Link from "next/link";
import type { RefObject } from "react";
import { FaFile, FaFolder, FaHome, FaMobile, FaUserAlt } from "react-icons/fa";
import styles from "../styles/Sidebar.module.css";
type Props = {
  bodyRef: RefObject<HTMLDivElement>;
};
const Sidebar = ({ bodyRef }: Props) => {
  const handleChange = () => {
    bodyRef?.current?.classList.toggle("dark");
  };
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_nav}>
        <li className={styles.logo}>
          <Link href="/" className={styles.nav_link}>
            <span itemProp="name" className={styles.link_text + " " + styles.logo_text}>
              JChetan
            </span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                ></path>
              </g>
            </svg>
          </Link>
        </li>

        <li className={styles.nav_item}>
          <Link href="/#home" className={styles.nav_link} arial-label="Go to Home Section">
            <FaHome className="w-12 h-14" />
            <span className={styles.link_text}>Home</span>
          </Link>
        </li>

        <li className={styles.nav_item}>
          <Link href="/#about" arial-label="Go to about section" className={styles.nav_link}>
            <FaUserAlt className="w-10 h-6" />
            <span className={styles.link_text}>About</span>
          </Link>
        </li>

        <li className={styles.nav_item}>
          <Link href="/#projects" arial-label="Go to projects section" className={styles.nav_link}>
            <FaFolder className="w-8 h-12" />
            <span className={styles.link_text}>Projects</span>
          </Link>
        </li>

        <li className={styles.nav_item}>
          <Link href="/#contact" arial-label="Go to contact section" className={styles.nav_link}>
            <FaMobile className="w-12 h-7" />
            <span className={styles.link_text}>Contact</span>
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link href="/api/resume" className={styles.nav_link} arial-label="download resume">
            <FaFile className="w-10 h-7" />
            <span className={styles.link_text}>Download CV</span>
          </Link>
        </li>

        <li className={styles.nav_item}>
          <button
            className={styles.nav_link}
            onClick={handleChange}
            onKeyDown={handleChange}
            aria-label="change theme between light and dark"
          >
            {bodyRef?.current?.classList.contains("dark") ? (
              <svg
                className="theme-icon svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
                id="lightIcon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="moon-stars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                  ></path>
                </g>
              </svg>
            ) : (
              <svg
                className="theme-icon svg-inline--fa fa-sun fa-w-16 fa-7x"
                id="solarIcon"
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="sun"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g className="fa-group">
                  <path
                    fill="currentColor"
                    d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
                  ></path>
                  <path fill="currentColor" d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"></path>
                </g>
              </svg>
            )}
            <span className={styles.link_text}>Theme</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
