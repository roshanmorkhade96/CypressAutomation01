describe("this is my 3rd suite",function(){

it("this is third test",function () {

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
//.text is not a cypress command for that purpose wehave to manually resolve promise by using
//.then(function(name){  logic})
 cy.get('.brand').then(function(logoelemenet){
    cy.log(logoelemenet.text());

 })
    //to validte the logo text with asseration
    cy.get('.brand').should('have.text','GREENKART')
    
   }) 

})