const matter = require("gray-matter");
const fs = require("fs-extra");
const path = require("path");
const striptags = require("striptags");
const remark = require("remark");
const mdx = require("remark-mdx");
const html = require("remark-html");
const vfile = require("vfile");
const recursiveReadDir = require("recursive-readdir");
const strip = require("remark-strip-html");

async function main() {
	const pages = await recursiveReadDir(path.dirname("pages/"));

	const mdxPagesPromises = pages
		.filter((page) => page.match(/\.mdx$/))
		.map((page) => {
			const file = fs.readFileSync(`${process.cwd()}/${page}`);

			return {
				...matter(file),
				url: page.split(".")[0].slice(6).split("index").join(""),
			};
		})
		.map(flattenObject)
		.map(async (page) => {
			/** @type {vfile.VFile} */
			const md = await remark().use(mdx).use(strip).process(page.content);
			return {
				...page,
				content: md.contents.toString(),
			};
		});

	const mdxPages = await Promise.all(mdxPagesPromises);
	await fs.ensureDir(process.cwd() + "/indexes");
	await fs.writeJSON(process.cwd() + "/indexes/index.json", mdxPages);
}

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

main()
	.then(() => console.log("Index built succesfully"))
	.catch((e) => console.error("Failed building index ", e));
