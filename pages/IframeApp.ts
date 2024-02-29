class IFrameApp {
    

    getIframe(){
       
    }
    visit(){
        cy.visit(`${Cypress.env('herokuapp')}/iframe`);
    }

}

export const IFrameAppPage = new IFrameApp();