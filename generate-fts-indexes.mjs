import matter from "gray-matter";
import fs from "fs-extra";
import path from "path";
import striptags from "striptags";
import remark from "remark";
import mdx from "remark-mdx";
import html from "remark-html";

const pages = await fs.readdir(path.dirname("pages/mdx"));

const mdxPagesPromises = pages.filter(page => page.match(/\.mdx$/))
	.map(page => {
		const file = fs.readFileSync(`${process.cwd()}/pages/${page}`);
		return {
			...matter(file),
			url: page.split('.')[0]
		};
	})
	.map(flattenObject)
	.map(async page => {
		const md = await remark().use(mdx).use(html).process(page.content);
		return {
			...page,
			content: striptags(md.contents)
		};
	});

const mdxPages = await Promise.all(mdxPagesPromises);
await fs.ensureDir(process.cwd() + "/indexes");
await fs.writeJSON(process.cwd() + "/indexes/index.json", mdxPages);

function flattenObject(ob) {
	const toReturn = {};

	for (let i in ob) {
		if (!ob.hasOwnProperty(i)) continue;

		if ((typeof ob[i]) == "object" && ob[i] !== null) {
			const flatObject = flattenObject(ob[i]);
			for (let x in flatObject) {
				if (!flatObject.hasOwnProperty(x)) continue;

				toReturn[i + "." + x] = flatObject[x];
			}
		} else {
			toReturn[i] = ob[i];
		}
	}
	return toReturn;
}
