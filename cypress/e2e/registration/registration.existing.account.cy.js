

describe('Registration', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should register an already existing user account', () => {
        cy.get('[href="/auth/register"]').click();
        cy.get('[name="firstName"]').type('Michael');
        cy.get('[name="lastName"]').type('Kaffel');
        cy.get('[name="email"]').type('michaelkaffel2424@gmail.com');
        cy.get('[type="password"]').type('password1234');
        cy.get('[type="submit"]').click();

        cy.get('[role="alert"]').should('contain', 'Input data validation failed');
    })
})