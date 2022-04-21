import { ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { theme } from "components/ChakraTheme";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import { hotjar } from "react-hotjar";
import SEO from "util/DefaultSEO";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		if (process.env.NODE_ENV === "production" && process.browser) {
			hotjar.initialize(2188656, 6);
		}
	}, [process.browser]);
	return (
		<>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png?v=m2njO944N0"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png?v=m2njO944N0"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png?v=m2njO944N0"
				/>
				<link rel="manifest" href="/site.webmanifest?v=m2njO944N0" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg?v=m2njO944N0"
					color="#5bbad5"
				/>
				<link rel="shortcut icon" href="/favicon.ico?v=m2njO944N0" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="theme-color" content="#ffffff" />
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, viewport-fit=cover"
				/>
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<title>KryptoKurzy.cz</title>
				<Gtag />
			</Head>
			<DefaultSeo {...SEO} />
			<CookieConsent buttonText="OK">
				Tento web používá cookies
			</CookieConsent>
			<ChakraProvider theme={theme}>
				<Fonts />
				<Component {...pageProps} />
			</ChakraProvider>
		</>
	);
}

function Gtag() {
	return (
		<>
			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-SE7E1WDWEL"
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-SE7E1WDWEL');`,
				}}
			/>
		</>
	);
}

function Fonts() {
	return (
		<Global
			styles={`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');`}
		/>
	);
}

export default MyApp;
