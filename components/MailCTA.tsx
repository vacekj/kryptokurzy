import {
	Box,
	Button,
	Container,
	Heading,
	HStack,
	Input,
	Text,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import Img from "next/image";

export default function MailCTA() {
	const dark = useColorModeValue(false, true);
	return (
		<Box w={"full"} bg={dark ? "gray.800" : "gray.50"}>
			<Container maxW={"5xl"} p={16}>
				<HStack
					spacing={16}
					justifyContent="space-between"
					alignItems="center"
				>
					<Img src={"/mailcta-light.svg"} width={300} height={300} />
					<VStack alignItems={"start"}>
						<Heading fontSize={"4xl"}>
							Crypto ve vaší emailové schránce
						</Heading>
						<Text
							color={dark ? "gray.200" : "gray.800"}
							fontSize={"3xl"}
						>
							Get the latest in crypto dropped to your email,
							every week.
						</Text>
						<HStack w="full" spacing={0}>
							<Input
								focusBorderColor={"brand.400"}
								size={"lg"}
								w={"full"}
								type={"email"}
								autoComplete={"email"}
								placeholder="Email address"
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
