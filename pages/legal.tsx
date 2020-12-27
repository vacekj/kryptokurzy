import {
	Button,
	Container,
	HStack,
	Box,
	Link,
	Text,
	Heading,
	VStack,
} from "@chakra-ui/react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MailCTA from "../components/MailCTA";
import NextLink from "next/link";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function Showcase() {
	return (
		<>
			<Head>
				<html lang={"cs"} />
				<NextSeo
					title="jaknacrypto.cz - Podmínky používání"
					description="Jaknacrypto.cz je Váš ověřený zdroj informací o kryptoměnách, decentralizovaných financích a novinek ze světa crypta"
				/>
			</Head>
			<Navbar />
			<Container maxW={"3xl"} as={VStack} alignItems={"start"} my={10}>
				<Heading>Podmínky používání</Heading>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Mauris tincidunt magna nibh, at tempus nunc dictum nec.
					Donec molestie libero quis dui iaculis auctor vitae quis
					lacus. In eleifend lectus eu nunc iaculis sagittis. Nulla
					facilisi. Mauris posuere tellus lectus, et congue urna
					congue ut. Integer at tempor diam. Vestibulum sed risus eu
					augue gravida faucibus non gravida arcu. Duis quis finibus
					leo. Phasellus nec nunc non enim pretium facilisis et ut
					eros. Morbi feugiat leo euismod feugiat pharetra. Donec nisl
					dolor, egestas vel dapibus eu, rhoncus ultricies ipsum.
					Fusce sagittis volutpat turpis, non porttitor massa cursus
					nec. In hac habitasse platea dictumst. Proin molestie, lorem
					eget pharetra tincidunt, enim tellus consectetur dolor, sed
					venenatis magna libero sed odio. Maecenas tempus at magna in
					efficitur. Integer tincidunt dui quis lobortis aliquam.
					Integer placerat tortor erat, efficitur luctus nibh placerat
					vitae. Lorem ipsum dolor sit amet, consectetur adipiscing
					elit. Donec commodo sapien a malesuada egestas. Etiam
					facilisis tristique urna. Nulla porta sem odio, vitae
					convallis dui pellentesque sed. Nam id elit quis ipsum
					molestie posuere. Nam dapibus mi bibendum tristique
					placerat. Pellentesque ornare lacus at ligula aliquet, et
					sagittis lorem dignissim. Sed vitae dui nec tortor cursus
					faucibus. Ut arcu turpis, hendrerit porta tincidunt sit
					amet, volutpat quis nisl. Donec lobortis dolor at
					ullamcorper ultrices. Nullam eget feugiat turpis, ac rhoncus
					erat. Curabitur molestie convallis velit vitae consectetur.
					Maecenas facilisis ut nunc at faucibus. Aliquam posuere
					lacinia nisl bibendum vehicula. Nam bibendum neque sed eros
					dictum rhoncus ut a neque. Nam eget justo quis elit cursus
					tempus. Maecenas rutrum sem sapien, vel egestas mi venenatis
					ut. In tempus pretium elit nec scelerisque. Integer at
					sollicitudin lorem, vitae sodales nibh. Nam varius libero ac
					sem euismod, vel eleifend metus laoreet. Suspendisse quis
					sapien justo. Curabitur justo erat, fringilla at mi
					interdum, blandit rutrum augue. Curabitur scelerisque massa
					lacus, sit amet egestas orci dapibus non. Integer id ipsum
					in leo facilisis sagittis. Donec laoreet, leo vitae accumsan
					condimentum, ligula lorem tincidunt dui, a pellentesque
					felis dui a lorem. Donec interdum, velit sit amet interdum
					mollis, nisl odio varius eros, eget consequat turpis tortor
					nec ipsum. Curabitur vel ligula dapibus, finibus lectus
					rutrum, gravida purus. Nam ut elit metus. Vivamus felis
					enim, finibus vel enim at, posuere vehicula odio. Class
					aptent taciti sociosqu ad litora torquent per conubia
					nostra, per inceptos himenaeos. In hac habitasse platea
					dictumst. In hac habitasse platea dictumst. Donec massa
					tellus, tristique eu arcu nec, commodo commodo diam. Donec
					volutpat tempor metus, vel placerat elit mattis at.
					Pellentesque a ultrices odio. Duis et purus nec est euismod
					sollicitudin. Nullam ut porta nunc, ac bibendum justo.
					Phasellus tincidunt magna mollis purus tempor dignissim.
					Nullam blandit scelerisque lorem eleifend luctus. Nulla
					facilisi.
				</Text>
			</Container>
			<MailCTA />
			<Footer />
		</>
	);
}
