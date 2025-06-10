import { test, expect } from '@playwright/test';

test('Search returns relevant results', async ({ page }) => {
  await page.goto('https://example-news-site.com');
  await page.fill('input[aria-label="Search"]', 'economy');
  await page.press('input[aria-label="Search"]', 'Enter');
  await expect(page.locator('.article')).toHaveCountGreaterThan(0);
});

test('Search with no results displays appropriate message', async ({ page }) => {
  await page.goto('https://example-news-site.com');
  await page.fill('input[aria-label="Search"]', 'nonsensequery123');
  await page.press('input[aria-label="Search"]', 'Enter');
  await expect(page.locator('.no-results')).toHaveText(/no results/i);
});
