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
} from "@chakra-ui/react";

export default function MailCTA() {
	const dark = useColorModeValue(false, true);
	return (
		<Box w={"full"} bg={dark ? "gray.800" : "gray.50"}>
			<Container maxW={["full", "5xl"]} p={[4, 16]}>
				<HStack
					spacing={[0, 16]}
					justifyContent="space-between"
					alignItems="center"
				>
					<Image
						display={["none", "block"]}
						src={"/mailcta-light.svg"}
						alt={"Ilustrace"}
					/>
					<VStack alignItems={"start"}>
						<Heading fontSize={"4xl"}>
							Crypto ve vaší emailové schránce
						</Heading>
						<Text
							color={dark ? "gray.200" : "gray.800"}
							fontSize={"2xl"}
						>
							Crypto novinky doručené do vaší emailové schránky
						</Text>
						<HStack w="full" spacing={0}>
							<Input
								focusBorderColor={"brand.400"}
								size={"lg"}
								w={"full"}
								type={"email"}
								autoComplete={"email"}
								placeholder="vas@email.cz"
								borderRightRadius={0}
								mr={0}
							/>
							<Button
								variant={"brand"}
								ml={0}
								size="lg"
								borderLeftRadius={0}
							>
								Odebírat
							</Button>
						</HStack>
					</VStack>
				</HStack>
			</Container>
		</Box>
	);
}
