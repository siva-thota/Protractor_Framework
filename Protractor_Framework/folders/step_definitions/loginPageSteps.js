var loginPage = require('../pages/loginPage.js');
var selen = require('../utils/SelenMethods.js');
var logger = require('../support/log.js');
var {defineSupportCode} = require('cucumber');
var expect = require('chai').expect;

var configData = require('../../data/config.json');

config = configData[browser.params.testEnv];

defineSupportCode(function ({Given, When, Then}) {

    Given(/^I am on the login page$/, async function () {

        await browser.driver.manage().window().maximize();
        await browser.driver.get(config.appUrl);
    });

    When(/^I enter the username and password$/, async function () {
        logger.log('info','Page loaded----------');

        console.log("Username : "+ config.users.admin.username);
        console.log("password : "+ config.users.admin.password);

        await selen.enterText(loginPage.username, config.users.admin.username);
        await selen.enterText(loginPage.password, config.users.admin.password);
        
    });

    When(/^I click on the login button$/, async function () {
        logger.log('info','Entered the login credentials--');
        await loginPage.loginButton.click();
    });

    Then(/^I should be directed to the home page$/, async function () {
        browser.ignoreSynchronization = false;

        logger.log('info','Enabled angular --------------');

        var welcomeText = await selen.getElementTextByClass(".dashboard");

        await expect(welcomeText).contains(config.users.admin.user);

        /*await element(by.css('.dashboard')).getText().then(function(welcomeText){
            console.log("Validating the username")
            expect(welcomeText).contains(config.user);
        });*/

        await element(by.className('menu-btn')).click();

        var logos = element.all(by.className('logo-bc'));

        await expect(logos.count()).to.eventually.to.equal(1);

        await browser.sleep(2000);

    });

    Then('I should click on logout', async function () {
        // Write code here that turns the phrase above into concrete actions
        await element(by.css('[ng-click="logOut()"]')).click();
    });
});