describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should log in with your existing account and then log out', () => {
        // Click log in button on homepage
        cy.get('[href="/auth/login"]').click();
        // Type in username/password
        cy.get('[name="email"]').type('michaelkaffel2424@gmail.com');
        cy.get('[name="password"]').type('password1234');
        // Click login button
        cy.contains('Login').click();
        // Verify user role, name, and page title
        cy.get('a p').first().should('have.text', 'role: user');
        cy.get('h6').should('have.text', 'michael  kaffel');
        cy.title('eq', 'User: Profile | Dalek Homes');

        // Click user icon and logout
        cy.get('button [data-testid="PersonIcon"]').click();
        cy.contains('Logout').click();
    })
})