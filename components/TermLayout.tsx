import { Box, Heading, HStack, Icon, Stack, Tag, VStack } from "@chakra-ui/react";
import readingTime from "@danieldietrich/reading-time";
import { formatDistanceToNow, formatDuration } from "date-fns";
import cs from "date-fns/locale/cs";
import { NextSeo } from "next-seo";
import NextLink from "next/link";
import React from "react";
import { HiArrowLeft, HiOutlineClock } from "react-icons/hi";
import { Term } from "../pages/pojem/[slug]";
import { difficulties, difficultiesColors, DifficultyTag } from "./DifficultyTag";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { NextChakraLink } from "./NextChakraLink";

export default function TermLayout(props: {
	term: Term;
	children: React.ReactNode;
}) {
	const readingStats = readingTime(props.term.explanation).minutes;
	return (
		<>
			<NextSeo
				title={props.term.name}
				description={props.term.summary}
				openGraph={{
					url: "https://kryptokurzy.cz/pojem/" + props.term.slug,
					title: props.term.name,
					description: props.term.summary,
					site_name: "Kryptokurzy.cz",
				}}
				twitter={{
					handle: "@kryptokurzy",
					site: "@kryptokurzy",
					cardType: "summary_large_image",
				}}
			/>
			<Navbar />
			<VStack
				align={"start"}
				maxW={["unset", "5xl"]}
				mx={"auto"}
				spacing={5}
				p={5}
				mt={[2, 10]}
			>
				<NextChakraLink href={"/slovnik"} aria-label={"zpět"}>
					<Icon as={HiArrowLeft} fontSize={"3xl"} />
				</NextChakraLink>
				<Heading
					as={"h1"}
					fontWeight={"bold"}
					fontSize={["3xl", "5xl"]}
				>
					{props.term.name}
				</Heading>
				<Stack
					direction={["column", "row"]}
					alignItems={"start"}
					spacing={[2, 5]}
				>
					<Tag
						variant={"subtle"}
						fontSize={["sm", "md"]}
						colorScheme={difficultiesColors[props.term.difficulty]}
					>
						{difficulties[props.term.difficulty]}
					</Tag>
					<HStack>
						<Icon as={HiOutlineClock} />
						<Box>Čas na přečtení:</Box>
						<Box>
							{formatDuration(
								{
									minutes: readingStats,
								},
								{ locale: cs },
							)}
						</Box>
					</HStack>
					<HStack spacing={1}>
						<Box>Naposledy aktualizováno</Box>
						<Box>
							{formatDistanceToNow(
								Date.parse(props.term.updated_at),
								{
									locale: cs,
									addSuffix: true,
								},
							)}
						</Box>
					</HStack>
				</Stack>
				<Box fontSize={"xl"} pb={10}>
					{props.children}
				</Box>
				{props.term.related_terms.length > 0 && (
					<>
						<Box
							whiteSpace={"nowrap"}
							p={2}
							pb={3}
							fontWeight={"medium"}
							textTransform={"uppercase"}
							textAlign={"center"}
							w={"full"}
						>
							Doporučené články
						</Box>
						<Stack direction={["column", "row"]}>
							{props.term.related_terms.map((term) => <TermCard term={term} />)}
						</Stack>
					</>
				)}
			</VStack>
			<Footer />
		</>
	);
}

export function TermCard(props: { term: Term }) {
	return (
		<NextLink href={"/pojem/" + props.term.slug}>
			<VStack
				transitionDuration={"300ms"}
				transitionTimingFunction={"ease-in-out"}
				shadow={"lg"}
				_hover={{
					shadow: "2xl",
				}}
				cursor={"pointer"}
				alignItems={"stretch"}
				rounded={"xl"}
				spacing={3}
				overflow={"hidden"}
			>
				<VStack
					p={[5]}
					pt={0}
					spacing={[2, 2]}
					w={"full"}
					alignItems={"start"}
				>
					<Box fontWeight={"bold"} fontSize={"2xl"}>
						{props.term.name}
					</Box>
					<Box fontSize={"xl"}>{props.term.summary}</Box>
					<HStack>
						<DifficultyTag difficulty={props.term.difficulty} />
					</HStack>
				</VStack>
			</VStack>
		</NextLink>
	);
}
