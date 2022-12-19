/// <reference types="Cypress" />
describe('this is my second suite',function(){

it('this is my first test',function(){
//to launch url use cy.visit("url")
cy.visit("https://rahulshettyacademy.com/seleniumPractise");
//to locate web element use .get method is selenium we use d.find WebElement(By.xpath(""));
//for sending keys in WebElement we use SendKeys("") ... where in cypres use <type method> 
cy.get('.search-keyword').type("ca")
//.find use for chaining
cy.get(".products").find(".product")
//should is used for asseration
//cy.get('csspath':visible) to select only visible element.
cy.get(".product:visible").should('have.length',4);
//.wait(ms)
cy.wait(2000);
//.eq is for indexing ...contains is used for locating visile text web element
cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();

cy.get(':nth-child(3) > .product-action > button').click();
cy.get(':nth-child(3) > .stepper-input > .increment').click();
cy.get(':nth-child(3) > .stepper-input > .decrement').click();

//to selet perticular product without index by using the text
cy.get(".products").find(".product").each(($e1,index,$lis) => {
  const vegtext=$e1.find("h4.product-name").text();
  if(vegtext.includes("Cashews - 1 Kg")){

 cy.wrap($e1).find('button').click();

  }    

  })
})   


})