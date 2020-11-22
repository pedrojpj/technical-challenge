/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    visitPortal(removeStorage?: boolean): Chainable<void>;
    login(email?: string, password?: string): Chainable<void>;
  }
}
