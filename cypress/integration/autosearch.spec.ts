describe("AutoSearch", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("TEST_URL"));
    cy.server();
    cy.route("GET", "**/token").as("token");
  });

  it("should look for a result and find it", () => {
    const search: string = "Dragon";
    cy.get('[data-test="input-autosearch"]').type(search);
    cy.get('[data-test="item-autosuggest-0"]').then(($element) => {
      const text = $element.text();
      $element.trigger("click");
      cy.get('[data-test="input-autosearch"]').should("be.value", text);
    });
  });
});
