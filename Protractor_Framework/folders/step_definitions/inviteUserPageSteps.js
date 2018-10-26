var loginPage = require('../pages/loginPage.js');
var selen = require('../utils/SelenMethods.js');
var logger = require('../support/log.js');
var {defineSupportCode} = require('cucumber');
var expect = require('chai').expect;

var configData = require('../../data/config.json');

config = configData[browser.params.testEnv];

var inviteUserPage = require('../pages/inviteUserPage.js');

defineSupportCode(function ({Given, When, Then}) {

    Given('Login to the portal as {stringInDoubleQuotes}',async function (username) {
        homePage = await loginPage.loginAsUser(username);
    });

    When('user navigates to {stringInDoubleQuotes}', async function (menuPath) {
        await homePage.navigateMenuToPath(menuPath);
    });

    When('user enters firstname as {stringInDoubleQuotes}, lastname as {stringInDoubleQuotes},  role as {stringInDoubleQuotes},  mobile number as {stringInDoubleQuotes},  email as {stringInDoubleQuotes} and confirms',async function (firstName, lastName, userRole, phoneNumber, email) {
        await inviteUserPage.fillInviteUserDetails(firstName, lastName, userRole, phoneNumber, email);
    });

    When('user clicks on Send Invite button', function () {
        //selen.highlightElement(element(by.buttonText("Send invite")));
    });

    Then('user should see a success message', function () {

    });
});
