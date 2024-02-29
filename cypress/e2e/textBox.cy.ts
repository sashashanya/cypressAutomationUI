import {TextBoxCheck} from '../../pages/TextBox'
describe('TEXT BOX', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQa')}/text-box`)
    });
    it('text box', () => {
        cy.get('#userName').type('John Doe')
        cy.get('#userEmail').type('johndoe@gmail.com')
        cy.get('#currentAddress').type('1234 River Street')
        cy.get('#permanentAddress').type('4321 Ocean Avenue')
        cy.get('#submit').click()
        cy.contains('#output', 'John Doe')
    });
    it('textbox with PageObject', () => {
        TextBoxCheck.submitTextBox()
        cy.contains('John Doe')
        
    });
});