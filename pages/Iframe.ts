class IFrame {
    private iframe:string = '#frame1';
    private body:string = 'body';
    private iframeChild:string = 'iframe'

    getIframe(){
        cy.get(this.iframe).then(iFrame=>{
            const body = iFrame.contents().find(this.body)
            cy.wrap(body).should('have.text', 'Parent frame')
            cy.wrap(body)
            .find(this.iframeChild)
            .then(iFrameChild=>{
                const iframeChild = iFrameChild.contents().find(this.body)
                cy.wrap(iframeChild).should('have.text','Child Iframe')
            })
        })
    }
    visit(){
        cy.visit(`${Cypress.env('demoQa')}/nestedframes`);
    }

}

export const IFramePage = new IFrame();