import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { ProductsPage } from "../pages/productsPage";
import { YourCartPage } from "../pages/yourCartpage";
import { CheckoutPage } from "../pages/checkoutPage";

test("SauceDemo Technical Assesment - Full Flow", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new YourCartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");

  //Add items to cart
  await productsPage.addItemToCart("sauce-labs-backpack");
  await productsPage.addItemToCart("sauce-labs-onesie");

  //Going to the cart
  await productsPage.goToCart();
  await cartPage.verifyItem("item-4-title-link", "Sauce Labs Backpack");
  await cartPage.verifyItem("item-2-title-link", "Sauce Labs Onesie");

  //Checkout
  await cartPage.checkout();
  await checkoutPage.enterInformation("Adrian", "Tester", "940");
  await checkoutPage.finishCheckout();
});
