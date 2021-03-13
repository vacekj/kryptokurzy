import Navbar from "./Navbar";
import Footer from "./Footer";
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	Heading,
	HStack,
	Link,
	Tag,
	VStack,
	Image,
	Icon,
	IconButton,
} from "@chakra-ui/react";
import { MenuItemLink } from "./ToC/MobileNav";
import React, { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import { VscChevronRight } from "react-icons/vsc";
import index from "../indexes";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa";
import { ToC } from "./ToC/TableOfContents";
import { useRouter } from "next/router";
import readingTime, { Stats } from "@danieldietrich/reading-time";
import { formatDuration } from "date-fns";
import cs from "date-fns/locale/cs";
import { HiOutlineClock } from "react-icons/hi";

const difficulties = {
	1: "Začátečník",
	2: "Pokročilý",
	3: "Expert",
};

const difficultiesColors = {
	1: "green",
	2: "orange",
	3: "red",
};

export default function CourseLayout(props: {
	children: React.ReactNode;
	links: MenuItemLink[];
	pageUrl: string;
	imgUrl: string;
}) {
	const indexEntry = index.find((i) => i.url === props.pageUrl);
	const { scrollYProgress, scrollY } = useViewportScroll();
	const width = useTransform(
		scrollYProgress,
		[0, 1],
		["calc(0%)", "calc(100%)"]
	);
	const [scroll, setScroll] = useState(0);
	scrollY.onChange((s) => setScroll(s));
	const router = useRouter();

	const courseRef = useRef<HTMLDivElement | null>(null);
	const [readingStats, setReadingStats] = useState<Stats | null>();
	useEffect(() => {
		if (courseRef.current) {
			setReadingStats(readingTime(courseRef.current.innerText));
		}
	}, [courseRef.current]);

	return (
		<>
			<Navbar />
			<HStack
				position={"fixed"}
				top={0}
				left={0}
				as={motion.div}
				initial={false}
				w={"full"}
				display={"flex"}
				background={"white"}
				zIndex={100}
				animate={{ height: scroll > 65 ? 73 : 0 }}
				shadow={"lg"}
				px={[2]}
				overflow={"hidden"}
				justifyContent={"center"}
			>
				<HStack
					w={"full"}
					justifyContent={"space-between"}
					maxW={["full", "5xl"]}
				>
					<HStack>
						<IconButton
							aria-label={"Zpět"}
							onClick={() => router.back()}
						>
							<Icon as={FaChevronLeft} />
						</IconButton>
						<Box fontSize={["sm", "lg"]} fontWeight={"medium"}>
							{indexEntry.title}
						</Box>
					</HStack>

					<ToC links={props.links}>{props.links}</ToC>
				</HStack>

				<motion.div
					style={{
						width,
						height: 5,
						background: "gold",
						position: "absolute",
						bottom: 0,
						left: 0,
						margin: 0,
					}}
				/>
			</HStack>
			<VStack
				align={"start"}
				maxW={["unset", "5xl"]}
				mx={"auto"}
				spacing={5}
				p={5}
				mt={[2, 10]}
			>
				<Breadcrumb
					fontSize={["md", "lg"]}
					spacing="8px"
					separator={<Icon as={VscChevronRight} />}
				>
					<BreadcrumbItem>
						<NextLink href={"/"}>Domů</NextLink>
					</BreadcrumbItem>
					{indexEntry.url.split("/").map((crumb, i, arr) => (
						<BreadcrumbItem key={i}>
							<NextLink
								href={indexEntry.url.substring(
									0,
									indexEntry.url.indexOf(arr[i + 1])
								)}
							>
								<Link>
									{crumb
										.trim()
										.replace(/^\w/, (c) => c.toUpperCase())}
								</Link>
							</NextLink>
						</BreadcrumbItem>
					))}
				</Breadcrumb>
				<Heading
					as={"h1"}
					fontWeight={"bold"}
					fontSize={["3xl", "5xl"]}
				>
					{indexEntry.title}
				</Heading>
				<HStack spacing={3}>
					{indexEntry.tags.split(",").map((tag) => (
						<Tag variant={"subtle"} colorScheme={"gray"}>
							{tag}
						</Tag>
					))}
				</HStack>
				<HStack alignItems={"center"} spacing={5}>
					<Tag
						variant={"subtle"}
						fontSize={["sm", "md"]}
						colorScheme={difficultiesColors[indexEntry.difficulty]}
					>
						{difficulties[indexEntry.difficulty]}
					</Tag>
					<HStack>
						<Icon as={HiOutlineClock} />
						<Box>
							{formatDuration(
								{
									minutes: readingStats?.minutes ?? 0,
								},
								{ locale: cs }
							)}
						</Box>
					</HStack>
				</HStack>
				<Image
					rounded={10}
					w={"full"}
					objectFit={"cover"}
					h={[40, "80"]}
					src={props.imgUrl}
					alt={"Bitcoin"}
				/>
				<Box ref={courseRef} pb={10} position={"relative"}>
					{props.children}
				</Box>
			</VStack>
			<Footer />
		</>
	);
}
