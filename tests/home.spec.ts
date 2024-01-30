import { test, expect } from '@playwright/test';

test('Home page', async ({ page }) => {
  await page.goto('https://gustavoisensee.com/');
  await expect(page.getByRole('heading', { name: 'Gustavo Isensee' })).toBeVisible();

  await expect(page.getByRole('heading', { name: 'Tech knowledge' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'About me' })).toBeVisible();
});