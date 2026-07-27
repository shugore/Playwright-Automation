const {expect} = require('@playwright/test');

class OrangeHRMLoginPage{
    
constructor (page){
    this.page=page;
    this.username= page.locator("[name='username']");
    this.password =  page.locator("[name='password']");
    this.loginclick =  page.getByRole("button",{name:'Login'});
    this.brandLogo = page.locator("[alt='profile picture']")

}

async goto(){

    await this.page.goto("https://opensource-demo.orangehrmlive.com/");
}

async validateLogin(USername,Password){

    await this.username.fill(USername);
    await this.password.fill(Password);
    await this.loginclick.click();
}

async verifyLogoDisplayed(){

    await expect (this.brandLogo).toBeVisible();
    console.log("Brand logo is visible")
}


}
module.exports={OrangeHRMLoginPage};