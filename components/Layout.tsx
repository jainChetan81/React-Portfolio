import Head from "next/head";
import PropTypes from "prop-types";
import { FC, LegacyRef, useEffect, useRef, useState } from "react";
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
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="manifest" href="manifest.json" />
			</Head>
			<div className="body" ref={bodyRef}>
				<Particle />
				<Sidebar isDark={isDark} setIsDark={setIsDark} />
				<main>{children}</main>
				<Footer />
			</div>
		</>
	);
};
Layout.defaultProps = {
	title: "Portfolio - Chetan Jain",
	description: "A Portfolio of Chetan Jain to showcase various skills and projects",
	keywords: "[NextJs, Tailwind, Typescript]",
};
Layout.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	keywords: PropTypes.string,
};
export default Layout;
