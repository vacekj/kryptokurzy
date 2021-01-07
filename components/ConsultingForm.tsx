import {
	Textarea,
	Box,
	Container,
	Heading,
	HStack,
	Input,
	Text,
	FormControl,
	FormLabel,
	Stack,
	FormHelperText,
	Radio,
	RadioGroup,
	useColorModeValue,
	VStack,
	Button,
	useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { qs } from "./MailCTA";

export default function ConsultingForm() {
	const dark = useColorModeValue(false, true);
	const [radioValue, setRadioValue] = useState("individual");
	const { register, handleSubmit, control } = useForm({
		mode: "onChange",
	});
	const [loading, setLoading] = useState(false);
	const toast = useToast();

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
			.catch((err) => {
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
		<Box alignItems={"start"} w={"full"} bg={dark ? "gray.800" : "gray.50"}>
			<Container maxW={"4xl"} p={[4, 16]}>
				<HStack
					spacing={16}
					justifyContent="space-between"
					alignItems="center"
				>
					<VStack
						maxW={["full", "unset"]}
						alignItems={"start"}
						spacing={4}
					>
						<Heading fontSize={["3xl", "4xl"]}>
							Poraďte se s odborníkem
						</Heading>
						<Box
							display={"block"}
							maxW={["3xl"]}
							color={dark ? "gray.200" : "gray.800"}
							fontSize={"xl"}
						>
							Nevíte si rady, nebo chcete své crypto znalosti
							dostat na vyšší úroveň? Jsme experti na investice,
							portfolio management, obchodování a blockchain
							development.
						</Box>
						<VStack
							onSubmit={handleSubmit(onSubmit)}
							as={"form"}
							w={"full"}
							spacing={5}
						>
							<FormControl id="email">
								<FormLabel>Emailová adresa</FormLabel>
								<Input
									name={"email"}
									autocomplete={"email"}
									ref={register({
										required: true,
										minLength: 5,
										maxLength: 60,
										pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
									})}
									placeholder={"vas@email.cz"}
									maxW={"md"}
									type="email"
								/>
								<FormHelperText>
									Email bude použit výhrandě pro komunikační
									účely
								</FormHelperText>
							</FormControl>
							<FormControl id="text">
								<FormLabel>Text</FormLabel>
								<Textarea
									minH={"150px"}
									w={"full"}
									name={"text"}
									ref={register({
										minLength: 1,
										required: true,
									})}
									placeholder={"Text vaší žádosti"}
								/>
							</FormControl>
							<FormControl>
								<Controller
									control={control}
									name="type"
									render={({ onChange, onBlur, value }) => (
										<RadioGroup
											onBlur={onBlur}
											value={value}
											onChange={onChange}
										>
											<FormLabel>Poptávám pro</FormLabel>
											<Stack direction="row">
												<Radio
													colorScheme={"brand"}
													defaultChecked={true}
													value="individual"
												>
													jednotlivce
												</Radio>
												<Radio
													value="company"
													colorScheme={"brand"}
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
								Nezávazně poptat
							</Button>
						</VStack>
					</VStack>
				</HStack>
			</Container>
		</Box>
	);
}
