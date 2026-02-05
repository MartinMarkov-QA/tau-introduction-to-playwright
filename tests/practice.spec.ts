import { test, expect } from "@playwright/test";

test.describe("Your test suite name", () => {
    test("Verify Playwright homepage title", async ({ page }) => {
        await test.step("Go to Playwright web site", async () => {
            await page.goto("https://playwright.dev/");
        });
        test.step("Verify the page title", async () => {
            await expect(page).toHaveTitle(
                "Fast and reliable end-to-end testing for modern web apps | Playwright",
            );
        });
    });
});
