import ScrollAnimation from "react-animate-on-scroll";
import type { Project } from "../../@types";
import styles from "../../styles/Projects.module.css";
import Card from "./Card";

const Projects = () => (
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
export default Projects;

const projects: Project[] = [
  {
    rank: 1,
    name: "Pokedex",
    slug: "pokedex",
    description: "",
    githubUrl: "https://github.com/jainChetan81/Pokemon-Gallery",
    externalUrl: "https://pokemon-gallery.vercel.app/",
    displayImage: "https://i.ibb.co/0nZ3Z3r/pokemon-gallery.png",
    summary:
      "A Gallery of pokemon with individual static pages for each pokemon as pages.",
    startDate: "Aug 1, 2021",
    endDate: " Oct 1, 2021",
    technologies: [
      {
        name: "Next.js",
        icon: "https://i.ibb.co/0nZ3Z3r/pokemon-gallery.png",
      },
      {
        name: "React.js",
        icon: "https://i.ibb.co/0nZ3Z3r/pokemon-gallery.png",
      },
      {
        name: "Tailwind CSS",
        icon: "https://i.ibb.co/0nZ3Z3r/pokemon-gallery.png",
      },
      {
        name: "TypeScript",
        icon: "https://i.ibb.co/0nZ3Z3r/pokemon-gallery.png",
      },
      {
        name: "Cypress",
        icon: "https://i.ibb.co/0nZ3Z3r/pokemon-gallery.png",
      },
      {
        name: "Jest",
        icon: "https://i.ibb.co/0nZ3Z3r/pokemon-gallery.png",
      },
    ],
  },
  {
    rank: 2,
    name: "Burger Builder",
    slug: "burger-builder",
    summary:
      "A Restaurant application where you can create your own burger and then order it",
    description: "",
    githubUrl: "https://github.com/jainChetan81/Burger-builder-App",
    externalUrl: "https://burger-builder-2f6a1.web.app/",
    startDate: "Jun 1, 2020",
    endDate: "Nov 1, 2020",
    technologies: [],
    displayImage: "https://i.ibb.co/0nZ3Z3r/pokemon-gallery.png",
  },
  {
    rank: 3,
    name: "Cafeteria App",
    slug: "cafeteria-app",
    summary: "A cafeteria application where you can order food and drinks",
    description: "",
    githubUrl: "https://github.com/jainChetan81/Cafeteria-Ecommerce-App",
    externalUrl: "https://chetan-cafeteria-app.herokuapp.com/",
    startDate: "Nov 1, 2020",
    endDate: "Mar 1, 2021",
    technologies: [],
    displayImage: "https://i.ibb.co/0nZ3Z3r/pokemon-gallery.png",
  },
  {
    rank: 4,
    name: "DevChat",
    slug: "devchat",
    summary: "A chat application where you can chat with other developers",
    description: "",
    githubUrl: "https://github.com/jainChetan81/Firebase-Chat",
    externalUrl: "https://chetan-chat.web.app/login",
    startDate: "Feb 1, 2020",
    endDate: "May 1, 2020",
    technologies: [],
    displayImage: "https://i.ibb.co/0nZ3Z3r/pokemon-gallery.png",
  },
];
