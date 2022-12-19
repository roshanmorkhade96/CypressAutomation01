/// <reference types="Cypress" />
import{Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from'../../../page_object/homepage'
import ProductPage from'../../../page_object/productpage'
const home=new HomePage()
const product=new ProductPage()
Given('I open Ecommarce page',function(){
    cy.visit(Cypress.env('url'))
}) 

//When :I add item to cart
When('I add item to cart',function(){
    home.getShopTab().click()
    this.data.productname.forEach(function(element){ 
         cy.SelectProduct(element)
    });
         product.getCheckout().click()
})
//And :validate the total price

When('validate the total price',function(){

     var sum=0
     cy.get("tr td:nth-child(4) strong").each(($e1,index,$lis) => {
     const actualtext=$e1.text()
     var res=actualtext.split(" ")
     res=res[1].trim()
     sum=Number(sum)+Number(res)
     }).then(function(){
         cy.log(sum)
       
     })
     cy.get("h3 strong").then(function(element){
         var actualtext=element.text()
         var total=actualtext.split(" ")
         total=total[1].trim()
         expect(Number(total)).to.equal(sum)
    })

})
Then('select country submit and verify thank you',function(){
    product.getCheckOutButton().click()
    cy.get('#country').type('India')
    cy.wait(6000);
    cy.get('.suggestions > ul > li > a').click()
    cy.get('.checkbox').click()
    cy.get('.ng-untouched > .btn').click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element){
    const actualtext=element.text();
    expect(actualtext.includes("Success")).to.be.true  
    })
       
})  

//    When     I fill the form

        When('I fill the form',function(){
            

            home.getEditBox().type(this.data.name)
            home.getGender().select(this.data.gender)

        })

       // Then     Validate the forms behaviour
        Then('Validate the forms behaviour select the shop page',function(){
        home.getTwowayDatabinding().should('have.value',this.data.name)
        home.getEditBox().should('have.attr','minlength','2')
        home.getEnterprenur().should('be.disabled')
       // cypress.config('defaultCommandTimeout',8000)
        home.getShopTab().click()
})


