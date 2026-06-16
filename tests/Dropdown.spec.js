const {test,expect} =require('@playwright/test');
const { asyncWrapProviders } = require('node:async_hooks');

test('Drowpdown with select class', async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const username= page.locator("[id='username']");
    const password =  page.locator("[id='password']");
    const loginclick =  page.locator("[id='signInBtn']");
    const dropdown = page.locator("[class='form-control'][data-style='btn-info']");
    const radioButton = page.locator(".customradio");
    const popupOkayButton = page.locator("[id='okayBtn']");

    await username.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await dropdown.selectOption("Consultant");
    await radioButton.last().check();
   await expect ( radioButton.last()).toBeChecked();
    console.log(await radioButton.last().isChecked());
    await popupOkayButton.click();
    
    // await page.pause();
    await loginclick.click();




})
