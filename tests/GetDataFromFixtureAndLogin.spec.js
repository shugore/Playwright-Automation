const {test,expect} = require('@playwright/test');
const {customeTest} = require('../Utils/test-data-fixture');
const {OrangeHRMLoginPage} =require('../PageObjects/OrangeHRMLoginPage');

customeTest('Get data from Fixture and verify login functionality',async({page,testData}) =>{

    const loginPage = new OrangeHRMLoginPage(page);

    await loginPage.goto();
    await loginPage.validateLogin(testData.username,testData.Password);
    console.log("Entered Data from Fixtures")
    await loginPage.verifyLogoDisplayed();
    await page.waitForTimeout(2000)

})

