const {test,expect} = require('@playwright/test');
const {OrangeHRMLoginPage} = require ("../PageObjects/OrangeHRMLoginPage") 

const dataset = JSON.parse(JSON.stringify(require('../Utils/Config.json')));

test('@smoke Drive Data From Json and Verify login functionality',async ({page}) => {

const loginPage = new OrangeHRMLoginPage(page);

await loginPage.goto();
await loginPage.validateLogin(dataset.Username,dataset.Password);
console.log("Entered Data from Json:")
await page.waitForTimeout(2000)
})