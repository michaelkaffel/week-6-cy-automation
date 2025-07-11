

describe('Login', () => {
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
    // verify name here using h6 as selector
    cy.title('eq', 'User: Profile | Dalek Homes');
  })
})
