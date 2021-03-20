import {
	Box,
	Button,
	Container,
	Heading,
	HStack,
	Input,
	Text,
	Image,
	useColorModeValue,
	VStack,
	useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { NextChakraLink } from "./NextChakraLink";

export default function Dunno() {
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
					height={"150px"}
					display={["none", "block"]}
					src={"/illustrations/error.svg"}
					alt={"Ilustrace"}
				/>
				<VStack alignItems={"flex-start"}>
					<Heading fontSize={"4xl"}>Ztraceni? Nezoufejte</Heading>
					<Text
						color={dark ? "gray.200" : "gray.800"}
						fontSize={"2xl"}
					>
						Nezoufejte. S naším kurzem pro začátečníky se rychle
						zorientujete.
					</Text>
					<NextChakraLink
						href={"/courses/zacnete-zde"}
						_hover={{
							textDecoration: "none",
						}}
					>
						<Button
							flexShrink={2}
							minW={0}
							overflow={"hidden"}
							h={9}
							variant={"solid"}
							colorScheme={"green"}
						>
							Začněte zde
						</Button>
					</NextChakraLink>
				</VStack>
			</HStack>
		</Container>
	);
}
