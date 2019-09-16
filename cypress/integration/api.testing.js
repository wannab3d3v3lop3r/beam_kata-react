/// <reference types="Cypress" />

/**
 * @abstract: check API calls from endpoints
 *
 * @criteria
      - I see the error page when API call is returned with a 500 status code
*/

describe(`API Testing with Beam endpoint of members data`, () => {

   it('render error component when fetch response are empty objects', () => {
      cy.server()
         .route({
            method: 'GET',
            url: `https://member-data.beam.dental/searchResults.json`,
            status: 500,
            response: {}
         })
         .as('members')
         .route({
            method: 'GET',
            url: `https://member-data.beam.dental/memberPreferences.json`,
            status: 500,
            response: {}
         })
         .as('preference')

      cy.visit('/')
         .wait(['@members','@preference'])

         cy.fixture('beam-members-correct.json')
            .then(xrs => {
               cy.visit('/')
               cy.get('.error-details')
               .should('contain','Unable to render component')
      })
   })

   it('correct information displayed when API request is successful', () => {

         cy.server()
         .route({
            method: 'GET',
            url: `https://member-data.beam.dental/searchResults.json`,
            status: 200,
            response: 'fixture:beam-members-correct.json',
         })
         .as('members')
         .route({
            method: 'GET',
            url: `https://member-data.beam.dental/memberPreferences.json`,
            status: 200,
            response: 'fixture:members-preference-correct.json',
         })
         .as('preference')

         cy.visit('/')
            .wait(['@members','@preference'])

         cy.fixture('beam-members-correct.json')
            .then(xrs => {
               cy.visit('/')
               cy.get('.membership-address')
                 .should('contain','616 Thieves\' Guild St.')
               cy.get('.membership-brush-color')
               .should('contain','pink')  
         })
   })

   it('display chartreuse color if user\'s brush option is default', () => {

      cy.server()
      .route({
         method: 'GET',
         url: `https://member-data.beam.dental/searchResults.json`,
         status: 200,
         response: 'fixture:beam-members-chartreuse.json',
      })
      .as('members')
      .route({
         method: 'GET',
         url: `https://member-data.beam.dental/memberPreferences.json`,
         status: 200,
         response: 'fixture:members-preference-chartreuse.json',
      })
      .as('preference')

      cy.visit('/')
         .wait(['@members','@preference'])

      cy.fixture('beam-members-chartreuse.json')
         .then(xrs => {
            cy.visit('/')
            cy.get('.membership-brush-color')
              .should('contain','chartreuse')  
         })
   })

   it('display blue color if user\'s brush option is default', () => {

      cy.server()
      .route({
         method: 'GET',
         url: `https://member-data.beam.dental/searchResults.json`,
         status: 200,
         response: 'fixture:beam-members-blue.json',
      })
      .as('members')
      .route({
         method: 'GET',
         url: `https://member-data.beam.dental/memberPreferences.json`,
         status: 200,
         response: 'fixture:members-preference-blue.json',
      })
      .as('preference')

      cy.visit('/')
         .wait(['@members','@preference'])

      cy.fixture('beam-members-blue.json')
         .then(xrs => {
            cy.visit('/')
            cy.get('.membership-brush-color')
              .should('contain','blue')   
         })
   })
}) 