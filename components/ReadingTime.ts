import readingTime from "@danieldietrich/reading-time";
import { formatDuration } from "date-fns";
import cs from "date-fns/locale/cs";

export function getReadingTime(text: string) {
	return formatDuration(
		{
			minutes: readingTime(text).minutes,
		},
		{
			locale: cs,
		},
	);
}
