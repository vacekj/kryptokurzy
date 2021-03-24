export function getApiUrl() {
	const isDevelopment = process.env.NODE_ENV === "development";
	if (isDevelopment) {
		return `http://${process.env.NEXT_PUBLIC_HOSTNAME ?? "localhost"}:3000`;
	} else {
		return "https://kryptokurzy.cz";
	}
}

export function getStrapiUrl() {
	const isDevelopment = process.env.NODE_ENV === "development";
	if (isDevelopment) {
		return `http://${process.env.NEXT_PUBLIC_HOSTNAME ?? "localhost"}:1337`;
	} else {
		return "https://api.kryptokurzy.cz";
	}
}

export function strapiFetch(url: string, init?: RequestInit) {
	return fetch(getStrapiUrl() + url, init);
}

export const STRAPI_URL = getStrapiUrl();
