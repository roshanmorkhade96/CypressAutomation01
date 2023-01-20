describe("this is my 5th suite",function(){
    it("this is my 5th test",function(){
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//.check is method to click on checbox 
//assertion .should ('be.checked') use to validate the behavior of check box
//and is used to avoid the repetation of should ...should('have.value','actual value')>>to validate actual value 
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
//to unchecked the checkbox <.uncheck() method is use> and validate the test assertion is should('not.be.checked')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
//to check multiple check box at a time select common css selector for that all check box then y using array provide specific argument 
//for which we want to validate
cy.get("input[type='checkbox']").check(['option2','option3'])
//eq is used to provide the index 
cy.get("input[type='checkbox']").eq(2).uncheck();

    })
})