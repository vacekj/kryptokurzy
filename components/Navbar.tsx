import {
	Button,
	HStack,
	Icon,
	IconButton,
	useColorMode,
	Image,
	Box,
	VStack,
	useBoolean,
} from "@chakra-ui/react";
import { HiOutlineMoon, HiOutlineSearch, HiOutlineSun } from "react-icons/hi";
import { NextChakraLink } from "./NextChakraLink";
import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";
import { useClickAway } from "use-click-away";
import styles from "./navbar.module.css";
import { usePlatform } from "../caphooks/platform";
import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

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
					flexGrow={[1, 10]}
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
							flexShrink={0}
							display={["block", "none"]}
							h={8}
							src={"/glyph.svg"}
							alt={"Logo"}
						/>
					</NextChakraLink>

					<NextChakraLink
						minW={0}
						pl={[1, 3]}
						display={["block"]}
						href={"/kurzy/zacnete-zde"}
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
						display={["none", "block"]}
					>
						Náš tým
					</NextChakraLink>

					<NextChakraLink
						fontSize={"lg"}
						fontWeight={"medium"}
						color={"white"}
						href={"/konzultace"}
						display={["none", "block"]}
					>
						Konzultace
					</NextChakraLink>
				</HStack>
				<HStack
					spacing={1}
					flexGrow={[10, 1]}
					flexShrink={1}
					justifyContent={"flex-end"}
				>
					{/*Search*/}
					<HStack
						justifyContent={"flex-end"}
						flexGrow={1}
						spacing={0}
						ref={clickRef}
					>
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
					{/*Dark mode*/}
					<IconButton
						variant={"unstyled"}
						aria-label="Přepnout noční režim"
						_hover={{
							opacity: 0.7,
						}}
						display={["none", "block"]}
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
					<MobileNav />
				</HStack>
			</HStack>
		</>
	);
}

const variants: Variants = {
	open: {
		right: 0,
		display: "flex",
	},
	closed: {
		right: "-100vw",
		display: "hidden",
	},
};

const MotionVStack = motion(VStack);

function MobileNav() {
	const [isOpen, { toggle }] = useBoolean(false);
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Box
			as={motion.div}
			animate={isOpen ? "open" : "closed"}
			initial={false}
			outline={"none"}
			_focus={{
				outline: "none",
			}}
		>
			<MenuToggle toggle={toggle} />
			<MotionVStack
				bg={"gray.900"}
				transition={{
					type: "tween",
					bounce: 0,
				}}
				as={motion.div}
				position={"fixed"}
				top={63}
				alignItems={"flex-end"}
				px={5}
				py={5}
				spacing={4}
				initial={"closed"}
				variants={variants}
				animate={isOpen ? "open" : "closed"}
				h={"100vh"}
				zIndex={1000}
			>
				<NextChakraLink href={"/"}>
					<Image h={8} src={"/logo_white.svg"} alt={"Logo"} />
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
					href={"/konzultace"}
				>
					Konzultace
				</NextChakraLink>

				<IconButton
					variant={"unstyled"}
					aria-label="Přepnout noční režim"
					_hover={{
						opacity: 0.7,
					}}
					display={"block"}
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

				<HStack spacing={5} pr={3}>
					<a
						aria-label={"kryptokurzy.cz Telegram skupina"}
						href={"https://t.me/joinchat/SW9rdfYLrF5zhrqO"}
					>
						<Icon
							color={"white"}
							h={5}
							w={5}
							as={FaTelegramPlane}
						/>
					</a>
					<a
						aria-label={"kryptokurzy.cz Twitter stránka"}
						href={"https://twitter.com/kryptokurzy"}
					>
						<Icon color={"white"} w={5} h={5} as={FaTwitter} />
					</a>
				</HStack>
			</MotionVStack>
		</Box>
	);
}
const Path = (props) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="#fff"
		strokeLinecap="round"
		{...props}
	/>
);

export const MenuToggle = ({ toggle }) => (
	<Box mb={"-6px"} display={["block", "none"]} onClick={toggle}>
		<svg width="23" height="23" viewBox="0 0 23 23">
			<Path
				variants={{
					closed: { d: "M 2 2.5 L 20 2.5" },
					open: { d: "M 3 16.5 L 17 2.5" },
				}}
			/>
			<Path
				d="M 2 9.423 L 20 9.423"
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={{
					closed: { d: "M 2 16.346 L 20 16.346" },
					open: { d: "M 3 2.5 L 17 16.346" },
				}}
			/>
		</svg>
	</Box>
);
