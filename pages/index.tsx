import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MailCTA from "../components/MailCTA";
import Head from "next/head";
import ConsultingForm from "../components/ConsultingForm";
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
	Tag,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import { HiOutlineClock } from "react-icons/hi";
import React from "react";
import { NextChakraLink } from "../components/NextChakraLink";
import NextLink from "next/link";
import { Difficulty, DifficultyTag } from "../components/CourseLayout";
import Dunno from "../components/Dunno";

export default function Showcase() {
	const recommendedPageBg = useColorModeValue("gray.50", "gray.900");

	return (
		<>
			<Head>
				<NextSeo
					title="kryptokurzy.cz - Podmínky používání"
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
						href={"/courses/zacnete-zde"}
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
				<NextLink href={"/courses/zacnete-zde"}>
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
							src={"/courses/btc.jpeg"}
							alt={"Bitcoin"}
						/>
						<Box fontWeight={"bold"} fontSize={"2xl"}>
							Co je to Bitcoin?
						</Box>
						<HStack>
							<Icon as={HiOutlineClock} />
							<Box>5 minut</Box>
							<Tag
								variant={"subtle"}
								p={2}
								fontSize={["sm", "md"]}
								colorScheme={"green"}
							>
								Začátečník
							</Tag>
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
					<CourseCard
						course={{
							difficulty: 1,
							url: "bitcoin",
							title: "Bitcoin snadně",
							readingTime: 5,
							image: "btc.jpeg",
						}}
					/>
					<CourseCard
						course={{
							difficulty: 1,
							url: "ethereum",
							title: "Ethereum pro debily",
							readingTime: 10,
							image: "ethereum.jpeg",
						}}
					/>
					<CourseCard
						course={{
							difficulty: 3,
							url: "xrp",
							title: "kRipple pro úplné dementy",
							readingTime: 1,
							image: "kripl.jpeg",
						}}
					/>
				</SimpleGrid>
			</VStack>
			<MailCTA />
			<Dunno />
			<Footer />
		</>
	);
}

type Course = {
	title: string;
	difficulty: Difficulty;
	url: string;
	readingTime: number;
	image: string;
};
function CourseCard(props: { course: Course }) {
	return (
		<NextLink href={"/courses/" + props.course.url}>
			<VStack
				shadow={"lg"}
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
					src={"/courses/" + props.course.image}
					alt={"Bitcoin"}
					shadow={"xl"}
				/>
				<VStack p={5} spacing={4} w={"full"} alignItems={"start"}>
					<Box fontWeight={"bold"} fontSize={"2xl"}>
						{props.course.title}
					</Box>
					<HStack>
						<Icon as={HiOutlineClock} />
						<Box>{props.course.readingTime} minut</Box>
						<DifficultyTag difficulty={props.course.difficulty} />
					</HStack>
				</VStack>
			</VStack>
		</NextLink>
	);
}
