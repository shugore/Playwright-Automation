const {test,expect}= require ('@playwright/test');
const {GetTextAndStoreInVariable} =require ("../PageObjects/GetTextAndStoreInVarible")
const {OrangeHRMLoginPage} = require ("../PageObjects/OrangeHRMLoginPage")

test('@smoke Get Text Store In Variable And Use It In Method.',async({page})=>{

    const loginPage = new OrangeHRMLoginPage(page);
    const getTextPage = new GetTextAndStoreInVariable(page);

    await loginPage.goto();

    const Username = await getTextPage.getUsername();
    const Password = await getTextPage.getPassword();

    console.log("Username: "+Username + " Password: "+Password);

    await loginPage.validateLogin(Username,Password);

    await loginPage.verifyLogoDisplayed();

})