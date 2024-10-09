import { expect, test } from '@playwright/test'

test('App loads and nav works', async ({ page }) => {
  await page.goto('/')

  // Click the logo link.
  page.getByRole('link', { name: 'tung homes' }).click()

  // Expects page to have a heading with the name of slogan.
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Building More Than Your Dream Home',
    }),
  ).toBeVisible()
})
