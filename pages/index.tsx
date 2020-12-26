import { Button, Container, HStack } from "@chakra-ui/react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MailCTA from "../components/MailCTA";
import Search from "../components/Search";

export default function Showcase() {
	return (
		<>
			<Navbar />
			<Container mt={3}>
				<HStack>
					<Button variant={"brand"}>Button</Button>
					<Button variant={"brand_outline"}>Outline</Button>
				</HStack>
				<Search />
			</Container>
			<MailCTA />
			<Footer />
		</>
	);
}
