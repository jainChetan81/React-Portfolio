import type { GetStaticProps, NextPage } from "next";
import { Project } from "../@types";
import { About, Contact, Hero, Layout, Particle, Projects } from "../components";
import { NetworkDetector } from "../hoc";

const Home: NextPage<{ projects: Project[] }> = ({ projects }) => {
	return (
		<Layout title="Chetan Portfolio | Home">
			<Particle />
			<Hero />
			<About />
			<Projects projects={projects} />
			<Contact />
		</Layout>
	);
};

export default NetworkDetector(Home);
export async function getStaticProps(context: GetStaticProps) {
	const res: Response = await fetch(`${process.env.BASE_API}/portfolio-projects?_sort=rank:ASC`);
	const projects: Project[] = (await res.json()) || [];
	return {
		props: { projects },
		revalidate: 60,
	};
}
