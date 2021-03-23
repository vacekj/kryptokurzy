import React from "react";
import {
	Button,
	Icon,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Portal,
	useBreakpointValue,
} from "@chakra-ui/react";
import { MenuItemLink } from "./MobileNav";
import { FaChevronDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
export function ToC(
	props: React.ComponentProps<"div"> & {
		links: MenuItemLink[];
	}
) {
	const isMobile = useBreakpointValue({ base: true, md: false });

	return (
		<>
			<Menu>
				<MenuButton
					display={["none", "flex"]}
					as={Button}
					rightIcon={isMobile ? null : <Icon as={FaChevronDown} />}
				>
					{isMobile ? <Icon as={IoMenu} fontSize={24} /> : "Obsah"}
				</MenuButton>
				<Portal>
					<MenuList zIndex={1000000}>
						{props.links.map((l) => (
							<MenuItem key={l.href}>
								<Link href={l.href}>{l.text}</Link>
							</MenuItem>
						))}
					</MenuList>
				</Portal>
			</Menu>
		</>
	);
}
