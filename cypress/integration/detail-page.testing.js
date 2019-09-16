/// <reference types="Cypress" />

/**
 * @abstract: Know the title and logo
 *
 * @criteria
  As first time visiting user to the Beam's members detail page:
  - I see the logo and the title of the app.
*/
describe(`User Story: Member detail page`, function() {
    it(`has beam's logo displayed on top of the page`, () => {
      cy.visit('/')
      cy.get('.header-container img.logo')
        .should('be.visible')
    })

    it(`has the title "membership detail" on the page`, () => {
        cy.visit('/')
        cy.get('.membership-title')
          .should('contain', 'Membership Details')
      })
  })
  