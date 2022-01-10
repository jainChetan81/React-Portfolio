import Image from "next/image";
import { FC } from "react";
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
			<section>
				<h1 className="text-center pb-10 border-b-2">{project.name}</h1>
				<div className="flex flex-row justify-between">
					<Image
						src={`${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/chetan?tr=f-png,h-60,w-60,r-100`}
						height={60}
						width={60}
						alt="Collaborator - Chetan Jain"
					/>
					<span>
						<h6 className="text-2xl mb-1 p-0 font-bold">Chetan Jain </h6>
						{getDate(project.startDate)} - {getDate(project.endDate)}
					</span>
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
	if (Array.isArray(project) || project[0]?.slug !== slug) {
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
