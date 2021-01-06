import {
	Button,
	HStack,
	Icon,
	IconButton,
	Link,
	useColorMode,
} from "@chakra-ui/react";
import { HiOutlineMoon, HiOutlineSearch, HiOutlineSun } from "react-icons/hi";
import NextLink from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";
import { useClickAway } from "use-click-away";
import { Plugins, StatusBarStyle } from "@capacitor/core";
import { useGetInfo } from "../caphooks/device";
import styles from "./navbar.module.css";
import useVisibilitySensor from "@rooks/use-visibility-sensor";

const { StatusBar } = Plugins;

export default function NavBar() {
	const { colorMode, toggleColorMode } = useColorMode();
	const [searchOpen, setSearchOpen] = useState(false);
	const clickRef = useRef(null);
	const visRef = useRef(null);
	const { isVisible: isNavBarInView } = useVisibilitySensor(visRef, {
		intervalCheck: 100,
		scrollCheck: true,
		resizeCheck: true,
	});
	useClickAway(clickRef, () => {
		setSearchOpen(false);
	});
	useEffect(() => {
		StatusBar.setStyle({
			style:
				colorMode === "dark" || isNavBarInView
					? StatusBarStyle.Dark
					: StatusBarStyle.Light,
		});
	}, [colorMode, isNavBarInView]);

	return (
		<>
			<div className={styles.navbar} />
			<HStack
				ref={visRef}
				bg={"black"}
				p={3}
				px={[3, 6]}
				justifyContent="space-between"
			>
				<HStack spacing={5}>
					<NextLink href={"/"}>
						<Link py={-3} mb={-1}>
							<img src={"/logo_inverted.svg"} alt={"Logo"} />
						</Link>
					</NextLink>
					<Button
						display={["none", "block"]}
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
