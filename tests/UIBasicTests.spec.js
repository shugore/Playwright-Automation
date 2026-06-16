const{test,expect} = require('@playwright/test');
// const {expect} = require('../playwright.config');

test('First Case', async ({browser})=>
{
const context= await browser.newContext()
const page = await context.newPage();
page.goto("https://rahulshettyacademy.com/loginpagePractise/")
const username= page.locator("[id='username']");
const password =  page.locator("[id='password']");
const loginclick = await page.locator("[id='signInBtn']")

await username.fill("rahulshettyacademy");
await password.fill("Learning@830$3mK2");
loginclick.click();
});

test.skip('Page Playwright Test', async ({page})=>
{
await page.goto("https://www.google.com/");
await expect(page).toHaveTitle("Google"); 
});