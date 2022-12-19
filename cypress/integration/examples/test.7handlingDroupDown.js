describe('this is my first test suite',function(){
    it('this is my first test',function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
//static droupdown
cy.get('Select').select('option3').should('have.value','option3');
//dynamic droupdown

cy.get("#autocomplete").type("ind")
//cy.get("li.ui-menu-item").text();

cy.get(".ui-menu-item div").each(($e1,index,$lis) => {

    if($e1.text()==='India'){
  cy.wrap($e1).click();

    }    
    })
    cy.get('#autocomplete').should('have.value','India')
})
  
    })
