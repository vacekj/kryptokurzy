import { Article } from "../pages/kurzy/[slug]";

export function getCourseUrl(article: Article) {
	return `/kurzy/${article.slug}`;
}
