import { Difficulty } from "../pages/kurzy/[slug]";
import { Tag } from "@chakra-ui/react";
import React from "react";

export const difficulties = {
	1: "Začátečník",
	2: "Pokročilý",
	3: "Expert",
};
export const difficultiesColors = {
	1: "green",
	2: "orange",
	3: "red",
};

export function DifficultyTag(props: { difficulty: Difficulty }) {
	return (
		<Tag
			variant={"subtle"}
			fontSize={["sm", "md"]}
			colorScheme={difficultiesColors[props.difficulty]}
		>
			{difficulties[props.difficulty]}
		</Tag>
	);
}
