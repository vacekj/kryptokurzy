import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { GetStaticPaths, GetStaticProps } from "next";
import { MdxRemote } from "next-mdx-remote/types";
import TermLayout from "components/TermLayout";
import { Difficulty } from "pages/kurzy/[slug]";
import {
	Components,
	MarkdownChakraProvider,
} from "components/MarkdownComponents";
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
	mdxSource: MdxRemote.Source;
};

export default function KurzySlug(props: PojemProps) {
	const content = hydrate(props.mdxSource, {
		components: Components,
		provider: MarkdownChakraProvider,
	});
	return <TermLayout content={content} term={props.pojem} />;
}

export const getStaticProps: GetStaticProps<PojemProps> = async (context) => {
	const pojem: Term = await strapiFetch(
		"/terms?slug=" + context.params.slug
	).then((pojems) => pojems[0]);
	const mdxSource = await renderToString(pojem.explanation, {
		components: Components,
		provider: MarkdownChakraProvider,
	});
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
