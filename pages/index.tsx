import type { NextPage } from "next";
import { About, Hero, Layout, Particle } from "../components";
import { NetworkDetector } from "../hoc";

const Home: NextPage = () => {
	return (
		<Layout title="Chetan Portfolio | Home">
			<Particle />
			<Hero />
			<About />
		</Layout>
	);
};

export default NetworkDetector(Home);
