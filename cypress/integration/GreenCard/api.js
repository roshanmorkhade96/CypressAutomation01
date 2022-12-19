/// <reference types="Cypress" />



describe("Api handling through cypress",function(){

    it("my test",function(){
             
//cy.request('post',url,body)
cy.request('post','http://216.10.245.166/Library/GetBook.php?ID=3389',{
    "book_name": "Selenium automation using Java",
    "isbn": "a23hd738",
    "aisle": "1223"
 } ).then(function(){

    expect(response.status).to.eq(400)
})

})
    })


