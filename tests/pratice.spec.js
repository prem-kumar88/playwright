const { test, expect } = require('@playwright/test');

test('Home Page Load', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    // Check that the page has loaded by ensuring the title is correct
    await expect(page).toHaveTitle(/Facebook/);
    await page.waitForTimeout(5000);
});

test('Login Button Present on Home Page', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    // Check if the login button is present on the home page
    const loginButton = await page.locator('button[name="login"]');
    await expect(loginButton).toBeVisible();
    await page.waitForTimeout(5000);
});

test('Signup Button Present on Home Page', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    // Check if the signup button is present on the home page
    const signupButton = await page.locator('a[href="/reg/"]');
    await expect(signupButton).toBeVisible();
    await page.waitForTimeout(5000);
});

test('Email Input Present on Home Page', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    // Check if the email input field is present on the home page
    const emailInput = await page.locator('input[name="email"]');
    await expect(emailInput).toBeVisible();
    await page.waitForTimeout(5000);
});

test('Password Input Present on Home Page', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    // Check if the password input field is present on the home page
    const passwordInput = await page.locator('input[name="pass"]');
    await expect(passwordInput).toBeVisible();
    await page.waitForTimeout(5000);
});
<<<<<<< HEAD


=======
>>>>>>> 118fdb34b51694a0c999dcff049a530b772835fa
