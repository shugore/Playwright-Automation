const {test,expect} = require('@playwright/test')
// const { broadcast } = require('node:stream/iter')

test('Handle child window',async ({browser})=>{

const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const blinkingUrl = page.locator("[href*='documents-request']");
// await expect(blinkingUrl).toHaveAttribute("class","blinkingText");


const [newPage] = await Promise.all(
    [
        context.waitForEvent('page'),
        blinkingUrl.click(),
    ]
)
 const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());

});