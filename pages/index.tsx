import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MailCTA from "../components/MailCTA";
import Head from "next/head";
import ConsultingForm from "../components/ConsultingForm";

export default function Showcase() {
	return (
		<>
			<Head>
				<html lang={"cs"} />
				<title>JakNaCrypto.cz</title>
			</Head>
			<Navbar />
			<ConsultingForm />
			<MailCTA />
			<Footer />
		</>
	);
}
