import type { NextPage } from "next";
import { About, Contact, Hero, Layout, Particle, Projects } from "../components";
import { NetworkDetector } from "../hoc";

const Home: NextPage = () => {
	return (
		<Layout title="Chetan Portfolio | Home">
			<Particle />
			<Hero />
			<About />
			<Projects />
			<Contact />
		</Layout>
	);
};

export default NetworkDetector(Home);
