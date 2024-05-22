/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	experimental: {
		reactCompiler: true
	},
	images: {
		domains: ["res.imagekit.io", "doodleipsum.com", "res.cloudinary.com", "ik.imagekit.io"],
		minimumCacheTTL: 3600,
		disableStaticImages: true
	},
	webpack(config) {
		config.module.rules.push({
			test: [/(components|api|constants|redux|schema|utils)\/index.ts/i],
			sideEffects: false
		});
		return config;
	}
};
