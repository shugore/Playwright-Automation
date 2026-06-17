const {test,expect} =require('@playwright/test');
const assert = require('node:assert');
const { asyncWrapProviders } = require('node:async_hooks');

test('Drowpdown with select class', async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/"); 
    const username= page.locator("#userEmail");
    const password =  page.locator("#userPassword");
    const loginclick =  page.locator("[id='login']");
    const itemList = page.locator(".card-body");
    const productName = "ZARA COAT 3"
    const cart = page.locator("[routerlink='/dashboard/cart']");
    const checkout = page.locator("[style*='list-style-type'] button");
    


    await username.fill("shubhamgore001@gmail.com");
    await password.fill("Client@0511");
    await loginclick.click();
    await page.waitForLoadState("networkidle");
    await page.locator(".card-body b").first().waitFor();
    const count = await  itemList.count();
    console.log(count);

    for (let index = 0; index < count; index++) {
      if(await itemList.nth(index).locator("b").textContent() === productName){

        // console.log("Entered In for llp")
        await itemList.nth(index).locator("button").nth(1).click();
        break;
       
      }
    }
     await cart.click();

     const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
     expect (bool).toBeTruthy();

})
