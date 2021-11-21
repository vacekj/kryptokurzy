import { useMiniSearch } from "react-minisearch";
import NextLink from "next/link";
import { Input, useColorModeValue } from "@chakra-ui/react";
import { Divider, Box, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Tag } from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import React, { useEffect, useRef } from "react";
import useSWR from "swr";
import { Article } from "../pages/kurzy/[slug]";
import { Term } from "../pages/pojem/[slug]";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Search(props: { isOpen: boolean }) {
	const { data: articles } = useSWR<Article[]>(
		process.env.NEXT_PUBLIC_STRAPI_URL + "/articles",
		fetcher
	);

	const { data: terms } = useSWR<Term[]>(
		process.env.NEXT_PUBLIC_STRAPI_URL + "/terms",
		fetcher
	);

	const normalizedArticles = articles
		? articles.map((article) => {
				return {
					slug: article.slug,
					title: article.title,
					content: article.content,
					tags: article.tags.map((t) => t.name),
					url: "/kurzy/" + article.slug,
				};
		  })
		: [];

	const normalizedTerms = terms
		? terms.map((term) => {
				return {
					slug: term.slug,
					title: term.name,
					content: term.explanation,
					tags: [],
					url: "/pojem/" + term.slug,
				};
		  })
		: [];

	const index = normalizedArticles.concat(normalizedTerms);

	const { search, searchResults, removeAll, addAll } = useMiniSearch(index, {
		fields: ["title", "tags", "content"],
		storeFields: ["slug", "title", "tags", "url"],
		idField: "slug",
		searchOptions: {
			fuzzy: 0.2,
		},
	});

	const inputRef = useRef(null);
	useEffect(() => {
		if (props.isOpen) {
			inputRef.current?.focus();
		}
	}, [props.isOpen]);

	useEffect(() => {
		removeAll();
		addAll(index);
	}, [index]);

	const searchResultsBg = useColorModeValue("white", "gray.900");
	const hoverBg = useColorModeValue("gray.50", "gray.800");

	return (
		<HStack justifyContent={"flex-end"} position={"relative"} w={"full"}>
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
					w={["full", 80]}
					bg={searchResultsBg}
					overflow={"hidden"}
					type="text"
					aria-label={"hledat"}
					onChange={(e) => {
						e.target.focus();
						search(e.target.value);
					}}
					placeholder="Prohledat KryptoKurzy.cz"
				/>
			</motion.div>
			<Box
				display={
					props.isOpen && searchResults?.length ? "flex" : "none"
				}
				flexDir={"column"}
				position={"absolute"}
				left={-2}
				zIndex={10}
				top={45}
				bg={searchResultsBg}
				shadow={"lg"}
				w={"full"}
				mt={12}
				borderRadius={4}
				overflow={"hidden"}
			>
				{searchResults && searchResults.length > 0 ? (
					searchResults.slice(0, 5).map((result, i) => (
						<React.Fragment key={result.url}>
							<VStack
								as={"a"}
								href={result.url}
								cursor={"pointer"}
								p={4}
								_hover={{
									bg: hoverBg,
								}}
								key={result.url}
								alignItems={"start"}
							>
								<NextLink
									passHref={true}
									href={"/" + result.url}
									key={i}
								>
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
											.slice(1)
											.split("/")
											.map((crumb, i, arr) => (
												<BreadcrumbItem
													key={i}
													color={"gray.500"}
													fontSize={"sm"}
												>
													<NextLink
														passHref={true}
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
																)
																.replaceAll(
																	"-",
																	" "
																)}
														</Link>
													</NextLink>
												</BreadcrumbItem>
											))}
									</Breadcrumb>
								</HStack>
								<HStack maxW={"full"} flexWrap={"wrap"}>
									{result.tags.map((tag) => (
										<Tag key={tag} marginBottom={"4px"}>
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
		</HStack>
	);
}
