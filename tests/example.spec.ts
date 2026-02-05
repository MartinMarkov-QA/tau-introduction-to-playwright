import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});


/**
 * 1. Open the page
 * 2. Click at Get started
 * 3. Mouse hover the language dropdown
 * 4. Click at  Java
 * 5. Check the URL 
 * 6. Check the text "Installing Playwright" is not being displayed
 * 7. Check the text below is displayed
 * 
 * Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.
 * 
 */

test.describe('@UI Navigate and test Node and Java pages titles', () => {
  test('Verify Java and Node page titles', async ({ page }) => {

      await test.step('Verify Java page title', async () => {
      
        await page.goto('https://playwright.dev/');
        expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
        await page.getByRole('button', { name: 'Node.js' }).hover();
        await page.locator('a').filter({ hasText: 'Java' }).first().click();
        expect(page).toHaveURL('https://playwright.dev/java/');
      });
    });
  });
