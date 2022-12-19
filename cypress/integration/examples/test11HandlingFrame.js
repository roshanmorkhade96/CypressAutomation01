///<refrence type="cypress"/>
///<refrence type="cypress-iframe"/>
import 'cypress-iframe'
describe('this is my first test',function(){
it('this is my test',function(){
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
cy.frameLoaded('#courses-iframe')
cy.contains('Home').click()

})

})