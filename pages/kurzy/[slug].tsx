import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import CourseLayout from "../../components/CourseLayout";
import fetch from "node-fetch";
import { GetStaticPaths, GetStaticProps } from "next";
import { MdxRemote } from "next-mdx-remote/types";
import { Components } from "../../components/MarkdownComponents";

type KurzyProps = {
	article: Article;
	mdxSource: MdxRemote.Source;
};
export default function KurzySlug(props: KurzyProps) {
	const content = hydrate(props.mdxSource, {
		components: Components,
	});
	return (
		<CourseLayout
			article={props.article}
			links={[
				{ href: "#co", text: "Co je bitcoin?" },
				{ href: "#kcemu", text: "K čemu se používá?" },
				{ href: "#hodnota", text: "Proč má bitcoin hodnotu?" },
			]}
		>
			{content}
		</CourseLayout>
	);
}

export const STRAPI_URL =
	process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const getStaticProps: GetStaticProps<KurzyProps> = async (context) => {
	const article: Article = await fetch(
		STRAPI_URL + "/articles?slug=" + context.params.slug
	)
		.then((e) => e.json())
		.then((articles) => articles[0]);
	const mdxSource = await renderToString(article.content, {
		components: Components,
	});
	return { props: { article, mdxSource } };
};

export const getStaticPaths: GetStaticPaths = async () => {
	const articles: Article[] = await fetch(
		STRAPI_URL + "/articles"
	).then((e) => e.json());

	const slugs = articles.map((a) => {
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

export type Difficulty = 1 | 2 | 3;

export type Article = {
	id: number;
	title: string;
	content: string;
	difficulty: Difficulty;
	tags: Tag[];
	slug: string;
	cover: StrapiImage;
	published_at: string;
	created_at: string;
	updated_at: string;
};

export type Tag = {
	id: string;
	name: string;
	published_at: string;
	created_at: string;
	updated_at: string;
};

export interface StrapiImage {
	id: number;
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
	formats: Formats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: any;
	provider: string;
	provider_metadata: any;
	created_at: string;
	updated_at: string;
}

export interface Formats {
	large: Large;
	small: Small;
	medium: Medium;
	thumbnail: Thumbnail;
}

export interface Large {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: any;
	size: number;
	width: number;
	height: number;
}

export interface Small {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: any;
	size: number;
	width: number;
	height: number;
}

export interface Medium {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: any;
	size: number;
	width: number;
	height: number;
}

export interface Thumbnail {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: any;
	size: number;
	width: number;
	height: number;
}
