import { theme } from "components/ChakraTheme";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import CookieConsent from "react-cookie-consent";
import { DefaultSeo } from "next-seo";
import SEO from "../util/DefaultSEO";
import { usePlatform } from "caphooks/platform";
function MyApp({ Component, pageProps }) {
	const { platform } = usePlatform();

	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta
					name="apple-mobile-web-app-title"
					content="JakNaCrypto.cz"
				/>
				<meta name="application-name" content="JakNaCrypto.cz" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="theme-color" content="#ffffff" />
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
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
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

export default MyApp;
