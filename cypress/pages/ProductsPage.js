class ProductsPage {

  productDashboard() {
    cy.get(".title").should("have.text", "Products");
    
  }

  sortingProduct(){ 
    cy.get('.product_sort_container').as('dropdown');

  // Use cy.select() to select the desired option
  cy.get('@dropdown').select('lohi');

  // Perform assertions to ensure the selected option is displayed
  cy.get('@dropdown').should('have.value', 'lohi');
  }

  viewProduct() {
    cy.get("#item_0_title_link > .inventory_item_name").click();
  }


  productDetailsPageAndAddToCart() {
    cy.get('[data-test="add-to-cart"]').click();
  }
  
  goToCart() {
    cy.get(".shopping_cart_link").click();
  }
}

export default ProductsPage;
