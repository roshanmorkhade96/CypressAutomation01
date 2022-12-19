describe('this is my first test',function(){
    it('this is my first test',function(){
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//to handle the window tab we used .invoke command of cypess with jquery command removeAttr
cy.get('#opentab').invoke('removeAttr','target').click()

//to get the current page url we use cy.url().should('include','rahulshettyacademy')
cy.url().should('include','rahulshettyacademy')

//to navigate back to home page use go command
cy.go('back')

    })
    
})