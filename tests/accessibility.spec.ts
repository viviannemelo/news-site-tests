import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test('Home page is accessible', async ({ page }) => {
  await page.goto('https://example-news-site.com');
  await injectAxe(page);
  await checkA11y(page);
});

test('Article images have alt text', async ({ page }) => {
  await page.goto('https://example-news-site.com');
  await page.locator('.article').first().click();
  const images = page.locator('article img');
  const count = await images.count();
  for (let i = 0; i < count; i++) {
    await expect(images.nth(i)).toHaveAttribute('alt', /.+/);
  }
});
