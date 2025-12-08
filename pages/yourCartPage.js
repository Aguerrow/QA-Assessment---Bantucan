import { expect } from "@playwright/test";

export class YourCartPage {
  constructor(page) {
    this.page = page;
  }

  async verifyItem(itemDataTest, expectedName) {
    await expect(this.page.locator(`[data-test='${itemDataTest}']`)).toHaveText(
      expectedName
    );
  }

  async checkout() {
    await this.page.click("#checkout");
  }
}
