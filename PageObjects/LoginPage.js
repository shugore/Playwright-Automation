class LoginPage{
    
constructor (page){
     this.page=page;
    this.username= page.getByPlaceholder("Username");
    this.password =  page.locator("[name='password']");
    this.loginclick =  page.getByRole("button",{name:'Login'});
    this.brandLogo = page.locator("[alt='profile picture']")
    
}

async goto(){

    await this.page.goto("https://opensource-demo.orangehrmlive.com/");
}

async LoginApp(USername,Password){

    await this.page.goto("https://opensource-demo.orangehrmlive.com/");

    await this.username.type(USername);
    await this.password.type(Password);
    await this.loginclick.click();
}


}
module.exports={LoginPage};