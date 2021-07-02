module.exports = {
	siteUrl: "https://kryptokurzy.cz",
	generateRobotsTxt: true,
	exclude: ["/server-sitemap.xml"], // <= exclude here
	robotsTxtOptions: {
		additionalSitemaps: [
			"https://kryptokurzy.cz/server-sitemap.xml", // <==== Add here
		],
	},
};
