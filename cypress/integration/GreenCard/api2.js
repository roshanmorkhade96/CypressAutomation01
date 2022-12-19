

describe("Api handling through cypress",function(){

    it("my test",function(){
           cy.loginapi().then(function(){
           cy.visit('https://rahulshettyacademy.com/client',{
          onBeforeLoad:function(window){
            window.localStorage.setItem('token',Cypress.env('token'))
          }
     
     })

 })

 })
 
})
