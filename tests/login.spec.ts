import { test, expect } from '@playwright/test';

test('User can login successfully', async ({ page }) => {
  await page.goto('https://example.com/login');

  await page.fill('#username', 'testuser');
  await page.fill('#password', 'password123');
  await page.click('#loginBtn');

  await expect(page).toHaveURL(/dashboard/);
});
