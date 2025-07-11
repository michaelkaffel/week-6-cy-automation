
import { faker } from '@faker-js/faker';

const email = faker.internet.email();
const password = faker.string.uuid();


describe('Registration', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should register an already existing user account', () => {
        cy.get('[href="/auth/register"]').click();
        cy.get('[name="firstName"]').clear();
        cy.get('[name="lastName"]').clear();
        cy.get('[name="email"]').type(email);
        cy.get('[type="password"]').type(password);
        cy.get('[type="submit"]').click();

        cy.contains('p', 'First name required').should('have.class', 'Mui-error');
    })
})


