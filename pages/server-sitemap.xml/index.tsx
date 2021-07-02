import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { GetServerSideProps } from "next";
import { strapiFetch } from "../../util/getApiUrl";
import { Article } from "../kurzy/[slug]";
import { Term } from "../pojem/[slug]";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const articles: Article[] = await strapiFetch("/articles");
	const terms: Term[] = await strapiFetch("/terms");

	const url = "https://kryptokurzy.cz/";
	const normalizedArticles: ISitemapField[] = articles
		? articles.map((article) => {
				return {
					loc: `${url}kurzy/${article.slug}`,
					lastmod: article.updated_at,
				};
		  })
		: [];

	const normalizedTerms: ISitemapField[] = terms
		? terms.map((term) => {
				return {
					loc: `${url}pojem/${term.slug}`,
					lastmod: term.updated_at,
				};
		  })
		: [];

	return getServerSideSitemap(ctx, [
		...normalizedTerms,
		...normalizedArticles,
	]);
};

// eslint-disable-next-line
const Sitemap = () => {};
export default Sitemap;
