import {
	Box,
	Button,
	Container,
	HStack,
	Icon,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Img from "next/image";
import {
	FaInstagram,
	FaTelegramPlane,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";

export default function Footer() {
	return (
		<Box w={"full"} bg={"black"}>
			<Container maxW={"1000px"} p={16}>
				<HStack
					spacing={16}
					justifyContent="space-between"
					alignItems="start"
				>
					<VStack spacing={4} alignItems={"end"}>
						<NextLink href={"/"}>
							<Link py={-3} mb={-1}>
								<Img
									src={"/logo_inverted.svg"}
									width={215}
									height={27}
								/>
							</Link>
						</NextLink>
						<Text color={"gray.100"}>
							&copy; Dominik Clemente, Josef Vacek 2020
						</Text>
					</VStack>
					<VStack spacing={8}>
						<Button h={9} variant={"solid"} colorScheme={"green"}>
							Začněte zde
						</Button>
						{/*TODO: linky na sekce*/}
					</VStack>
					<VStack>
						<HStack spacing={5}>
							{/*TODO: telegram link*/}
							<a>
								<Icon
									color={"white"}
									h={5}
									w={5}
									as={FaTelegramPlane}
								/>
							</a>
							<a>
								<Icon
									color={"white"}
									w={5}
									h={5}
									as={FaTwitter}
								/>
							</a>
							<a>
								<Icon
									color={"white"}
									w={5}
									h={5}
									as={FaYoutube}
								/>
							</a>
							<a>
								<Icon
									color={"white"}
									w={5}
									h={5}
									as={FaInstagram}
								/>
							</a>
						</HStack>
					</VStack>
				</HStack>
			</Container>
		</Box>
	);
}
