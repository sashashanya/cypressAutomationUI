import {AlertPage} from '../../pages/Alert'
describe('ALERT', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('herokuapp')}/javascript_alerts`);
    });
    it('Click for JS Alert', () => {
        AlertPage.jsAlert();
    });
    it('Click for JS Confirm', () => {
        AlertPage.jsConfirm();
    });
    it('Click for JS Prompt OK/true', () => {
        AlertPage.jsPrompt();
    });
    it.only('Click for JS Prompt OK/true', () => {
        cy.window().then($win => {
            cy.stub($win,'prompt').returns('Hello Hello')
        })
        cy.contains('button', 'Click for JS Prompt').click()
        cy.get('#result').should('have.text', 'You entered: Hello Hello')
    });




});
