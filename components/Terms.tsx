import {
	Button,
	Container,
	Heading,
	HStack,
	Image,
	Text,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import { NextChakraLink } from "./NextChakraLink";
import React from "react";
import { Term } from "../pages/pojem/[slug]";

export default function Terms(props: { terms: Term[] }) {
	const dark = useColorModeValue(false, true);

	return (
		<Container
			my={8}
			rounded={"xl"}
			maxW={["full", "5xl"]}
			bg={dark ? "gray.800" : "gray.50"}
			p={[4, 16]}
		>
			<HStack
				spacing={[0, 24]}
				justifyContent="space-around"
				alignItems="start"
			>
				<Image
					height={"250px"}
					display={["none", "block"]}
					src={"/illustrations/books.svg"}
					alt={"Ilustrace knih"}
				/>
				<VStack alignItems={"flex-start"}>
					<Heading fontSize={"4xl"}>
						Blockchain, DeFi, Proof of Stake??
					</Heading>
					<Text
						color={dark ? "gray.200" : "gray.800"}
						fontSize={"2xl"}
					>
						Vysvětlíme vám {props.terms.length} pojmů tak, že už se
						v krypto slangu neztratíte.
					</Text>
					<NextChakraLink
						href={"/slovnik"}
						_hover={{
							textDecoration: "none",
						}}
					>
						<Button
							mt={2}
							flexShrink={2}
							minW={0}
							overflow={"hidden"}
							h={9}
							p={6}
							fontSize={"xl"}
							variant={"solid"}
							colorScheme={"brand"}
						>
							Slovník
						</Button>
					</NextChakraLink>
				</VStack>
			</HStack>
		</Container>
	);
}
