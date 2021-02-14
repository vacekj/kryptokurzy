const withPlugins = require("next-compose-plugins");
const withMDX = require("next-mdx-enhanced")({
	fileExtensions: ["mdx"],
});

module.exports = withPlugins([
	[
		withMDX,
		{
			pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
		},
	],
]);
