export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.cartBadge = ".shopping_cart_badge";
  }

  async addItemToCart(itemId) {
    await this.page.click(`#add-to-cart-${itemId}`);
    const count = await this.page.locator(this.cartBadge).innerText();
    return parseInt(count);
  }

  async goToCart() {
    await this.page.click(".shopping_cart_link");
  }
}
