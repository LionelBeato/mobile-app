import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Ionic App/);
});

test('tab1 has title', async ({ page }) => {
  await page.goto('/');
  const element = page.getByTestId('tab-title');

  await expect(element).toHaveText(/Tab 1/);
});
