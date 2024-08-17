const { test, expect } = require('@playwright/test');

test('Home Page Load', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await expect(page).toHaveTitle(/Facebook/);
    await page.waitForTimeout(5000);
});

test('Login Button Present on Home Page', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    const loginButton = await page.locator('button[name="login"]');
    await expect(loginButton).toBeVisible();
    await page.waitForTimeout(5000);
});

test('Signup Button Present on Home Page', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    const signupButton = await page.locator('a[href="/reg/"]');
    await expect(signupButton).toBeVisible();
    await page.waitForTimeout(5000);
});

test('Email Input Present on Home Page', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    const emailInput = await page.locator('input[name="email"]');
    await expect(emailInput).toBeVisible();
    await page.waitForTimeout(5000);
});

test('Password Input Present on Home Page', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    const passwordInput = await page.locator('input[name="pass"]');
    await expect(passwordInput).toBeVisible();
    await page.waitForTimeout(5000);
});
