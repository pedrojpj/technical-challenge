/// <reference types="Cypress" />

import React from "react";
import { mount } from "cypress-react-unit-test";
import { Input } from "./Input";
import { ThemeTest } from "../../ThemeTest";

describe("Button component", () => {
  it("should add the label tag and display it in the input", () => {
    mount(
      <ThemeTest>
        <Input label="Text label" />
      </ThemeTest>
    );
    cy.contains("Text label").should("be.visible");
  });

  it("should add the placeholder tag and display it in the input", () => {
    mount(
      <ThemeTest>
        <Input placeholder="This is a placeholder" />
      </ThemeTest>
    );
    cy.get("input").should("have.attr", "placeholder");
  });
});
