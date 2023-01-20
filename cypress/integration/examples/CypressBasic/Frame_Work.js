/// <reference types="Cypress" />
import HomePage from'../../page_object/homepage'
import ProductPage from'../../page_object/productpage'
describe('this is my first test',function(){
//<Hooks> runs once before all tests present in block(all set up method)
    before(function(){ 
cy.fixture('example').then(function(data)
{
this.data=data
})
    })
    it('this is my first test',function(){
        const home=new HomePage()
        const product=new ProductPage()
cy.visit(Cypress.env('url'))
//<<type>> is command to send string in textbox
home.getEditBox().type(this.data.name)
home.getGender().select(this.data.gender)
//validation of text box value
home.getTwowayDatabinding().should('have.value',this.data.name)
//valudation of min length of text box
home.getEditBox().should('have.attr','minlength','2')
//validation of whether the radio button disabled or not
home.getEnterprenur().should('be.disabled')
//code to shop and select multiple application at a time and
//use of customize command of cypress and 
//use of parametrziaton concept and gor each concept of javascript to get multiple
//cypress.config('defaultCommandTimeout',800)
home.getShopTab().click()
//for debuging and applicaton
this.data.productname
this.data.productname.forEach(function(element){ 
    cy.SelectProduct(element)
})
   product.getCheckout().click()
  var sum=0
cy.get("tr td:nth-child(4) strong").each(($e1,index,$lis) => {
const actualtext=$e1.text()
var res=actualtext.split(" ")
res=res[1].trim()
sum=Number(sum)+Number(res)
}).then(function(){//resolve promises as above step are not javascript
    cy.log(sum)
})
cy.get("h3 strong").then(function(element){
    var actualtext=element.text()
    var total=actualtext.split(" ")
    total=total[1].trim()
    expect(Number(total)).to.equal(sum)
})

product.getCheckOutButton().click()
cy.get('#country').type('India')

cy.get('.suggestions > ul > li > a').click()
cy.get('.checkbox').click()
cy.get('.ng-untouched > .btn').click()
//cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
cy.get('.alert').then(function(element){
const actualtext=element.text();
expect(actualtext.includes("Success")).to.be.true  
})
    })  
})