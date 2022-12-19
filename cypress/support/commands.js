// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("SelectProduct", (productname) => { 
    cy.get('h4.card-title').each(($e1,index,$lis) => {
        if($e1.text().includes(productname)){
      
       cy.get("button[class='btn btn-info']").eq(index).click()
      
        }    
    }) 

})

Cypress.Commands.add("loginapi", () => { 
cy.request("POST","https://rahulshettyacademy.com/client/auth/login",{userEmail: "roshanmorkhade96@gmail.com",
 userPassword: "Roshan@12345"}
).then(function(response){

    expect(response.status).to.eq(200)
    Cypress.env('token',response.body.token)
})


})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })