import Navbar from "./Navbar";
import Footer from "./Footer";
import {
	Box,
	Heading,
	HStack,
	Icon,
	IconButton,
	Tag,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa";
import { ToC } from "./ToC/TableOfContents";
import { useRouter } from "next/router";
import readingTime from "@danieldietrich/reading-time";
import { formatDuration } from "date-fns";
import cs from "date-fns/locale/cs";
import { HiOutlineClock } from "react-icons/hi";
import { Article } from "../pages/kurzy/[slug]";
import { difficulties, difficultiesColors } from "./DifficultyTag";
import { StrapiImage } from "./NextChakraLink";
import { NextSeo } from "next-seo";
import removeMd from "remove-markdown";

export default function CourseLayout(props: {
	children: React.ReactNode;
	headings: string[];
	article: Article;
}) {
	const { scrollYProgress, scrollY } = useViewportScroll();
	const width = useTransform(
		scrollYProgress,
		[0, 1],
		["calc(0%)", "calc(100%)"]
	);
	const [scroll, setScroll] = useState(0);
	scrollY.onChange((s) => setScroll(s));
	const router = useRouter();

	const readingStats = readingTime(props.article.content).minutes;
	const searchResultsBg = useColorModeValue("white", "gray.900");

	return (
		<>
			<NextSeo
				title={props.article.title}
				description={removeMd(props.article.content).slice(0, 150)}
			/>
			<Navbar />
			<HStack
				position={"fixed"}
				left={0}
				top={0}
				as={motion.div}
				initial={false}
				w={"full"}
				display={"flex"}
				background={searchResultsBg}
				zIndex={100}
				height={70}
				animate={{ top: scroll > 65 ? 0 : -70 }}
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
					<HStack spacing={[4, 8]}>
						<IconButton
							aria-label={"Zpět"}
							onClick={() => router.back()}
						>
							<Icon as={FaChevronLeft} />
						</IconButton>
						<Box fontSize={["md", "lg"]} fontWeight={"medium"}>
							{props.article.title}
						</Box>
					</HStack>

					<ToC headings={props.headings} />
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
				{/*<Breadcrumb*/}
				{/*	fontSize={["md", "lg"]}*/}
				{/*	spacing="8px"*/}
				{/*	separator={<Icon as={VscChevronRight} />}*/}
				{/*>*/}
				{/*	<BreadcrumbItem>*/}
				{/*		<NextLink href={"/"}>Domů</NextLink>*/}
				{/*	</BreadcrumbItem>*/}
				{/*	{indexEntry.url.split("/").map((crumb, i, arr) => (*/}
				{/*		<BreadcrumbItem key={i}>*/}
				{/*			<NextLink*/}
				{/*				href={indexEntry.url.substring(*/}
				{/*					0,*/}
				{/*					indexEntry.url.indexOf(arr[i + 1])*/}
				{/*				)}*/}
				{/*			>*/}
				{/*				<Link>*/}
				{/*					{crumb*/}
				{/*						.trim()*/}
				{/*						.replace(/^\w/, (c) => c.toUpperCase())}*/}
				{/*				</Link>*/}
				{/*			</NextLink>*/}
				{/*		</BreadcrumbItem>*/}
				{/*	))}*/}
				{/*</Breadcrumb>*/}
				<Heading
					as={"h1"}
					fontWeight={"bold"}
					fontSize={["3xl", "5xl"]}
				>
					{props.article.title}
				</Heading>
				<HStack spacing={3}>
					{props.article.tags.map((tag) => (
						<Tag
							key={tag.id}
							variant={"subtle"}
							colorScheme={"gray"}
						>
							{tag.name}
						</Tag>
					))}
				</HStack>
				<HStack alignItems={"center"} spacing={5}>
					<Tag
						variant={"subtle"}
						fontSize={["sm", "md"]}
						colorScheme={
							difficultiesColors[props.article.difficulty]
						}
					>
						{difficulties[props.article.difficulty]}
					</Tag>
					<HStack>
						<Icon as={HiOutlineClock} />
						<Box>
							{formatDuration(
								{
									minutes: readingStats,
								},
								{ locale: cs }
							)}
						</Box>
					</HStack>
				</HStack>
				<StrapiImage
					rounded={10}
					w={"full"}
					objectFit={"cover"}
					h={[40, "80"]}
					strapiImage={props.article.cover}
					alt={props.article.title}
				/>
				<Box fontSize={"xl"} pb={10} position={"relative"}>
					{props.children}
				</Box>
			</VStack>
			<Footer />
		</>
	);
}
