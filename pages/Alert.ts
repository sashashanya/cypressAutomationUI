class Alert{
    private alertTextButton:string = "Click for JS Alert";
    private buttonSelector: string = 'button';
    private jsAlertText:string = 'I am a JS Alert';
    private resultSelector:string = '#result';
    private resultTextJSAlert:string = 'You successfully clicked an alert';
    private clickForJSConfirm:string = 'Click for JS Confirm';
    private jsConfirmWindowText:string = 'I am a JS Confirm';
    private jsConfirmResult:string = 'You clicked: Ok';
    private jsClickForPrompt:string = 'Click for JS Prompt';
    private jsPromptText:string = 'I am a JS prompt';
    private jsPromptTextResult:string = 'You entered: ';
    
    jsAlert(){
        cy.contains(this.buttonSelector, this.alertTextButton).click();
        cy.on('window:alert',(text)=>{
            expect(text).to.equal(this.jsAlertText);
        })
        cy.on('window:confirm',()=> true);
        cy.get(this.resultSelector).should('have.text',this.resultTextJSAlert);
    };
    jsConfirm(){
        cy.contains(this.buttonSelector, this.clickForJSConfirm).click();
        cy.on('window:alert', (textAlert)=>{
            expect(textAlert).to.equal(this.jsConfirmWindowText);
        })
        cy.on('window:confirm', ()=> true);
        cy.get(this.resultSelector).should('have.text',this.jsConfirmResult);
    };
    jsPrompt(){
        const text = 'Hello World';
        cy.window().then(win =>{
            cy.stub(win, 'prompt').returns(text);
            cy.contains(this.jsClickForPrompt).click();
        })
        cy.get(this.resultSelector).should('have.text', this.jsPromptTextResult + text)
    }
};
export const AlertPage = new Alert();