import type { NextApiRequest, NextApiResponse } from "next";
import * as hubspot from "@hubspot/api-client";

const client = new hubspot.Client({
	apiKey: process.env.HUBSPOT_KEY,
});

type Body = {
	email: string;
	text: string;
	type: "individual" | "company";
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const body = req.query as Body;
		if (body.type === "individual") {
			const createdContact = await client.crm.contacts.basicApi.create({
				properties: {
					email: body.email,
					consulting: "wants",
					message: body.text,
				},
			});
			return res.status(201).json(createdContact);
		} else if (body.type === "company") {
			const createdContact = await client.crm.companies.basicApi.create({
				properties: {
					email: body.email,
					consulting: "consulting",
					description: body.text,
				},
			});
			return res.status(201).json(createdContact);
		} else {
			return res.status(400).end();
		}
	} catch (e) {
		console.error(e);
		res.status(e.statusCode).json(e);
	}
};
