class ProductDetails {
  constructor() {
    this.title = "Product";
  }

  getOneProduct() {
    return cy.get(".product-layout").first();
  }

  getAddToCartButton() {
    return cy.get('button[title="Add to Cart"]');
  }
}

export default new ProductDetails();
