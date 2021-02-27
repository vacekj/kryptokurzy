import CourseLayout from "../../components/CourseLayout";
import { Heading, Image } from "@chakra-ui/react";

export const metaData = {
	title: "Ethereum",
	tags: "eth,ethereum,krypto,crypto,začátečník",
};

export default function Ethereum() {
	<CourseLayout>
		<Heading as="h1" size="2xl">
			Ethereum{" "}
			<Image
				src="https://pbs.twimg.com/profile_images/1084788308595617793/DOnqq1OM.jpg"
				alt="Ethereum 2.0"
			/>
		</Heading>
	</CourseLayout>;
}
