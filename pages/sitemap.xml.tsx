import { NextApiResponse } from "next";
import * as fs from "fs";
import { Project } from "../@types";

const Sitemap = () => {
	return null;
};

export const getServerSideProps = async ({ res }: { res: NextApiResponse }) => {
	const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
	const staticPaths = fs
		.readdirSync("pages")
		.filter((staticPage) => {
			return !["api", "_app.js", "_document.js", "404.js", "sitemap.xml.js"].includes(staticPage);
		})
		.map((staticPagePath) => {
			return `${BASE_URL}/${staticPagePath}`;
		});

	const response: Response = await fetch(`${process.env.BASE_API}/portfolio-projects?_sort=rank:ASC`);
	const projects: Project[] = await response.json();

	const dynamicPaths = projects.map((singleProduct: Project) => {
		return `${BASE_URL}/product/${singleProduct.slug}`;
	});

	const allPaths = [...staticPaths, ...dynamicPaths];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
			.map((url) => {
				return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
			})
			.join("")}
    </urlset>
`;

	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

export default Sitemap;
