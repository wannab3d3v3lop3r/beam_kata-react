/// <reference types="Cypress" />

import { memberExpression } from "@babel/types";

/**
 * @abstract: See the user's address information
 *
 * @criteria
  As first time visiting user:
  - I see "shipping address" title
  - I see the following labels: Address, City, State, Zip Code
  - I see correct values of: Address, City, State, Zip Code
  - Check to see the CSS matches of labels and texts
*/
describe(`User story: Shipping address`, function() {

    it(`title contains the text "shipping address"`, () => {
      cy.visit('/')
      cy.get('.membership-address-title')
        .should('contain','Shipping Address')
    })

    it(`has address label`, () => {
        cy.visit('/')
        cy.get('.membership-address')
          .should('contain', 'Address')
    })

    it(`has city label`, () => {
        cy.visit('/')
        cy.get('.membership-city')
          .should('contain', 'City')
    })

    it(`has state label`, () => {
        cy.visit('/')
        cy.get('.membership-state')
          .should('contain', 'State')
    })

    it(`has zip code label`, () => {
        cy.visit('/')
        cy.get('.membership-zip')
          .should('contain', 'Zip Code')
    })


    it(`has address value of 616 Thieves' Guild St.`, () => {
        cy.visit('/')
        cy.get('.membership-address')
          .should('contain', `616 Thieves' Guild St`)
    })

    it(`has city value of Columbus`, () => {
        cy.visit('/')
        cy.get('.membership-city')
          .should('contain', 'Columbus')
    })

    it(`has state value of OH`, () => {
        cy.visit('/')
        cy.get('.membership-state')
          .should('contain', 'OH')
    })

    it(`has zip code value of 43215`, () => {
        cy.visit('/')
        cy.get('.membership-zip')
          .should('contain', '43215')
    })
  })
  