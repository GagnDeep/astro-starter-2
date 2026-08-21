import { test, expect } from '@playwright/test';

test('homepage visual test', async ({ page }) => {
  await page.goto('/');
  await page.screenshot({ path: 'homepage.png', fullPage: true });
});
