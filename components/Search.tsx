import { useMiniSearch } from "react-minisearch";
import index from "indexes/index.json";
import NextLink from "next/link";

type Index = {
	"data.title": string;
	"data.tags": string;
	content: string;
	url: "string";
	isEmpty: boolean;
};

export default function Search() {
	const { search, searchResults } = useMiniSearch(index, {
		fields: ["content", "data.title", "data.text"],
		storeFields: ["url"],
		idField: "url",
	});

	const handleSearchChange = (event) => {
		search(event.target.value, { fuzzy: 0.2 });
	};

	return (
		<div>
			<input
				type="text"
				onChange={handleSearchChange}
				placeholder="Search…"
			/>

			<ol>
				<h3>Results:</h3>
				{searchResults &&
					searchResults.map((result, i) => (
						<NextLink href={"/" + result.url} key={i}>
							{result.url}
						</NextLink>
					))}
			</ol>
		</div>
	);
}
