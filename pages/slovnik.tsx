import {
	Box,
	Divider,
	Heading,
	HStack,
	Image,
	Input,
	Link,
	Stack,
	Text,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { sortBy, uniq } from "lodash-es";
import { GetStaticProps } from "next";
import { Term } from "pages/pojem/[slug]";
import React, { useRef } from "react";
import { useMiniSearch } from "react-minisearch";
import { NextChakraLink } from "../components/NextChakraLink";
import { strapiFetch } from "../util/getApiUrl";

type TermsProps = {
	terms: Term[];
};

export default function Terms(props: TermsProps) {
	const recommendedPageBg = useColorModeValue("gray.50", "gray.900");
	const indexLetters = sortBy(
		uniq(props.terms.map((t) => t.name[0].toUpperCase())),
		[(i) => i],
		["asc"],
	);

	return (
		<>
			<Navbar />
			<VStack
				align={"start"}
				maxW={["unset", "5xl"]}
				mx={"auto"}
				spacing={[4, 10]}
				p={5}
			>
				<Stack
					direction={["column", "row"]}
					spacing={48}
					w={"full"}
					bg={recommendedPageBg}
					rounded={"xl"}
					p={[6, 10]}
				>
					<Heading
						as={"h1"}
						fontWeight={"bold"}
						fontSize={["4xl", "6xl"]}
					>
						<Text color={"brand.500"}>
							{props.terms.length} pojmů.
						</Text>
						Znáte je všechny?
					</Heading>
					<Image
						display={["none", "block"]}
						rounded={10}
						objectFit={"cover"}
						h={[40, 60]}
						src={"/illustrations/education.svg"}
						alt={"Ilustrace"}
					/>
				</Stack>
				<Stack
					direction={["column", "row"]}
					bg={recommendedPageBg}
					w={"full"}
					rounded={"xl"}
					p={5}
					spacing={[5]}
				>
					<TermSearch terms={props.terms} />
					<HStack flexWrap={"wrap"}>
						{indexLetters.map((letter) => (
							<Box
								as={Link}
								href={"#" + letter}
								key={letter}
								fontSize={"xl"}
								fontWeight={"medium"}
							>
								{letter}
							</Box>
						))}
					</HStack>
				</Stack>

				<VStack w={"full"} p={[0, 5]} alignItems={"start"}>
					{indexLetters.map((letter, i, arr) => (
						<Stack
							direction={["column", "row"]}
							justifyContent={"space-between"}
							alignItems={"flex-start"}
							spacing={[4, 24]}
							p={[0, 10]}
							py={[0, 6]}
							w={"full"}
							key={i}
						>
							<Box
								as={"a"}
								id={letter}
								key={letter}
								fontSize={[48, 100]}
								pt={4}
								pl={[4, 0]}
								fontWeight={"black"}
								lineHeight={["initial", "100px"]}
							>
								{letter}
							</Box>
							<VStack alignItems={"start"} spacing={4} w={"full"}>
								{props.terms
									.filter(
										(term) =>
											term.name[0].toUpperCase()
												=== letter,
									)
									.map((term) => (
										<NextChakraLink
											p={[4, 5]}
											rounded={"xl"}
											href={"/pojem/" + term.slug}
											_hover={{
												textDecor: "none",
												bg: recommendedPageBg,
											}}
											w={"full"}
											key={term.id}
										>
											<VStack
												alignItems={"start"}
												key={term.slug}
											>
												<Box
													fontWeight={"bold"}
													fontSize={[24, 40]}
												>
													{term.name}
												</Box>
												<Box fontSize={"lg"}>
													{term.summary}
												</Box>
											</VStack>
										</NextChakraLink>
									))}
							</VStack>
							{i !== arr.length - 1 && <Divider display={["block", "none"]} />}
						</Stack>
					))}
				</VStack>
			</VStack>
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps<TermsProps> = async () => {
	const terms: Term[] = await strapiFetch("/terms");

	return {
		props: {
			terms,
		},
	};
};

function TermSearch(props: { terms: Term[] }) {
	const { search, searchResults } = useMiniSearch(props.terms, {
		fields: ["name"],
		storeFields: ["name", "slug", "id"],
		idField: "id",
		searchOptions: {
			fuzzy: 0.4,
		},
	});

	const inputRef = useRef(null);

	const searchResultsBg = useColorModeValue("white", "gray.900");
	const hoverBg = useColorModeValue("gray.50", "gray.800");

	return (
		<Box position={"relative"} w={["full", "initial"]}>
			<Input
				ref={inputRef}
				w={["full", 80]}
				bg={searchResultsBg}
				overflow={"hidden"}
				type="text"
				aria-label={"hledat"}
				onChange={(e) => {
					e.target.focus();
					search(e.target.value);
					console.log("searching", e.target.value);
				}}
				placeholder="Hledat pojmy"
			/>
			<Box
				display={searchResults?.length ? "flex" : "none"}
				flexDir={"column"}
				position={"absolute"}
				left={0}
				zIndex={10}
				top={0}
				bg={searchResultsBg}
				shadow={"lg"}
				w={"full"}
				mt={12}
				borderRadius={4}
				overflow={"hidden"}
			>
				{searchResults?.length > 0
					? (
						searchResults.map((result, i) => (
							<React.Fragment key={result.slug}>
								<NextChakraLink
									href={"/pojem/" + result.slug}
									cursor={"pointer"}
									p={4}
									_hover={{
										bg: hoverBg,
									}}
									alignItems={"start"}
								>
									{result.name}
								</NextChakraLink>
								{i < searchResults.length - 1 && <Divider />}
							</React.Fragment>
						))
					)
					: (
						<Box key={"none"} color={"gray.500"}>
							Žádné výsledky
						</Box>
					)}
			</Box>
		</Box>
	);
}
