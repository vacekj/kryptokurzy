import { Capacitor } from "@capacitor/core";

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
