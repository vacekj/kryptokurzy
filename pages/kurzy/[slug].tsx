import { Heading, Root } from "mdast";
import toString from "mdast-util-to-string";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import markdown from "remark-parse";
import unified from "unified";
import CourseLayout from "../../components/CourseLayout";
import { Components } from "../../components/MarkdownComponents";
import { strapiFetch } from "../../util/getApiUrl";

type KurzyProps = {
	article: Article;
	mdxSource: MDXRemoteSerializeResult;
	headings: string[];
	relatedArticles: Article[];
};

export default function KurzySlug(props: KurzyProps) {
	return (
		<CourseLayout
			article={props.article}
			headings={props.headings}
			recommendedArticles={props.relatedArticles}
		>
			<MDXRemote {...props.mdxSource} components={Components} />
		</CourseLayout>
	);
}

export const getStaticProps: GetStaticProps<KurzyProps> = async (context) => {
	const article: Article = await strapiFetch(
		"/articles?slug=" + context.params.slug,
	).then((articles) => articles[0]);

	const course: Course = await strapiFetch("/courses/" + article.course.id);

	const mdxSource = await serialize(article.content);
	const headings = extractHeadingsFromMarkdown(article.content);
	return {
		props: {
			article,
			mdxSource,
			headings,
			relatedArticles: course.articles.filter((a) => a.id !== article.id),
		},
		revalidate: 1,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const articles: Article[] = await strapiFetch("/articles");

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

function extractHeadingsFromMarkdown(source: string) {
	return (unified().use(markdown).parse(source) as Root).children
		.filter((node) => node.type === "heading")
		.filter((node) => (node as Heading).children.length > 0)
		.map((h) => h.children[0])
		.map((h) => toString(h));
}

export type Difficulty = 1 | 2 | 3;

export type Article = {
	id: number;
	title: string;
	content: string;
	difficulty: Difficulty;
	tags: Tag[];
	slug: string;
	cover: StrapiImageType;
	published_at: string;
	created_at: string;
	updated_at: string;
	course: Course;
};

export type Tag = {
	id: string;
	name: string;
	published_at: string;
	created_at: string;
	updated_at: string;
};

export interface StrapiImageType {
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

export interface Course {
	id: number;
	title: string;
	published_at: string;
	created_at: string;
	updated_at: string;
	articles: Article[];
}
