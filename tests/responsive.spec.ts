import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 375, height: 667 } });

test('Mobile layout shows hamburger menu', async ({ page }) => {
  await page.goto('https://example-news-site.com');
  await expect(page.locator('button[aria-label="Open menu"]')).toBeVisible();
});
