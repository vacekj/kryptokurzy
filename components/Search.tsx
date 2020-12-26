import { useMiniSearch } from "react-minisearch";
import index from "indexes/index.json";
import NextLink from "next/link";
import { Input } from "@chakra-ui/react";
import { Divider, Box, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Tag } from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

type Index = {
	"data.title": string;
	"data.tags": string;
	content: string;
	url: string;
	isEmpty: boolean;
};

export default function Search(props: { isOpen: boolean }) {
	const { search, searchResults } = useMiniSearch(index as Index[], {
		fields: ["content", "data.title", "data.tags"],
		storeFields: ["url"],
		idField: "url",
		searchOptions: { fuzzy: 0.2 },
	});
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
					w={"64"}
					bg={"white"}
					overflow={"hidden"}
					type="text"
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
				bg={"white"}
				shadow={"lg"}
				w={"full"}
				mt={12}
				borderRadius={4}
				overflow={"hidden"}
			>
				{searchResults && searchResults.length ? (
					searchResults.map((result, i) => (
						<>
							<VStack
								cursor={"pointer"}
								p={4}
								_hover={{
									bg: "gray.50",
								}}
								key={result.url}
								alignItems={"start"}
							>
								<NextLink href={"/" + result.url} key={i}>
									<Link fontWeight={"bold"} fontSize={"lg"}>
										{result["data.title"]}
									</Link>
								</NextLink>
								<HStack>
									<Breadcrumb
										spacing="8px"
										separator={
											<Icon
												as={BiChevronRight}
												color="gray.500"
											/>
										}
									>
										{result.url.split("/").map((crumb) => (
											<BreadcrumbItem
												color={"gray.500"}
												fontSize={"sm"}
											>
												<NextLink
													href={result.url.slice(
														0,
														result.url.indexOf(
															crumb
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
								<HStack>
									{result["data.tags"] &&
										result["data.tags"]
											.split(" ")
											.map((tag) => (
												<Tag key={tag}>{tag}</Tag>
											))}
								</HStack>
							</VStack>
							{i < searchResults.length - 1 && <Divider />}
						</>
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
