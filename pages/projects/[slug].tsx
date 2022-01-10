import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { FaExternalLinkAlt, FaGithub, FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import styles from "../../styles/ProjectSlug.module.css";
import { Project } from "../../@types";
import { Layout } from "../../components";
import { NetworkDetector } from "../../hoc";

type Props = {
	project: Project;
	notFound?: boolean;
};
const Project: FC<Props> = ({ project }) => {
	//function that return date in format MMM DD, YYYY
	const getDate = (date: string): string => {
		const dateObj = new Date(date);
		const month = dateObj.toLocaleString("default", { month: "short" });
		const day = dateObj.getDate();
		const year = dateObj.getFullYear();
		return `${month} ${day}, ${year}`;
	};
	return (
		<Layout title={`${project.name} | Chetan Jain`}>
			<section className={styles.project}>
				<h1 className="text-center pb-10 capitalize text-5xl">{project.name}</h1>
				<div className="flex flex-col sm:flex-row justify-between gap-10 items-center">
					<div className="contributor flex flex-row gap-x-5">
						<Image
							src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/chetan?tr=f-png,h-60,w-60,r-100`}
							height={60}
							width={60}
							alt="Collaborator - Chetan Jain"
						/>
						<span>
							<h6 className="text-2xl mb-1 p-0 font-bold">Chetan Jain </h6>
							<time className="font-thin">
								{getDate(project.startDate)} - {getDate(project.endDate)}
							</time>
						</span>
					</div>
					<span
						className="bg-[#007deb] my-auto w-32 h-10 rounded-lg px-5"
						style={{ columnCount: 2, columnRule: "2px solid var(--text-primary)" }}>
						<a
							className="opacity-90 hover:opacity-100 "
							href={project.githubUrl}
							target="_blank"
							rel="noreferrer">
							<FaGithub className="w-6 h-6 mt-2" />
						</a>
						{project.externalUrl && (
							<a
								className="opacity-90 hover:opacity-100 "
								href={project.externalUrl}
								target="_blank"
								rel="noreferrer">
								<FaExternalLinkAlt className="w-8 h-8 pt-2.5" />
							</a>
						)}
					</span>
				</div>
				<div className={styles.markdown}>
					<ReactMarkdown>{project.description}</ReactMarkdown>
				</div>

				<div
					className={`${styles.pagination} flex md:flex-row flex-col items-center justify-between sm:items-start px-8 mt-10`}>
					<Link href="/a">
						<a className="flex items-start cursor-pointer w-80 text-left justify-end float-left">
							<FaLongArrowAltLeft className="w-32 h-20 mr-5" />
							<aside>
								<h2 className="font-bold text-2xl uppercase">Previous</h2>
								<p className="break-words opacity-40">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, nam!
								</p>
							</aside>
						</a>
					</Link>
					<Link href="/a">
						<a className="flex items-start cursor-pointer w-80 text-right justify-end float-right">
							<aside>
								<h2 className="font-bold text-2xl uppercase">NEXT</h2>
								<p className=" opacity-40">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, nam!
								</p>
							</aside>
							<FaLongArrowAltRight className="w-32 h-20 ml-5" />
						</a>
					</Link>
				</div>
			</section>
		</Layout>
	);
};

export async function getStaticPaths() {
	const res = await fetch(`${process.env.BASE_API}/portfolio-projects?_sort=rank:ASC`);
	const projects: Project[] = await res.json();
	const paths = projects.map((project) => ({ params: { slug: project.slug } }));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }: any) {
	const res = await fetch(`${process.env.BASE_API}/portfolio-projects?slug=${slug}`);
	const project = await res.json();
	if (!project || project[0].slug !== slug) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			project: project[0],
		},
		revalidate: 60,
	};
}

export default NetworkDetector(Project);
