import { theme } from "components/ChakraTheme";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import CookieConsent from "react-cookie-consent";
import { DefaultSeo } from "next-seo";
import SEO from "util/DefaultSEO";
import { usePlatform } from "caphooks/platform";
import { hotjar } from "react-hotjar";

function MyApp({ Component, pageProps }) {
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
