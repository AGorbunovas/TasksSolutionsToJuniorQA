/// <reference types="Cypress" />

describe('Tesonet.com Web page test', () => {
    it('Open page', () => {
        cy.visit("https://tesonet.com/")       
    })
    it('Count the number of categories available on Career page', () => {
        cy.get('#menu-item-19').click()
        cy.wait(2000)
        cy.get('[href="#job-section"]').click()
        cy.get('[data-filter-group="departments"]').select('.tesonet-qa').should('have.value', '.tesonet-qa')
        cy.get('[data-filter-group="departments"]').find('option').then(option => {
            const optionCount = Cypress.$(option).length
            expect(option).to.have.length(optionCount)
        })      
    })
})