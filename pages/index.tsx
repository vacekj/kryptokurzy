import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MailCTA from "../components/MailCTA";
import Head from "next/head";
import { NextSeo } from "next-seo";
import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	Icon,
	Image,
	SimpleGrid,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import { HiOutlineClock } from "react-icons/hi";
import React from "react";
import { NextChakraLink } from "../components/NextChakraLink";
import NextLink from "next/link";
import { STRAPI_URL } from "pages/kurzy/[slug]";
import Dunno from "../components/Dunno";
import { Article } from "./kurzy/[slug]";
import { GetStaticProps } from "next";
import fetch from "node-fetch";
import { DifficultyTag } from "../components/DifficultyTag";
import { getReadingTime } from "../components/ReadingTime";
import { getCourseUrl } from "../components/CourseUrl";
import { Term } from "./pojem/[slug]";
import Terms from "../components/Terms";

type IndexProps = {
	articles: Article[];
	terms: Term[];
	recommendedArticle: Article;
};

export default function Index(props: IndexProps) {
	const recommendedPageBg = useColorModeValue("gray.50", "gray.900");

	return (
		<>
			<Head>
				<NextSeo
					title="kryptokurzy.cz"
					description="KryptoKurzy.cz je Váš ověřený zdroj informací o kryptoměnách, decentralizovaných financích a novinek ze světa crypta"
				/>
				<title>KryptoKurzy.cz</title>
			</Head>
			<Navbar />
			<Flex
				direction={["column", "row"]}
				mx={"auto"}
				maxW={["unset", "1200px"]}
				spacing={[0, 24]}
				p={[4, 10]}
			>
				<VStack
					flexBasis={"50%"}
					alignItems={"start"}
					justifyContent={"center"}
					spacing={4}
				>
					<Heading fontSize={"5xl"} as={"h1"}>
						Krypto vzdělání
					</Heading>
					<Box maxW={["unset", "80"]} fontSize={"lg"}>
						Your one-stop guide to all things crypto. Whether you're
						a rookie trying to understand mining or a veteran
						looking to develop a trading strategy, we've got you
						covered.
					</Box>
					<NextChakraLink
						href={getCourseUrl(props.recommendedArticle)}
						_hover={{
							textDecoration: "none",
						}}
					>
						<Button
							px={4}
							py={6}
							flexShrink={2}
							minW={0}
							overflow={"hidden"}
							h={9}
							variant={"black"}
						>
							Začněte zde
						</Button>
					</NextChakraLink>
				</VStack>
				{/**/}
				<NextLink href={getCourseUrl(props.recommendedArticle)}>
					<VStack
						cursor={"pointer"}
						alignItems={"start"}
						bg={recommendedPageBg}
						rounded={"xl"}
						spacing={4}
						p={8}
						flexBasis={"50%"}
					>
						<Box fontWeight={"medium"} textTransform={"uppercase"}>
							Doporučený článek
						</Box>
						<Image
							rounded={10}
							w={"full"}
							objectFit={"cover"}
							h={[40, "80"]}
							src={props.recommendedArticle.cover.url}
							alt={props.recommendedArticle.title}
						/>
						<Box fontWeight={"bold"} fontSize={"2xl"}>
							{props.recommendedArticle.title}
						</Box>
						<HStack>
							<Icon as={HiOutlineClock} />
							<Box>
								{getReadingTime(
									props.recommendedArticle.content
								)}
							</Box>
							<DifficultyTag
								difficulty={props.recommendedArticle.difficulty}
							/>
						</HStack>
					</VStack>
				</NextLink>
			</Flex>
			<VStack
				alignItems={"start"}
				mx={"auto"}
				maxW={["unset", "1200px"]}
				p={[4, 10]}
			>
				<HStack w={"full"} pb={4}>
					<Divider flexShrink={2} />
					<Box
						whiteSpace={"nowrap"}
						px={2}
						fontWeight={"medium"}
						textTransform={"uppercase"}
					>
						Naše články
					</Box>
					<Divider flexShrink={2} />{" "}
				</HStack>
				<SimpleGrid columns={[1, 2, 3]} spacing={[4, 8]}>
					{props.articles.map((a) => (
						<ArticleCard article={a} key={a.id} />
					))}
				</SimpleGrid>
			</VStack>
			<MailCTA />
			<VStack
				alignItems={"start"}
				mx={"auto"}
				maxW={["unset", "1200px"]}
				p={[4, 10]}
			>
				<SimpleGrid columns={[5, 6, 7]} spacing={[4, 8]}>
					{props.terms.map((t) => (
						<VStack key={t.id}></VStack>
					))}
				</SimpleGrid>
			</VStack>
			<Terms terms={props.terms} />
			<Dunno />
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps<IndexProps> = async (ctx) => {
	const articles: Article[] = await fetch(
		STRAPI_URL + "/articles"
	).then((e) => e.json());

	const recommendedArticle: { id: number; article: Article } = await fetch(
		STRAPI_URL + "/index-recommended-article"
	).then((e) => e.json());

	const terms: Term[] = await fetch(STRAPI_URL + "/terms").then((e) =>
		e.json()
	);

	return {
		props: {
			articles,
			terms,
			recommendedArticle: recommendedArticle.article,
		},
		revalidate: 1,
	};
};

function ArticleCard(props: { article: Article }) {
	return (
		<NextLink href={"/kurzy/" + props.article.slug}>
			<VStack
				transitionDuration={"300ms"}
				transitionTimingFunction={"ease-in-out"}
				shadow={"lg"}
				_hover={{
					shadow: "2xl",
				}}
				cursor={"pointer"}
				alignItems={"start"}
				rounded={"xl"}
				spacing={4}
				flexBasis={"50%"}
			>
				<Image
					rounded={10}
					w={"full"}
					objectFit={"cover"}
					h={[40, "80"]}
					src={props.article.cover.url}
					alt={props.article.title}
					shadow={"xl"}
				/>
				<VStack p={5} spacing={4} w={"full"} alignItems={"start"}>
					<Box fontWeight={"bold"} fontSize={"2xl"}>
						{props.article.title}
					</Box>
					<HStack>
						<Icon as={HiOutlineClock} />
						<Box>{getReadingTime(props.article.content)}</Box>
						<DifficultyTag difficulty={props.article.difficulty} />
					</HStack>
				</VStack>
			</VStack>
		</NextLink>
	);
}
