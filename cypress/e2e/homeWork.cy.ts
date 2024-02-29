import { multiply } from "cypress/types/lodash";

describe('HOME WORK', () => {
    it('waiting to be visible', () => {
        cy.visit(Cypress.env('homeWork'));
        cy.get('[id="visibility_trigger"]').should('be.visible').click().and('be.disabled');
        cy.get('[id="visibility_target"]').should('be.visible').and('exist').click();
        cy.get('.popover-header').should('have.text', 'Can you see me?');
        cy.get('.popover-body').should('have.text', 'I just removed my invisibility cloak!!');
    });
    it('waiting to be ivisible', () => {
        cy.visit(Cypress.env('homeWork'));
        cy.get('[id="invisibility_trigger"]').should('be.visible').and('exist').click();
        cy.get('[id="spinner_gone"]').should('be.visible').and('exist').should('have.text', 'Thank God that spinner is gone!');     
    });
    it('waiting to be enabled, contain text', () => {
        cy.visit(Cypress.env('homeWork'));
        cy.get('[id="enabled_trigger"]').should('be.visible').and('exist').click();
        cy.get('[id="enabled_target"]').should('be.disabled');
        cy.get('[id="enabled_target"]').should('be.visible').and('exist').click();
        cy.get('.popover-header').should('have.text','Yay! I am super active now!');
        cy.get('.popover-body').should('include.text', 'See, you just clicked me!!');
    });
    it('changing page title', () => {
        cy.visit(Cypress.env('homeWork'));
        cy.get('[id="page_title_trigger"]').should('be.visible').and('exist').click();
        cy.title().should('eq', 'My New Title!');
    });
    it('waiting for text, value', () => {
        cy.visit(Cypress.env('homeWork'));
        cy.get('[id="text_value_trigger"]').should('be.visible').and('exist').click();
        cy.get('[id="wait_for_value"]').should('be.visible').and('exist');
        cy.get('[id="wait_for_text"]').should('be.visible').and('exist');

    });
}); 