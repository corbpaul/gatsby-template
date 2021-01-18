/// <reference types="Cypress" />
describe('Index Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Link to about page', () => {
    it('should follow link', () => {
      cy.getBySel('about-link').should('be.visible').click({ force: true });
      cy.url().should('include', 'about').end();
    });
  });
});
