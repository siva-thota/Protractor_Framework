var selen = require('../utils/SelenMethods.js');

var inviteUserPage = function () {
    this.txtFirstName = element(by.model("invite.firstname"));
    this.txtLastName = element(by.model("invite.lastname"));
    this.ddlRole = element(by.model("invite.userRole"));
    this.txtMobileNumber = element(by.model("invite.phoneNumber"));
    this.txtEmail = element(by.model("invite.email"));
    this.txtConfirmEmail = element(by.model("confirmEmail"));

    this.sendInviteButton = element(by.buttonText("Send Invite"));


    this.fillInviteUserDetails = async function(firstName, lastName, userRole, phoneNumber, emailId){
        selen.enterText(this.txtFirstName, firstName);
        selen.enterText(this.txtLastName, lastName);
        selen.selectByText(this.ddlRole, userRole);
        selen.enterText(this.txtMobileNumber, phoneNumber);
        selen.enterText(this.txtEmail, emailId);
        selen.enterText(this.txtConfirmEmail, emailId);



        await browser.sleep(5000);
    };
};


module.exports = new inviteUserPage();