class GetTextAndStoreInVariable{

    constructor(page){
        this.page = page;
        this.getTextForUsername = page.locator("[class='oxd-text oxd-text--p']").first();
        this.getTextForPassword = page.locator("[class='oxd-text oxd-text--p']").last();
    }

    async getUsername(){

        const fulltext = await this.getTextForUsername.textContent();
        return fulltext.split(":")[1].trim();
    }

    async getPassword(){

        const fulltext = await this.getTextForPassword.textContent();
        return fulltext.split(":")[1].trim();
    }
}
module.exports={GetTextAndStoreInVariable};