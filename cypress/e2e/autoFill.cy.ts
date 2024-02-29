import {autoFill} from '../../pages/AutoFill'
describe('AUTOFILL', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQa')}/auto-complete`,{timeout:5000})
    });
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    });
    it('verify that auto fill is working', () => {
        autoFill.autoComplete()
    });
});