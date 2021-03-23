import { formatDuration } from "date-fns";
import readingTime from "@danieldietrich/reading-time";
import cs from "date-fns/locale/cs";

export function getReadingTime(text: string) {
	return formatDuration(
		{
			minutes: readingTime(text).minutes,
		},
		{
			locale: cs,
		}
	);
}
