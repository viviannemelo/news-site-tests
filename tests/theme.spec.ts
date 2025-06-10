import { test, expect } from '@playwright/test';

test('Toggle between light and dark theme works', async ({ page }) => {
  await page.goto('https://example-news-site.com');
  const toggle = page.locator('button[aria-label="Toggle theme"]');
  await toggle.click();
  await expect(page.locator('body')).toHaveClass(/dark/);
  await toggle.click();
  await expect(page.locator('body')).not.toHaveClass(/dark/);
});
