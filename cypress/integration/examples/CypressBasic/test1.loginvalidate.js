describe('this is my first test suite ',function(){
    it('this is my first test',function(){
cy.visit('https://rahulshettyacademy.com')

//to get the current page url we use cy.url().should('include','rahulshettyacademy')
cy.url().should('include','rahulshettyacademy')

    })
    
})