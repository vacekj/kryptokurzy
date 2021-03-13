import * as React from "react";
import { motion } from "framer-motion";
import { MenuItemLink } from "./MobileNav";
import styles from "./mobilenav.module.css";
export const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

type MenuItemProps = MenuItemLink;

export const MenuItem = (props: MenuItemProps) => {
	return (
		<motion.li
			className={styles.li}
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			<a className="text-placeholder" href={props.href}>
				{props.text}
			</a>
		</motion.li>
	);
};
