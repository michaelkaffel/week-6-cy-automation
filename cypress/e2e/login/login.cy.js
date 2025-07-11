/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should log in with your existing account as an admin', () => {
    // Click log in button on homepage
    cy.get('[href="/auth/login"]').click();
    // Type in username/password
    cy.get('[name="email"]').type('admin@gmail.com');
    cy.get('[name="password"]').type('DontTestMe');
    // Click login button
    cy.contains('Login').click();
    // Verify admin role and title
    cy.get('a p').first().should('have.text', 'role: admin');
    cy.title('eq', 'User: Profile | Dalek Homes');
  })
})
