var loginPage = require('../pages/loginPage.js');
var selen = require('../utils/SelenMethods.js');
var logger = require('../support/log.js');
var {defineSupportCode} = require('cucumber');
var expect = require('chai').expect;

var configData = require('../../data/config.json');

//console.log("Launching test in environment: ", browser.params.testEnv);

config = configData[browser.params.testEnv];

//browser.ignoreSynchronization = true;

defineSupportCode(function ({Given, When, Then}) {

    Given(/^XI am on the login page$/, async function () {

        await browser.driver.manage().window().maximize();
        await browser.driver.get(config.appUrl);
    });

    When(/^XI enter the username and password$/, async function () {
        logger.log('info','Page loaded----------');
        console.log("Page loaded----------");

        console.log("Username : "+ config.username);
        console.log("password : "+ config.password);

        await selen.enterText(loginPage.username, config.username);

        //await browser.sleep(2000);

        await selen.enterText(loginPage.password, config.password);

        //await browser.sleep(2000);

        /*element.all(By.buttonText("Log in")).then(function (items) {
            console.log("dsgfsff : " + items.length)
            expect(items.length).equal(1);
       });*/
    });

    When(/^XI click on the login button$/, async function () {
        logger.log('info','Entered the login credentials--');
        console.log("Entered the login credentials--");
        await loginPage.loginButton.click();

        //await browser.sleep(4000);
    });

    Then(/^XI should be directed to the home page$/, async function () {
        browser.ignoreSynchronization = false;

        logger.log('info','Enabled angular --------------');
        console.log("Enabled angular --------------")

        /*element(by.id('divUsingBarclaySmartpay')).click();
        element.all(by.id('divUsingBarclaySmartpay')).then(function (items) {
            console.log(items.length);
        });*/

        await element(by.css('.dashboard')).getText().then(function(welcomeText){
            console.log("Validating the username")
            expect(welcomeText).contains(config.user);
        });

        await element(by.className('menu-btn')).click();

        var logos = element.all(by.className('logo-bc'));

        await expect(logos.count()).to.eventually.to.equal(1);

        await browser.sleep(2000);


        /* var elm = element(by.css('[ng-click="logOut()"]'));

        var EC = protractor.ExpectedConditions;

        browser.wait(EC.elementToBeClickable(elm), 5000);

        elm.click(done());*/
        /*

        element.all(by.className('logo-bc')).then(function(items){
        console.log('logo-bc : '+ items.length);
        });*/
        /*

        expect(element.all(by.css('logo-bc')).count()).to.eventually.to.equal(2).and.notify(done);

        */
        //element(by.id('divUsingBarclaySmartpay')).click().then.notify(done);
        //done();
        /*
        element.all(by.css('.dashboard .ng-binding')).then(function (items) {
            expect(items.length).to.be.equals(1);
            console.log("welcomeText :" + items.length);
            done();
        });
    */
        /*
                browser.wait(function () {
                    console.log("--dfgdfgdfgd3--    " + config.username);

                    element.all(by.className('.dashboard .ng-binding')).then(function (items) {
                        expect(items.length).to.be.equals(1);
                        console.log("welcomeText :" + items.length);
                        done();
                    });
                    return element(by.css('.dashboard.ng-binding')).isDisplayed();
                }, 3000);
        */
        //done();
        //console.log("step 4");
        //expect(selen.getElementTextByClass('.dashboard.ng-binding')).contains('zatara');
    });

    Then('XI should click on logout', async function () {
        // Write code here that turns the phrase above into concrete actions
        await element(by.css('[ng-click="logOut()"]')).click();
    });
});