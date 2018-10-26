var selen = require('../utils/SelenMethods.js');

var homePage = require('../pages/homePage.js');

var configData = require('../../data/config.json');

var loginPage = function () {
    this.username = element(by.id("username"));
    this.password = element(by.id("password"));
    this.loginButton = element(by.buttonText("Log in"));

    this.loginAsUser = async function (username) {
        await browser.driver.manage().window().maximize();
        await browser.driver.get(config.appUrl);

        await selen.enterText(this.username, config.users[username].username);
        await selen.enterText(this.password, config.users[username].password);

        await selen.clickElement(this.loginButton);

        browser.ignoreSynchronization = false;
        
        await homePage.checkLoggedInUser(config.users[username].user);

        return homePage;
    };
};

module.exports = new loginPage();