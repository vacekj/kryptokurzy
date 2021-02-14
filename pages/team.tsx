import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MailCTA from "../components/MailCTA";
import Head from "next/head";
import ConsultingForm from "../components/ConsultingForm";
import { NextSeo } from "next-seo";
import {
	Avatar,
	Box,
	Container,
	Heading,
	Stack,
	Text,
	useColorModeValue,
	VStack,
	Link,
} from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

export default function Team() {
	const { scrollYProgress } = useViewportScroll();
	const rotate = useTransform(scrollYProgress, [0, 0.2], [-3, 0]);

	const rotateReverse = useTransform(scrollYProgress, [0.1, 0.4], [4, 0]);

	const cardBg = useColorModeValue("gray.100", "gray.900");
	const textColor = useColorModeValue("gray.700", "gray.300");

	return (
		<>
			<Head>
				<NextSeo
					title="O nás - Jaknacrypto.cz"
					description="Poznejte tým odborníků a nadšenců za projektem Jaknacrypto.cz"
				/>
				<title>Náš tým - Jaknacrypto.cz</title>
			</Head>

			<Navbar />
			<Container maxW={"5xl"} p={[4, 16]}>
				<Text fontSize={"5xl"} fontWeight={"bold"}>
					Jsme skupina nadšenců do crypta a technologií.{" "}
				</Text>
				<Box fontSize={"3xl"} color={textColor} fontWeight={"semibold"}>
					Naším cílem je předat Vám toto nadšení, společně se
					zkušenostmi a dovednostmi.
				</Box>
				<Heading mt={10} mb={5} size={"xl"}>
					Náš tým
				</Heading>

				<Stack spacing={16} direction={["column", "row"]}>
					<Stack
						as={motion.div}
						style={{
							// @ts-ignore
							rotate: rotate,
						}}
						p={10}
						rounded={10}
						bg={cardBg}
						spacing={7}
						direction={["column"]}
					>
						<Avatar
							name={"Josef Vacek"}
							boxSize={"200px"}
							src={"/avatars/pepa.png"}
						/>
						<VStack spacing={0}>
							<Text fontWeight={"semibold"} fontSize={"2xl"}>
								Josef Vacek
							</Text>
							<Text fontSize={"xl"}>Co-founder & CTO</Text>
						</VStack>
					</Stack>
					<Text fontSize={"3xl"}>
						Pepa má na starosti vývoj webu a aplikace a veškeré
						technické zázemí. <br /> Má za páskem řadu úspěčných
						projektů ve školství, e-learningu, webdesignu a
						marketingu. <br />
					</Text>
				</Stack>

				<Stack
					mt={20}
					spacing={16}
					justifyContent={"flex-end"}
					direction={["column", "row"]}
				>
					<Text fontSize={"3xl"}>
						Dominik je blockchain vývojář a krypto konzultant který
						má rozsáhlé zkušenosti v oboru díky aktivní účastí na
						krypto trzích od konce roku 2017. Mimo jaknacrypto, také
						je tržní výzkumník a programátor v
						<Link
							href="https://academy.ivanontech.com/"
							color="blue.500"
							fontWeight="500"
							isExternal
						>
							<span> </span>Ivan on Tech Academy
						</Link>
						, což je největší vzdělávácí platforma pro crypto a
						blockchain na světě.
					</Text>
					<Stack
						as={motion.div}
						style={{
							// @ts-ignore
							rotate: rotateReverse,
						}}
						p={10}
						rounded={10}
						bg={cardBg}
						spacing={7}
						direction={["column"]}
					>
						<Avatar
							name={"Domink Clemente"}
							boxSize={"200px"}
							src={"/avatars/dominik.png"}
						/>
						<VStack spacing={0}>
							<Text fontWeight={"semibold"} fontSize={"2xl"}>
								Dominik Clemente
							</Text>
							<Text fontSize={"xl"}>Co-founder & CEO</Text>
						</VStack>
					</Stack>
				</Stack>
			</Container>
			<ConsultingForm />
			<MailCTA />
			<Footer />
		</>
	);
}
