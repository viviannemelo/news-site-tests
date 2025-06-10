import { test, expect } from '@playwright/test';

test('Home page loads with headlines', async ({ page }) => {
  await page.goto('https://example-news-site.com');
  await expect(page).toHaveTitle(/News/);
  const headlines = page.locator('.headline');
  await expect(headlines.first()).toBeVisible();
});

test('Navigation menu is visible and functional', async ({ page }) => {
  await page.goto('https://example-news-site.com');
  const nav = page.locator('nav');
  await expect(nav).toBeVisible();
  await expect(nav.locator('text=Politics')).toBeVisible();
});
