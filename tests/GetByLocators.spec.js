const {test, expect } = require("@playwright/test")

test('Locators With Get By',async ({browser}) =>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").check();
     await page.getByLabel("Employed").check();
      await page.getByLabel("Gender").selectOption("Female");
      
       await page.getByPlaceholder("Password").fill("abc123");
        await page.getByRole("button",{name: 'Submit'}).click();
        await page.getByText("");
        await page.getByRole("link",{name:'Shop'}).click();
        await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
})