import { faker } from '@faker-js/faker';

const email = faker.internet.email();
const password = faker.string.uuid();

describe('Registration', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should register a new user account', () => {
        cy.get('[href="/auth/register"]').click();
        cy.get('[name="firstName"]').type('Michael');
        cy.get('[name="lastName"]').type('Kaffel');
        cy.get('[name="email"]').type(email);
        cy.get('[type="password"]').type(password);
        cy.get('[type="submit"]').click();

        // Verify admin role, name, URL, and page title
        cy.get('a p').should('have.text', 'role: user');
        cy.get('h6').should('have.text', 'Michael  Kaffel');
        cy.title().should('eq', 'User: Profile | Delek Homes');
        cy.url().should('include', 'dashboard/user/profile');

        // Click user icon and logout
        cy.get('button [data-testid="PersonIcon"]').click();
        cy.contains('Logout').click();

        // Log back in with the new user account
        cy.get('[name="email"]').type(email);
        cy.get('[name="password"]').type(password);
        // Click login button
        cy.contains('Login').click();

        // Verify user role and title
        cy.get('a p').first().should('have.text', 'role: user');
        cy.title().should('eq', 'User: Profile | Delek Homes');
        cy.url().should('include', 'dashboard/user/profile');
    })
})