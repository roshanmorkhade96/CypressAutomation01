class ProductPage{

getCheckout(){
   return cy.get("a[class='nav-link btn btn-primary']")
}

getCheckOutButton(){
    return cy.get("button[class='btn btn-success']")
}


}
export default ProductPage;