import { Button, Container, Heading, HStack, Image, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
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
					height={200}
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
						S naším kurzem pro začátečníky se rychle zorientujete.
					</Text>
					<NextChakraLink
						href={"/kurzy/zacnete-zde"}
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
