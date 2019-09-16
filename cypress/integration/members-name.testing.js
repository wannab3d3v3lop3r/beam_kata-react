/// <reference types="Cypress" />

/**
 * @abstract: See the user's name and label
 *
 * @criteria
  As first time visiting user:
  - I see the name label
  - I see the name of the user
  - Check to see the CSS matches of labels and texts
*/
describe(`User story: Members name`, function() {
    it(`label is present`, () => {
      cy.visit('/')
      cy.get('.membership-name .beam-label')
        .should('contain','Name')
    })

    it(`label has css attributes matching beam-label css`, () => {
        cy.visit('/')
        cy.get('.membership-name')
          .find('.beam-label')
          .should('have.css','font-size', '20px')
          .should('have.css','font-weight', '300')
          .should('have.css','margin-bottom', '16px')
      })

    it(`text is Remy Lebeau`, () => {
        cy.visit('/')
        cy.get('.membership-name.beam-text')
          .should('contain', 'Remy LeBeau')
      })

      it(`text has css attributes matching beam-text css`, () => {
        cy.visit('/')
        cy.get('.membership-name.beam-text')
          .should('have.css','font-size', '16px')
          .should('have.css','font-weight', '100')
      })
  })
  