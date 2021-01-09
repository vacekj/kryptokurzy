import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MailCTA from "../components/MailCTA";
import Head from "next/head";
import ConsultingForm from "../components/ConsultingForm";
import { NextSeo } from "next-seo";

export default function Showcase() {
	return (
		<>
			<Head>
				<NextSeo
					title="jaknacrypto.cz - Podmínky používání"
					description="Jaknacrypto.cz je Váš ověřený zdroj informací o kryptoměnách, decentralizovaných financích a novinek ze světa crypta"
				/>
				<title>Jaknacrypto.cz</title>
			</Head>
			<Navbar />
			<ConsultingForm />
			<MailCTA />
			<Footer />
		</>
	);
}
