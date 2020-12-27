const withPlugins = require("next-compose-plugins");
const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});
const withPWA = require("next-pwa");

module.exports = withPlugins([
	[
		withPWA,
		{
			pwa: {
				dest: "public",
				disable: process.env.NODE_ENV === "development",
			},
		},
	],
	[
		withMDX,
		{
			pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
		},
	],
]);
