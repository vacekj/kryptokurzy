import Navbar from "./Navbar";
import Footer from "./Footer";

export default function CourseLayout(props: { children: JSX.Element }) {
	return (
		<>
			<Navbar />
			{props.children}
			<Footer />
		</>
	);
}
