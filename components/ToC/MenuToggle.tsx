import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import styles from "./mobilenav.module.css";

const Path = (props) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="hsl(0, 0%, 18%)"
		strokeLinecap="round"
		{...props}
	/>
);

export const MenuToggle = ({ toggle }) => (
	<Button
		className={styles.button}
		border={"solid 2px black"}
		bg={"white"}
		onClick={toggle}
		display={["flex", "none"]}
		position={"fixed"}
		bottom={0}
		right={0}
		margin={10}
		shadow={"lg"}
		aria-label="Otevřít Obsah"
	>
		<svg width="40" height="40" viewBox="0 0 20 20">
			<Path
				variants={{
					closed: { d: "M 2 2.5 L 20 2.5" },
					open: { d: "M 3 16.5 L 17 2.5" },
				}}
			/>
			<Path
				d="M 2 9.423 L 20 9.423"
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={{
					closed: { d: "M 2 16.346 L 20 16.346" },
					open: { d: "M 3 2.5 L 17 16.346" },
				}}
			/>
		</svg>
	</Button>
);
