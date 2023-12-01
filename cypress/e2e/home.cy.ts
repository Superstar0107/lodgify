// https://on.cypress.io/api

describe('Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('visits the dashboard url', () => {
    cy.get("[cy-data-id='title']").should('exist');
    cy.get("[cy-data-id='accordion-header']").should('exist');
    cy.get("[cy-data-id='progress-bar']").should('exist');
  });
  it('Toggle Accordion', () => {
    cy.get("[cy-data-id='accordion-header']").first().click();
    cy.get("[cy-data-id='accordion-content']").should('exist');
    cy.get("[cy-data-id='checkbox-label']").should('have.length', 4);
    cy.get("[cy-data-id='checkbox']").should('be.checked', 2);
  });
  it('Check checkbox', () => {
    cy.get("[cy-data-id='accordion-header']").first().click();
    cy.get("[cy-data-id='accordion-content']").should('exist');
    cy.get("[cy-data-id='custom-checkbox']").eq(1).click();
    cy.get("[cy-data-id='custom-checkbox']").eq(2).click();
    cy.get("[cy-data-id='accordion-header']")
      .first()
      .find('h3 span')
      .should('have.css', 'color', 'rgb(0, 183, 151)');
  });
  it('Progress Bar', () => {
    cy.get("[cy-data-id='accordion-header']").first().click();
    cy.get("[cy-data-id='accordion-content']").should('exist');
    cy.get("[cy-data-id='progress-bar']").contains('35.68%');
    cy.get("[cy-data-id='custom-checkbox']").eq(1).click();
    cy.get("[cy-data-id='progress-bar']").contains('42.29%');
    cy.get("[cy-data-id='custom-checkbox']").eq(2).click();
    cy.get("[cy-data-id='progress-bar']").contains('45.81%');
  });
});
