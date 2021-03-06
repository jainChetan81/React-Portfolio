import Head from "next/head";
import PropTypes from "prop-types";
import { LegacyRef, useEffect, useRef, useState } from "react";
import type { FC } from "react";
import { Footer, Particle, Sidebar } from ".";
type LayoutType = {
	title: string;
	keywords?: string;
	description?: string;
	children?: any;
};
const Layout: FC<LayoutType> = ({ title, keywords, description, children }) => {
	const bodyRef: LegacyRef<HTMLDivElement> = useRef(null);
	const [isDark, setIsDark] = useState<boolean>(true);

	useEffect(() => {
		bodyRef?.current?.classList.toggle("dark");
	}, [isDark]);
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta charSet="utf-8" />
				<meta name="author" content="Chetan Jain" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="manifest" href="manifest.json" />
			</Head>
			<div className="body" ref={bodyRef}>
				<Particle />
				<Sidebar isDark={isDark} setIsDark={setIsDark} />
				<div className="custom-shape-divider-top">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none">
						<path
							d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
							className="shape-fill"></path>
					</svg>
				</div>
				<main>{children}</main>
				<Footer />
			</div>
		</>
	);
};
Layout.defaultProps = {
	description:
		"A Portfolio made with React using ISR by Chetan Jain to showcase his incredible Full Stack Development skills in full stack development and projects",
	keywords: "NextJS, React, Tailwind, Typescript, Strapi, PWA, PostCss, Javascript",
};
Layout.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	keywords: PropTypes.string,
};
export default Layout;
