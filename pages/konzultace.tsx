import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { qs } from "../components/MailCTA";
import Head from "next/head";
import { NextSeo } from "next-seo";
import {
	Box,
	Container,
	Heading,
	Stack,
	Text,
	useColorModeValue,
	VStack,
	HStack,
	useToast,
	FormControl,
	FormLabel,
	Input,
	FormHelperText,
	Textarea,
	RadioGroup,
	Radio,
	Button,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";

export default function Konzultace() {
	const textColor = useColorModeValue("gray.700", "gray.300");

	return (
		<>
			<Head>
				<NextSeo
					title="Konzultace - KryptoKurzy.cz"
					description="Poskytujeme odborné konzultace pro firmy i jednotlivce ohledně kryptoměn, blockchain technologií a investic"
				/>
				<title>Konzultace - KryptoKurzy.cz</title>
			</Head>

			<Navbar />
			<Container maxW={"5xl"} p={[4, 16]}>
				<HStack spacing={10} mb={-12}>
					<VStack>
						<Text fontSize={"5xl"} fontWeight={"bold"}>
							Poskytujeme odborné konzultace pro firmy i
							jednotlivce
						</Text>
						<Box
							fontSize={"3xl"}
							color={textColor}
							fontWeight={"semibold"}
						>
							3 roky zkušeností s investováním do kryptoměn a
							vynikající výsledky nám dovolují poskytovat expertní
							konzultace. Zakládáme si na osobním přístupu a vše
							šijeme na míru vašim potřebám.
						</Box>
					</VStack>
				</HStack>
			</Container>
			<ConsultingFormCustom />
			<Footer />
		</>
	);
}

function ConsultingFormCustom() {
	const dark = useColorModeValue(false, true);
	const { register, handleSubmit, control, formState } = useForm({
		mode: "onChange",
	});
	const [loading, setLoading] = useState(false);
	const toast = useToast();
	const inputBg = useColorModeValue("white", "gray.700");

	function onSubmit(data) {
		setLoading(true);
		fetch("/api/consult?" + qs(data), {
			method: "POST",
		})
			.then((res) => {
				if (!res.ok) {
					throw res;
				}
				toast({
					title: "Požadavek odeslán",
					description: "",
					status: "success",
					duration: 5000,
					isClosable: true,
				});
			})
			.catch(() => {
				toast({
					title: "Vyskytla se chyba",
					description: "Kontaktujte prosím podporu",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			})
			.finally(() => setLoading(false));
	}

	return (
		<Container
			bg={dark ? "gray.800" : "gray.50"}
			my={8}
			rounded={"xl"}
			maxW={["full", "5xl"]}
			p={[4, 16]}
		>
			<HStack
				spacing={16}
				justifyContent="space-between"
				alignItems="center"
			>
				<VStack
					onSubmit={handleSubmit(onSubmit)}
					w={"3xl"}
					as={"form"}
					spacing={5}
					alignItems={"start"}
				>
					<Heading fontSize={["3xl", "4xl"]}>
						Nezávazně poptat
					</Heading>
					<FormControl id="email">
						<FormLabel>Emailová adresa</FormLabel>
						<Input
							name={"email"}
							autoComplete={"email"}
							ref={register({
								required: true,
								minLength: 5,
								maxLength: 60,
								pattern:
									/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
							})}
							bg={inputBg}
							placeholder={"vas@email.cz"}
							maxW={"md"}
							type="email"
						/>
						<FormHelperText>
							Email bude použit výhrandě pro komunikační účely
						</FormHelperText>
					</FormControl>
					<FormControl id="text">
						<FormLabel>Text</FormLabel>
						<Textarea
							minH={"150px"}
							w={"full"}
							bg={inputBg}
							name={"text"}
							ref={register({
								minLength: 1,
								required: true,
							})}
							placeholder={"Text vaší žádosti"}
						/>
					</FormControl>
					<FormControl>
						<FormLabel htmlFor={"type"}>Poptávám pro</FormLabel>
						<Controller
							control={control}
							name="type"
							render={({ onChange, onBlur, value }) => (
								<RadioGroup
									onBlur={onBlur}
									value={value}
									onChange={onChange}
								>
									<Stack direction="row">
										<Radio
											colorScheme={"brand"}
											value="individual"
											id={"individual"}
											name={"type"}
										>
											jednotlivce
										</Radio>
										<Radio
											colorScheme={"brand"}
											value="company"
											name={"type"}
											id={"company"}
										>
											firmu
										</Radio>
									</Stack>
								</RadioGroup>
							)}
						/>
					</FormControl>
					<Button
						variant={"brand"}
						alignSelf={"start"}
						size="lg"
						isLoading={loading}
						type={"submit"}
					>
						Odeslat
					</Button>
				</VStack>
			</HStack>
		</Container>
	);
}
