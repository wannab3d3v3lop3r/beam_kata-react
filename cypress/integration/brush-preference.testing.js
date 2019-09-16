/// <reference types="Cypress" />

/**
 * @abstract: 
 *
 * @criteria
  As first time visiting user to the Beam's members detail page:
  - I see brush preference title
  - I see the user's brush color label
  - I see the user's motor speed label
  - I see the user's auto off label
  - I see the user's brush color value
  - I see the user's brush color displayed
  - I see the user's motor speed value
  - I see the user's auto off value
*/
describe(`User Story: Member detail page: Brush Preference`, function() {

    it(`has the title "Brush Preference" on the page`, () => {
        cy.visit('/')
        cy.get('.membership-brush-title')
          .should('contain', 'Brush Preference')
    })

    it(`has brush color label`, () => {
        cy.visit('/')
        cy.get('.membership-brush-color')
          .find('.beam-label')
          .should('contain', 'Brush Color')
    })

    it(`has motor speed label`, () => {
        cy.visit('/')
        cy.get('.membership-brush-motor')
          .find('.beam-label')
          .should('contain', 'Motor Speed')
    })

    it(`has auto off label`, () => {
        cy.visit('/')
        cy.get('.membership-brush-auto')
          .find('.beam-label')
          .should('contain', 'Auto Off')
    })

    it(`has brush color value of pink`, () => {
        cy.visit('/')
        cy.get('.membership-brush-color')
          .should('contain', 'pink')
    })

    it(`has brush color displayed`, () => {
        cy.visit('/')
        cy.get('.membership-brush')
          .find('.beam-brush-pink-box')
          .should('have.css','width','10px')
          .should('have.css','height','10px')
          .should('have.css','background-color','rgb(243, 24, 132)')
    })

    it(`has motor speed value of 1`, () => {
        cy.visit('/')
        cy.get('.membership-brush-motor')
          .should('contain', '1')
    })

    it(`has auto off value of no`, () => {
        cy.visit('/')
        cy.get('.membership-brush-auto')
          .should('contain', 'No')
    })
  })
  