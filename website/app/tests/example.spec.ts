import { test, expect } from '@playwright/test';

test('register', async ({ page }) => {
  await page.goto('https://5p8ro8qrue.execute-api.us-east-1.amazonaws.com');

  await page.getByText('Register here').click()

  const email = 'test@test.com' // process.env.email
  const password = 'test@test.com' // process.env.email

  await page.getByPlaceholder('Enter your email address').fill(`${email}`)
  await page.getByPlaceholder('Enter your password').fill(`${password}`)
  await page.getByPlaceholder('Confirm your password').fill(`${password}`)
  await page.getByText('Register').click()

  // // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('login', async ({ page }) => {
  await page.goto('https://5p8ro8qrue.execute-api.us-east-1.amazonaws.com');

  // Click the get started link.
  const email = 'test@test.com' // process.env.email
  const password = 'test@test.com' // process.env.email

  await page.getByPlaceholder('Enter your email address').fill(`${email}`)
  await page.getByPlaceholder('Enter your password').fill(`${password}`)

  // Expects page to have a heading with the name of Installation.
  // await page.waitForURL('https://5p8ro8qrue.execute-api.us-east-1.amazonaws.com/chat')
  await page.getByText('Login').click()
  await page.waitForTimeout(2000)
});
