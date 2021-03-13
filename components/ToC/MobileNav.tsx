import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { Text, VStack } from "@chakra-ui/react";
import { variants as v } from "./MenuItem";
const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

export type MenuItemLink = {
	href: string;
	text: string;
};

export const MobileNav = (props: { links: MenuItemLink[] }) => (
	<VStack align={"flex-end"} as={motion.ul} variants={variants}>
		<Text
			as={motion.div}
			fontWeight={"bold"}
			fontSize={"2xl"}
			variants={v}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			Obsah
		</Text>
		{props.links.map((i) => (
			<MenuItem {...i} key={i.href} />
		))}
	</VStack>
);
