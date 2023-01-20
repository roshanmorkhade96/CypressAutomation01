describe("this is my 4th suite",function(){
 it("this is my 4th test",function(){
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
cy.get(':nth-child(4) > .stepper-input > .increment').click();
cy.get(':nth-child(4) > .product-action > button').click();
cy.get('.cart-icon > img').click();
cy.get('.cart-preview > .action-block > button').click();

//contains is key word to locate the web element on web page
cy.contains('Place Order').click();
cy.get('.chkAgree').click();
cy.get('button').click();
    })
})