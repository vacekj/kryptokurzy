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
import React from "react";
import { Term } from "../pages/pojem/[slug]";
import NextLink from "next/link";

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
					<Heading fontSize={"4xl"}>Blockchain, DeFi, NFT??</Heading>
					<Text
						color={dark ? "gray.200" : "gray.800"}
						fontSize={"2xl"}
					>
						Vysvětlíme vám {props.terms.length} pojmů tak, že už se
						v krypto slangu neztratíte.
					</Text>
					<NextLink href={"/slovnik"}>
						<Button
							mt={2}
							_hover={{
								textDecoration: "none",
							}}
							flexShrink={2}
							minW={0}
							overflow={"hidden"}
							h={9}
							p={6}
							as={"a"}
							fontSize={"xl"}
							variant={"solid"}
							colorScheme={"brand"}
						>
							Slovník
						</Button>
					</NextLink>
				</VStack>
			</HStack>
		</Container>
	);
}
