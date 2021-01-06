import { Capacitor } from "@capacitor/core";
import { platform } from "os";
import { FeatureNotAvailableError } from "./models";

const allTrue = {
	web: true,
	ios: true,
	android: true,
	electron: true,
};

const featureMap = {
	Accessibility: {
		isScreenReaderAvailable: { ...allTrue, web: false },
		speak: {
			web: typeof window !== "undefined" && "speechSynthesis" in window,
			ios: true,
			android: true,
			electron: true,
		},
	},
	App: {
		state: allTrue,
		getLaunchUrl: { ...allTrue, web: false },
		appUrlOpen: { ...allTrue, web: false },
	},
	Browser: {
		open: allTrue,
		prefetch: { ...allTrue, web: false },
		close: { ...allTrue, web: false },
	},
	Camera: {
		getPhoto: allTrue,
	},
	Clipboard: {
		useClipboard: {
			...allTrue,
			web: typeof navigator !== "undefined" && "clipboard" in navigator,
		},
	},
	Device: {
		getInfo: allTrue,
		getLanguageCode: allTrue,
	},
	FileSystem: {
		useFileSystem: allTrue,
	},
	Geolocation: {
		getCurrentPosition: {
			...allTrue,
			web: typeof navigator !== "undefined" && "geolocation" in navigator,
		},
		watchPosition: {
			...allTrue,
			web: typeof navigator !== "undefined" && "geolocation" in navigator,
		},
	},
	Network: {
		getStatus: allTrue,
	},
	Platform: {
		getPlatform: allTrue,
	},
	Storage: {
		useStorage: allTrue,
	},
};

export function isFeatureAvailable<
	T extends typeof featureMap,
	PluginKeys extends keyof NonNullable<T>,
	FeatureKeys extends keyof NonNullable<NonNullable<T>[PluginKeys]>
>(plugin: PluginKeys, method: FeatureKeys): boolean {
	if (
		Capacitor.isPluginAvailable(plugin as string) &&
		!!(featureMap as any)[plugin][method][Capacitor.platform!]
	) {
		return true;
	}
	return false;
}

export function featureNotAvailableError(): any {
	throw new FeatureNotAvailableError();
}
