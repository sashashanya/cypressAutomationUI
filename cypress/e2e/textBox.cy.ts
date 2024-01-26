describe("testBox", ()=> {
    it("test", ()=> {
        cy.visit("https://uitestingplayground.com/textinput")
        cy.get("input.form-control").type("Hello world")
        cy.get("#updatingButton").click()
        cy.contains("button","Hello world")
        cy.get("#updatingButton").should("have.text", "Hello world")
        cy.get("updatingButton").then(element=>{
            expect(element.text()).to.equal("Hello world")
        }) 
    })
})