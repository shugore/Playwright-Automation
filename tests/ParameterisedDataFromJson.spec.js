const {test,expect} = require('@playwright/test');
const {LoginPage} = require ("../PageObjects/LoginPage") 
const {MyInfoPage} = require ("../PageObjects/MyInfoPage")

const dataset = JSON.parse(JSON.stringify(require('../Utils/ParameterisedData.json')));

for(const data of dataset){

test(`Drive Multiple Data  From Json and Verify login functionality with ${data.DataNu}`,async ({page}) => {

const loginPage = new LoginPage(page);
const myInfoPage = new MyInfoPage(page);

// await loginPage.goto();
await loginPage.LoginApp("Admin","admin123");

await myInfoPage.clickMyInfo();
await myInfoPage.clickEmergencyContact()
await myInfoPage.clickAddButton();
await myInfoPage.enterName(data.Name);
await myInfoPage.enterRelationship(data.Relationship);
await myInfoPage.enterHomeMobileNumber(data.HomeMobnile);
await myInfoPage.enterMobile(data.Mobile);
await myInfoPage.enterTelephone(data.Telephone);
await myInfoPage.clickSave();
// console.log(`Entered Data from Json:-${data.DataNu}`)
await page.waitForTimeout(2000)

}

)
}