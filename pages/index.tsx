import { Button, Container, HStack, Box, Link } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MailCTA from "../components/MailCTA";
import NextLink from "next/link";
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
