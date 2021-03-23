import Navbar from "./Navbar";
import Footer from "./Footer";
import {
	Box,
	Heading,
	HStack,
	Icon,
	Tag,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { Term } from "../pages/pojem/[slug]";
import { difficulties, difficultiesColors } from "./DifficultyTag";
import { HiOutlineClock } from "react-icons/hi";
import { formatDistanceToNow, formatDuration } from "date-fns";
import cs from "date-fns/locale/cs";
import readingTime from "@danieldietrich/reading-time";

export default function TermLayout(props: {
	content: React.ReactNode;
	term: Term;
}) {
	const readingStats = readingTime(props.term.explanation).minutes;
	const recommendedPageBg = useColorModeValue("gray.50", "gray.900");
	return (
		<>
			<Navbar />
			<VStack
				align={"start"}
				maxW={["unset", "5xl"]}
				mx={"auto"}
				spacing={5}
				p={5}
				mt={[2, 10]}
			>
				<Heading
					as={"h1"}
					fontWeight={"bold"}
					fontSize={["3xl", "5xl"]}
				>
					{props.term.name}
				</Heading>
				<HStack alignItems={"center"} spacing={5}>
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
								{ locale: cs }
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
								}
							)}
						</Box>
					</HStack>
				</HStack>
				<Box fontSize={"xl"} pb={10}>
					{props.content}
				</Box>
			</VStack>
			<Footer />
		</>
	);
}