const {test,expect} = require('@playwright/test');
const {OrangeHRMLoginPage} = require ("../PageObjects/OrangeHRMLoginPage") 


test('@smoke Verify login functionality',async ({page}) => {

const loginPage = new OrangeHRMLoginPage(page);

await loginPage.goto();
await loginPage.validateLogin("Admin","admin123");
await loginPage.verifyLogoDisplayed();
await page.waitForTimeout(2000)
})