import Head from "next/head";
import PropTypes from "prop-types";
import { FC } from "react";
import { Footer, Header } from ".";
import type { LayoutType } from "../@types";

const Layout: FC<LayoutType> = ({ title, keywords, description, children }) => {
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
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};
Layout.defaultProps = {
	title: "Portfolio - Chetan Jain",
	description: "A Portfolio of Chetan Jain to showcase various skills and projects",
	keywords: "[NextJs, Tailwind, Typescripts]",
};
Layout.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	keywords: PropTypes.string,
};
export default Layout;
