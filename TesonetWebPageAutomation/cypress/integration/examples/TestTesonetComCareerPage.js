/// <reference types="Cypress" />

describe('Tesonet.com Web page test', () => {
    it('Open page', () => {
        cy.visit("https://tesonet.com/", {
            onLoad: () => console.log('*** PAGE IS LOADED ***')
        });
        console.log('Should be printed AFTER *** PAGE LOADED ***');
    });
    it('Cookies notice test on main page', () => {
        cy.get('.cookie-notice-container').should('be.visible');
        cy.get('#cn-accept-cookie').click();
        cy.get('.cookie-notice-container').should('not.be.visible');
    });
    it('Select QA department from dropdown list on Career page', () => {
        cy.get('#menu-item-19').click();
        cy.wait(2000);
        cy.get('[href="#job-section"]').click();
        cy.get('[data-filter-group="departments"]')
            .select('.tesonet-qa')
            .should('have.value', '.tesonet-qa');        
    });
    it('Cookies notice test on Career page', () => {
        cy.get('.cookie-notice-container').should('be.visible');
        cy.get('#cn-accept-cookie').click();
        cy.get('.cookie-notice-container').should('not.be.visible');
    });
    it('Count the number of categories available on Career page', () => {
        cy.get('#menu-item-19').click();
        cy.wait(2000);
        cy.get('[data-filter-group="departments"]')
            .find('option')
            .then(option => {
                const optionCount = Cypress.$(option).length;
                expect(option).to.have.length(optionCount);
                cy.log("Number of departments without 'All departments':", optionCount - 1);
            });
    });
});