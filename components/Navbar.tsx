import {
	Button,
	HStack,
	Icon,
	IconButton,
	useColorMode,
	Image,
} from "@chakra-ui/react";
import { HiOutlineMoon, HiOutlineSearch, HiOutlineSun } from "react-icons/hi";
import { NextChakraLink } from "./NextChakraLink";
import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";
import { useClickAway } from "use-click-away";
import { Plugins, StatusBarStyle } from "@capacitor/core";
import styles from "./navbar.module.css";
import { usePlatform } from "../caphooks/platform";
import { useInView } from "react-intersection-observer";

const { StatusBar } = Plugins;

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	const [searchOpen, setSearchOpen] = useState(false);
	const clickRef = useRef(null);
	const { ref, inView: isNavBarInView } = useInView({
		initialInView: true,
	});
	useClickAway(clickRef, () => {
		setSearchOpen(false);
	});
	const { platform } = usePlatform();
	useEffect(() => {
		if (platform !== "web") {
			StatusBar.setStyle({
				style:
					colorMode === "dark" || isNavBarInView
						? StatusBarStyle.Dark
						: StatusBarStyle.Light,
			});
		}
	}, [colorMode, isNavBarInView]);

	return (
		<>
			<div className={styles.navbar} ref={ref} />
			<HStack
				ref={clickRef}
				bg={"black"}
				p={3}
				px={[3, 6]}
				justifyContent="space-between"
			>
				<HStack
					flexShrink={2}
					spacing={4}
					overflow={"hidden"}
					alignItems={"center"}
				>
					<NextChakraLink href={"/"} pl={[1, 0]}>
						<Image
							display={["none", "block"]}
							h={7}
							src={"/logo_white.svg"}
							alt={"Logo"}
						/>
						<Image
							display={["block", "none"]}
							h={8}
							src={"/glyph.svg"}
							alt={"Logo"}
						/>
					</NextChakraLink>

					<NextChakraLink
						minW={0}
						pl={[1, 3]}
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

					<NextChakraLink
						fontSize={"lg"}
						fontWeight={"medium"}
						color={"white"}
						href={"/team"}
					>
						Náš tým
					</NextChakraLink>

					<NextChakraLink
						fontSize={"lg"}
						fontWeight={"medium"}
						color={"white"}
						href={"/consult"}
					>
						Konzultace
					</NextChakraLink>
				</HStack>
				<HStack spacing={1}>
					<HStack spacing={0} ref={clickRef}>
						<Search isOpen={searchOpen} />
						<IconButton
							variant={"unstyled"}
							aria-label="Hledat"
							_hover={{
								opacity: 0.7,
							}}
							onClick={() => setSearchOpen(!searchOpen)}
							icon={<Icon w={6} h={6} as={HiOutlineSearch} />}
							color={"white"}
						/>
					</HStack>
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
				</HStack>
			</HStack>
		</>
	);
}
