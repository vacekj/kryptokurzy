describe("Visual Regression Testing", () => {
	it("index", () => {
		cy.visit("/").wait(3000);
		cy.matchImageSnapshot();
	});

	it("team", () => {
		cy.visit("/team").wait(3000);
		cy.matchImageSnapshot();
	});

	it("konzultace", () => {
		cy.visit("/konzultace").wait(3000);
		cy.matchImageSnapshot();
	});
});
