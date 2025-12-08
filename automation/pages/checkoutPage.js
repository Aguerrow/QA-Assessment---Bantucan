import { expect } from "@playwright/test";

export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = "#first-name";
    this.lastName = "#last-name";
    this.postalCode = "#postal-code";
    this.continueButton = "#continue";
    this.finishButton = "#finish";
    this.completeHeader = ".complete-header";
  }

  async enterInformation(first, last, postal) {
    await this.page.fill(this.firstName, first);
    await this.page.fill(this.lastName, last);
    await this.page.fill(this.postalCode, postal);
  }

  async finishCheckout() {
    await this.page.click(this.continueButton);
    await this.page.click(this.finishButton);
    await expect(this.page.locator(this.completeHeader)).toHaveText(
      "Thank you for your order!"
    );
  }
}
