describe("Visual Regression Testing", () => {
	it("toMatchImageSnapshot", () => {
		cy.visit("/");
		cy.matchImageSnapshot();
	});
});
