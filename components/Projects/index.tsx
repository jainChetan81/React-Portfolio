import styles from "../../styles/Projects.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import type { FC } from "react";
import Card from "./Card";
import type { Project } from "../../@types";

const Projects: FC<{ projects: Project[] }> = ({ projects }) => {
	return (
		<section className={styles.projects} id="projects">
			<h2 className="capitalize">my projects</h2>

			<div className={styles.projects_container}>
				{projects.map((project: Project) => (
					<ScrollAnimation animateIn="flipInX" key={project.rank}>
						<Card
							rank={project.rank}
							name={project.name}
							slug={project.slug}
							startDate={project.startDate}
							endDate={project.endDate}
							summary={project.summary}
							githubUrl={project.githubUrl}
							displayImage={project.displayImage}
							externalUrl={project.externalUrl}
						/>
					</ScrollAnimation>
				))}
			</div>
		</section>
	);
};
export default Projects;
