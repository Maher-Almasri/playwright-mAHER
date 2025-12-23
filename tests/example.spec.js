<<<<<<< HEAD
// @ts-check Maher 33
=======
// @ts-check Maher 1984
>>>>>>> 95df51d (Maher 1984)
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Fast/);
});



