


describe('this is my test suite',function(){

it('this is my test case',function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    //cy.get('.mouse-hover-content').invoke('show')
cy.contains('Top').click({force:true});

cy.url().should('include','top')

})

})