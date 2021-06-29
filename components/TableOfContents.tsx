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
import { FaChevronDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import slugify from "slugify";

export function ToC(props: { headings: string[] }) {
	const isMobile = useBreakpointValue({ base: true, md: false });

	if (props.headings.length == 0) {
		return null;
	}
	return (
		<>
			<Menu>
				<MenuButton
					display={"flex"}
					as={Button}
					rightIcon={isMobile ? null : <Icon as={FaChevronDown} />}
				>
					{isMobile ? <Icon as={IoMenu} fontSize={24} /> : "Obsah"}
				</MenuButton>
				<Portal>
					<MenuList zIndex={1000000}>
						{props.headings.map((l) => (
							<MenuItem key={l}>
								<Link
									w={"full"}
									href={
										"#" +
										slugify(l, {
											lower: true,
										})
									}
									onClick={() => {
										const elem = document.getElementById(
											slugify(l, {
												lower: true,
											})
										);
										elem.scrollIntoView();
									}}
								>
									{l}
								</Link>
							</MenuItem>
						))}
					</MenuList>
				</Portal>
			</Menu>
		</>
	);
}
