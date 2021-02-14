/// <reference types="cypress" />
declare namespace Cypress {
	interface Chainable {
		matchImageSnapshot(): Chainable<void>;
	}
}
