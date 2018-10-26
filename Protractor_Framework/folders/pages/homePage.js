
var selen = require('../utils/SelenMethods.js');
//var inviteUserPage = require('../pages/inviteUserPage.js');

var homePage = function () {
    this.welcomeMessageLabel = element(by.css(".dashboard"));

    this.toggleMenu = element(by.id("menu-open"));

    this.checkLoggedInUser = async function (user) {
        var welcomeMsg = await this.welcomeMessageLabel.getText();
        await expect(welcomeMsg).contains(user);
    };

    this.navigateMenuToPath = async function (path){
        await selen.clickElement(this.toggleMenu);

        var menuElement;
        //var destinationPageObject = null;
        var navPath = path.split(">");

        //try {
            navPath.forEach(async function(item){
                menuElement = await getMenuElementByText(item);
                console.log("------------");
                console.log(menuElement);
                console.log("------------");
                await selen.clickElement(menuElement);
                await browser.sleep(10000);
                }
            );
        /*}
        catch(error){
            console.log("Sriram" +error);
        }*/
        await browser.sleep(5000);

    }

    function getMenuElementByText(labelText) {
        console.log(labelText);
        var elemen;
        switch(labelText){
            case "Dashboard":
                elemen = element(by.id("menuBtnDashboard"));
                break;
            case "Payments":
                elemen = element(by.id("menuBtnPayments"));
                break;
            case "New transaction":
                elemen = element(by.xpath("//span[contains(text(),'New transaction')]"));
                break;
            case "Transactions and settlements":
                elemen = element(by.xpath("//span[contains(text(),'Transactions and settlements')]"));
                break;
            case "Recurring payments":
                elemen = element(by.xpath("//span[contains(text(),'Recurring payments')]"));
                break;
            case "Users":
                elemen = element(by.id("menuBtnUsers"));
                break;
            case "Manage users":
                elemen = element(by.xpath("//span[contains(text(),'Manage users')]"));
                break;
            case "Invite new user":
                elemen = element(by.cssContainingText("#nav-menu > div > div:nth-child(3) > span"));
                //elemen = element(by.xpath=("//*[normalize-space(text()) and normalize-space(.)='Manage users'])[1]/following::span[1]"));
                //browser.sleep(1000);
                //elemen = element(by.id("menuBtnAdduser"));
                //elemen = element(by.xpath("//a[@id='menuBtnAdduser']/span[contains(text(),'Invite new user')]"));
                //elemen = element(by.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Users'])[1]/following::span[2]"));
                //var EC = protractor.ExpectedConditions;

                //destinationPageObject = inviteUserPage;
                break;
            case "User logs":
                //elemen = element(by.xpath("//span[contains(text(),'User logs')]"));
                //elemen = element(by.xpath("//a[@id='menuBtnUserLogs']/span[contains(text(),'User logs')]"));
                elemen = element(by.id("menuBtnUserLogs"));
                break;
            case "My profile":
                elemen = element(by.xpath("//span[contains(text(),'My profile')]"));
                break;
            case "Settings":
                elemen = element(by.id("menuBtnSettings"));
                break;
            case "Account settings":
                elemen = element(by.xpath("//span[contains(text(),'Account settings')]"));
                break;
            case "Fraud management":
                elemen = element(by.xpath("//span[contains(text(),'Fraud management')]"));
                break;
            case "Integration settings":
                elemen = element(by.xpath("//span[contains(text(),'Integration settings')]"));
                break;
            case "Payment page":
                elemen = element(by.xpath("//span[contains(text(),'Payment page')]"));
                break;
            case "Test and Publish":
                elemen = element(by.id("menuTestandpublish"));
                break;
            case "Support":
                elemen = element(by.id("menuBtnSupport"));
                break;
            case "Log out":
                elemen = element(by.id("menuBtnLogout"));
                break;
        }
        return elemen;
    }
};

module.exports = new homePage();