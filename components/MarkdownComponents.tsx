import { Box, Heading } from "@chakra-ui/react";
import slugify from "slugify";
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
	h2: (props) => (
		<Heading
			style={{
				scrollMarginTop: "75px",
			}}
			id={slugify(props.children as string, {
				lower: true,
			})}
			size={"xl"}
			mt={5}
			mb={2}
			as={"h3"}
			{...props}
		/>
	),
	p: (props) => <Box as={"p"} mb={3} {...props} />,
};
