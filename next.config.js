const { withSentryConfig } = require("@sentry/nextjs");
const withPlugins = require("next-compose-plugins");
const {
	PHASE_PRODUCTION_SERVER,
	PHASE_PRODUCTION_BUILD,
} = require("next/constants");
const withTM = require("next-transpile-modules")(["lodash-es"]);

const nextConfig = {
	images: {
		domains: ["cdn.kryptokurzy.cz", "localhost", "api.kryptokurzy.cz"],
	},
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins(
	[
		[
			withSentryConfig,
			{},
			[PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER],
		],
		[withBundleAnalyzer],
		[withTM],
	],
	nextConfig
);
