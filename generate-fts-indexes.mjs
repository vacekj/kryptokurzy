import matter from "gray-matter";
import fs from "fs-extra";
import path from "path";
import striptags from "striptags";
import remark from "remark";
import mdx from "remark-mdx";
import html from "remark-html";
import pkg from "vfile";
import recursiveReadDir from "recursive-readdir";

const { VFile } = pkg;

const pages = await recursiveReadDir(path.dirname("pages/mdx"));

const mdxPagesPromises = pages
	.filter((page) => page.match(/\.mdx$/))
	.map((page) => {
		const file = fs.readFileSync(`${process.cwd()}/${page}`);
		return {
			...matter(file),
			url: page.split(".")[0].slice(6),
		};
	})
	.map(flattenObject)
	.map(async (page) => {
		/** @type {VFile} */
		const md = await remark().use(mdx).use(html).process(page.content);
		return {
			...page,
			content: striptags(md.contents.toString()),
		};
	});

const mdxPages = await Promise.all(mdxPagesPromises);
await fs.ensureDir(process.cwd() + "/indexes");
await fs.writeJSON(process.cwd() + "/indexes/index.json", mdxPages);

function flattenObject(ob) {
	const toReturn = {};

	for (let i in ob) {
		if (!ob.hasOwnProperty(i)) continue;

		if (typeof ob[i] == "object" && ob[i] !== null) {
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
