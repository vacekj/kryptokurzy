const checkedLinks = [];

describe("Test for unwanted 404s", function() {
	it("should not get 404s on any links on our page", function() {
		ensureNot404("/");
	});
});

function ensureNot404(url: string) {
	cy.log("Visiting and checking " + url);
	cy.visit(url).title().should("not.contain", "404");
	cy.log("Not a 404, following links");
	checkedLinks.push(url);
	cy.log(
		`Added ${url} to checked links, ${checkedLinks.length} checked so far`,
	);
	/*Get all links on page and recursively check them */
	cy.get("html").then(() => {
		const links = Cypress.$("a") as JQuery<HTMLAnchorElement>;
		cy.log(`Got ${links.length} links`);
		if (links.length === 0) {
			cy.log("End of branch");
			cy.log("Checked links: ", checkedLinks);
		}
		const urls = links
			.toArray()
			.map((el) => el.href)
			.filter((url) => url !== window.location.search)
			.filter((url) => url.indexOf("localhost") !== -1);

		urls.forEach((url) => ensureNot404(url));
	});
}
