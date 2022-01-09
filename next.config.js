/** @type {import('next').NextConfig} */
/* eslint-disable no-undef */
const withPWA = require("next-pwa");

// @ts-ignore
module.exports = withPWA({
	pwa: {
		dest: "public",
		register: true,
		skipWaiting: true,
		disable: process.env.NODE_ENV === "development",
	},
	reactStrictMode: true,
	images: {
		domains: ["res.imagekit.io", "doodleipsum.com", "res.cloudinary.com", "ik.imagekit.io"],
		minimumCacheTTL: 3600,
		disableStaticImages: true,
	},
	swcMinify: true,
});
