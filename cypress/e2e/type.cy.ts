const textName = 'Cypress'
describe('Text Input', () => {
    it('text test', () => {
        cy.visit('/textinput')
        cy.get('[id="newButtonName"]').type(textName)
        cy.contains('button','Button That Should').click()
        cy.get('.btn-primary').then(element=>{
            console.log(element.text(),'text');
            cy.log(element.text())
            cy.wrap(element).should('have.text',textName)
        })
        cy.get('.form-group').within(text=>{
            console.log(text.text(),'text');
            cy.get('[type="button"]').should('have.text',textName)
        })
    });
});