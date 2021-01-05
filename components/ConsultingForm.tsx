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
} from "@chakra-ui/react";
import { useState } from "react";

export default function ConsultingForm() {
	const dark = useColorModeValue(false, true);
	const [radioValue, setRadioValue] = useState("individual");

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
						<VStack maxW={"full"} as={"form"} w="xl" spacing={5}>
							<FormControl id="email">
								<FormLabel>Emailová adresa</FormLabel>
								<Input
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
								<Textarea placeholder={"Text vaší žádosti"} />
							</FormControl>
							<FormControl>
								<RadioGroup
									value={radioValue}
									// @ts-ignore
									onChange={setRadioValue}
								>
									<FormLabel>Poptávám pro</FormLabel>
									<Stack direction="row">
										<Radio
											defaultIsChecked={true}
											value="individual"
										>
											jednotlivce
										</Radio>
										<Radio value="company">firmu</Radio>
									</Stack>
								</RadioGroup>
							</FormControl>
							<Button
								variant={"brand"}
								alignSelf={"start"}
								size="lg"
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
