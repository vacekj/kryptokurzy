import { Button, Container, HStack, Box, Link } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MailCTA from "../components/MailCTA";
import NextLink from "next/link";

export default function Showcase() {
	return (
		<>
			<Navbar />
			<Box h={"300px"} />
			<NextLink href={"/courses/bitcoin/starter"}>
				<a>Starter</a>
			</NextLink>
			<MailCTA />
			<Footer />
		</>
	);
}
