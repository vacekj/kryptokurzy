import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { GetStaticPaths, GetStaticProps } from "next";
import TermLayout from "components/TermLayout";
import { Difficulty } from "pages/kurzy/[slug]";
import { Components } from "components/MarkdownComponents";
import { strapiFetch } from "util/getApiUrl";

export type Term = {
	id: number;
	name: string;
	explanation: string;
	summary: string;
	difficulty: Difficulty;
	related_terms: Term[];
	slug: string;
	published_at: string;
	created_at: string;
	updated_at: string;
};

type PojemProps = {
	pojem: Term;
	mdxSource: MDXRemoteSerializeResult;
};

export default function KurzySlug(props: PojemProps) {
	return (
		<TermLayout term={props.pojem}>
			<MDXRemote {...props.mdxSource} components={Components} />
		</TermLayout>
	);
}

export const getStaticProps: GetStaticProps<PojemProps> = async (context) => {
	const pojem: Term = await strapiFetch(
		"/terms?slug=" + context.params.slug
	).then((pojems) => pojems[0]);
	const mdxSource = await serialize(pojem.explanation);
	return { props: { pojem, mdxSource }, revalidate: 1 };
};

export const getStaticPaths: GetStaticPaths = async () => {
	const terms: Term[] = await strapiFetch("/terms");
	const slugs = terms.map((a) => {
		return {
			params: {
				slug: a.slug,
			},
		};
	});

	return {
		paths: slugs,
		fallback: false,
	};
};
