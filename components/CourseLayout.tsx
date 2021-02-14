import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

export default function CourseLayout(props: { children: JSX.Element }) {
	return (
		<>
			<Navbar />
			<Box m={10} pl={5} pb={10}>
				{props.children}
			</Box>
			<Footer />
		</>
	);
}
