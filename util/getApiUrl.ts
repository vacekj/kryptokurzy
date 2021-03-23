import { Capacitor } from "@capacitor/core";
import { STRAPI_URL, StrapiImage } from "../pages/kurzy/[slug]";

export function getApiUrl() {
	const isMobile = Capacitor.getPlatform() !== "web";
	const isDevelopment = process.env.NODE_ENV === "development";
	if (isDevelopment && isMobile) {
		return "192.168.0.200:3000";
	}
	if (isDevelopment) {
		return "localhost:3000";
	}
	if (isMobile) {
		return "https://jaknacrypto.vercel.app";
	}
	return "/";
}

export function getAssetUrl(asset: StrapiImage) {
	if (asset.provider === "local") {
		return STRAPI_URL + asset.url;
	}
}

export const propName = (obj) =>
	new Proxy(obj, {
		get(_, key) {
			return key;
		},
	});
