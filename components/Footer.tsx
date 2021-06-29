import {
	Box,
	Button,
	Container,
	HStack,
	Icon,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import { NextChakraLink } from "./NextChakraLink";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
	return (
		<Box as={"footer"} w={"full"} bg={"black"}>
			<Container maxW={"1000px"} p={[8, 16]}>
				<Stack
					direction={["column", "row"]}
					spacing={[8, 16]}
					justifyContent="space-between"
					alignItems="start"
				>
					<VStack spacing={4} alignItems={"start"}>
						<Button h={9} variant={"solid"} colorScheme={"green"}>
							Začněte zde
						</Button>
						<VStack
							fontWeight={"semibold"}
							pl={1}
							spacing={3}
							alignItems={"left"}
							textColor={"white"}
						>
							<NextChakraLink href={"/"}>
								Všechny kurzy
							</NextChakraLink>
							<NextChakraLink href={"/team"}>
								Tým kryptokurzy.cz
							</NextChakraLink>
							<NextChakraLink href={"/legal#osobni-udaje"}>
								Ochrana osobních údajů
							</NextChakraLink>
							<NextChakraLink href={"/legal#disclaimer"}>
								Prohlášení o vyloučení odpovědnosti±
							</NextChakraLink>
						</VStack>
					</VStack>
					<VStack spacing={4} alignItems={"end"}>
						<NextChakraLink href={"/"}>
							<img src={"/logo_white.svg"} alt={"Logo"} />
						</NextChakraLink>
						<Text pt={[4, 0]} color={"gray.100"}>
							&copy; Josef Vacek, Dominik Clemente 2021
						</Text>
						<HStack spacing={5}>
							{/*<a*/}
							{/*	aria-label={"kryptokurzy.cz Telegram skupina"}*/}
							{/*	href={"https://t.me/joinchat/SW9rdfYLrF5zhrqO"}*/}
							{/*>*/}
							{/*	<Icon*/}
							{/*		color={"white"}*/}
							{/*		h={5}*/}
							{/*		w={5}*/}
							{/*		as={FaTelegramPlane}*/}
							{/*	/>*/}
							{/*</a>*/}
							<a
								aria-label={"kryptokurzy.cz Twitter stránka"}
								href={"https://twitter.com/kryptokurzy"}
							>
								<Icon
									color={"white"}
									w={5}
									h={5}
									as={FaTwitter}
								/>
							</a>
							{/*<a>*/}
							{/*	<Icon*/}
							{/*		color={"white"}*/}
							{/*		w={5}*/}
							{/*		h={5}*/}
							{/*		as={FaYoutube}*/}
							{/*	/>*/}
							{/*</a>*/}
							{/*<a>*/}
							{/*	<Icon*/}
							{/*		color={"white"}*/}
							{/*		w={5}*/}
							{/*		h={5}*/}
							{/*		as={FaInstagram}*/}
							{/*	/>*/}
							{/*</a>*/}
						</HStack>
					</VStack>
				</Stack>
			</Container>
		</Box>
	);
}
