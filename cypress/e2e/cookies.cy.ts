describe('COOKIES', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQa')}/login`)
    });
    it('create cookies', () => {
        cy.get('#userName').type('test');
        cy.get('#password').type('Test1234*');
        cy.contains('button', 'Login').click();

    });
    it('create cookies with cy.session', () => {
        cy.visit(`${Cypress.env('demoQa')}/login`)
    });
    it('create cookies with cy.session', () => {
        cy.visit(`${Cypress.env('demoQa')}/login`)
    });

});
