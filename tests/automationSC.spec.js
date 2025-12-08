import { test, expect } from "@playwright/test";

test(" Full Application Flow", async ({ page }) => {
  //Login
  await page.goto("https://www.saucedemo.com/");

  //Filling out
  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");

  await Promise.all([
    page.waitForSelector(".inventory_list", { state: "visible" }),
    page.click("#login-button"),
  ]);

  //Add items to the cart
  await page.click("#add-to-cart-sauce-labs-backpack");
  await expect(page.locator(".shopping_cart_badge")).toHaveText("1");

  await page.click("#add-to-cart-sauce-labs-onesie");
  await expect(page.locator(".shopping_cart_badge")).toHaveText("2");

  //Going to the cart
  await page.click(".shopping_cart_link");

  //Cart contents
  await expect(page.locator("[data-test='item-4-title-link']")).toHaveText(
    "Sauce Labs Backpack"
  );
  await expect(page.locator("[data-test='item-2-title-link']")).toHaveText(
    "Sauce Labs Onesie"
  );

  //Checkout process
  await page.click("#checkout");
  await page.fill("#first-name", "Adrian");
  await page.fill("#last-name", "Tester");
  await page.fill("#postal-code", "940");

  await page.click("#continue");
  await page.click("#finish");

  //Verify the order is complete
  await expect(page.locator(".complete-header")).toHaveText(
    "Thank you for your order!"
  );
});
