///<refrence type="cypress"/>
///<refrence type="cypress-iframe"/>
import 'cypress-iframe'
describe('this is my first test',function(){
it('this is my test',function(){
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
cy.contains('Home').click()
cy.url().should('include','rahulshettyacademy')
})
})