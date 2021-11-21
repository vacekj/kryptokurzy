import {
	Button,
	Container,
	Heading,
	HStack,
	Text,
	Image,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

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
					<NextLink href={"/kurzy/zacnete-zde"}>
						<Button
							as={"a"}
							_hover={{
								textDecoration: "none",
							}}
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
					</NextLink>
				</VStack>
			</HStack>
		</Container>
	);
}
