import styles from "../styles/Projects.module.css";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import { FC } from "react";

const Projects: FC = () => {
	return (
		<section className={styles.projects} id="projects">
			<h2 className="capitalize">my projects</h2>

			<div className={styles.projects_container}>
				<ScrollAnimation animateIn="flipInX">
					<div className={styles.project}>
						<header>
							<svg
								width="50"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#23ce6b "
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round">
								<title>Folder</title>
								<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
							</svg>
							<div className={styles.project_links}>
								<a href="https://github.com/joaotuliojt/fc-squad43" target="_blank" rel="noreferrer">
									<Image
										src="https://ik.imagekit.io/clhowstalgz/icons/github-icon.svg"
										height={26}
										width={26}
										alt="GitHub"
									/>
								</a>
							</div>
						</header>
						<div className="body">
							<h3>FCallendar</h3>
							<p>
								Uma aplicação Web realizada durante o Hackathon do programa de formação da{" "}
								<a href="https://www.fcamara.com.br/"> FCamara</a>. Esta aplicação serve para ajudar na
								volta do trabalho remoto para o presencial.
							</p>
						</div>
						<footer>
							<ul className={styles.tech_list}>
								<li>Node</li>
								<li>Express</li>
								<li>MySql</li>
								<li>Ejs</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn="flipInX">
					<div className={styles.project}>
						<header>
							<svg
								width="50"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#23ce6b "
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round">
								<title>Folder</title>
								<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
							</svg>
							<div className={styles.project_links}>
								<a href="https://github.com/joaotuliojt/github-search" target="_blank" rel="noreferrer">
									<Image
										src="https://ik.imagekit.io/clhowstalgz/icons/github-icon.svg"
										height={26}
										width={26}
										alt="GitHub"
									/>
								</a>
								<a
									href="https://github-search-blond.vercel.app/"
									className="-mt-1"
									target="_blank"
									rel="noreferrer">
									<Image
										src="https://ik.imagekit.io/clhowstalgz/icons/external-link-icon.svg"
										alt="Visitor site"
										height={26}
										width={26}
									/>
								</a>
							</div>
						</header>
						<div className="body">
							<h3>Github Searcher</h3>
							<p>
								Uma versão mais agradável para ver seu perfil do GitHub, inclui visualização de dados ,
								repositórios, compartilhamento entre outros.
							</p>
						</div>
						<footer>
							<ul className={styles.tech_list}>
								<li>React</li>
								<li>Typescript</li>
								<li>Styled Components</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn="flipInX">
					<div className={styles.project}>
						<header>
							<svg
								width="50"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#23ce6b "
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round">
								<title>Folder</title>
								<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
							</svg>
							<div className={styles.project_links}>
								<a
									href="https://joaotuliojt.github.io/sunnyside-agency/"
									target="_blank"
									className="-mt-1"
									rel="noreferrer">
									<Image
										src="https://ik.imagekit.io/clhowstalgz/icons/external-link-icon.svg"
										alt="Visitor site"
										height={26}
										width={26}
									/>
								</a>
							</div>
						</header>
						<div className="body">
							<h3>Sunnyside agency</h3>
							<p>
								Uma lading page de uma empresa fictícia proposta pelo{" "}
								<a href="https://www.frontendmentor.io/">Frontend Mentor.</a>
							</p>
						</div>
						<footer>
							<ul className={styles.tech_list}>
								<li>Html</li>
								<li>Css</li>
								<li>JavaScript</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn="flipInX">
					<div className={styles.project}>
						<header>
							<svg
								width="50"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#23ce6b "
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round">
								<title>Folder</title>
								<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
							</svg>
							<div className={styles.project_links}>
								<a
									href="https://joaotulio.vercel.app/"
									className="-mt-1"
									target="_blank"
									rel="noreferrer">
									<Image
										src="https://ik.imagekit.io/clhowstalgz/icons/external-link-icon.svg"
										alt="Visitor site"
										height={26}
										width={26}
									/>
								</a>
							</div>
						</header>
						<div className="body">
							<h3>Portfólio V1</h3>
							<p>Uma versão alternativa de meu portfólio, utilizando VueJs.</p>
						</div>
						<footer>
							<ul className={styles.tech_list}>
								<li>VueJs</li>
								<li>JavaScript</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn="flipInX">
					<div className={styles.project}>
						<header>
							<svg
								width="50"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#23ce6b "
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round">
								<title>Folder</title>
								<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
							</svg>
							<div className={styles.project_links}>
								<a
									href="https://github.com/joaotuliojt/dtmoney-trilha-reactjs"
									target="_blank"
									className="-mt-1"
									rel="noreferrer">
									<Image
										src="https://ik.imagekit.io/clhowstalgz/icons/github-icon.svg"
										alt="Visitor site"
										height={26}
										width={26}
									/>
								</a>
							</div>
						</header>
						<div className="body">
							<h3>Dtmoney</h3>
							<p>
								Um gerenciador de finanças para analisar seus ganhos, gastos e ter um controle maior de
								suas finanças.
							</p>
						</div>
						<footer>
							<ul className={styles.tech_list}>
								<li>VueJs</li>
								<li>JavaScript</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn="flipInX">
					<div className={styles.project}>
						<header>
							<svg
								width="50"
								xmlns="http://www.w3.org/2000/svg"
								role="img"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#23ce6b "
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round">
								<title>Folder</title>
								<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
							</svg>
							<div className={styles.project_links}>
								<a
									href="https://github.com/joaotuliojt/dv-musica-library-page"
									target="_blank"
									rel="noreferrer">
									<Image
										src="https://ik.imagekit.io/clhowstalgz/icons/github-icon.svg"
										alt="Github site"
										height={26}
										width={26}
									/>
								</a>
								<a
									href="https://joaotuliojt.github.io/dv-musica-library-page/"
									target="_blank"
									className="-mt-1"
									rel="noreferrer">
									<Image
										src="https://ik.imagekit.io/clhowstalgz/icons/external-link-icon.svg"
										alt="Visitor site"
										height={26}
										width={26}
									/>
								</a>
							</div>
						</header>
						<div className="body">
							<h3>Music Library</h3>
							<p>Uma interface para uma biblioteca de músicas, semelhante ao Spotify.</p>
						</div>
						<footer>
							<ul className={styles.tech_list}>
								<li>Html</li>
								<li>Css</li>
								<li>JavaScript</li>
							</ul>
						</footer>
					</div>
				</ScrollAnimation>
			</div>
		</section>
	);
};
export default Projects;
