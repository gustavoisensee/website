import { test, expect } from '@playwright/test';

const url =
  process.env.NODE_ENV === 'dev' ? 'http://localhost:5173/' : 'https://gustavoisensee.com/';

test('Home page', async ({ page }) => {
  await page.goto(url);
  await expect(page.getByRole('heading', { name: 'Gustavo Isensee' })).toBeVisible();

  await expect(page.getByRole('heading', { name: 'Tech knowledge' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'About me' })).toBeVisible();

  await page.getByRole('button', { name: 'Show all' }).click();
  await expect(page.getByText('SQL Server')).toBeVisible();
});
