class TextBox {
    userName: string = '#userName';
    userEmail: string = '#userEmail';
    currentAddress: string = '#currentAddress';
    permanentAddress: string = '#permanentAddress';
    submitButton: string = '#submit'

    submitTextBox(){
        cy.get(this.userName).type('John Doe');
        cy.get(this.userEmail).type('johndoe@gmail.com');
        cy.get(this.currentAddress).type('1234 River Street');
        cy.get(this.permanentAddress).type('4321 Ocean Avenue');
        cy.get(this.submitButton).click();
    }
}
export const TextBoxCheck= new TextBox()