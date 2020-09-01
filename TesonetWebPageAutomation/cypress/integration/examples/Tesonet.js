/// <reference types="Cypress" />

describe('Tesonet.com Web page test', () => {
    it('Open page', () => {
        cy.visit("https://tesonet.com/");
        cy.wait(2000);
    });
    it('Select QA department from dropdown list on Career page', () => {
        cy.get('#menu-item-19').click();
        cy.wait(2000);
        cy.get('[href="#job-section"]').click();
        cy.get('[data-filter-group="departments"]').select('.tesonet-qa').should('have.value', '.tesonet-qa');        
    });
    it('Count the number of categories available on Career page', () => {
        cy.get('#menu-item-19').click();
        cy.wait(2000);
        cy.get('[data-filter-group="departments"]')
            .find('option')
            .then(option => {
                const optionCount = Cypress.$(option).length;
                cy.log("Number of departments without 'All departments':", optionCount - 1);
                expect(option).to.have.length(optionCount);
            });
    });
});