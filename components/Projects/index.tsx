import styles from "../../styles/Projects.module.css";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import type { FC } from "react";
import Card from "./Card";
type Project = {
	name: string;
	description: string;
	githubUrl: string;
	externalUrl?: string;
};
const projects: Project[] = [
	{
		name: "Burger Builder",
		description: "An Online Delivery app for a single Burger Restaurant for great user experience.",
		githubUrl: "https://github.com/jainChetan81/Burger-builder-App",
		externalUrl: "https://burger-builder-2f6a1.web.app/",
	},
	{
		name: "E-commerce Store",
		description: "Online store with MyCart integration and amazing user shopping experience.",
		githubUrl: "https://github.com/jainChetan81/Ecommerce-Website",
		externalUrl: "https://chetan-ecommerce.netlify.app/",
	},
	{
		name: "Email-y",
		description: "An online portal for Creating and sending your own surveys with stripe integration.",
		githubUrl: "https://github.com/jainChetan81/Chetan-Emaily",
		externalUrl: "http://chetan-emaily.herokuapp.com/",
	},
	{
		name: "DevChat",
		description: "A Slack clone where users can create channels or have direct conversation.",
		githubUrl: "https://github.com/jainChetan81/Firebase-Chat",
		externalUrl: "https://chetan-chat.web.app/",
	},
	{
		name: "News Portal",
		description: "An online portal for customizable News Feed with realtime search option .",
		githubUrl: "https://github.com/jainChetan81/NewsLaundry-Chetan",
		externalUrl: "https://jainchetan81.github.io/NewsLaundry-Chetan/",
	},
	{
		name: "Covid-19 Tracker",
		description: "An interface to track daily and total Covid-19 cases Globally or at your country ",
		githubUrl: "https://github.com/jainChetan81/Covid19-Tracker",
		externalUrl: "https://chetan-covid-tracker.netlify.app/",
	},
];

const Projects: FC = () => {
	return (
		<section className={styles.projects} id="projects">
			<h2 className="capitalize">my projects</h2>

			<div className={styles.projects_container}>
				{projects.map(({ name, description, githubUrl, externalUrl }: Project, i: number) => (
					<ScrollAnimation animateIn="flipInX" key={i}>
						<Card
							index={i}
							name={name}
							description={description}
							githubUrl={githubUrl}
							externalUrl={externalUrl}
						/>
					</ScrollAnimation>
				))}
			</div>
		</section>
	);
};
export default Projects;
