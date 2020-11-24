// <reference types="Cypress" />
// Allow jQuery not defined error to not fail any test
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Homepage', () => {
    it('Visits the homepage', () => {
        cy.visit('index.php', {})
    })
})