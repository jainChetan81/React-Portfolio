import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Projects.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
type Props = {
  rank: number;
  name: string;
  slug: string;
  summary: string;
  endDate: string;
  githubUrl: string;
  displayImage: string;
  externalUrl: string;
  technologies: { name: string; icon: string }[];
};
const Card: FC<Props> = ({
  rank,
  name,
  slug,
  summary,
  githubUrl,
  displayImage,
  externalUrl,
  technologies,
  endDate,
}) => (
  <article className={styles.card} itemScope itemType="https://schema.org/Article" tabIndex={rank}>
    <meta itemProp="name" content={name} />
    <meta itemProp="url" content={`https://thechetanjain.in/projects/${slug}`} />
    <meta itemProp="image" content={displayImage} />
    <meta itemProp="description" content={summary} />
    <meta itemProp="author" content="The Chetan Jain" />
    <meta itemProp="datePublished" content={endDate} />
    <meta itemProp="publisher" content="The Chetan Jain" />
    <meta itemProp="inLanguage" content="en" />
    <meta itemProp="isFamilyFriendly" content="true" />

    <span className={styles.rank}>{rank}</span>
    <div className={styles.front}>
      <Image
        className={styles.thumbnail}
        src={`/images/${slug}.webp`}
        height={300}
        width={250}
        alt={`${name} thumbnail`}
      />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.links}>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label={`github url of ${name}`}
          title={`github url of ${name}`}
        >
          <FaGithub />
        </a>
        {externalUrl && (
          <a
            href={externalUrl}
            target="_blank"
            rel="noreferrer nofollow"
            aria-label={`hosted url of ${name}`}
            title={`hosted url of ${name}`}
          >
            <FaExternalLinkAlt />
          </a>
        )}
      </p>
    </div>
    <div className={styles.back}>
      <div className={styles.streaming_info}>
        <p className={styles.game_stat}>{summary}</p>
      </div>
      <Link
        href={`/projects/${slug}`}
        aria-label={`Description of ${name}`}
        itemProp="author"
        className={styles.btn}
        title={`Description of ${name}`}
      >
        Read More
      </Link>
      <div className={styles.streamers}>
        {technologies &&
          Array.isArray(technologies) &&
          technologies.slice(0, 6).map((tech, i) => (
            <div className={styles.streamer} key={tech.icon + i}>
              <div className={styles.icon}>
                <Image src={`/images/${tech.icon}.svg`} width={30} height={30} alt={`${tech} icon`} />
              </div>
              <p className={styles.name}>{tech.name}</p>
            </div>
          ))}
      </div>
    </div>
    <div className={styles.background}></div>
  </article>
);

export default Card;
