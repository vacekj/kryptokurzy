import {
	Button,
	Container,
	Heading,
	HStack,
	Image,
	Input,
	Text,
	useColorModeValue,
	useToast,
	VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const qs = (params) =>
	Object.keys(params)
		.map(
			(key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
		)
		.join("&");

export default function MailCTA() {
	const dark = useColorModeValue(false, true);
	const { register, handleSubmit } = useForm({
		mode: "onChange",
	});
	const [loading, setLoading] = useState(false);
	const toast = useToast();
	const inputBg = useColorModeValue("white", "gray.700");

	function onSubmit(data) {
		setLoading(true);
		fetch("/api/subscribe?" + qs(data), {
			method: "POST",
		})
			.then((res) => {
				if (!res.ok) {
					throw res;
				}
				toast({
					title: "Odběř přihlášen.",
					description: "",
					status: "success",
					duration: 5000,
					isClosable: true,
				});
			})
			.catch((err) => {
				toast({
					title: "Nelze přihlásit k odběru",
					description: err.status === 409
						? "K odběru jste již přihlášeni"
						: "Kontaktujte prosím podporu",
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
				spacing={[0]}
				justifyContent="space-around"
				alignItems="center"
			>
				<Image
					height={"150px"}
					display={["none", "block"]}
					src={"/illustrations/email.svg"}
					alt={"Ilustrace"}
				/>
				<VStack alignItems={"start"}>
					<Heading fontSize={"4xl"}>
						Krypto ve vaší emailové schránce
					</Heading>
					<Text
						color={dark ? "gray.200" : "gray.800"}
						fontSize={"2xl"}
					>
						Krypto novinky doručené do vaší emailové schránky
					</Text>
					<form onSubmit={handleSubmit(onSubmit)}>
						<HStack w="full" spacing={0}>
							<Input
								ref={register({
									required: true,
									minLength: 5,
									maxLength: 60,
									pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
								})}
								name={"email"}
								focusBorderColor={"brand.400"}
								size={"lg"}
								w={"full"}
								bg={inputBg}
								type={"email"}
								autoComplete={"email"}
								placeholder="vas@email.cz"
								borderRightRadius={0}
								mr={0}
								aria-label={"Emailová adresa pro odběr novinek"}
							/>
							<Button
								variant={"brand"}
								ml={0}
								size="lg"
								type={"submit"}
								isLoading={loading}
								borderLeftRadius={0}
							>
								Odebírat
							</Button>
						</HStack>
					</form>
				</VStack>
			</HStack>
		</Container>
	);
}
