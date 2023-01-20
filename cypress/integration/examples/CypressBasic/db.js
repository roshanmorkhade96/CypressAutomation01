/// <reference types="Cypress" />
describe('this is my first test suite ',function(){
    it('this is my first test',function(){


        cy.sqlServer('select *from personname').then(function(result){
            console.log(result[0])
        })

    })
    
})