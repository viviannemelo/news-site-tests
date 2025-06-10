import { test, expect } from '@playwright/test';

test('Pagination works correctly', async ({ page }) => {
  await page.goto('https://example-news-site.com');
  await page.click('text=Next Page');
  await expect(page).toHaveURL(/page=2/);
  await expect(page.locator('.article')).toHaveCountGreaterThan(0);
});
