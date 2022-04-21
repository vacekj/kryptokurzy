export async function strapiFetch(url: string, init?: RequestInit) {
	const req = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + url, init);
	if (!req.ok) {
		throw new Error(
			`Strapi Fetch Error ${req.statusText} Body:${
				JSON.stringify(
					await req.json(),
				)
			}`,
		);
	} else {
		return await req.json();
	}
}
