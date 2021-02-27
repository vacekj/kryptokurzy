import CourseLayout from "../../components/CourseLayout";
import { Heading } from "@chakra-ui/react";

export const metaData = {
	title: "Bitcoin",
	tags: "btc,bitcoin,krypto,crypto,začátečník",
};

export default function Bitcoin() {
	return (
		<CourseLayout>
			<Heading as="h1" size="2xl">
				Bitcoin <span style={{ color: "#ff9900" }}>₿</span>
			</Heading>

			<Heading as="h2" size="lg">
				Obecný popis
			</Heading>
			<Heading as="h3" size="md">
				Co je Bitcoin?
			</Heading>
			<Heading as="h3" size="md">
				K čemu se používá?
			</Heading>
			<Heading as="h3" size="md">
				Proč má Bitcoin hodnotu?
			</Heading>
			<Heading as="h3" size="md">
				Jak funguje?
			</Heading>
			<Heading as="h3" size="md">
				Co je blockchain?
			</Heading>

			<Heading as="h3" size="md">
				Je to legální?
			</Heading>
			<Heading as="h3" size="md">
				Co je blockchain?
			</Heading>
			<Heading as="h3" size="md">
				Co je blockchain?
			</Heading>
			<Heading as="h3" size="md">
				Co je blockchain?
			</Heading>
			<Heading as="h3" size="md">
				Co je blockchain?
			</Heading>
		</CourseLayout>
	);
}
