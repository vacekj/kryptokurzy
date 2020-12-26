import { Button, Container, HStack, Box } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MailCTA from "../components/MailCTA";

export default function Showcase() {
	return (
		<>
			<Navbar />
			<Box h={"300px"} />
			<MailCTA />
			<Footer />
		</>
	);
}
