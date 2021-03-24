import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import fetch from "node-fetch";
import { GetStaticPaths, GetStaticProps } from "next";
import { MdxRemote } from "next-mdx-remote/types";
import TermLayout from "../../components/TermLayout";
import { Difficulty } from "../kurzy/[slug]";
import { Components } from "../../components/MarkdownComponents";

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
	});
	return <TermLayout content={content} term={props.pojem} />;
}

export const STRAPI_URL =
	process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const getStaticProps: GetStaticProps<PojemProps> = async (context) => {
	const pojem: Term = await fetch(
		STRAPI_URL + "/terms?slug=" + context.params.slug
	)
		.then((e) => e.json())
		.then((pojems) => pojems[0]);
	const mdxSource = await renderToString(pojem.explanation, {
		components: Components,
	});
	return { props: { pojem, mdxSource } };
};

export const getStaticPaths: GetStaticPaths = async () => {
	const terms: Term[] = await fetch(STRAPI_URL + "/terms").then((e) =>
		e.json()
	);

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
