class Login {
        userName :string = '#userName';
        password: string = '#password';
        loginButton: string = '#login';
        logOutButton: string = '#submit';

    submitButtonLogin(){
        cy.get(this.userName).type('test');
        cy.get(this.password).type('Test1234*');
        cy.get(this.loginButton).click();
    }
  
}

export const LoginPage = new Login()