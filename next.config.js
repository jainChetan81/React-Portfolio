/** @type {import('next').NextConfig} */
/* eslint-disable no-undef */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
// @ts-ignore
module.exports = withPWA({
	pwa: {
		dest: "public",
		disable: process.env.NODE_ENV === "development",
		register: true,
		scope: "/",
		sw: "service-worker.js",
		runtimeCaching,
		buildExcludes: [/middleware-manifest.json$/],
	},
	reactStrictMode: true,
	images: {
		domains: ["res.imagekit.io", "doodleipsum.com", "res.cloudinary.com", "ik.imagekit.io"],
		minimumCacheTTL: 3600,
		disableStaticImages: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: [/(components|api|constants|redux|schema|utils)\/index.ts/i],
			sideEffects: false,
		});
		return config;
	},
	maximumFileSizeToCacheInBytes: 5242880,
});
