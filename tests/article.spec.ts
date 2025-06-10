import { test, expect } from '@playwright/test';

test('User can open an article and view content', async ({ page }) => {
  await page.goto('https://example-news-site.com');
  await page.locator('.article').first().click();
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('.article-content')).toContainText(/by|Published/i);
});
