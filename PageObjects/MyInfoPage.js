class MyInfoPage{

constructor(page){

    this.page = this.page;
    this.myInfo = page.locator("li span");
    this.emergencyContact = page.locator(".orangehrm-tabs-wrapper")
    this.addContact = page.locator(".oxd-button--text")
    this.saveEmergencyContactDetails = page.locator(".oxd-input.oxd-input")
    this.saveButton = page.getByRole("button",{name:'Save'})
}

async clickMyInfo(){

    await this.myInfo.filter({hasText:'My Info'}).click();
}

async clickEmergencyContact(){

    await this.emergencyContact.filter({hasText:'Emergency Contacts'}).click();
}

async clickAddButton(){

    await this.addContact.nth(0).click();
}

async enterName(name){

    await this.saveEmergencyContactDetails.nth(1).fill(name);
}

async enterRelationship(Relationship){

   await this.saveEmergencyContactDetails.nth(2).fill(Relationship);
}

async enterHomeMobileNumber(HomeMobileNumber){

    await this.saveEmergencyContactDetails.nth(3).fill(HomeMobileNumber);
}

async enterMobile(Mobile){

    await this.saveEmergencyContactDetails.nth(4).fill(Mobile);
}

async enterTelephone(Telephone){

    await this.saveEmergencyContactDetails.nth(5).fill(Telephone);
}

async clickSave(){

    await this.saveButton.click();
}
}

module.exports= {MyInfoPage};