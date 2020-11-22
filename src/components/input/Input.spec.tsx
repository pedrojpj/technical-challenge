/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress-react-unit-test";
import { Input } from "./Input";

describe("Button component", () => {
  it("should add the label tag and display it in the input", () => {
    mount(<Input label="Text label" />);
    cy.contains("Text label").should("be.visible");
  });

  it("should add the placeholder tag and display it in the input", () => {
    mount(<Input placeholder="This is a placeholder" />);
    cy.get("input").should("have.attr", "placeholder");
  });
});
