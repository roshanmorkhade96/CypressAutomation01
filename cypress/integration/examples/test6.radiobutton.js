describe("this my new suite",function(){
    it("this is my test",function (){
cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click();
cy.get('#displayed-text').should('be.visible')
///Check Radio Button
cy.get("input[type='radio']").check().should('be.checked')
cy.get("input[type='radio']").check(['radio1','radio2'])
cy.get('[for="radio1"] > .radioButton').check().should('be.checked')
    })
})