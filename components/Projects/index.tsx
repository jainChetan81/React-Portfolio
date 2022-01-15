import styles from "../../styles/Projects.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import type { FC } from "react";
import Card from "./Card";
import type { Project } from "../../@types";

const Projects: FC<{ projects: Project[] }> = ({ projects }) => {
	return (
		<section className={styles.projects} id="projects">
			<div className={styles.projects_container}>
				<h2 className="capitalize inline-block sm:hidden">my projects</h2>
				{projects.map((project: Project) => (
					<ScrollAnimation animateIn="flipInX" key={project.rank}>
						<Card
							rank={project.rank}
							name={project.name}
							slug={project.slug}
							summary={project.summary}
							githubUrl={project.githubUrl}
							displayImage={project.displayImage}
							externalUrl={project.externalUrl}
							technologies={project.technologies}
							endDate={project.endDate}
						/>
					</ScrollAnimation>
				))}
			</div>
		</section>
	);
};
export default Projects;
