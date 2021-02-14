import {
	Button,
	HStack,
	Icon,
	IconButton,
	Link,
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
			<div className={styles.navbar} />
			<HStack
				ref={ref}
				bg={"black"}
				p={3}
				px={[3, 6]}
				justifyContent="space-between"
			>
				<HStack spacing={5}>
					<NextChakraLink py={-3} mb={-1} href={"/"}>
						<Image
							display={["none", "block"]}
							h={7}
							src={"/logo_inverted.svg"}
							alt={"Logo"}
						/>
						<Image
							display={["block", "none"]}
							h={7}
							src={"/glyph_inverted.svg"}
							alt={"Logo"}
						/>
					</NextChakraLink>
					<Button
						display={["block"]}
						h={9}
						variant={"solid"}
						colorScheme={"green"}
					>
						Začněte zde
					</Button>
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
