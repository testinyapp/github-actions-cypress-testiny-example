/// <reference types="cypress" />

describe('example testiny', () => {

  it('test that checks title (and fails)', () => {
    cy.visit('https://www.testiny.io')

    cy.title().should('include', 'Testiny')
    cy.title().should('not.include', ':(')

    cy.title().should('include', 'This will fail')
  })

  it('will always pass', () => {
    // will pass
  })

  it.skip('a skipped test', () => {
    // skipped test
  })
})
