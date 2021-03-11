import { useMiniSearch } from "react-minisearch";
import index from "indexes/index";
import NextLink from "next/link";
import { Input, useColorModeValue } from "@chakra-ui/react";
import { Divider, Box, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Tag } from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import React, { useEffect, useRef } from "react";

export type Index = {
	/** Title of the page, capitalized*/
	title: string;
	/** comma-separated, can have spaces
	 * @example btc,bitcoin,bitcoin starter*/
	tags: string;
	/** without leading slash
	 * @example  courses/bitcoin*/
	url: string;
};

export default function Search(props: { isOpen: boolean }) {
	const { search, searchResults } = useMiniSearch(index as Index[], {
		fields: ["title", "tags"],
		storeFields: ["url"],
		idField: "url",
		searchOptions: { fuzzy: 0.2 },
	});

	const inputRef = useRef(null);
	useEffect(() => {
		inputRef.current?.focus();
	}, [props.isOpen]);

	const searchResultsBg = useColorModeValue("white", "gray.900");
	const hoverBg = useColorModeValue("gray.50", "gray.800");

	return (
		<Box position={"relative"}>
			<motion.div
				transition={{ duration: 0.3, type: "tween" }}
				animate={{
					width: props.isOpen ? "initial" : 0,
				}}
				style={{
					overflow: "hidden",
				}}
				initial={false}
			>
				<Input
					ref={inputRef}
					w={[64]}
					bg={searchResultsBg}
					overflow={"hidden"}
					type="text"
					aria-label={"hledat"}
					onChange={(e) => {
						e.target.focus();
						search(e.target.value);
					}}
					placeholder="Prohledat jaknacrypto.cz"
				/>
			</motion.div>
			<Box
				display={
					props.isOpen && searchResults?.length ? "flex" : "none"
				}
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
				{searchResults && searchResults.length ? (
					searchResults.map((result, i) => (
						<React.Fragment key={result.url}>
							<VStack
								cursor={"pointer"}
								p={4}
								_hover={{
									bg: hoverBg,
								}}
								key={result.url}
								alignItems={"start"}
							>
								<NextLink href={"/" + result.url} key={i}>
									<Link fontWeight={"bold"} fontSize={"lg"}>
										{result.title}
									</Link>
								</NextLink>
								<HStack>
									<Breadcrumb
										spacing="4px"
										separator={
											<Icon
												as={BiChevronRight}
												color="gray.500"
											/>
										}
									>
										{result.url
											.split("/")
											.map((crumb, i, arr) => (
												<BreadcrumbItem
													key={i}
													color={"gray.500"}
													fontSize={"sm"}
												>
													<NextLink
														href={result.url.substring(
															0,
															result.url.indexOf(
																arr[i + 1]
															)
														)}
													>
														<Link>
															{crumb
																.trim()
																.replace(
																	/^\w/,
																	(c) =>
																		c.toUpperCase()
																)}
														</Link>
													</NextLink>
												</BreadcrumbItem>
											))}
									</Breadcrumb>
								</HStack>
								<HStack maxW={"full"} flexWrap={"wrap"}>
									{result.tags &&
										result.tags.split(",").map((tag) => (
											<Tag marginBottom={"4px"} key={tag}>
												{tag}
											</Tag>
										))}
								</HStack>
							</VStack>
							{i < searchResults.length - 1 && <Divider />}
						</React.Fragment>
					))
				) : (
					<Box key={"none"} color={"gray.500"}>
						Žádné výsledky
					</Box>
				)}
			</Box>
		</Box>
	);
}
