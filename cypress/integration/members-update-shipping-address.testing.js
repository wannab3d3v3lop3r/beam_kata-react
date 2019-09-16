/// <reference types="Cypress" />

/**
 * @abstract: Update the user's shipping information
 *
 * @criteria
  As first time visiting user:
  - I see the edit button
  - I see the update button after edit button is cilcked
  - I see a form after edit button is clicked
  - I see the form after edit button is clicked, form is filled and the view page is updated 
*/
describe(`User story: Update shipping address`, function() {
    it(`edit button is present`, () => {
      cy.visit('/')
      cy.get('.membership-details')
        .find('.edit-btn')
        .should('exist')
    })

    it('edit button is clicked and see update button', () => {
        cy.visit('/')
        cy.get('.membership-details')
        .find('.edit-btn').click()
        
        cy.get('#shipping-form')
            .find('.update-btn')
            .should('exist')
    })

    it('edit button is clicked and see a form on the page', () => {
        cy.visit('/')
        cy.get('.membership-details')
        .find('.edit-btn').click()
        
        cy.get('#shipping-form')
            .should('exist')
    })

    it('edit button is clicked, user inputs updated address and sees the new updated address on view mode', () => {
      cy.visit('/')
      cy.get('.membership-details')
      .find('.edit-btn').click()
      
      cy.get('#shipping-form')
          .find('#address')
          .clear()
          .type('123 main street')
                
      cy.get('#shipping-form')
        .find('#city')
        .clear()
        .type('Columbus')
            
      cy.get('#shipping-form')
          .find('#state')
          .clear()
          .type('AT')
                
      cy.get('#shipping-form')
        .find('#zipcode')
        .clear()
        .type('04213')

      cy.get('#shipping-form')
        .find('.update-btn')
        .click()

      cy.get('.membership-details')
        .find('.membership-address')
        .should('contain','123 main street')

      cy.get('.membership-details')
        .find('.membership-city')
        .should('contain','Columbus')
    
      cy.get('.membership-details')
        .find('.membership-state')
        .should('contain','AT')

      cy.get('.membership-details')
        .find('.membership-zip')
        .should('contain','04213')
    })
  })