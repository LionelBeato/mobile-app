import { preserveWhitespacesDefault } from '@angular/compiler';
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

test('click through to tab2', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('tab2').click();
  const element = await page.getByTestId('tab-title-2');
  await expect(element).toHaveText(/Tab 2/);
});
