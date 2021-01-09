import { theme } from "components/ChakraTheme";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import CookieConsent from "react-cookie-consent";
import { DefaultSeo } from "next-seo";
import SEO from "util/DefaultSEO";
import { usePlatform } from "caphooks/platform";
import { init } from "util/sentry";
import { hotjar } from "react-hotjar";

init();

function MyApp({ Component, pageProps, err }) {
	const { platform } = usePlatform();

	if (
		process.env.NODE_ENV === "production" &&
		typeof window !== "undefined"
	) {
		hotjar.initialize(2188656, 6);
	}
	return (
		<>
			<Head>
				<html lang={"cs"} />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png?v=qAMa3JvPw7"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png?v=qAMa3JvPw7"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png?v=qAMa3JvPw7"
				/>
				<link rel="manifest" href="/site.webmanifest?v=qAMa3JvPw7" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg?v=qAMa3JvPw7"
					color="#5bbad5"
				/>
				<link rel="shortcut icon" href="/favicon.ico?v=qAMa3JvPw7" />
				<meta name="msapplication-TileColor" content="#2b5797" />
				<meta name="theme-color" content="#ffffff" />
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, viewport-fit=cover"
				/>
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
			</Head>
			<DefaultSeo {...SEO} />
			{platform === "web" && (
				<CookieConsent buttonText="OK">
					Tento web používá cookies
				</CookieConsent>
			)}
			<ChakraProvider theme={theme}>
				{/*// Workaround for https://github.com/vercel/next.js/issues/8592*/}
				<Component {...pageProps} err={err} />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
