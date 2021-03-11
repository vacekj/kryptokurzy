import React from "react";
import { Link, VStack } from "@chakra-ui/react";

interface TocItem {
	/* Eg: #start-here */
	anchor: string;
	child: JSX.Element;
}

interface TocProps {
	links: TocItem[];
}

function ToC(props: TocProps) {
	return (
		<VStack align={"start"}>
			{props.links.map((link) => (
				<Link href={link.anchor}>{link.child}</Link>
			))}
		</VStack>
	);
}
