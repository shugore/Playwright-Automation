const {test,expect} = require('@playwright/test')
// const { broadcast } = require('node:stream/iter')

test('Blinking link verify',async ({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const blinkingUrl = page.locator("[href*='https://techsmarthire']");
await expect(blinkingUrl).toHaveAttribute("class","blinkingText");



});