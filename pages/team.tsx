import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MailCTA from "../components/MailCTA";
import Head from "next/head";
import ConsultingForm from "../components/ConsultingForm";
import { NextSeo } from "next-seo";
import {
	Box,
	Button,
	Container,
	FormControl,
	Avatar,
	AvatarBadge,
	FormHelperText,
	FormLabel,
	Heading,
	HStack,
	Input,
	Radio,
	RadioGroup,
	Stack,
	Text,
	useColorModeValue,
	useToast,
	VStack,
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
					<Text fontSize={"3xl"}>Dominik je prostě borec.</Text>
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
							name={"Josef Vacek"}
							boxSize={"200px"}
							src={"/avatars/dominik.jpg"}
						/>
						<VStack spacing={0}>
							<Text fontWeight={"semibold"} fontSize={"2xl"}>
								Dominik Clemente
							</Text>
							<Text fontSize={"xl"}>
								Co-founder & Cryptobaron
							</Text>
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
