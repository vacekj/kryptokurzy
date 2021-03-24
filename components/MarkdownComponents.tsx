import { Heading, ChakraProvider } from "@chakra-ui/react";
import slugify from "slugify";
import { MdxRemote } from "next-mdx-remote/types";
import { theme } from "./ChakraTheme";
export const Components = {
	h1: (props) => (
		<Heading
			style={{
				scrollMarginTop: "75px",
			}}
			id={slugify(props.children as string, {
				lower: true,
			})}
			mt={5}
			mb={2}
			as={"h1"}
			{...props}
		/>
	),
};

export const MarkdownChakraProvider: MdxRemote.Provider = {
	component: ChakraProvider,
	props: {
		theme: theme,
	},
};
