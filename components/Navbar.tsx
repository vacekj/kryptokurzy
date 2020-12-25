import {
	Button,
	HStack,
	Icon,
	IconButton,
	Link,
	useColorMode,
} from "@chakra-ui/react";
import { HiOutlineMoon, HiOutlineSearch, HiOutlineSun } from "react-icons/hi";
import Img from "next/image";
import NextLink from "next/link";

export default function NavBar() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<HStack bg={"black"} p={3} px={6} justifyContent="space-between">
			<HStack spacing={5}>
				<NextLink href={"/"}>
					<Link py={-3} mb={-1}>
						<Img
							src={"/logo_inverted.svg"}
							width={215}
							height={27}
						/>
					</Link>
				</NextLink>
				<Button h={9} variant={"solid"} colorScheme={"green"}>
					Začněte zde
				</Button>
			</HStack>
			<HStack spacing={1}>
				<IconButton
					variant={"unstyled"}
					aria-label="Přepnout noční režim"
					_hover={{
						opacity: 0.7,
					}}
					onClick={() => toggleColorMode()}
					icon={
						colorMode === "light" ? (
							<Icon w={6} h={6} as={HiOutlineMoon} />
						) : (
							<Icon w={6} h={6} as={HiOutlineSun} />
						)
					}
					color={"white"}
				/>
				<IconButton
					variant={"unstyled"}
					aria-label="Hledat"
					_hover={{
						opacity: 0.7,
					}}
					icon={<Icon w={6} h={6} as={HiOutlineSearch} />}
					color={"white"}
				/>
			</HStack>
		</HStack>
	);
}
