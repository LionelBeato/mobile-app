import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('app has title Ionic App', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Ionic App/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('button is disabled', async ({page}) => {
  await page.goto('/')
  const element = await page.getByTestId('disabled-button');

  await expect(element).toHaveAttribute('aria-disabled', 'true');
})

test('clicking on button enables other button', async ({page}) => {
  await page.goto('/')

  const element = await page.getByTestId('disabled-button');
  await page.getByTestId('big-button').click;

  await expect(element).toBe();
})
